USE [AdventureWorks2019]
GO

WHILE (1=1) 
 BEGIN
INSERT INTO SRC_TXN (SRC_CODE, AC_NUM, PD_NUM, SHARES, CCY, BUS_DY, BKG_DT) 
 VALUES
 ('STNDRT', '13909262', 'BK-M82S-48', 110, 'USD', '2022-11-18', '2022-11-19'), 
 ('INTNTL', '1A68CD62', 'BB-9108', 176, 'EUR', '2022-11-15', NULL ), 
 ('STNDRT', '13909262', 'BK-M83S-48', 160, 'USD', '2022-11-18', '2022-11-19')
  SELECT * FROM J$SRC_TXN 
  EXEC proc_lab11
  SELECT * FROM SRC_TXN 
  SELECT * FROM TXN 
  SELECT * FROM TXN_EXCP 
  --WAITFOR DELAY '00:00:15' 
  DELETE FROM SRC_TXN WHERE SHARES = 110 

 END

DELETE FROM SRC_TXN 
WHERE SEQ_NUM = 4