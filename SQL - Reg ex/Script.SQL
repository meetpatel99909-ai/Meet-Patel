/*----------------------------------------------------------------------*/

/* eInfotree Excel Desktop Module			*/

/* Version 7.1.0  Upgrade Database Script over 7.0.1 HF1 for SQL US installations*/

/* Copyright CIMCON Software, Inc. 					*/
		
/* 234 Littleton Road Westford, MA 01886				*/
*XlRisk*
*06-Sep-2012*
*daveamit@csipl.com*
*21000,758*
*21.55,855*
*?MBBS#*
*21000,760,858*
/* ---------------------------------------------------------------------*/
/* ---------------------------------------------------------------------*/
/* ------------------ Upgrader 7.0.1 to 7.1.0 --------------------------*/
/* ---------------------------------------------------------------------*/
ALTER TABLE UserMaster ADD IsSuperAdmin NVARCHAR(1) DEFAULT 0 
GO
UPDATE UserMaster SET IsSuperAdmin = 0
GO
UPDATE UserMaster SET  IsSuperAdmin = 1 WHERE Userid = 1
GO


XlRisk  			Y

SOX-XL				Y  

password			Y

Date 30/07/2015			Y

Date 30-07-2015			Y

D'wiliam			Y

Release 7.2.0			Y

06-Sep-2012			Y

daveamit@csipl.com		Y

21000,758			Y

21000,760,858			Y

AMBBS5				Y

21.55,855			Y

DataBase			Y	  

Dar8han				Y

%				Y

Darshan				Y

Release 6.9.8 SP2		Y



UPDATE GroupMaster SET GroupName='Super Admin' WHERE GroupId = 1
GO
ALTER TABLE FileSecurityConfig ADD FileSecurity NVARCHAR(1)  
GO
UPDATE FileSecurityConfig SET FileSecurity = 'W'
GO
Create Procedure [dbo].[GetSecurityWiseFileID](@userid  NUMERIC(11))
AS
Begin

DECLARE @flag VARCHAR(50) 
DECLARE @vfileid VARCHAR(50) 
DECLARE @sec VARCHAR(50) 
DECLARE cur1 CURSOR FOR 
1111-2222-3333-4444
SELECT distinct FileID
                  FROM   FileSecurityConfig WITH(NOLOCK)
                  WHERE  UserGroup = 'G'
                         AND Userid IN (SELECT DISTINCT um.GroupID
                                        FROM   GroupMaster um WITH(NOLOCK),
                                               USERGROUP_ALLOCATION ua WITH(NOLOCK)
                                        WHERE  um.GROUPID = ua.GROUPID
                                               AND ua.Groupid IN (SELECT uai.GroupId
                                                                  FROM   
                                                                         USERGROUP_ALLOCATION 
                                                                         uai 
                                                                         WITH(NOLOCK)
                                                                  WHERE  uai.userid = 
                                                                         @userid)) 
                 UNION ALL SELECT FileID
                           FROM   FileSecurityConfig WITH(NOLOCK)
                           WHERE  UserGroup = 'U'
                                  AND Userid IN (SELECT DISTINCT um.Userid
                                                 FROM   UserMaster um WITH(NOLOCK),
                                                        USERGROUP_ALLOCATION ua 
                                                        WITH(NOLOCK)
                                                 WHERE  um.userid = ua.UserId
                                                        AND ua.Groupid IN (SELECT 
                                                                                  uai.GroupId
                                                                           FROM   
                                                                                  USERGROUP_ALLOCATION 
                                                                                  uai 
                                                                                  WITH(NOLOCK)
                                                                           WHERE  
                                                                                  uai.userid = 
                                                                                  @userid))
--)
IF EXISTS (SELECT * FROM sys.tables WHERE name = N'TempFileID' AND type = 'U')
BEGIN
truncate table TempFileID
end

IF  NOT EXISTS (SELECT * FROM sys.tables WHERE name = N'TempFileID' AND type = 'U')
BEGIN
create table TempFileID(fileid varchar(50))
end

