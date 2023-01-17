USE [AdventureWorks2019]
GO

ALTER PROCEDURE proc_lab11
AS

BEGIN
    -- the 15 secods delay needed
	WAITFOR DELAY '00:00:15'

	WHILE 1=1
	BEGIN 

	--pick up CONSUME_F and set to 1 ( update)
		BEGIN TRANSACTION 
			UPDATE J$SRC_TXN
			SET CONSUME_F = 1 FROM J$SRC_TXN
				WHERE CONSUME_F = 0
		COMMIT TRANSACTION

		BEGIN TRANSACTION 
		MERGE INTO TXN
		USING 
		(
			SELECT
				J.TXN_SRC_KEY,
				I.SRC_STM_ID,
				A.AC_ID,
				P.PD_ID,
				S.SHARES * isNULL
			--Calculate AMOUNT
			(
				(
					SELECT RATE	FROM EXCH_RATE
					WHERE CCY_CODE = S.CCY
				AND
				S.BUS_DY BETWEEN EFF_DT AND END_DATE
				), 1.0
			) 
			AS AMOUNT,

			S.BUS_DY 
			AS TD,
			--BKG_DT from SRC_TXN an d if null we take BUS_DY
			isNULL(S.BKG_DT, S.BUS_DY) AS BKG_DT,
			S.CCY ,
			S.SHARES AS QTY
			-- join tables
			FROM

			J$SRC_TXN AS j
			JOIN SRC_TXN AS s
			ON j.TXN_SRC_KEY = s.TXN_SRC_KEY AND j.CONSUME_F = 1
			JOIN AC_LKP AS a
			ON s.AC_NUM = a.AC_NUM AND a.ACTV_F = 'Y'
			JOIN PD_LKP AS p
			ON s.PD_NUM = p.PD_NUM AND s.BUS_DY BETWEEN p.EFF_DT AND p.END_DATE
			JOIN SRC_STM_LKP AS i
			ON i.SRC_STM_CODE = s.SRC_CODE
		) AS iu_data -- iu_data used to update and insert info
		ON TXN.TXN_SRC_KEY = iu_data.TXN_SRC_KEY

		--if no such data exists, then we take it from iu_data
		WHEN NOT MATCHED THEN INSERT (TXN_SRC_KEY, AC_ID, PD_ID, QTY, AMOUNT, CCY, TD, BKG_DT)
		VALUES (iu_data.TXN_SRC_KEY, iu_data.AC_ID, iu_data.PD_ID, iu_data.QTY, iu_data.AMOUNT, iu_data.CCY, iu_data.TD, iu_data.BKG_DT)
		--if its already exitent , just update them from iu_data
		WHEN MATCHED THEN UPDATE
		SET TXN.TXN_SRC_KEY = iu_data.TXN_SRC_KEY, 
			TXN.AC_ID = iu_data.AC_ID,
			TXN.PD_ID = iu_data.PD_ID,
			TXN.QTY = iu_data.QTY,
			TXN.AMOUNT = iu_data.AMOUNT,
			TXN.CCY = iu_data.CCY,
			TXN.TD = iu_data.TD,
			TXN.BKG_DT = iu_data.BKG_DT;
		COMMIT TRANSACTION

--dealing with the exception table
--where we have null values for AC_ID or PD_ID
		BEGIN TRANSACTION
		INSERT INTO TXN_EXCP(TXN_SRC_KEY, EXCP_CODE_ID)
		SELECT j.TXN_SRC_KEY,
		IIF(a.AC_ID IS NULL AND p.PD_ID IS NULL, 3, IIF(p.PD_ID IS NULL, 2, 1 ))
		FROM J$SRC_TXN AS j

		LEFT JOIN SRC_TXN AS s
		ON j.TXN_SRC_KEY = s.TXN_SRC_KEY AND j.CONSUME_F = 1

		LEFT JOIN AC_LKP AS a
		ON s.AC_NUM = a.AC_NUM AND a.ACTV_F = 'Y'

		LEFT JOIN PD_LKP AS p
		ON s.PD_NUM = p.PD_NUM AND s.BUS_DY BETWEEN p.EFF_DT AND p.END_DATE

		WHERE a.AC_ID IS NULL OR p.PD_ID IS NULL
		COMMIT TRANSACTION

		--lastly get rid of data with CONSUME_F 1
		BEGIN TRANSACTION
		DELETE FROM J$SRC_TXN
		WHERE CONSUME_F = 1
		COMMIT TRANSACTION
	END
END