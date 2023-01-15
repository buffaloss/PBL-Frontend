USE [AdventureWorks2019] 

GO 

alter TRIGGER trigger_lab11
ON SRC_TXN
FOR INSERT, UPDATE, DELETE
AS

BEGIN 
	-- here we have a trigger for inserts,updates and deletions
	--we take the TXN_SRC_KEY and insert it
	-- firstly set CONSUME_F to 0
	INSERT INTO J$SRC_TXN(TXN_SRC_KEY,CONSUME_F,ACTION_F)
	SELECT ISNULL(I.TXN_SRC_KEY, D.TXN_SRC_KEY) , 
	0 AS CONSUME_F,
	--choose whether its update ( it it already exists in both tables)
	--whether its inserted ( if if doesnt) and
	--whether its deletion
	(SELECT 
		IIF(I.TXN_SRC_KEY = D.TXN_SRC_KEY, 'U',
			IIF(I.TXN_SRC_KEY IS NULL AND D.TXN_SRC_KEY IS NOT NULL,'D',
			'I')))
	FROM inserted AS i

	FULL OUTER JOIN deleted AS d

	ON i.TXN_SRC_KEY = d.TXN_SRC_KEY
END ;
