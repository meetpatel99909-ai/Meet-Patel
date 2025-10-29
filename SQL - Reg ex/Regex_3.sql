Insert into OtherFileKeywords (DEPTID,KEYWORD,RiskFactor,Extension) values (1,'Delete File',10,'bpprocess')
GO

update PARAMETER_TABLE set TEXTVALUE = 'TRUE' where PARAMNAME= 'HideFindingandException'