OPEN cur1   
FETCH NEXT FROM cur1 INTO @vfileid

WHILE @@FETCH_STATUS =0
	BEGIN 	
		DECLARE cur2 CURSOR FOR 
		SELECT filesecurity
                  FROM   FileSecurityConfig WITH(NOLOCK)
                  WHERE  UserGroup = 'G'
                         AND Userid IN (SELECT DISTINCT um.GroupID
                                        FROM   GroupMaster um WITH(NOLOCK),
                                               USERGROUP_ALLOCATION ua WITH(NOLOCK)
                                        WHERE  um.GROUPID = ua.GROUPID
                                               AND ua.Groupid IN (SELECT uai.GroupId
                                                                  FROM   
                                                                         USERGROUP_ALLOCATION 
                                                                         uai 
                                                                         WITH(NOLOCK)
                                                                  WHERE  uai.userid = 
                                                                         @userid)) 
and fileid=@vfileid
                 UNION ALL SELECT filesecurity
                           FROM   FileSecurityConfig WITH(NOLOCK)
                           WHERE  UserGroup = 'U'
                                  AND Userid IN (SELECT DISTINCT um.Userid
                                                 FROM   UserMaster um WITH(NOLOCK),
                                                        USERGROUP_ALLOCATION ua 
                                                        WITH(NOLOCK)
                                                 WHERE  um.userid = ua.UserId
                                                        AND ua.Groupid IN (SELECT 
                                                                                  uai.GroupId
                                                                           FROM   
                                                                                  USERGROUP_ALLOCATION 
                                                                                  uai 
                                                                                  WITH(NOLOCK)
                                                                           WHERE  
                                                                                  uai.userid = 
                                                                                  @userid))
and fileid=@vfileid

		OPEN cur2   
		FETCH NEXT FROM cur2 INTO @flag
		WHILE @@FETCH_STATUS =0
		BEGIN
			if @flag in ('W','R')
			begin
			--	set @sec='Y'
				INSERT INTO TempFileID values (@vfileid)
			end
			FETCH NEXT FROM cur2 INTO @flag
		END
		
		CLOSE cur2  
	DEALLOCATE cur2

	FETCH NEXT FROM cur1 INTO @vfileid
	end		

CLOSE cur1  
DEALLOCATE cur1

End
GO
ALTER TABLE SecurityConfigWK Add SecurityNone NVARCHAR(1) default 'N'
GO
UPDATE SecurityConfigWK SET SecurityNone='N'
GO
ALTER TABLE AuditTrails Add FilePath NVARCHAR(255) DEFAULT ''
GO
ALTER TABLE AuditTrails_AR Add FilePath NVARCHAR(255)  DEFAULT ''
GO
--02-Dec-2013
ALTER Procedure [dbo].[GetSecurityWiseFileID](@userid  NUMERIC(11),@FileRights VARCHAR(1))
AS
Begin

DECLARE @flag VARCHAR(50) 
DECLARE @vfileid VARCHAR(50) 
DECLARE @sec VARCHAR(50) 
DECLARE cur1 CURSOR FOR 

SELECT distinct FileID
                  FROM   FileSecurityConfig WITH(NOLOCK)
                  WHERE  UserGroup = 'G'
                         AND Userid IN (SELECT DISTINCT um.GroupID
                                        FROM   GroupMaster um WITH(NOLOCK),
                                               USERGROUP_ALLOCATION ua WITH(NOLOCK)
                                        WHERE  um.GROUPID = ua.GROUPID
                                               AND ua.Groupid IN (SELECT uai.GroupId
                                                                  FROM   
                                                                         USERGROUP_ALLOCATION 
                                                                         uai 
                                                                         WITH(NOLOCK)
                                                                  WHERE  uai.userid = 
                                                                         @userid)) 
                 UNION ALL SELECT FileID
                           FROM   FileSecurityConfig WITH(NOLOCK)
                           WHERE  UserGroup = 'U'
                                  AND Userid IN (SELECT DISTINCT um.Userid
                                                 FROM   UserMaster um WITH(NOLOCK),
                                                        USERGROUP_ALLOCATION ua 
                                                        WITH(NOLOCK)
                                                 WHERE  um.userid = ua.UserId
                                                        AND ua.Groupid IN (SELECT 
                                                                                  uai.GroupId
                                                                           FROM   
                                                                                  USERGROUP_ALLOCATION 
                                                                                  uai 
                                                                                  WITH(NOLOCK)
                                                                           WHERE  
                                                                                  uai.userid = 
                                                                                  @userid))
--)
IF EXISTS (SELECT * FROM sys.tables WHERE name = N'TempFileID' AND type = 'U')
BEGIN
truncate table TempFileID
end

IF  NOT EXISTS (SELECT * FROM sys.tables WHERE name = N'TempFileID' AND type = 'U')
BEGIN
create table TempFileID(fileid varchar(50))
end

OPEN cur1   
FETCH NEXT FROM cur1 INTO @vfileid

WHILE @@FETCH_STATUS =0
	BEGIN 	
		DECLARE cur2 CURSOR FOR 
		SELECT filesecurity
                  FROM   FileSecurityConfig WITH(NOLOCK)
                  WHERE  UserGroup = 'G'
                         AND Userid IN (SELECT DISTINCT um.GroupID
                                        FROM   GroupMaster um WITH(NOLOCK),
                                               USERGROUP_ALLOCATION ua WITH(NOLOCK)
                                        WHERE  um.GROUPID = ua.GROUPID
                                               AND ua.Groupid IN (SELECT uai.GroupId
                                                                  FROM   
                                                                         USERGROUP_ALLOCATION 
                                                                         uai 
                                                                         WITH(NOLOCK)
                                                                  WHERE  uai.userid = 
                                                                         @userid)) 
and fileid=@vfileid
                 UNION ALL SELECT filesecurity
                           FROM   FileSecurityConfig WITH(NOLOCK)
                           WHERE  UserGroup = 'U'
                                  AND Userid IN (SELECT DISTINCT um.Userid
                                                 FROM   UserMaster um WITH(NOLOCK),
                                                        USERGROUP_ALLOCATION ua 
                                                        WITH(NOLOCK)
                                                 WHERE  um.userid = ua.UserId
                                                        AND ua.Groupid IN (SELECT 
                                                                                  uai.GroupId
                                                                           FROM   
                                                                                  USERGROUP_ALLOCATION 
                                                                                  uai 
                                                                                  WITH(NOLOCK)
                                                                           WHERE  
                                                                                  uai.userid = 
                                                                                  @userid))
and fileid=@vfileid

		OPEN cur2   
		FETCH NEXT FROM cur2 INTO @flag
		WHILE @@FETCH_STATUS =0
		BEGIN
			IF @FileRights='A' 
			Begin
				if @flag in ('W','R')
				begin
				--	set @sec='Y'
					INSERT INTO TempFileID values (@vfileid)
				END
			END
			IF @FileRights='W' 
			Begin
				if @flag in ('W')
				begin
				--	set @sec='Y'
					INSERT INTO TempFileID values (@vfileid)
				END
			END
			FETCH NEXT FROM cur2 INTO @flag
		END
		
		CLOSE cur2  
	DEALLOCATE cur2

	FETCH NEXT FROM cur1 INTO @vfileid
	end		

CLOSE cur1  
DEALLOCATE cur1

End
GO
ALTER TABLE UserMaster ADD PrintEditableCompareReport NVARCHAR(10) DEFAULT 'FALSE' 
GO
UPDATE UserMaster SET PrintEditableCompareReport = 'FALSE' 
GO
ALTER TABLE GROUPMaster ADD PrintEditableCompareReport NVARCHAR(10) DEFAULT 'FALSE' 
GO
UPDATE GROUPMaster SET PrintEditableCompareReport = 'FALSE' 
GO
--07-Dec-2013
Create FUNCTION [dbo].[GetFileSecurity]
(
	@Fileid numeric,@userid  numeric,@UserGroup VARCHAR(1)
)
RETURNS VARCHAR(10) 
AS 
BEGIN

	DECLARE @adv_error INT
	DECLARE @Security VARCHAR(10)
	DECLARE @vRecCount Numeric(5) 
	DECLARE @vFileCount Numeric(5)
	
	DECLARE @Security_Write VARCHAR(10)
	DECLARE @Security_Read VARCHAR(10)
	DECLARE @Security_None VARCHAR(10)

	--Check User Level Rights		
	Set @UserGroup='U'
	Select @vRecCount = Count(1) from FileSecurityConfig WITH(NOLOCK) Where UserID = @userid and UserGroup=@UserGroup
	If @vRecCount  > 0 
	BEGIN
		Select @vFileCount = Count(1) from FileSecurityConfig WITH(NOLOCK) Where UserID = @userid and UserGroup=@UserGroup AND Fileid = @Fileid
		If @vFileCount  > 0
		BEGIN
			Select @Security=FileSecurity from FileSecurityConfig WITH(NOLOCK) Where UserID = @userid and UserGroup=@UserGroup AND Fileid = @Fileid
			IF @Security='W' BEGIN Return 'Write' END
			IF @Security='R' BEGIN Return 'Read' END
			IF @Security='N' BEGIN Return 'None' END
		END
		RETURN 'None'	
	END
	
	--Check Group Level Rights		
	Set @UserGroup='G'
	Set @Security_Write ='N'
	Set @Security_Read ='N'
	Set @Security_None ='N'
	
	Select @vRecCount = Count(1) from FileSecurityConfig WITH(NOLOCK) Where FileID = @Fileid and UserGroup= @UserGroup and UserID IN (SELECT Groupid FROM USERGROUP_ALLOCATION WHERE UserID = @userid)
	If @vRecCount  > 0 
	BEGIN
		DECLARE ClientIDCursor CURSOR FOR SELECT FileSecurity  from FileSecurityConfig WITH(NOLOCK) Where FileID = @Fileid and UserGroup= @UserGroup and UserID IN (SELECT Groupid FROM USERGROUP_ALLOCATION WHERE UserID = @userid) 
		OPEN ClientIDCursor
		Fetch Next from ClientIDCursor into @Security
		WHILE @@FETCH_STATUS=0
		
		BEGIN
			if @Security='W' BEGIN set @Security_Write='Y' END
			if @Security='R' BEGIN set @Security_Read='Y' END
			if @Security='N' BEGIN SET @Security_None='Y' END
			Fetch Next from ClientIDCursor into @Security		
		END
		
		CLOSE ClientIDCursor
		DEALLOCATE ClientIDCursor
		
		IF @Security_Write='Y' BEGIN Return 'Write' END
		IF @Security_Read='Y' BEGIN Return 'Read' END
		IF @Security_None='Y' BEGIN Return 'None' END
		
	END
	
	RETURN 'None'	
	  
END
Go
--17-Dec-2013 (7.1.0 - Esign in Database)
CREATE TABLE EsignConfigRN(
	RecordID [numeric](11, 0) IDENTITY(1,1) NOT NULL,
	FileID numeric(11, 0) NULL,
	WorkSheetCodeName nvarchar(255) NULL,
	RangeTitle nvarchar(500) NULL,
	CellRange nvarchar(2000) NULL,
) ON [PRIMARY]
GO
--27-Dec-2013 (7.1.0 - Menu Security)
Update MenuMaster SET Menushortcutstring = '^+{+}|^{107}' WHERE Menushortcutstring LIKE '%^+{+}%'
GO
Update MenuMaster SET Menushortcutstring = '^{-}|^{109}' WHERE Menushortcutstring LIKE '%^{-}%'
GO


FDA 
SSN
Credit Card
