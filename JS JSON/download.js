function date(){
    var date = new Date();
    return date.toISOString().substr(0,10); 	
}


function download(content, filename, contentType) {
    if(!contentType) contentType = 'application/octet-stream';
        var a = document.createElement('a');
        var blob = new Blob([content], {'type':contentType});
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.click();
}

my_data = {
  key:         "value",
  another_key: [1,2,3,4,5,6,7,8,9,0]
}

download(JSON.stringify(my_data), "json_data_" + date() + ".json", "application/json")




/*----------------------------------------------------------------------*/

/* eInfotree Excel Desktop Module			*/

/* Version 7.1.0  Database Script	for SQL	US installations*/

/* Copyright CIMCON Software, Inc. 					*/
		
/* 234 Littleton Road Westford, MA 01886				*/

/* ---------------------------------------------------------------------*/
CREATE TABLE PasswordList(
	Password_1 nvarchar(255) NULL,
	Description_2 nvarchar(255) NULL) 
GO
CREATE TABLE SMTPSettings(
	SMTPSERVERNAME nvarchar(255) NULL,
	SMTPPORT nvarchar(255) NULL,
	SMTPAUTHENTICATION bit NOT NULL,
	SMTPUSERNAME nvarchar(255) NULL,
	SMTPPASSWORD nvarchar(255) NULL) 
GO
CREATE TABLE AdminSetting(
	SettingName nvarchar(255) NOT NULL,
	SettingValue nvarchar(255) NULL) 
GO
ALTER TABLE AdminSetting ADD CONSTRAINT PK_AdminSetting PRIMARY KEY (SettingName)
GO
CREATE TABLE FileConversionDetailsRN(
	FileID numeric(11, 0) NULL,
	WorkSheetCodeName nvarchar(255) NULL,
	CellRange nvarchar(255) NULL,
	ReasonFieldForAuditTrail nvarchar(255) NULL,
	ESignReqForAuditTrail nvarchar(255) NULL) 
GO
CREATE TABLE FileConversionDetailsWK(
	FileID numeric(11, 0) NULL,
	WorkSheetCodeName nvarchar(255) NULL,
	ReasonFieldForAuditTrail nvarchar(255) NULL,
	ESignReqForAuditTrail nvarchar(255) NULL) 
GO
CREATE TABLE FilesBasedOnTemplates(
	FileID numeric(11, 0) NULL,
	FilePath nvarchar(255) NULL,
	ConvertedDate datetime NULL,
	ConvertedBy nvarchar(255) NULL) 
GO
CREATE TABLE ActionMaster(
	ActionId numeric(11, 0) NOT NULL,
	ActionName nvarchar(255) NULL) 
GO
ALTER TABLE ActionMaster ADD CONSTRAINT PK_ActionId PRIMARY KEY (ActionId)
GO
CREATE TABLE FileConversionMaster(
	FileID numeric(11, 0) IDENTITY(1,1) NOT NULL,
	FilePath nvarchar(255) NULL,
	ConvertedDate datetime NULL,
	ConvertedBy nvarchar(255) NULL,
	Text1 nvarchar(255) NULL,
	Text2 nvarchar(255) NULL,
	Reason nvarchar(255) NULL,
	ESign nvarchar(255) NULL,
	EnterESign nvarchar(255) NULL,
	ReviewChange nvarchar(255) NULL,
	SaveESign nvarchar(255) NULL,
	DeleteStatus nvarchar(1) NULL,
	ConvertStatus nvarchar(1) NULL,
	ConvertedValue2 nvarchar(255) NULL,
	TemplateFileSavePath nvarchar(max) NULL,
	TemplateFileSaveNameAddress nvarchar(255) NULL,
	Author nvarchar(255) NULL,
	Title nvarchar(255) NULL,
	Subject nvarchar(255) NULL,
	Category nvarchar(255) NULL,
	Keywords nvarchar(255) NULL,
	Comments nvarchar(255) NULL,
	TemplateFileSaveNameVersionAllow bit NOT NULL,
	TemplateFileSaveNamePrefix nvarchar(20) NULL)
GO
ALTER TABLE FileConversionMaster ADD CONSTRAINT PK_FileID PRIMARY KEY (FileID)
GO
CREATE TABLE FileSecurityConfig(
	FileID numeric(11, 0) NOT NULL,
	UserID numeric(11, 0) NOT NULL,
	UserGroup nvarchar(1) NOT NULL)
GO
ALTER TABLE FileSecurityConfig ADD CONSTRAINT PK_FileSecurityConfig PRIMARY KEY (FileID,UserID,UserGroup)
GO
CREATE TABLE FileSecurityXLTFile(
	FileID numeric(11, 0) NOT NULL,
	UserID numeric(11, 0) NOT NULL,
	UserGroup nvarchar(1) NOT NULL) 
GO
ALTER TABLE FileSecurityXLTFile ADD CONSTRAINT PK_FileSecurityXLTFile PRIMARY KEY (FileID,UserID,UserGroup)
GO
CREATE TABLE GroupMaster(
	GroupID numeric(11, 0) IDENTITY(1,1) NOT NULL,
	GroupName nvarchar(255) NULL,
	GroupType nvarchar(255) NULL,
	REVIEWER nvarchar(10) NULL,
	WORKBOOKLOCKER nvarchar(10) NULL,
	ARCHIVER nvarchar(10) NULL,
	READONLYCREATOR nvarchar(10) NULL,
	OFFLINERIGHT nvarchar(10) NULL,
	ENABLEEXCELMENU nvarchar(10) NULL,	
	ASSIGNPRIVILEGES nvarchar(10) NULL)
GO
ALTER TABLE GroupMaster ADD CONSTRAINT PK_GroupID PRIMARY KEY (GroupID)
GO
CREATE TABLE LoginInfo(
	UserId numeric(11, 0) NULL,
	LoginLogoutFlag int NULL,
	LoginLogoutTime datetime NULL,
	DeviceName nvarchar(255) NULL,
	LoginStatus nvarchar(255) NULL,
	FilePath nvarchar(max) NULL,
	ATType nvarchar(10) NULL)
GO
CREATE TABLE MenuMaster(
	MenuOption nvarchar(255) NULL,
	MenuId nvarchar(50) NULL,
	Menushortcutstring nvarchar(255) NULL,
	MenuCaption nvarchar(255) NULL,
	Version float NULL,
	IsToolBar bit NOT NULL,
	ToolbarId nvarchar(255) NULL,
	ToolbarCaption nvarchar(255) NULL,
	ToolbarName nvarchar(255) NULL,
	MenuNumber numeric(11, 0) NOT NULL)
GO
ALTER TABLE MenuMaster ADD CONSTRAINT PK_MenuNumber PRIMARY KEY (MenuNumber)
GO
CREATE TABLE NotificationMaster(
	RoleID numeric(11, 0) NULL,
	Subject nvarchar(255) NULL,
	Message nvarchar(2000) NULL,
	ToUserID numeric(11, 0) NULL) 
GO
CREATE TABLE MenuTrans(
	TransID numeric(11, 0) IDENTITY(1,1) NOT NULL,
	Version int NOT NULL,
	MenuNumber numeric(11, 0) NOT NULL,
	UserID numeric(11, 0) NOT NULL,
	FileID numeric(11, 0) NOT NULL,
	UserGroup nvarchar(50) NOT NULL)
GO
ALTER TABLE MenuTrans ADD CONSTRAINT PK_MenuTrans PRIMARY KEY (Version,MenuNumber,UserID,FileID,UserGroup)
GO
CREATE TABLE NotificationMaster_Failure(
	Subject nvarchar(255) NULL,
	Message nvarchar(2000) NULL,
	ToUserID numeric(11, 0) NULL)
GO
CREATE TABLE PasswordHistory(
	PasswordId numeric(11, 0) IDENTITY(1,1) NOT NULL,
	UserID numeric(11, 0) NULL,
	UserPWD nvarchar(255) NULL)
GO
ALTER TABLE PasswordHistory ADD CONSTRAINT PK_PasswordId PRIMARY KEY (PasswordId)
GO
CREATE TABLE QuerySecurityConfigWK(
	FileID numeric(11, 0) NULL,
	UserId numeric(11, 0) NULL,
	UserGroup nvarchar(1) NULL)
GO
CREATE TABLE Reasons(
	ReasonId numeric(11, 0) IDENTITY(1,1) NOT NULL,
	Reason nvarchar(255) NULL,
	UserId numeric(11, 0) NULL,
	UserGroup nvarchar(1) NULL)
GO
ALTER TABLE Reasons ADD CONSTRAINT PK_ReasonId PRIMARY KEY (ReasonId)
GO
CREATE TABLE RoleAssignment(
	UserId numeric(11, 0) NOT NULL,
	RoleId numeric(11, 0) NOT NULL,
	UserGroup nvarchar(1) NOT NULL)
GO
ALTER TABLE RoleAssignment ADD CONSTRAINT PK_RoleAssignment PRIMARY KEY (UserId,RoleId,UserGroup)
GO
CREATE TABLE Roles(
	RoleId numeric(11, 0) IDENTITY(1,1) NOT NULL,
	RoleName nvarchar(255) NULL,
	DeleteStatus nvarchar(50) NULL)
GO
ALTER TABLE Roles ADD CONSTRAINT PK_RoleId PRIMARY KEY (RoleId)
GO
CREATE TABLE RolesForLocking(
	RoleId int NULL) 
GO
CREATE TABLE SecurityConfigRN(
	FileID numeric(11, 0) NULL,
	WorkSheetCodeName nvarchar(255) NULL,
	CellRange nvarchar(50) NULL,
	UserId numeric(11, 0) NULL,
	UserGroup nvarchar(1) NULL
) 
GO
CREATE TABLE SecurityConfigWK(
	FileID numeric(11, 0) NULL,
	WorkSheetCodeName nvarchar(255) NULL,
	UserId numeric(11, 0) NULL,
	UserGroup nvarchar(1) NULL
) 
GO
CREATE TABLE USERGROUP_ALLOCATION(
	UserId numeric(11, 0) NOT NULL,
	GroupID numeric(11, 0) NOT NULL)
GO
ALTER TABLE USERGROUP_ALLOCATION ADD CONSTRAINT PK_USERGROUP_ALLOCATION PRIMARY KEY (UserId,GroupID)
Go
CREATE TABLE UserMaster(
	UserId numeric(11, 0) IDENTITY(1,1) NOT NULL,
	UserName nvarchar(255) NULL,
	UserPwd nvarchar(255) NULL,
	UserFullName nvarchar(255) NULL,
	UserMailId nvarchar(255) NULL,
	LastPwdAgingDate datetime NULL,
	AgingPeriod float NULL,
	AccountStatus nvarchar(255) NULL,
	DisableUptoDate datetime NULL,
	DisableReason nvarchar(255) NULL,
	MaxFailureAttempt float NULL,
	DisablePeriodForFailure float NULL,
	DeleteStatus nvarchar(255) NULL,
	UserType nvarchar(255) NULL,
	LockoutTime float NULL,
	REVIEWER nvarchar(10) NULL,
	DISABLEPERIODINDEFINITE nvarchar(255) NULL,
	ACCOUNTLOCKDATETIME datetime NULL,
	WORKBOOKLOCKER nvarchar(10) NULL,
	ARCHIVER nvarchar(10) NULL,
	READONLYCREATOR nvarchar(10) NULL,
	AUDITTRAILRECORDED nvarchar(255) NULL,
	LDAPUSER nvarchar(10) NULL,
	DOMAINNAME nvarchar(255) NULL,
	LASTPASSWORD nvarchar(255) NULL,
	OFFLINERIGHT nvarchar(10) NULL,
	ENABLEEXCELMENU nvarchar(10) NULL,
	ASSIGNPRIVILEGES nvarchar(255) NULL,
	LastLoginTime datetime NULL,
	LastLogoutTime datetime NULL,
	Esign bit NOT NULL,
	ShowReasonDialog bit NOT NULL)
GO
ALTER TABLE UserMaster ADD CONSTRAINT PK_UserId PRIMARY KEY (UserId)
Go
CREATE TABLE DomainMaster(
	DOMAINNAME nvarchar(255) NULL,
	DOMAINPATH nvarchar(255) NULL,
	USERNAME nvarchar(255) NULL,
	USERPASS nvarchar(255) NULL,
	SYNC nvarchar(1) NULL) 
	
GO 

INSERT INTO UserMaster(UserName,UserPwd,UserFullName,UserMailId,LastPwdAgingDate,AgingPeriod,AccountStatus,DisableUptoDate,DisableReason,MaxFailureAttempt,DisablePeriodForFailure,DeleteStatus,UserType,LockoutTime,REVIEWER,DISABLEPERIODINDEFINITE,ACCOUNTLOCKDATETIME,WORKBOOKLOCKER,ARCHIVER,READONLYCREATOR,AUDITTRAILRECORDED,LDAPUSER,DOMAINNAME,LASTPASSWORD,OFFLINERIGHT,ENABLEEXCELMENU,ASSIGNPRIVILEGES,LastLoginTime,LastLogoutTime,Esign,ShowReasonDialog)
VALUES('Admin','003651012813711762702762','Administrator','admin@cimcon.com','','43200','E',NULL,'','3','1440','N','A','30','FALSE','FALSE',NULL,'FALSE','FALSE','FALSE','FALSE','FALSE','','0','FALSE','FALSE','FALSE',NULL,NULL,'False','False')
GO
INSERT INTO USERGROUP_ALLOCATION(UserId,GroupID)
VALUES('1','1')
GO
INSERT INTO RolesForLocking(RoleId) VALUES('0')
GO
INSERT INTO Roles(RoleName,DeleteStatus)
VALUES('Data Entry','N')
GO
INSERT INTO Roles(RoleName,DeleteStatus)
VALUES('Review','N')
GO
INSERT INTO Roles(RoleName,DeleteStatus)
VALUES('Administration','N')
GO
INSERT INTO Roles(RoleName,DeleteStatus)
VALUES('Ready for Review','N')
GO
INSERT INTO Roles(RoleName,DeleteStatus)
VALUES('Approve','N')
GO
INSERT INTO Roles(RoleName,DeleteStatus)
VALUES('Reject','N')
GO
INSERT INTO RoleAssignment(UserId,RoleId,UserGroup)
VALUES('1','1','G')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File','-1',NULL,'File','8','True','2520|364|1584|2521|2188|3738','File','File','1')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> New','18','^{n}','New','8','True','2520','New','File -> New','2')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Open','23','^{F12}|^{o}','Open','8','False','23','Open','File -> Open','3')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Close','106','^{F4}','Close','8','False','106','Close','File -> Close','4')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save','3','%{F2}|{F12}|^{s}','File -> Save','8','False','3','File -> Save','File -> Save','5')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save As','748','%{F2}|{F12}','File -> Save As','8','False','748','File -> Save As','File -> Save As','6')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save Workspace','846','None','File -> Save Workspace','8','False','846','File -> Save Workspace','File -> Save Workspace','7')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Page Setup','247','None','File -> Page Setup','8','False','247','File -> Page Setup','File -> Page Setup','8')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print Area','30255','None','File -> Print Area','8','True','364|1584','File -> Print Area','File -> Print Area','9')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print Preview','109','None','File -> Print Preview','8','False','109','File -> Print Preview','File -> Print Preview','10')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print','4','^{p}','File -> Print','8','True','2521','File -> Print','File -> Print','11')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Send To','30095','None','File -> Send To','8','True','2188','File -> Send To','File -> Send To','12')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Exit','752','%{F4}','File -> Exit','8','False','752','File -> Exit','File -> Exit','13')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit','-2',NULL,'Edit','8','True','6002|3125|294|293|292|295|3181|7373|3183|296|297|871|870|869|868|867|371|372|368|47|1964|108','Edit','Edit','14')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Cut','21','^{x}|+{DEL}|+{DELETE}','Edit -> Cut','8','True',NULL,'Edit -> Cut','Edit -> Cut','15')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Copy','19','^{c}|^{INSERT}','Edit -> Copy','8','True',NULL,'Edit -> Copy','Edit -> Copy','16')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Paste','22','^{v}|+{INSERT}','Edit -> Paste','8','True','6002','Edit -> Paste','Edit -> Paste','17')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Fill','30020','^{d}|^{r}','Edit -> Fill','8','False','30020','Edit -> Fill','Edit -> Fill','18')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Clear','30021','{DEL}|{DELETE}','Edit -> Clear','8','True','3125','Edit -> Clear','Edit -> Clear','19')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Delete','478','^{-}','Edit -> Delete','8','True','294|293|292','Edit -> Delete','Edit -> Delete','20')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Delete Sheet','847',NULL,'Edit -> Delete Sheet','8','False',NULL,'Edit -> Delete Sheet','Edit -> Delete Sheet','21')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Find','1849','^{f}','Edit -> Find','8','False','1849','Edit -> Find','Edit -> Find','22')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Replace','313','^{h}','Edit -> Replace','8','False','313','Edit -> Replace','Edit -> Replace','23')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Go To','757','^{g}','Edit -> Go To','8','False','757','Edit -> Go To','Edit -> Go To','24')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert','-3',NULL,'Insert','8','True','3181|7373|3183|7433|7432|7812|7693|7813|7897|7784|226|1957|702|1031|2630|9405|1764|2619|682|463|1957|308|1576|436|2031|546|852','Insert','Insert','25')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Cells','295','^+{+}','Insert -> Cells','8','True','3181','Insert -> Cells','Insert -> Cells','26')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Rows','296','None','Insert -> Rows','8','True','7373|3183','Insert -> Rows','Insert -> Rows','27')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Columns','297','None','Insert -> Columns','8','True','3183','Insert -> Columns','Insert -> Columns','28')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Worksheet','852','+{F11}','Insert -> Worksheet','8','False',NULL,'Insert -> Worksheet','Insert -> Worksheet','29')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Chart','1957','None','Insert -> Chart','8','True','7433|7432|7812|7693|7813|7897|7784|436','Insert -> Chart','Insert -> Chart','30')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Symbol','308','None','Insert -> Symbol','8','False','308','Insert -> Symbol','Insert -> Symbol','31')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Page Break ','509','None','Insert -> Page Break ','8','False','509','Insert -> Page Break ','Insert -> Page Break ','32')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Function','385','None','Insert -> Function','8','True','226','Insert -> Function','Insert -> Function','33')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Comment','1589','None','Insert -> Comment','8','True','2031','Insert -> Comment','Insert -> Comment','34')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Picture','30180','None','Insert -> Picture','8','False','30180','Insert -> Picture','Insert -> Picture','35')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Hyperlink','1576','^{k}','Insert -> Hyperlink','8','False','1576','Insert -> Hyperlink','Insert -> Hyperlink','36')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format','-4',NULL,'Format','8','True','1728|1731|113|114|115|120|122|121|402|4027|1925|395|396|397|398|399|3162|3161|203|1691|401','Format','Format','37')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Cells','855','^1','Format -> Cells','8','True','1728|1731|113|114|115|120|122|121|402|4027|1925|395|396|397|398|399|3162|3161|203|1691|401','Format -> Cells','Format -> Cells','38')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Row','30024','None','Format -> Row','8','False','30024','Format -> Row','Format -> Row','39')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Column','30025','None','Format -> Column','8','False','30025','Format -> Column','Format -> Column','40')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Sheet','30026','None','Format -> Sheet','8','False','30026','Format -> Sheet','Format -> Sheet','41')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> AutoFormat','786','None','Format -> AutoFormat','8','False','786','Format -> AutoFormat','Format -> AutoFormat','42')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Conditional Formatting','3058','None','Format -> Conditional Formatting','8','False','3058','Format -> Conditional Formatting','Format -> Conditional Formatting','43')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools','-5',NULL,'Tools','8','True','6997|893|894|3059|225|2040|1741','Tools','Tools','44')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Spelling','2','{F7}','Tools -> Spelling','8','False','2','Tools -> Spelling','Tools -> Spelling','45')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> AutoCorrect','793','None','Tools -> AutoCorrect','8','False','793','Tools -> AutoCorrect','Tools -> AutoCorrect','46')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Protection','30029','None','Tools -> Protection','8','True','6997|893|894|3059|225','Tools -> Protection','Tools -> Protection','47')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Online Collaboration','30468','None','Tools -> Online Collaboration','8','False','30468','Tools -> Online Collaboration','Tools -> Online Collaboration','48')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Auditing','30028','None','Tools -> Auditing','8','False','30028','Tools -> Auditing','Tools -> Auditing','49')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Macro','30017','None','Tools -> Macro','8','False','30017','Tools -> Macro','Tools -> Macro','50')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Add-Ins','943','None','Tools -> Add-Ins','8','False','943','Tools -> Add-Ins','Tools -> Add-Ins','51')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Options','522','None','Tools -> Options','8','False','522','Tools -> Options','Tools -> Options','52')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data','-6',NULL,'Data','8','True','7433|7432|7812|7693|7813|7193|7433|31262|7372|7761|7762|7897|7380|7784|6997|1728|1731|113|114|115|120|122|121|402|4027|1925|395|396|397|398|399|3162|203|1691|401|210|211|9747|7683|7763|7684|7375|7765|7193|3159|3160|901|458|6262|3844','Data','Data','53')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Sort','928','None','Data -> Sort','8','True','210|211','Data -> Sort','Data -> Sort','54')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Filter','30031','None','Data -> Filter','8','False','30031','Data -> Filter','Data -> Filter','55')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Validation','2034','None','Data -> Validation','8','False','2034','Data -> Validation','Data -> Validation','56')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Table','862','None','Data -> Table','8','False','862','Data -> Table','Data -> Table','57')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Text to Columns','806','None','Data -> Text to Columns','8','False','806','Data -> Text to Columns','Data -> Text to Columns','58')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Consolidate','863','None','Data -> Consolidate','8','False','863','Data -> Consolidate','Data -> Consolidate','59')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Group and Outline','30032','None','Data -> Group and Outline','8','False','30032','Data -> Group and Outline','Data -> Group and Outline','60')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Get External Data - New Web Query','3829','None','Data -> Get External Data - New Web Query','8','False','3829','Data -> Get External Data - New Web Query','Data -> Get External Data - New Web Query','61')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Get External Data - Import Text File','3844','None','Data -> Get External Data - Import Text File','8','True','30101','Data -> Get External Data - Import Text File','Data -> Get External Data - Import Text File','62')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window','-7',NULL,'Window','8','False','-7','Window','Window','63')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window -> Arrange','298','None','Window -> Arrange','8','False','298','Window -> Arrange','Window -> Arrange','64')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window -> Split','302','None','Window -> Split','8','False','302','Window -> Split','Window -> Split','65')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window -> Freeze Panes','443','None','Window -> Freeze Panes','8','False','443','Window -> Freeze Panes','Window -> Freeze Panes','66')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree','-8',NULL,'eInfotree','8','False','-8','eInfotree','eInfotree','67')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Enter E-Signature','0','None','Enter E-Signature','8','False','0','Enter E-Signature','eInfotree -> Enter E-Signature','68')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Review Changes','0','{F10}','Review Changes        F10','8','False','0','Review Changes        F10','eInfotree -> Review Changes','69')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Lock Workbook','0','None','Lock Workbook','8','False','0','Lock Workbook','eInfotree -> Lock Workbook','70')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Change Password','0','None','Change Password','8','False','0','Change Password','eInfotree -> Change Password','71')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> View Audit Trail','0','{F4}','View Audit Trail','8','False','0','View Audit Trail','eInfotree -> View Audit Trail','72')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> View Cell Changes','0','None','View Cell Changes','8','False','0','View Cell Changes','eInfotree -> View Cell Changes','73')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Audit Trail Query Builder','0','None','Audit Trail Query Builder','8','False','0','Audit Trail Query Builder','eInfotree -> Audit Trail Query Builder','74')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Cell Revision History','0','None','Cell Revision History','8','False','0','Cell Revision History','eInfotree -> Cell Revision History','75')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Create Remote Copy','0','None','Create Remote Copy','8','False','0','Create Remote Copy','eInfotree -> Create Remote Copy','76')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Archive Audit Trail','0','None','Archive Audit Trail','8','False','0','Archive Audit Trail','eInfotree -> Archive Audit Trail','77')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Options','0','None','Options','8','False','0','Options','eInfotree -> Options','78')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Work Offline','0','None','Work Offline','8','False','0','Work Offline','eInfotree -> Work Offline','79')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File','-1',NULL,'File','9','True','2520|364|1584|2521|2188|3738','File','File','80')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> New','18','^{n}','New','9','True','2520','New','File -> New','81')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Open','23','^{F12}|^{o}','Open','9','False','23','Open','File -> Open','82')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Close','106','^{F4}','Close','9','False','106','Close','File -> Close','83')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save','3','%{F2}|{F12}|^{s}','File -> Save','9','False','3','File -> Save','File -> Save','84')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save As','748','%{F2}|{F12}','File -> Save As','9','False','748','File -> Save As','File -> Save As','85')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save Workspace','846','None','File -> Save Workspace','9','False','846','File -> Save Workspace','File -> Save Workspace','86')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Page Setup','247','None','File -> Page Setup','9','False','247','File -> Page Setup','File -> Page Setup','87')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print Area','30255','None','File -> Print Area','9','True','364|1584','File -> Print Area','File -> Print Area','88')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print Preview','109','None','File -> Print Preview','9','False','109','File -> Print Preview','File -> Print Preview','89')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print','4','^{p}','File -> Print','9','True','2521','File -> Print','File -> Print','90')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Send To','30095','None','File -> Send To','9','True','2188','File -> Send To','File -> Send To','91')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Exit','752','%{F4}','File -> Exit','9','False','752','File -> Exit','File -> Exit','92')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit','-2',NULL,'Edit','9','True','6002|3125|294|293|292|295|3181|7373|3183|296|297|871|870|869|868|867|371|372|368|47|1964|108','Edit','Edit','93')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Cut','21','^{x}|+{DEL}|+{DELETE}','Edit -> Cut','9','True',NULL,'Edit -> Cut','Edit -> Cut','94')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Copy','19','^{c}|^{INSERT}','Edit -> Copy','9','True',NULL,'Edit -> Copy','Edit -> Copy','95')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Paste','22','^{v}|+{INSERT}','Edit -> Paste','9','True','6002','Edit -> Paste','Edit -> Paste','96')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Fill','30020','^{d}|^{r}','Edit -> Fill','9','False','30020','Edit -> Fill','Edit -> Fill','97')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Clear','30021','{DEL}|{DELETE}','Edit -> Clear','9','True','3125','Edit -> Clear','Edit -> Clear','98')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Delete','478','^{-}','Edit -> Delete','9','True','294|293|292','Edit -> Delete','Edit -> Delete','99')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Delete Sheet','847',NULL,'Edit -> Delete Sheet','9','False',NULL,'Edit -> Delete Sheet','Edit -> Delete Sheet','100')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Find','1849','^{f}','Edit -> Find','9','False','1849','Edit -> Find','Edit -> Find','101')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Replace','313','^{h}','Edit -> Replace','9','False','313','Edit -> Replace','Edit -> Replace','102')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Go To','757','^{g}','Edit -> Go To','9','False','757','Edit -> Go To','Edit -> Go To','103')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert','-3',NULL,'Insert','9','True','3181|7373|3183|7433|7432|7812|7693|7813|7897|7784|226|1957|702|1031|2630|9405|1764|2619|682|463|1957|308|1576|436|2031|546|852','Insert','Insert','104')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Cells','295','^+{+}','Insert -> Cells','9','True','3181','Insert -> Cells','Insert -> Cells','105')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Rows','296','None','Insert -> Rows','9','True','7373|3183','Insert -> Rows','Insert -> Rows','106')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Columns','297','None','Insert -> Columns','9','True','3183','Insert -> Columns','Insert -> Columns','107')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Worksheet','852','+{F11}','Insert -> Worksheet','9','False',NULL,'Insert -> Worksheet','Insert -> Worksheet','108')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Chart','1957','None','Insert -> Chart','9','True','7433|7432|7812|7693|7813|7897|7784|436','Insert -> Chart','Insert -> Chart','109')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Symbol','308','None','Insert -> Symbol','9','False','308','Insert -> Symbol','Insert -> Symbol','110')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Page Break ','509','None','Insert -> Page Break ','9','False','509','Insert -> Page Break ','Insert -> Page Break ','111')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Function','385','None','Insert -> Function','9','True','226','Insert -> Function','Insert -> Function','112')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Comment','1589','None','Insert -> Comment','9','True','2031','Insert -> Comment','Insert -> Comment','113')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Picture','30180','None','Insert -> Picture','9','False','30180','Insert -> Picture','Insert -> Picture','114')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Hyperlink','1576','^{k}','Insert -> Hyperlink','9','False','1576','Insert -> Hyperlink','Insert -> Hyperlink','115')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format','-4',NULL,'Format','9','True','1728|1731|113|114|115|120|122|121|402|4027|1925|395|396|397|398|399|3162|3161|203|1691|401','Format','Format','116')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Cells','855','^1','Format -> Cells','9','True','1728|1731|113|114|115|120|122|121|402|4027|1925|395|396|397|398|399|3162|3161|203|1691|401','Format -> Cells','Format -> Cells','117')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Row','30024','None','Format -> Row','9','False','30024','Format -> Row','Format -> Row','118')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Column','30025','None','Format -> Column','9','False','30025','Format -> Column','Format -> Column','119')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Sheet','30026','None','Format -> Sheet','9','False','30026','Format -> Sheet','Format -> Sheet','120')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> AutoFormat','786','None','Format -> AutoFormat','9','False','786','Format -> AutoFormat','Format -> AutoFormat','121')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Conditional Formatting','3058','None','Format -> Conditional Formatting','9','False','3058','Format -> Conditional Formatting','Format -> Conditional Formatting','122')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools','-5',NULL,'Tools','9','True','6997|893|894|3059|225|2040|1741','Tools','Tools','123')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Spelling','2','{F7}','Tools -> Spelling','9','False','2','Tools -> Spelling','Tools -> Spelling','124')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> AutoCorrect','793','None','Tools -> AutoCorrect','9','False','793','Tools -> AutoCorrect','Tools -> AutoCorrect','125')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Protection','30029','None','Tools -> Protection','9','True','6997|893|894|3059|225','Tools -> Protection','Tools -> Protection','126')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Online Collaboration','30468','None','Tools -> Online Collaboration','9','False','30468','Tools -> Online Collaboration','Tools -> Online Collaboration','127')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Auditing','30028','None','Tools -> Auditing','9','False','30028','Tools -> Auditing','Tools -> Auditing','128')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Macro','30017','None','Tools -> Macro','9','False','30017','Tools -> Macro','Tools -> Macro','129')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Add-Ins','943','None','Tools -> Add-Ins','9','False','943','Tools -> Add-Ins','Tools -> Add-Ins','130')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Options','522','None','Tools -> Options','9','False','522','Tools -> Options','Tools -> Options','131')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data','-6',NULL,'Data','9','True','7433|7432|7812|7693|7813|7193|7433|31262|7372|7761|7762|7897|7380|7784|6997|1728|1731|113|114|115|120|122|121|402|4027|1925|395|396|397|398|399|3162|203|1691|401|210|211|9747|7683|7763|7684|7375|7765|7193|3159|3160|901|458|6262|3844','Data','Data','132')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Sort','928','None','Data -> Sort','9','True','210|211','Data -> Sort','Data -> Sort','133')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Filter','30031','None','Data -> Filter','9','False','30031','Data -> Filter','Data -> Filter','134')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Validation','2034','None','Data -> Validation','9','False','2034','Data -> Validation','Data -> Validation','135')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Table','862','None','Data -> Table','9','False','862','Data -> Table','Data -> Table','136')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Text to Columns','806','None','Data -> Text to Columns','9','False','806','Data -> Text to Columns','Data -> Text to Columns','137')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Consolidate','863','None','Data -> Consolidate','9','False','863','Data -> Consolidate','Data -> Consolidate','138')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Group and Outline','30032','None','Data -> Group and Outline','9','False','30032','Data -> Group and Outline','Data -> Group and Outline','139')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Get External Data - New Web Query','3829','None','Data -> Get External Data - New Web Query','9','False','3829','Data -> Get External Data - New Web Query','Data -> Get External Data - New Web Query','140')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Get External Data - Import Text File','3844','None','Data -> Get External Data - Import Text File','9','True','30101','Data -> Get External Data - Import Text File','Data -> Get External Data - Import Text File','141')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window','-7',NULL,'Window','9','False','-7','Window','Window','142')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window -> Arrange','298','None','Window -> Arrange','9','False','298','Window -> Arrange','Window -> Arrange','143')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window -> Split','302','None','Window -> Split','9','False','302','Window -> Split','Window -> Split','144')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window -> Freeze Panes','443','None','Window -> Freeze Panes','9','False','443','Window -> Freeze Panes','Window -> Freeze Panes','145')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree','-8',NULL,'eInfotree','9','False','-8','eInfotree','eInfotree','146')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Enter E-Signature','0','None','Enter E-Signature','9','False','0','Enter E-Signature','eInfotree -> Enter E-Signature','147')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Review Changes','0','{F10}','Review Changes        F10','9','False','0','Review Changes        F10','eInfotree -> Review Changes','148')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Lock Workbook','0','None','Lock Workbook','9','False','0','Lock Workbook','eInfotree -> Lock Workbook','149')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Change Password','0','None','Change Password','9','False','0','Change Password','eInfotree -> Change Password','150')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> View Audit Trail','0','{F4}','View Audit Trail','9','False','0','View Audit Trail','eInfotree -> View Audit Trail','151')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> View Cell Changes','0','None','View Cell Changes','9','False','0','View Cell Changes','eInfotree -> View Cell Changes','152')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Audit Trail Query Builder','0','None','Audit Trail Query Builder','9','False','0','Audit Trail Query Builder','eInfotree -> Audit Trail Query Builder','153')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Cell Revision History','0','None','Cell Revision History','9','False','0','Cell Revision History','eInfotree -> Cell Revision History','154')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Create Remote Copy','0','None','Create Remote Copy','9','False','0','Create Remote Copy','eInfotree -> Create Remote Copy','155')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Archive Audit Trail','0','None','Archive Audit Trail','9','False','0','Archive Audit Trail','eInfotree -> Archive Audit Trail','156')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Options','0','None','Options','9','False','0','Options','eInfotree -> Options','157')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Work Offline','0','None','Work Offline','9','False','0','Work Offline','eInfotree -> Work Offline','158')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File','-1',NULL,'File','10','True','2520|364|1584|2521|2188|3738','File','File','159')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> New','18','^{n}','New','10','True','2520','New','File -> New','160')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Open','23','^{F12}|^{o}','Open','10','False','23','Open','File -> Open','161')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Close','106','^{F4}','Close','10','False','106','Close','File -> Close','162')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save','3','%{F2}|{F12}|^{s}','File -> Save','10','False','3','File -> Save','File -> Save','163')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save As','748','%{F2}|{F12}','File -> Save As','10','False','748','File -> Save As','File -> Save As','164')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save Workspace','846','None','File -> Save Workspace','10','False','846','File -> Save Workspace','File -> Save Workspace','165')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Page Setup','247','None','File -> Page Setup','10','False','247','File -> Page Setup','File -> Page Setup','166')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print Area','30255','None','File -> Print Area','10','True','364|1584','File -> Print Area','File -> Print Area','167')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print Preview','109','None','File -> Print Preview','10','False','109','File -> Print Preview','File -> Print Preview','168')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print','4','^{p}','File -> Print','10','True','2521','File -> Print','File -> Print','169')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Send To','30095','None','File -> Send To','10','True','2188','File -> Send To','File -> Send To','170')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Exit','752','%{F4}','File -> Exit','10','False','752','File -> Exit','File -> Exit','171')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit','-2',NULL,'Edit','10','True','6002|3125|294|293|292|295|3181|7373|3183|296|297|871|870|869|868|867|371|372|368|47|1964|108','Edit','Edit','172')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Cut','21','^{x}|+{DEL}|+{DELETE}','Edit -> Cut','10','True',NULL,'Edit -> Cut','Edit -> Cut','173')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Copy','19','^{c}|^{INSERT}','Edit -> Copy','10','True',NULL,'Edit -> Copy','Edit -> Copy','174')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Paste','22','^{v}|+{INSERT}','Edit -> Paste','10','True','6002','Edit -> Paste','Edit -> Paste','175')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Fill','30020','^{d}|^{r}','Edit -> Fill','10','False','30020','Edit -> Fill','Edit -> Fill','176')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Clear','30021','{DEL}|{DELETE}','Edit -> Clear','10','True','3125','Edit -> Clear','Edit -> Clear','177')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Delete','478','^{-}','Edit -> Delete','10','True','294|293|292','Edit -> Delete','Edit -> Delete','178')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Delete Sheet','847',NULL,'Edit -> Delete Sheet','10','False',NULL,'Edit -> Delete Sheet','Edit -> Delete Sheet','179')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Find','1849','^{f}','Edit -> Find','10','False','1849','Edit -> Find','Edit -> Find','180')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Replace','313','^{h}','Edit -> Replace','10','False','313','Edit -> Replace','Edit -> Replace','181')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Go To','757','^{g}','Edit -> Go To','10','False','757','Edit -> Go To','Edit -> Go To','182')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert','-3',NULL,'Insert','10','True','3181|7373|3183|7433|7432|7812|7693|7813|7897|7784|226|1957|702|1031|2630|9405|1764|2619|682|463|1957|308|1576|436|2031|546|852','Insert','Insert','183')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Cells','295','^+{+}','Insert -> Cells','10','True','3181','Insert -> Cells','Insert -> Cells','184')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Rows','296','None','Insert -> Rows','10','True','7373|3183','Insert -> Rows','Insert -> Rows','185')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Columns','297','None','Insert -> Columns','10','True','3183','Insert -> Columns','Insert -> Columns','186')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Worksheet','852','+{F11}','Insert -> Worksheet','10','False',NULL,'Insert -> Worksheet','Insert -> Worksheet','187')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Chart','1957','None','Insert -> Chart','10','True','7433|7432|7812|7693|7813|7897|7784|436','Insert -> Chart','Insert -> Chart','188')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Symbol','308','None','Insert -> Symbol','10','False','308','Insert -> Symbol','Insert -> Symbol','189')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Page Break ','509','None','Insert -> Page Break ','10','False','509','Insert -> Page Break ','Insert -> Page Break ','190')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Function','385','None','Insert -> Function','10','True','226','Insert -> Function','Insert -> Function','191')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Comment','1589','None','Insert -> Comment','10','True','2031','Insert -> Comment','Insert -> Comment','192')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Picture','30180','None','Insert -> Picture','10','False','30180','Insert -> Picture','Insert -> Picture','193')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Hyperlink','1576','^{k}','Insert -> Hyperlink','10','False','1576','Insert -> Hyperlink','Insert -> Hyperlink','194')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format','-4',NULL,'Format','10','True','1728|1731|113|114|115|120|122|121|402|4027|1925|395|396|397|398|399|3162|3161|203|1691|401','Format','Format','195')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Cells','855','^1','Format -> Cells','10','True','1728|1731|113|114|115|120|122|121|402|4027|1925|395|396|397|398|399|3162|3161|203|1691|401','Format -> Cells','Format -> Cells','196')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Row','30024','None','Format -> Row','10','False','30024','Format -> Row','Format -> Row','197')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Column','30025','None','Format -> Column','10','False','30025','Format -> Column','Format -> Column','198')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Sheet','30026','None','Format -> Sheet','10','False','30026','Format -> Sheet','Format -> Sheet','199')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> AutoFormat','786','None','Format -> AutoFormat','10','False','786','Format -> AutoFormat','Format -> AutoFormat','200')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Conditional Formatting','3058','None','Format -> Conditional Formatting','10','False','3058','Format -> Conditional Formatting','Format -> Conditional Formatting','201')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools','-5',NULL,'Tools','10','True','6997|893|894|3059|225|2040|1741','Tools','Tools','202')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Spelling','2','{F7}','Tools -> Spelling','10','False','2','Tools -> Spelling','Tools -> Spelling','203')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> AutoCorrect','793','None','Tools -> AutoCorrect','10','False','793','Tools -> AutoCorrect','Tools -> AutoCorrect','204')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Protection','30029','None','Tools -> Protection','10','True','6997|893|894|3059|225','Tools -> Protection','Tools -> Protection','205')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Online Collaboration','30468','None','Tools -> Online Collaboration','10','False','30468','Tools -> Online Collaboration','Tools -> Online Collaboration','206')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Auditing','30028','None','Tools -> Auditing','10','False','30028','Tools -> Auditing','Tools -> Auditing','207')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Macro','30017','None','Tools -> Macro','10','False','30017','Tools -> Macro','Tools -> Macro','208')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Add-Ins','943','None','Tools -> Add-Ins','10','False','943','Tools -> Add-Ins','Tools -> Add-Ins','209')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Options','522','None','Tools -> Options','10','False','522','Tools -> Options','Tools -> Options','210')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data','-6',NULL,'Data','10','True','7433|7432|7812|7693|7813|7193|7433|31262|7372|7761|7762|7897|7380|7784|6997|1728|1731|113|114|115|120|122|121|402|4027|1925|395|396|397|398|399|3162|203|1691|401|210|211|9747|7683|7763|7684|7375|7765|7193|3159|3160|901|458|6262|3844','Data','Data','211')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Sort','928','None','Data -> Sort','10','True','210|211','Data -> Sort','Data -> Sort','212')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Filter','30031','None','Data -> Filter','10','False','30031','Data -> Filter','Data -> Filter','213')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Validation','2034','None','Data -> Validation','10','False','2034','Data -> Validation','Data -> Validation','214')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Table','862','None','Data -> Table','10','False','862','Data -> Table','Data -> Table','215')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Text to Columns','806','None','Data -> Text to Columns','10','False','806','Data -> Text to Columns','Data -> Text to Columns','216')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Consolidate','863','None','Data -> Consolidate','10','False','863','Data -> Consolidate','Data -> Consolidate','217')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Group and Outline','30032','None','Data -> Group and Outline','10','False','30032','Data -> Group and Outline','Data -> Group and Outline','218')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Get External Data - New Web Query','3829','None','Data -> Get External Data - New Web Query','10','False','3829','Data -> Get External Data - New Web Query','Data -> Get External Data - New Web Query','219')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Get External Data - Import Text File','3844','None','Data -> Get External Data - Import Text File','10','True','30101','Data -> Get External Data - Import Text File','Data -> Get External Data - Import Text File','220')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window','-7',NULL,'Window','10','False','-7','Window','Window','221')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window -> Arrange','298','None','Window -> Arrange','10','False','298','Window -> Arrange','Window -> Arrange','222')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window -> Split','302','None','Window -> Split','10','False','302','Window -> Split','Window -> Split','223')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window -> Freeze Panes','443','None','Window -> Freeze Panes','10','False','443','Window -> Freeze Panes','Window -> Freeze Panes','224')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree','-8',NULL,'eInfotree','10','False','-8','eInfotree','eInfotree','225')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Enter E-Signature','0','None','Enter E-Signature','10','False','0','Enter E-Signature','eInfotree -> Enter E-Signature','226')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Review Changes','0','{F10}','Review Changes        F10','10','False','0','Review Changes        F10','eInfotree -> Review Changes','227')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Lock Workbook','0','None','Lock Workbook','10','False','0','Lock Workbook','eInfotree -> Lock Workbook','228')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Change Password','0','None','Change Password','10','False','0','Change Password','eInfotree -> Change Password','229')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> View Audit Trail','0','{F4}','View Audit Trail','10','False','0','View Audit Trail','eInfotree -> View Audit Trail','230')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> View Cell Changes','0','None','View Cell Changes','10','False','0','View Cell Changes','eInfotree -> View Cell Changes','231')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Audit Trail Query Builder','0','None','Audit Trail Query Builder','10','False','0','Audit Trail Query Builder','eInfotree -> Audit Trail Query Builder','232')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Cell Revision History','0','None','Cell Revision History','10','False','0','Cell Revision History','eInfotree -> Cell Revision History','233')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Create Remote Copy','0','None','Create Remote Copy','10','False','0','Create Remote Copy','eInfotree -> Create Remote Copy','234')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Archive Audit Trail','0','None','Archive Audit Trail','10','False','0','Archive Audit Trail','eInfotree -> Archive Audit Trail','235')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Options','0','None','Options','10','False','0','Options','eInfotree -> Options','236')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Work Offline','0','None','Work Offline','10','False','0','Work Offline','eInfotree -> Work Offline','237')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File','-1',NULL,'File','11','True','2520|364|1584|2521|2188|3738','File','File','238')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> New','18','^{n}','New','11','True','2520','New','File -> New','239')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Open','23','^{F12}|^{o}','Open','11','False','23','Open','File -> Open','240')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Close','106','^{F4}','Close','11','False','106','Close','File -> Close','241')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save','3','%{F2}|{F12}|^{s}','File -> Save','11','False','3','File -> Save','File -> Save','242')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save As','748','%{F2}|{F12}','File -> Save As','11','False','748','File -> Save As','File -> Save As','243')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save Workspace','846','None','File -> Save Workspace','11','False','846','File -> Save Workspace','File -> Save Workspace','244')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Page Setup','247','None','File -> Page Setup','11','False','247','File -> Page Setup','File -> Page Setup','245')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print Area','30255','None','File -> Print Area','11','True','364|1584','File -> Print Area','File -> Print Area','246')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print Preview','109','None','File -> Print Preview','11','False','109','File -> Print Preview','File -> Print Preview','247')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print','4','^{p}','File -> Print','11','True','2521','File -> Print','File -> Print','248')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Send To','30095','None','File -> Send To','11','True','2188','File -> Send To','File -> Send To','249')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Exit','752','%{F4}','File -> Exit','11','False','752','File -> Exit','File -> Exit','250')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit','-2',NULL,'Edit','11','True','6002|3125|294|293|292|295|3181|7373|3183|296|297|871|870|869|868|867|371|372|368|47|1964|108','Edit','Edit','251')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Cut','21','^{x}|+{DEL}|+{DELETE}','Edit -> Cut','11','True',NULL,'Edit -> Cut','Edit -> Cut','252')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Copy','19','^{c}|^{INSERT}','Edit -> Copy','11','True',NULL,'Edit -> Copy','Edit -> Copy','253')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Paste','22','^{v}|+{INSERT}','Edit -> Paste','11','True','6002','Edit -> Paste','Edit -> Paste','254')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Fill','30020','^{d}|^{r}','Edit -> Fill','11','False','30020','Edit -> Fill','Edit -> Fill','255')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Clear','30021','{DEL}|{DELETE}','Edit -> Clear','11','True','3125','Edit -> Clear','Edit -> Clear','256')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Delete','478','^{-}','Edit -> Delete','11','True','294|293|292','Edit -> Delete','Edit -> Delete','257')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Delete Sheet','847',NULL,'Edit -> Delete Sheet','11','False',NULL,'Edit -> Delete Sheet','Edit -> Delete Sheet','258')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Find','1849','^{f}','Edit -> Find','11','False','1849','Edit -> Find','Edit -> Find','259')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Replace','313','^{h}','Edit -> Replace','11','False','313','Edit -> Replace','Edit -> Replace','260')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Edit -> Go To','757','^{g}','Edit -> Go To','11','False','757','Edit -> Go To','Edit -> Go To','261')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert','-3',NULL,'Insert','11','True','3181|7373|3183|7433|7432|7812|7693|7813|7897|7784|226|1957|702|1031|2630|9405|1764|2619|682|463|1957|308|1576|436|2031|546|852','Insert','Insert','262')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Cells','295','^+{+}','Insert -> Cells','11','True','3181','Insert -> Cells','Insert -> Cells','263')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Rows','296','None','Insert -> Rows','11','True','7373|3183','Insert -> Rows','Insert -> Rows','264')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Columns','297','None','Insert -> Columns','11','True','3183','Insert -> Columns','Insert -> Columns','265')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Worksheet','852','+{F11}','Insert -> Worksheet','11','False',NULL,'Insert -> Worksheet','Insert -> Worksheet','266')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Chart','1957','None','Insert -> Chart','11','True','7433|7432|7812|7693|7813|7897|7784|436','Insert -> Chart','Insert -> Chart','267')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Symbol','308','None','Insert -> Symbol','11','False','308','Insert -> Symbol','Insert -> Symbol','268')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Page Break ','509','None','Insert -> Page Break ','11','False','509','Insert -> Page Break ','Insert -> Page Break ','269')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Function','385','None','Insert -> Function','11','True','226','Insert -> Function','Insert -> Function','270')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Comment','1589','None','Insert -> Comment','11','True','2031','Insert -> Comment','Insert -> Comment','271')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Picture','30180','None','Insert -> Picture','11','False','30180','Insert -> Picture','Insert -> Picture','272')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Diagram','1032','None','Insert -> Diagram','11','False','1032','Insert -> Diagram','Insert -> Diagram','273')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Hyperlink','1576','^{k}','Insert -> Hyperlink','11','False','1576','Insert -> Hyperlink','Insert -> Hyperlink','274')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format','-4',NULL,'Format','11','True','1728|1731|113|114|115|120|122|121|402|4027|1925|395|396|397|398|399|3162|3161|203|1691|401','Format','Format','275')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Cells','855','^1','Format -> Cells','11','True','1728|1731|113|114|115|120|122|121|402|4027|1925|395|396|397|398|399|3162|3161|203|1691|401','Format -> Cells','Format -> Cells','276')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Row','30024','None','Format -> Row','11','False','30024','Format -> Row','Format -> Row','277')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Column','30025','None','Format -> Column','11','False','30025','Format -> Column','Format -> Column','278')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Sheet','30026','None','Format -> Sheet','11','False','30026','Format -> Sheet','Format -> Sheet','279')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> AutoFormat','786','None','Format -> AutoFormat','11','False','786','Format -> AutoFormat','Format -> AutoFormat','280')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Format -> Conditional Formatting','3058','None','Format -> Conditional Formatting','11','False','3058','Format -> Conditional Formatting','Format -> Conditional Formatting','281')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools','-5',NULL,'Tools','11','True','6997|893|894|3059|225|2040|1741','Tools','Tools','282')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Spelling','2','{F7}','Tools -> Spelling','11','False','2','Tools -> Spelling','Tools -> Spelling','283')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> AutoCorrect','793','None','Tools -> AutoCorrect','11','False','793','Tools -> AutoCorrect','Tools -> AutoCorrect','284')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Protection','30029','None','Tools -> Protection','11','True','6997|893|894|3059|225','Tools -> Protection','Tools -> Protection','285')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Online Collaboration','30468','None','Tools -> Online Collaboration','11','False','30468','Tools -> Online Collaboration','Tools -> Online Collaboration','286')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Auditing','30028','None','Tools -> Auditing','11','False','30028','Tools -> Auditing','Tools -> Auditing','287')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Macro','30017','None','Tools -> Macro','11','False','30017','Tools -> Macro','Tools -> Macro','288')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Add-Ins','943','None','Tools -> Add-Ins','11','False','943','Tools -> Add-Ins','Tools -> Add-Ins','289')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> AutoCorrect Options','793','None','Tools -> AutoCorrect Options','11','False','793','Tools -> AutoCorrect Options','Tools -> AutoCorrect Options','290')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Tools -> Options','522','None','Tools -> Options','11','False','522','Tools -> Options','Tools -> Options','291')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data','-6',NULL,'Data','11','True','7433|7432|7812|7693|7813|7193|7433|31262|7372|7761|7762|7897|7380|7784|6997|1728|1731|113|114|115|120|122|121|402|4027|1925|395|396|397|398|399|3162|203|1691|401|210|211|9747|7683|7763|7684|7375|7765|7193|3159|3160|901|458|6262|3844','Data','Data','292')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Sort','928','None','Data -> Sort','11','True','210|211','Data -> Sort','Data -> Sort','293')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Filter','30031','None','Data -> Filter','11','False','30031','Data -> Filter','Data -> Filter','294')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Validation','2034','None','Data -> Validation','11','False','2034','Data -> Validation','Data -> Validation','295')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Table','862','None','Data -> Table','11','False','862','Data -> Table','Data -> Table','296')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Text to Columns','806','None','Data -> Text to Columns','11','False','806','Data -> Text to Columns','Data -> Text to Columns','297')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Consolidate','863','None','Data -> Consolidate','11','False','863','Data -> Consolidate','Data -> Consolidate','298')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Group and Outline','30032','None','Data -> Group and Outline','11','False','30032','Data -> Group and Outline','Data -> Group and Outline','299')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Get External Data - New Web Query','3829','None','Data -> Get External Data - New Web Query','11','False','3829','Data -> Get External Data - New Web Query','Data -> Get External Data - New Web Query','300')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Get External Data - Import Text File','3844','None','Data -> Get External Data - Import Text File','11','True','30101','Data -> Get External Data - Import Text File','Data -> Get External Data - Import Text File','301')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> List','31276','None','Data -> List','11','True','31262|7372|7761|7762|7812|7432|7813|7897|7764|7380|9747|7683|7763|7684|7375|7765|7193','Data -> List','Data -> List','302')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> XML','31268','None','Data -> XML','11','True','7433|7432|7812|7693|7813|7897|7784|6997','Data -> XML','Data -> XML','303')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window','-7',NULL,'Window','11','False','-7','Window','Window','304')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window -> Arrange','298','None','Window -> Arrange','11','False','298','Window -> Arrange','Window -> Arrange','305')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window -> Split','302','None','Window -> Split','11','False','302','Window -> Split','Window -> Split','306')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Window -> Freeze Panes','443','None','Window -> Freeze Panes','11','False','443','Window -> Freeze Panes','Window -> Freeze Panes','307')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree','-8',NULL,'eInfotree','11','False','-8','eInfotree','eInfotree','308')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Enter E-Signature','0','None','Enter E-Signature','11','False','0','Enter E-Signature','eInfotree -> Enter E-Signature','309')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Review Changes','0','{F10}','Review Changes        F10','11','False','0','Review Changes        F10','eInfotree -> Review Changes','310')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Lock Workbook','0','None','Lock Workbook','11','False','0','Lock Workbook','eInfotree -> Lock Workbook','311')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Change Password','0','None','Change Password','11','False','0','Change Password','eInfotree -> Change Password','312')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> View Audit Trail','0','{F4}','View Audit Trail','11','False','0','View Audit Trail','eInfotree -> View Audit Trail','313')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> View Cell Changes','0','None','View Cell Changes','11','False','0','View Cell Changes','eInfotree -> View Cell Changes','314')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Audit Trail Query Builder','0','None','Audit Trail Query Builder','11','False','0','Audit Trail Query Builder','eInfotree -> Audit Trail Query Builder','315')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Cell Revision History','0','None','Cell Revision History','11','False','0','Cell Revision History','eInfotree -> Cell Revision History','316')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Create Remote Copy','0','None','Create Remote Copy','11','False','0','Create Remote Copy','eInfotree -> Create Remote Copy','317')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Archive Audit Trail','0','None','Archive Audit Trail','11','False','0','Archive Audit Trail','eInfotree -> Archive Audit Trail','318')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Options','0','None','Options','11','False','0','Options','eInfotree -> Options','319')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Work Offline','0','None','Work Offline','11','False','0','Work Offline','eInfotree -> Work Offline','320')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Office Menu','-1','NONE','Office Menu','12','False',NULL,NULL,NULL,'321')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Office Menu -> New','FileNewDefault','^{n}','New','12','False','18',NULL,NULL,'322')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Office Menu -> Open','FileOpen','^{F12}|^{o}','Open','12','False','23',NULL,NULL,'323')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Office Menu -> Save','FileSave','%{F2}|{F12}|^{s}','Save','12','False','3',NULL,NULL,'324')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Office Menu -> Save As','FileSaveAsMenu','%{F2}|{F12}','Save As','12','False','748',NULL,NULL,'325')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Office Menu -> Print','FilePrintMenu','^{p}','Print','12','False','4',NULL,NULL,'326')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Office Menu -> Prepare','FilePrepareMenu','NONE','Prepare','12','False',NULL,NULL,NULL,'327')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Office Menu -> Send','FileSendMenu','NONE','Send','12','False',NULL,NULL,NULL,'328')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Office Menu -> Publish','MenuPublish','NONE','Publish','12','False',NULL,NULL,NULL,'329')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Office Menu -> Close','FileClose','^{F4}','Close','12','False','106',NULL,NULL,'330')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home','-1','NONE','Home','12','False',NULL,NULL,NULL,'331')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Paste','PasteMenu','^{v}|+{INSERT}','Paste','12','False','22|755',NULL,NULL,'332')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Cut','Cut','^{x}|+{DEL}|+{DELETE}','Cut','12','False','21',NULL,NULL,'333')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Copy','Copy','^{c}|^{INSERT}','Copy','12','False','19',NULL,NULL,'334')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Format Printer','FormatPainter','NONE','Format Printer','12','False',NULL,NULL,NULL,'335')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Clipboard (DialogBoxLauncher)','ShowClipboard','NONE','Clipboard (DialogBoxLauncher)','12','False',NULL,NULL,NULL,'336')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font','Font','NONE','Font','12','False',NULL,NULL,NULL,'337')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font size','FontSize','NONE','Font size','12','False',NULL,NULL,NULL,'338')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font size Increase','FontSizeIncrease','NONE','Font size Increase','12','False',NULL,NULL,NULL,'339')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font size Decrease','FontSizeDecrease','NONE','Font size Decrease','12','False',NULL,NULL,NULL,'340')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font Bold','Bold','NONE','Font Bold','12','False',NULL,NULL,NULL,'341')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font Italic','Italic','NONE','Font Italic','12','False',NULL,NULL,NULL,'342')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font Underline','UnderlineGallery','NONE','Font Underline','12','False',NULL,NULL,NULL,'343')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Borders','BordersGallery','NONE','Borders','12','False',NULL,NULL,NULL,'344')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Fill Color','CellFillColorPicker','NONE','Fill Color','12','False',NULL,NULL,'FontShadingColorMoreColorsDialog','345')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font Color','FontColorPicker','NONE','Font Color','12','False',NULL,NULL,'FontColorMoreColorsDialogExcel','346')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font (DialogBoxLauncher)','FormatCellsFontDialog','^1','Font (DialogBoxLauncher)','12','False',NULL,NULL,NULL,'347')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Top Align','AlignTopExcel','NONE','Top Align','12','False',NULL,NULL,NULL,'348')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Middle Align','AlignMiddleExcel','NONE','Middle Align','12','False',NULL,NULL,NULL,'349')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Bottom Align','AlignBottomExcel','NONE','Bottom Align','12','False',NULL,NULL,NULL,'350')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Orientation','OrientationMenu','NONE','Orientation','12','False',NULL,NULL,NULL,'351')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Align Text to Left','AlignLeft','NONE','Align Text to Left','12','False',NULL,NULL,NULL,'352')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Center','AlignCenter','NONE','Center','12','False',NULL,NULL,NULL,'353')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Align Text to Right','AlignRight','NONE','Align Text to Right','12','False',NULL,NULL,NULL,'354')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Increase Indent','IndentIncreaseExcel','NONE','Increase Indent','12','False',NULL,NULL,NULL,'355')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Decrease Indent','IndentDecreaseExcel','NONE','Decrease Indent','12','False',NULL,NULL,NULL,'356')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Wrap text','WrapText','NONE','Wrap text','12','False',NULL,NULL,NULL,'357')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Alignment (DialogBoxLauncher)','CellAlignmentOptions','^1','Alignment (DialogBoxLauncher)','12','False',NULL,NULL,NULL,'358')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Number Format','NumberFormatGallery','NONE','Number Format','12','False',NULL,NULL,NULL,'359')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Accounting Number Format','AccountingFormatMenu','NONE','Accounting Number Format','12','False',NULL,NULL,NULL,'360')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Percent Style','PercentStyle','NONE','Percent Style','12','False',NULL,NULL,NULL,'361')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Comma Style','CommaStyle','NONE','Comma Style','12','False',NULL,NULL,NULL,'362')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Increase Decimal','DecimalsIncrease','NONE','Increase Decimal','12','False',NULL,NULL,NULL,'363')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Decrease Decimal','DecimalsDecrease','NONE','Decrease Decimal','12','False',NULL,NULL,NULL,'364')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Number (DialogBoxLauncher)','FormatCellsNumberDialog','^1','Number (DialogBoxLauncher)','12','False',NULL,NULL,NULL,'365')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Conditional Formatting','ConditionalFormattingMenu','NONE','Conditional Formatting','12','False',NULL,NULL,NULL,'366')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Format as Table','FormatAsTableGallery','NONE','Format as Table','12','False',NULL,NULL,NULL,'367')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Cell Styles','CellStylesGallery','NONE','Cell Styles','12','False',NULL,NULL,NULL,'368')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Insert','InsertCellstMenu','^+{+}','Insert','12','False','295|296|297|3181',NULL,NULL,'369')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Delete','TableDeleteRowsAndColumnsMenu','^{-}','Delete','12','False','478|292',NULL,NULL,'370')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Format','FormatCellsMenu','NONE','Format','12','False','855',NULL,NULL,'371')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Sum','AutoSumMenu','NONE','Sum','12','False',NULL,NULL,NULL,'372')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Fill','FillMenu','^{d}|^{r}','Fill','12','False','30020',NULL,NULL,'373')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Clear','ClearMenu','{DEL}|{DELETE}','Clear','12','False','30021|3125',NULL,NULL,'374')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Sort & Filter','SortFilterMenu','NONE','Sort & Filter','12','False','31402|31435',NULL,NULL,'375')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Find & Select','SelectMenuExcel','^{f}|^{h}|^{g}','Find & Select','12','False','1849',NULL,NULL,'376')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert','-1','NONE','Insert','12','False',NULL,NULL,NULL,'377')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> PivotTable','PivotTableInsertMenu','NONE','PivotTable','12','False',NULL,NULL,NULL,'378')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Table','TableInsertExcel','^{t}','Table','12','False',NULL,NULL,NULL,'379')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Picture','PictureInsertFromFile','NONE','Picture','12','False',NULL,NULL,NULL,'380')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Clip Art','ClipArtInsert','NONE','Clip Art','12','False',NULL,NULL,NULL,'381')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Shapes','ShapesInsertGallery','NONE','Shapes','12','False',NULL,NULL,NULL,'382')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> SmartArt','SmartArtInsert','NONE','SmartArt','12','False',NULL,NULL,NULL,'383')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Column','ChartTypeColumnInsertGallery','NONE','Column','12','False',NULL,NULL,NULL,'384')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Line','ChartTypeLineInsertGallery','NONE','Line','12','False',NULL,NULL,NULL,'385')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Pie','ChartTypePieInsertGallery','NONE','Pie','12','False',NULL,NULL,NULL,'386')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Bar','ChartTypeBarInsertGallery','NONE','Bar','12','False',NULL,NULL,NULL,'387')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Area','ChartTypeAreaInsertGallery','NONE','Area','12','False',NULL,NULL,NULL,'388')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Scatter','ChartTypeXYScatterInsertGallery','NONE','Scatter','12','False',NULL,NULL,NULL,'389')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Other Charts','ChartTypeOtherInsertGallery','NONE','Other Charts','12','False',NULL,NULL,NULL,'390')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Charts (DialogBoxLauncher)','ChartTypeAllInsertDialog','NONE','Charts (DialogBoxLauncher)','12','False',NULL,NULL,NULL,'391')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Header & Footer','HeaderFooterInsert','NONE','Header & Footer','12','False',NULL,NULL,NULL,'392')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> WordArt','WordArtInsertGallery','NONE','WordArt','12','False',NULL,NULL,NULL,'393')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Signature Line','SignatureLineInsertMenu','NONE','Signature Line','12','False',NULL,NULL,NULL,'394')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Object','OleObjectctInsert','NONE','Object','12','False',NULL,NULL,NULL,'395')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Symbol','SymbolInsert','NONE','Symbol','12','False',NULL,NULL,NULL,'396')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout','-1','NONE','Page Layout','12','False',NULL,NULL,NULL,'397')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Themes','ThemesGallery','NONE','Themes','12','False',NULL,NULL,NULL,'398')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Colors','ThemeColorsGallery','NONE','Colors','12','False',NULL,NULL,NULL,'399')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Fonts','ThemeFontsGallery','NONE','Fonts','12','False',NULL,NULL,NULL,'400')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Effects','ThemeEffectsGallery','NONE','Effects','12','False',NULL,NULL,NULL,'401')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Margins','PageMarginsGallery','NONE','Margins','12','False',NULL,NULL,NULL,'402')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Orientation','PageOrientationGallery','NONE','Orientation','12','False',NULL,NULL,NULL,'403')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Size','PageSizeGallery','NONE','Size','12','False',NULL,NULL,NULL,'404')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Print Area','PrintAreaMenu','NONE','Print Area','12','False',NULL,NULL,NULL,'405')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Breaks','PageBreakMenu','NONE','Breaks','12','False',NULL,NULL,NULL,'406')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Background','SheetBackground','NONE','Background','12','False',NULL,NULL,NULL,'407')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Print Titles','PrintTitles','NONE','Print Titles','12','False',NULL,NULL,NULL,'408')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Page Setup (DialogBoxLauncher)','PageSetupPageDialog','NONE','Page Setup (DialogBoxLauncher)','12','False',NULL,NULL,NULL,'409')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Width','PageScaleToFitWidth','NONE','Width','12','False',NULL,NULL,NULL,'410')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Height','PageScaleToFitHeight','NONE','Height','12','False',NULL,NULL,NULL,'411')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Scale','PageScaleToFitScale','NONE','Scale','12','False',NULL,NULL,NULL,'412')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Scale to Fit (DialogBoxLauncher)','PageSetupPageDialog','NONE','Scale to Fit (DialogBoxLauncher)','12','False',NULL,NULL,NULL,'413')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Bring to Front','ObjectBringToFrontMenu','NONE','Bring to Front','12','False',NULL,NULL,NULL,'414')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Align','ObjectAlignMenu','NONE','Align','12','False',NULL,NULL,NULL,'415')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Send to Back','ObjectSendToBackMenu','NONE','Send to Back','12','False',NULL,NULL,NULL,'416')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Group','ObjectsGroupMenu','NONE','Group','12','False',NULL,NULL,NULL,'417')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Selection Pane','SelectionPane','NONE','Selection Pane','12','False',NULL,NULL,NULL,'418')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Rotate','ObjectRotateGallery','NONE','Rotate','12','False',NULL,NULL,NULL,'419')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas','-1','NONE','Formulas','12','False',NULL,NULL,NULL,'420')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> AutoSum','AutoSumMenu','%{=}','AutoSum','12','False',NULL,NULL,NULL,'421')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Recently Used','FunctionsRecentlyUsedtInsertGallery','NONE','Recently Used','12','False',NULL,NULL,NULL,'422')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Financial','FunctionsFinancialInsertGallery','NONE','Financial','12','False',NULL,NULL,NULL,'423')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Logical','FunctionsLogicalInsertGallery','NONE','Logical','12','False',NULL,NULL,NULL,'424')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Text','FunctionsTextInsertGallery','NONE','Text','12','False',NULL,NULL,NULL,'425')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Date & Time','FunctionsDateTimeInsertGallery','NONE','Date & Time','12','False',NULL,NULL,NULL,'426')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Lookup & Reference','FunctionsLookupReferenceInsertGallery','NONE','Lookup & Reference','12','False',NULL,NULL,NULL,'427')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Math & Trig','FunctionsMathTrigInsertGallery','NONE','Math & Trig','12','False',NULL,NULL,NULL,'428')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> More Functions','FormulaMoreFunctionsMenu','NONE','More Functions','12','False',NULL,NULL,NULL,'429')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Trace Precedents','TracePrecedents','NONE','Trace Precedents','12','False',NULL,NULL,NULL,'430')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Trace Dependents','TraceDependents','NONE','Trace Dependents','12','False',NULL,NULL,NULL,'431')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Remove Arrows','TraceRemoveArrowsMenu','NONE','Remove Arrows','12','False',NULL,NULL,NULL,'432')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Error Checking','ErrorCheckingMenu','NONE','Error Checking','12','False',NULL,NULL,NULL,'433')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Evaluate Formula','FormulaEvaluate','NONE','Evaluate Formula','12','False',NULL,NULL,NULL,'434')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Watch Window','WatchWindow','NONE','Watch Window','12','False',NULL,NULL,NULL,'435')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Calculation Options','CalculationOptionsMenu','NONE','Calculation Options','12','False',NULL,NULL,NULL,'436')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Calculate Now','CalculateNow','NONE','Calculate Now','12','False',NULL,NULL,NULL,'437')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data','-1','NONE','Data','12','False',NULL,NULL,NULL,'438')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> From Web','GetExternalDataFromWeb','NONE','From Web','12','False',NULL,NULL,NULL,'439')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> From Text','GetExternalDataFromText','NONE','From Text','12','False',NULL,NULL,NULL,'440')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> From Other Sources','GetExternalDataFromOtherSources','NONE','From Other Sources','12','False',NULL,NULL,NULL,'441')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Existing Connections','GetExternalDataExistingConnections','NONE','Existing Connections','12','False',NULL,NULL,NULL,'442')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Connections','Connections','NONE','Connections','12','False',NULL,NULL,NULL,'443')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Properties','ConnectionProperties','NONE','Properties','12','False',NULL,NULL,NULL,'444')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Edit Links','EditLinks','NONE','Edit Links','12','False',NULL,NULL,NULL,'445')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Sort A to Z','SortAscendingExcel','NONE','Sort A to Z','12','False',NULL,NULL,NULL,'446')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Sort Z to A','SortDescendingExcel','NONE','Sort Z to A','12','False',NULL,NULL,NULL,'447')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Sort','SortDialog','NONE','Sort','12','False',NULL,NULL,NULL,'448')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Filter','Filter','^+{L}','Filter','12','False',NULL,NULL,NULL,'449')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Clear','SortClear','NONE','Clear','12','False',NULL,NULL,NULL,'450')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Reapply','FilterReapply','NONE','Reapply','12','False',NULL,NULL,NULL,'451')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Advanced','AdvancedFilterDialog','NONE','Advanced','12','False',NULL,NULL,NULL,'452')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Text to Columns','ConvertTextToTable','NONE','Text to Columns','12','False',NULL,NULL,NULL,'453')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Data Validations','DataValidationMenu','NONE','Data Validations','12','False',NULL,NULL,NULL,'454')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Consolidate','Consolidate','NONE','Consolidate','12','False',NULL,NULL,NULL,'455')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review','-1','NONE','Review','12','False',NULL,NULL,NULL,'456')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Spelling','Spelling','{F7}','Spelling','12','False',NULL,NULL,NULL,'457')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> New Comment','ReviewNewComment','NONE','New Comment','12','False',NULL,NULL,NULL,'458')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Delete','ReviewDeleteComment','NONE','Delete','12','False',NULL,NULL,NULL,'459')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Previous','ReviewPreviousComment','NONE','Previous','12','False',NULL,NULL,NULL,'460')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Next','ReviewNextComment','NONE','Next','12','False',NULL,NULL,NULL,'461')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Show/Hide Comment','ReviewShowOrHideComment','NONE','Show/Hide Comment','12','False',NULL,NULL,NULL,'462')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Show All Comments','ReviewShowAllComments','NONE','Show All Comments','12','False',NULL,NULL,NULL,'463')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Show Ink','ReviewShowInk','NONE','Show Ink','12','False',NULL,NULL,NULL,'464')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Protect Sheet','SheetProtect','NONE','Protect Sheet','12','False',NULL,NULL,NULL,'465')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View','-1','NONE','View','12','False',NULL,NULL,NULL,'466')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Normal','ViewNormalViewExcel','NONE','Normal','12','False',NULL,NULL,NULL,'467')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Page Layout','ViewPageLayoutView','NONE','Page Layout','12','False',NULL,NULL,NULL,'468')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Page Break Preview','ViewPageBreakPreviewView','NONE','Page Break Preview','12','False',NULL,NULL,NULL,'469')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Custom Views','ViewCustomViews','NONE','Custom Views','12','False',NULL,NULL,NULL,'470')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Full Screen','ViewFullScreenView','NONE','Full Screen','12','False',NULL,NULL,NULL,'471')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Ruler','ViewRulerExcel','NONE','Ruler','12','False',NULL,NULL,NULL,'472')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Message Bar','ViewMessageBar','NONE','Message Bar','12','False',NULL,NULL,NULL,'473')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Formula Bar','ViewFormulaBar','NONE','Formula Bar','12','False',NULL,NULL,NULL,'474')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Zoom','ZoomDialog','NONE','Zoom','12','False',NULL,NULL,NULL,'475')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> 100%','ZoomCurrent100','NONE','100%','12','False',NULL,NULL,NULL,'476')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Zoom to Selection','ZoomToSelection','NONE','Zoom to Selection','12','False',NULL,NULL,NULL,'477')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> New Window','WindowNew','NONE','New Window','12','False',NULL,NULL,NULL,'478')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Arrange All','WindowsArrangeAll','NONE','Arrange All','12','False',NULL,NULL,NULL,'479')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Freeze Panes','ViewFreezePanesGallery','NONE','Freeze Panes','12','False',NULL,NULL,NULL,'480')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Split','WindowSplitToggle','NONE','Split','12','False',NULL,NULL,NULL,'481')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Unhide','WindowUnhide','NONE','Unhide','12','False',NULL,NULL,NULL,'482')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> View Side by Side','ViewSideBySide','NONE','View Side by Side','12','False',NULL,NULL,NULL,'483')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Synchronous Scrolling','WindowSideBySideSynchronousScrolling','NONE','Synchronous Scrolling','12','False',NULL,NULL,NULL,'484')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Reset Window Position','WindowResetPosition','NONE','Reset Window Position','12','False',NULL,NULL,NULL,'485')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Save Workspace','WindowSaveWorkspace','NONE','Save Workspace','12','False',NULL,NULL,NULL,'486')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Switch Windows','WindowSwitchWindowsMenuExcel','NONE','Switch Windows','12','False',NULL,NULL,NULL,'487')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Macros','MenuMacros','NONE','Macros','12','False',NULL,NULL,NULL,'488')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer','-1','NONE','Developer','12','False',NULL,NULL,NULL,'489')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Visual Basic','VisualBasic','NONE','Visual Basic','12','False',NULL,NULL,NULL,'490')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Macros','MacroPlay','NONE','Macros','12','False',NULL,NULL,NULL,'491')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Record Macro','MacroRecord','NONE','Record Macro','12','False',NULL,NULL,NULL,'492')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Use Relative References','MacroRelativeReferences','NONE','Use Relative References','12','False',NULL,NULL,NULL,'493')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Macro Security','MacroSecurity','NONE','Macro Security','12','False',NULL,NULL,NULL,'494')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Insert','ControlsGallery','NONE','Insert','12','False',NULL,NULL,NULL,'495')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Design Mode','DesignMode','NONE','Design Mode','12','False',NULL,NULL,NULL,'496')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Properties','ControlProperties','NONE','Properties','12','False',NULL,NULL,NULL,'497')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> View Code','ViewCode','NONE','View Code','12','False',NULL,NULL,NULL,'498')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Run Dialog','RunDialog','NONE','Run Dialog','12','False',NULL,NULL,NULL,'499')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Source','XmlSource','NONE','Source','12','False',NULL,NULL,NULL,'500')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Map Properties','XmlMapProperties','NONE','Map Properties','12','False',NULL,NULL,NULL,'501')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Expansion packs','XmlExpansionPacksExcel','NONE','Expansion packs','12','False',NULL,NULL,NULL,'502')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Refresh Data','XmlDataRefresh','NONE','Refresh Data','12','False',NULL,NULL,NULL,'503')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Import','XmlImport','NONE','Import','12','False',NULL,NULL,NULL,'504')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Export','XmlExport','NONE','Export','12','False',NULL,NULL,NULL,'505')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Document Panel','DocumentPanelTemplate','NONE','Document Panel','12','False',NULL,NULL,NULL,'506')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree','-8','NONE','eInfotree','12','False','-8','eInfotree','eInfotree','507')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Enter E-Signature','Sign-off','None','Enter E-Signature','12','False','0','Enter E-Signature','eInfotree -> Enter E-Signature','508')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Review Changes','Certify','{F10}','Review Changes','12','False','0','Review Changes','eInfotree -> Review Changes','509')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Lock Workbook','Lockworkbook','%+{F1}|+{F11}','Lock Workbook','12','False','0','Lock Workbook','eInfotree -> Lock Workbook','510')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Change Password','ChangePassword','None','Change Password','12','False','0','Change Password','eInfotree -> Change Password','511')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> View Audit Trail','ViewAuditTrail','{F4}','View Audit Trail','12','False','0','View Audit Trail','eInfotree -> View Audit Trail','512')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> View Cell Changes','ViewCellChanges','None','View Cell Changes','12','False','0','View Cell Changes','eInfotree -> View Cell Changes','513')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Audit Trail Query Builder','AuditTrailQueryBuilder','None','Audit Trail Query Builder','12','False','0','Audit Trail Query Builder','eInfotree -> Audit Trail Query Builder','514')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Cell Revision History','CellRevisionHistory','None','Cell Revision History','12','False','0','Cell Revision History','eInfotree -> Cell Revision History','515')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Create Remote Copy','CreateReadOnlyWorkbook','None','Create Remote Copy','12','False','0','Create Remote Copy','eInfotree -> Create Remote Copy','516')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Archive Audit Trail','ArchiveAuditTrail','None','Archive Audit Trail','12','False','0','Archive Audit Trail','eInfotree -> Archive Audit Trail','517')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Options','Options','None','Options','12','False','0','Options','eInfotree -> Options','518')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Work Offline','WorkOffline','None','Work Offline','12','False','0','Work Offline','eInfotree -> Work Offline','519')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File','-1','NONE','File','14','False',NULL,NULL,NULL,'520')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save','FileSave','%{F2}|{F12}|^{s}','Save','14','False','3',NULL,NULL,'521')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save As','FileSaveAsMenu','%{F2}|{F12}','Save As','14','False','748',NULL,NULL,'522')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Open','FileOpen','^{F12}|^{o}','Open','14','False','23',NULL,NULL,'523')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Close','FileClose','^{F4}','Close','14','False','106',NULL,NULL,'524')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Info','TabInfo','NONE','Info','14','False','18148',NULL,NULL,'525')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Recent','TabRecent','NONE','Recent','14','False','19950',NULL,NULL,'526')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> New','TabNew','^{n}','New','14','False','19949',NULL,NULL,'527')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Print','TabPrint','^{p}','Print','14','False','18244',NULL,NULL,'528')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Save & Send','TabShare','NONE','Save & Send','14','False','18147',NULL,NULL,'529')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Help','TabHelp','{F1}','Help','14','False','20802',NULL,NULL,'530')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('File -> Options','ApplicationOptionsDialog','NONE','Optiions','14','False','11323',NULL,NULL,'531')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home','-1','NONE','Home','14','False',NULL,NULL,NULL,'532')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Paste','PasteMenu','^{v}|+{INSERT}','Paste','14','False','22|755',NULL,NULL,'533')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Cut','Cut','^{x}|+{DEL}|+{DELETE}','Cut','14','False','21',NULL,NULL,'534')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Copy','Copy','^{c}|^{INSERT}','Copy','14','False','19',NULL,NULL,'535')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Format Printer','FormatPainter','NONE','Format Printer','14','False',NULL,NULL,NULL,'536')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Clipboard (DialogBoxLauncher)','ShowClipboard','NONE','Clipboard (DialogBoxLauncher)','14','False',NULL,NULL,NULL,'537')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font','Font','NONE','Font','14','False',NULL,NULL,NULL,'538')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font size','FontSize','NONE','Font size','14','False',NULL,NULL,NULL,'539')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font size Increase','FontSizeIncrease','NONE','Font size Increase','14','False',NULL,NULL,NULL,'540')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font size Decrease','FontSizeDecrease','NONE','Font size Decrease','14','False',NULL,NULL,NULL,'541')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font Bold','Bold','NONE','Font Bold','14','False',NULL,NULL,NULL,'542')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font Italic','Italic','NONE','Font Italic','14','False',NULL,NULL,NULL,'543')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font Underline','UnderlineGallery','NONE','Font Underline','14','False',NULL,NULL,NULL,'544')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Borders','BordersGallery','NONE','Borders','14','False',NULL,NULL,NULL,'545')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Fill Color','CellFillColorPicker','NONE','Fill Color','14','False',NULL,NULL,'FontShadingColorMoreColorsDialog','546')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font Color','FontColorPicker','NONE','Font Color','14','False',NULL,NULL,'FontColorMoreColorsDialogExcel','547')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Font (DialogBoxLauncher)','FormatCellsFontDialog','^1','Font (DialogBoxLauncher)','14','False',NULL,NULL,NULL,'548')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Top Align','AlignTopExcel','NONE','Top Align','14','False',NULL,NULL,NULL,'549')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Middle Align','AlignMiddleExcel','NONE','Middle Align','14','False',NULL,NULL,NULL,'550')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Bottom Align','AlignBottomExcel','NONE','Bottom Align','14','False',NULL,NULL,NULL,'551')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Orientation','OrientationMenu','NONE','Orientation','14','False',NULL,NULL,NULL,'552')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Align Text to Left','AlignLeft','NONE','Align Text to Left','14','False',NULL,NULL,NULL,'553')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Center','AlignCenter','NONE','Center','14','False',NULL,NULL,NULL,'554')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Align Text to Right','AlignRight','NONE','Align Text to Right','14','False',NULL,NULL,NULL,'555')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Increase Indent','IndentIncreaseExcel','NONE','Increase Indent','14','False',NULL,NULL,NULL,'556')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Decrease Indent','IndentDecreaseExcel','NONE','Decrease Indent','14','False',NULL,NULL,NULL,'557')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Wrap text','WrapText','NONE','Wrap text','14','False',NULL,NULL,NULL,'558')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Alignment (DialogBoxLauncher)','CellAlignmentOptions','^1','Alignment (DialogBoxLauncher)','14','False',NULL,NULL,NULL,'559')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Number Format','NumberFormatGallery','NONE','Number Format','14','False',NULL,NULL,NULL,'560')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Accounting Number Format','AccountingFormatMenu','NONE','Accounting Number Format','14','False',NULL,NULL,NULL,'561')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Percent Style','PercentStyle','NONE','Percent Style','14','False',NULL,NULL,NULL,'562')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Comma Style','CommaStyle','NONE','Comma Style','14','False',NULL,NULL,NULL,'563')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Increase Decimal','DecimalsIncrease','NONE','Increase Decimal','14','False',NULL,NULL,NULL,'564')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Decrease Decimal','DecimalsDecrease','NONE','Decrease Decimal','14','False',NULL,NULL,NULL,'565')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Number (DialogBoxLauncher)','FormatCellsNumberDialog','^1','Number (DialogBoxLauncher)','14','False',NULL,NULL,NULL,'566')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Conditional Formatting','ConditionalFormattingMenu','NONE','Conditional Formatting','14','False',NULL,NULL,NULL,'567')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Format as Table','FormatAsTableGallery','NONE','Format as Table','14','False',NULL,NULL,NULL,'568')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Cell Styles','CellStylesGallery','NONE','Cell Styles','14','False',NULL,NULL,NULL,'569')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Insert','InsertCellstMenu','^+{+}','Insert','14','False','295|296|297|3181',NULL,NULL,'570')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Delete','TableDeleteRowsAndColumnsMenu','^{-}','Delete','14','False','478|292',NULL,NULL,'571')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Format','FormatCellsMenu','NONE','Format','14','False','855',NULL,NULL,'572')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Sum','AutoSumMenu','NONE','Sum','14','False',NULL,NULL,NULL,'573')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Fill','FillMenu','^{d}|^{r}','Fill','14','False','30020',NULL,NULL,'574')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Clear','ClearMenu','{DEL}|{DELETE}','Clear','14','False','30021|3125',NULL,NULL,'575')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Sort & Filter','SortFilterMenu','NONE','Sort & Filter','14','False','31402|31435',NULL,NULL,'576')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Home -> Find & Select','SelectMenuExcel','^{f}|^{h}|^{g}','Find & Select','14','False','1849',NULL,NULL,'577')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert','-1','NONE','Insert','14','False',NULL,NULL,NULL,'578')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> PivotTable','PivotTableInsertMenu','NONE','PivotTable','14','False',NULL,NULL,NULL,'579')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Table','TableInsertExcel','^{t}','Table','14','False',NULL,NULL,NULL,'580')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Picture','PictureInsertFromFile','NONE','Picture','14','False',NULL,NULL,NULL,'581')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Clip Art','ClipArtInsert','NONE','Clip Art','14','False',NULL,NULL,NULL,'582')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Shapes','ShapesInsertGallery','NONE','Shapes','14','False',NULL,NULL,NULL,'583')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> SmartArt','SmartArtInsert','NONE','SmartArt','14','False',NULL,NULL,NULL,'584')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Screenshot','ScreenshotInsertGallery','NONE','Screenshot','14','False',NULL,NULL,NULL,'585')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Column','ChartTypeColumnInsertGallery','NONE','Column','14','False',NULL,NULL,NULL,'586')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Line','ChartTypeLineInsertGallery','NONE','Line','14','False',NULL,NULL,NULL,'587')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Pie','ChartTypePieInsertGallery','NONE','Pie','14','False',NULL,NULL,NULL,'588')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Bar','ChartTypeBarInsertGallery','NONE','Bar','14','False',NULL,NULL,NULL,'589')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Area','ChartTypeAreaInsertGallery','NONE','Area','14','False',NULL,NULL,NULL,'590')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Scatter','ChartTypeXYScatterInsertGallery','NONE','Scatter','14','False',NULL,NULL,NULL,'591')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Other Charts','ChartTypeOtherInsertGallery','NONE','Other Charts','14','False',NULL,NULL,NULL,'592')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Charts (DialogBoxLauncher)','ChartTypeAllInsertDialog','NONE','Charts (DialogBoxLauncher)','14','False',NULL,NULL,NULL,'593')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Line (Sparkline)','SparklineLineInsert','NONE','Line','14','False',NULL,NULL,NULL,'594')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Column (Sparkline)','SparklineColumnInsert','NONE','Column','14','False',NULL,NULL,NULL,'595')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Win/Loss (Sparkline)','SparklineWinLossInsert','NONE','Win/Loss','14','False',NULL,NULL,NULL,'596')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Slicer','SlicerInsert','NONE','Slicer','14','False',NULL,NULL,NULL,'597')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Header & Footer','HeaderFooterInsert','NONE','Header & Footer','14','False',NULL,NULL,NULL,'598')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> WordArt','WordArtInsertGallery','NONE','WordArt','14','False',NULL,NULL,NULL,'599')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Signature Line','SignatureLineInsertMenu','NONE','Signature Line','14','False',NULL,NULL,NULL,'600')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Object','OleObjectctInsert','NONE','Object','14','False',NULL,NULL,NULL,'601')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Equation','InsertBuildingBlocksEquationsGallery','NONE','Equation','14','False',NULL,NULL,NULL,'602')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Insert -> Symbol','SymbolInsert','NONE','Symbol','14','False',NULL,NULL,NULL,'603')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout','-1','NONE','Page Layout','14','False',NULL,NULL,NULL,'604')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Themes','ThemesGallery','NONE','Themes','14','False',NULL,NULL,NULL,'605')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Colors','ThemeColorsGallery','NONE','Colors','14','False',NULL,NULL,NULL,'606')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Fonts','ThemeFontsGallery','NONE','Fonts','14','False',NULL,NULL,NULL,'607')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Effects','ThemeEffectsGallery','NONE','Effects','14','False',NULL,NULL,NULL,'608')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Margins','PageMarginsGallery','NONE','Margins','14','False',NULL,NULL,NULL,'609')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Orientation','PageOrientationGallery','NONE','Orientation','14','False',NULL,NULL,NULL,'610')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Size','PageSizeGallery','NONE','Size','14','False',NULL,NULL,NULL,'611')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Print Area','PrintAreaMenu','NONE','Print Area','14','False',NULL,NULL,NULL,'612')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Breaks','PageBreakMenu','NONE','Breaks','14','False',NULL,NULL,NULL,'613')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Background','SheetBackground','NONE','Background','14','False',NULL,NULL,NULL,'614')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Print Titles','PrintTitles','NONE','Print Titles','14','False',NULL,NULL,NULL,'615')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Page Setup (DialogBoxLauncher)','PageSetupPageDialog','NONE','Page Setup (DialogBoxLauncher)','14','False',NULL,NULL,NULL,'616')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Width','PageScaleToFitWidth','NONE','Width','14','False',NULL,NULL,NULL,'617')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Height','PageScaleToFitHeight','NONE','Height','14','False',NULL,NULL,NULL,'618')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Scale','PageScaleToFitScale','NONE','Scale','14','False',NULL,NULL,NULL,'619')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Scale to Fit (DialogBoxLauncher)','PageSetupPageDialog','NONE','Scale to Fit (DialogBoxLauncher)','14','False',NULL,NULL,NULL,'620')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Bring Forward','ObjectBringForwardMenu','NONE','Bring Forward','14','False',NULL,NULL,NULL,'621')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Send Backward','ObjectSendBackwardMenu','NONE','Send Backward','14','False',NULL,NULL,NULL,'622')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Selection Pane','SelectionPane','NONE','Selection Pane','14','False',NULL,NULL,NULL,'623')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Align','ObjectAlignMenu','NONE','Align','14','False',NULL,NULL,NULL,'624')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Group','ObjectsGroupMenu','NONE','Group','14','False',NULL,NULL,NULL,'625')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Page Layout -> Rotate','ObjectRotateGallery','NONE','Rotate','14','False',NULL,NULL,NULL,'626')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas','-1','NONE','Formulas','14','False',NULL,NULL,NULL,'627')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> AutoSum','AutoSumMenu','%{=}','AutoSum','14','False',NULL,NULL,NULL,'628')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Recently Used','FunctionsRecentlyUsedtInsertGallery','NONE','Recently Used','14','False',NULL,NULL,NULL,'629')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Financial','FunctionsFinancialInsertGallery','NONE','Financial','14','False',NULL,NULL,NULL,'630')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Logical','FunctionsLogicalInsertGallery','NONE','Logical','14','False',NULL,NULL,NULL,'631')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Text','FunctionsTextInsertGallery','NONE','Text','14','False',NULL,NULL,NULL,'632')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Date & Time','FunctionsDateTimeInsertGallery','NONE','Date & Time','14','False',NULL,NULL,NULL,'633')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Lookup & Reference','FunctionsLookupReferenceInsertGallery','NONE','Lookup & Reference','14','False',NULL,NULL,NULL,'634')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Math & Trig','FunctionsMathTrigInsertGallery','NONE','Math & Trig','14','False',NULL,NULL,NULL,'635')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> More Functions','FormulaMoreFunctionsMenu','NONE','More Functions','14','False',NULL,NULL,NULL,'636')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Trace Precedents','TracePrecedents','NONE','Trace Precedents','14','False',NULL,NULL,NULL,'637')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Trace Dependents','TraceDependents','NONE','Trace Dependents','14','False',NULL,NULL,NULL,'638')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Remove Arrows','TraceRemoveArrowsMenu','NONE','Remove Arrows','14','False',NULL,NULL,NULL,'639')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Error Checking','ErrorCheckingMenu','NONE','Error Checking','14','False',NULL,NULL,NULL,'640')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Evaluate Formula','FormulaEvaluate','NONE','Evaluate Formula','14','False',NULL,NULL,NULL,'641')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Watch Window','WatchWindow','NONE','Watch Window','14','False',NULL,NULL,NULL,'642')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Calculation Options','CalculationOptionsMenu','NONE','Calculation Options','14','False',NULL,NULL,NULL,'643')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Formulas -> Calculate Now','CalculateNow','NONE','Calculate Now','14','False',NULL,NULL,NULL,'644')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data','-1','NONE','Data','14','False',NULL,NULL,NULL,'645')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> From Web','GetExternalDataFromWeb','NONE','From Web','14','False',NULL,NULL,NULL,'646')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> From Text','GetExternalDataFromText','NONE','From Text','14','False',NULL,NULL,NULL,'647')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> From Other Sources','GetExternalDataFromOtherSources','NONE','From Other Sources','14','False',NULL,NULL,NULL,'648')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Existing Connections','GetExternalDataExistingConnections','NONE','Existing Connections','14','False',NULL,NULL,NULL,'649')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Connections','Connections','NONE','Connections','14','False',NULL,NULL,NULL,'650')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Properties','ConnectionProperties','NONE','Properties','14','False',NULL,NULL,NULL,'651')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Edit Links','EditLinks','NONE','Edit Links','14','False',NULL,NULL,NULL,'652')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Sort A to Z','SortAscendingExcel','NONE','Sort A to Z','14','False',NULL,NULL,NULL,'653')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Sort Z to A','SortDescendingExcel','NONE','Sort Z to A','14','False',NULL,NULL,NULL,'654')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Sort','SortDialog','NONE','Sort','14','False',NULL,NULL,NULL,'655')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Filter','Filter','^+{L}','Filter','14','False',NULL,NULL,NULL,'656')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Clear','SortClear','NONE','Clear','14','False',NULL,NULL,NULL,'657')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Reapply','FilterReapply','NONE','Reapply','14','False',NULL,NULL,NULL,'658')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Advanced','AdvancedFilterDialog','NONE','Advanced','14','False',NULL,NULL,NULL,'659')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Text to Columns','ConvertTextToTable','NONE','Text to Columns','14','False',NULL,NULL,NULL,'660')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Data Validations','DataValidationMenu','NONE','Data Validations','14','False',NULL,NULL,NULL,'661')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> Consolidate','Consolidate','NONE','Consolidate','14','False',NULL,NULL,NULL,'662')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review','-1','NONE','Review','14','False',NULL,NULL,NULL,'663')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Spelling','Spelling','{F7}','Spelling','14','False',NULL,NULL,NULL,'664')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> New Comment','ReviewNewComment','NONE','New Comment','14','False',NULL,NULL,NULL,'665')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Delete','ReviewDeleteComment','NONE','Delete','14','False',NULL,NULL,NULL,'666')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Previous','ReviewPreviousComment','NONE','Previous','14','False',NULL,NULL,NULL,'667')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Next','ReviewNextComment','NONE','Next','14','False',NULL,NULL,NULL,'668')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Show/Hide Comment','ReviewShowOrHideComment','NONE','Show/Hide Comment','14','False',NULL,NULL,NULL,'669')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Show All Comments','ReviewShowAllComments','NONE','Show All Comments','14','False',NULL,NULL,NULL,'670')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Show Ink','ReviewShowInk','NONE','Show Ink','14','False',NULL,NULL,NULL,'671')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Review -> Protect Sheet','SheetProtect','NONE','Protect Sheet','14','False',NULL,NULL,NULL,'672')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View','-1','NONE','View','14','False',NULL,NULL,NULL,'673')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Normal','ViewNormalViewExcel','NONE','Normal','14','False',NULL,NULL,NULL,'674')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Page Layout','ViewPageLayoutView','NONE','Page Layout','14','False',NULL,NULL,NULL,'675')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Page Break Preview','ViewPageBreakPreviewView','NONE','Page Break Preview','14','False',NULL,NULL,NULL,'676')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Custom Views','ViewCustomViews','NONE','Custom Views','14','False',NULL,NULL,NULL,'677')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Full Screen','ViewFullScreenView','NONE','Full Screen','14','False',NULL,NULL,NULL,'678')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Ruler','ViewRulerExcel','NONE','Ruler','14','False',NULL,NULL,NULL,'679')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Message Bar','ViewMessageBar','NONE','Message Bar','14','False',NULL,NULL,NULL,'680')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Formula Bar','ViewFormulaBar','NONE','Formula Bar','14','False',NULL,NULL,NULL,'681')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Zoom','ZoomDialog','NONE','Zoom','14','False',NULL,NULL,NULL,'682')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> 100%','ZoomCurrent100','NONE','100%','14','False',NULL,NULL,NULL,'683')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Zoom to Selection','ZoomToSelection','NONE','Zoom to Selection','14','False',NULL,NULL,NULL,'684')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> New Window','WindowNew','NONE','New Window','14','False',NULL,NULL,NULL,'685')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Arrange All','WindowsArrangeAll','NONE','Arrange All','14','False',NULL,NULL,NULL,'686')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Freeze Panes','ViewFreezePanesGallery','NONE','Freeze Panes','14','False',NULL,NULL,NULL,'687')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Split','WindowSplitToggle','NONE','Split','14','False',NULL,NULL,NULL,'688')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Unhide','WindowUnhide','NONE','Unhide','14','False',NULL,NULL,NULL,'689')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> View Side by Side','ViewSideBySide','NONE','View Side by Side','14','False',NULL,NULL,NULL,'690')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Synchronous Scrolling','WindowSideBySideSynchronousScrolling','NONE','Synchronous Scrolling','14','False',NULL,NULL,NULL,'691')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Reset Window Position','WindowResetPosition','NONE','Reset Window Position','14','False',NULL,NULL,NULL,'692')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Save Workspace','WindowSaveWorkspace','NONE','Save Workspace','14','False',NULL,NULL,NULL,'693')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Switch Windows','WindowSwitchWindowsMenuExcel','NONE','Switch Windows','14','False',NULL,NULL,NULL,'694')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Macros','MenuMacros','NONE','Macros','14','False',NULL,NULL,NULL,'695')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer','-1','NONE','Developer','14','False',NULL,NULL,NULL,'696')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Visual Basic','VisualBasic','NONE','Visual Basic','14','False',NULL,NULL,NULL,'697')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Macros','MacroPlay','NONE','Macros','14','False',NULL,NULL,NULL,'698')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Record Macro','MacroRecord','NONE','Record Macro','14','False',NULL,NULL,NULL,'699')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Use Relative References','MacroRelativeReferences','NONE','Use Relative References','14','False',NULL,NULL,NULL,'700')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Macro Security','MacroSecurity','NONE','Macro Security','14','False',NULL,NULL,NULL,'701')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Add-Ins','AddInManager','NONE','Add-Ins','14','False',NULL,NULL,NULL,'702')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> COM Add-Ins','ComAddInsDialog','NONE','COM Add-Ins','14','False',NULL,NULL,NULL,'703')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Insert','ControlsGallery','NONE','Insert','14','False',NULL,NULL,NULL,'704')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Design Mode','DesignMode','NONE','Design Mode','14','False',NULL,NULL,NULL,'705')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Properties','ControlProperties','NONE','Properties','14','False',NULL,NULL,NULL,'706')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> View Code','ViewCode','NONE','View Code','14','False',NULL,NULL,NULL,'707')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Run Dialog','RunDialog','NONE','Run Dialog','14','False',NULL,NULL,NULL,'708')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Source','XmlSource','NONE','Source','14','False',NULL,NULL,NULL,'709')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Map Properties','XmlMapProperties','NONE','Map Properties','14','False',NULL,NULL,NULL,'710')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Expansion packs','XmlExpansionPacksExcel','NONE','Expansion packs','14','False',NULL,NULL,NULL,'711')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Refresh Data','XmlDataRefresh','NONE','Refresh Data','14','False',NULL,NULL,NULL,'712')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Import','XmlImport','NONE','Import','14','False',NULL,NULL,NULL,'713')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Export','XmlExport','NONE','Export','14','False',NULL,NULL,NULL,'714')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Developer -> Document Panel','DocumentPanelTemplate','NONE','Document Panel','14','False',NULL,NULL,NULL,'715')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree','-8','NONE','eInfotree','14','False','-8','eInfotree','eInfotree','716')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Enter E-Signature','Sign-off','None','Enter E-Signature','14','False','0','Enter E-Signature','eInfotree -> Enter E-Signature','717')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Review Changes','Certify','{F10}','Review Changes','14','False','0','Review Changes','eInfotree -> Review Changes','718')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Lock Workbook','Lockworkbook','%+{F1}|+{F11}','Lock Workbook','14','False','0','Lock Workbook','eInfotree -> Lock Workbook','719')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Change Password','ChangePassword','None','Change Password','14','False','0','Change Password','eInfotree -> Change Password','720')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> View Audit Trail','ViewAuditTrail','{F4}','View Audit Trail','14','False','0','View Audit Trail','eInfotree -> View Audit Trail','721')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> View Cell Changes','ViewCellChanges','None','View Cell Changes','14','False','0','View Cell Changes','eInfotree -> View Cell Changes','722')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Audit Trail Query Builder','AuditTrailQueryBuilder','None','Audit Trail Query Builder','14','False','0','Audit Trail Query Builder','eInfotree -> Audit Trail Query Builder','723')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Cell Revision History','CellRevisionHistory','None','Cell Revision History','14','False','0','Cell Revision History','eInfotree -> Cell Revision History','724')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Create Remote Copy','CreateReadOnlyWorkbook','None','Create Remote Copy','14','False','0','Create Remote Copy','eInfotree -> Create Remote Copy','725')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Archive Audit Trail','ArchiveAuditTrail','None','Archive Audit Trail','14','False','0','Archive Audit Trail','eInfotree -> Archive Audit Trail','726')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Options','Options','None','Options','14','False','0','Options','eInfotree -> Options','727')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Work Offline','WorkOffline','None','Work Offline','14','False','0','Work Offline','eInfotree -> Work Offline','728')
GO
INSERT INTO Reasons(Reason,UserId,UserGroup)
VALUES('Save Data','-1',NULL)
Go
INSERT INTO GroupMaster (GroupName,GroupType,REVIEWER,WORKBOOKLOCKER,ARCHIVER,READONLYCREATOR,OFFLINERIGHT,ENABLEEXCELMENU,ASSIGNPRIVILEGES)
VALUES ('Admin','eInfotree','TRUE','FALSE','FALSE','FALSE','FALSE','FALSE','TRUE')
Go
GO
Create FUNCTION [ReturnFormatedDateTime]
( 
@dtRefDate				DATETIME	, 
@intDateFormat				INT		,
@intTimeFormat				INT		
) 
Returns VARCHAR(30)
AS
BEGIN
	DECLARE @DatePart 		VARCHAR(15)	 
	DECLARE @TimePart 		VARCHAR(15)	 
	DECLARE @Result 		VARCHAR(30)
	/*
	DATE FORMATS
	-------------------
	0. DON'T RETURN DATE
	1. DD/MM/YYYY
	2. DD/MM/YY
	3. DD-MM-YYYY
	4. DD-MM-YY
	5. MM/DD/YYYY
	6. MM/DD/YY
	7. MM-DD-YYYY
	8. MM-DD-YY
	9. MON DD, YYYY
	10.DDMMYYYY
	11.DD/MON/YYYY
	12.YYYY/MM/DD
	13.DD-MON-YYYY
	14.DD MON YYYY

	TIME FORMATS
	-------------
	O. DON'T RETURN TIME
	1. HH24:MI:SS
	2. HH:MI:SS AM/PM	
	3. HH24MISS
	*/

	SELECT @DatePart = 
	( CASE @intDateFormat
		WHEN 0 THEN 
			''
		WHEN 1 THEN
			 CONVERT(VARCHAR(10), @dtRefDate, 103)
		WHEN 2 THEN 
			CONVERT(VARCHAR(10), @dtRefDate, 3)
		WHEN 3 THEN 
			CONVERT(VARCHAR(10), @dtRefDate, 105)
		WHEN 4 THEN 
			CONVERT(VARCHAR(10), @dtRefDate, 5)
		WHEN 5 THEN 
			CONVERT(VARCHAR(10), @dtRefDate, 101)
			--CONVERT(VARCHAR(10), @dtRefDate, 103)
		WHEN 6 THEN 
			CONVERT(VARCHAR(10), @dtRefDate, 1)
		WHEN 7 THEN 
			CONVERT(VARCHAR(10), @dtRefDate, 110)
		WHEN 8 THEN 
			CONVERT(VARCHAR(10), @dtRefDate, 10)
		WHEN 9 THEN 
			CONVERT(VARCHAR(15), @dtRefDate, 107)
		WHEN 10 THEN
			REPLACE(CONVERT(VARCHAR(10), @dtRefDate, 103), '/', '')
		WHEN 11 THEN 
			REPLACE(CONVERT(VARCHAR(20), @dtRefDate, 106), ' ', '/')
		WHEN 12 THEN 
			REPLACE(CONVERT(VARCHAR(10), @dtRefDate, 102), '.', '/')
		WHEN 13 THEN 
			REPLACE(CONVERT(VARCHAR(20), @dtRefDate, 106), ' ', '-')
		WHEN 14 THEN 
			CONVERT(VARCHAR(20), @dtRefDate, 106)
	END )

	SELECT @TimePart = 
	( CASE @intTimeFormat
		WHEN 0 THEN
			''
		WHEN 1 THEN 
			CONVERT(VARCHAR(10), @dtRefDate, 108)
		WHEN 2 THEN 
			SUBSTRING(CONVERT(VARCHAR(50), @dtRefDate, 109), 13, 8) + ' ' + Right(CONVERT(VARCHAR(50), @dtRefDate, 109), 2)
		WHEN 3 THEN 
			REPLACE(CONVERT(VARCHAR(10), @dtRefDate, 108), ':', '')
	END )

	SELECT 	@Result = @DatePart + ' ' + @TimePart 
	IF @intDateFormat = 10 
	BEGIN 
		SELECT @Result = REPLACE(@Result, ' ', '')
	END
	RETURN 	@Result
END
Go
INSERT INTO AdminSetting(SettingName,SettingValue) VALUES('ShortDateFormat','MM/dd/yyyy')
GO
INSERT INTO AdminSetting(SettingName,SettingValue) VALUES('SQLServerDateFormat','mdy')
GO
CREATE TABLE TableMaster
(
 	TableID    NUMERIC(11, 0) IDENTITY(1, 1),
 	TableName  VARCHAR(50) NOT NULL
)
GO
ALTER TABLE TableMaster ADD CONSTRAINT PK_TableMaster_TableID PRIMARY KEY(TableID)
GO
INSERT INTO TableMaster(TableName) VALUES ('ExcelATR') 	
GO
CREATE TABLE FieldMaster
(
 	TableID          NUMERIC(11, 0) NOT NULL,
 	FieldID          NUMERIC(11, 0) IDENTITY(1, 1),
 	FieldName        VARCHAR(255) NOT NULL,
 	PickList          NUMERIC(2, 0) DEFAULT 0
)
GO
ALTER TABLE FieldMaster ADD CONSTRAINT PK_FieldMaster_FieldID PRIMARY KEY(FieldID)
GO
ALTER TABLE FieldMaster
  ADD CONSTRAINT FK_FieldMaster_TableID FOREIGN KEY(TableID)
  REFERENCES TableMaster(TableID) ON 
DELETE CASCADE
GO
CREATE TABLE PickListMaster
(
 	RecordID          NUMERIC(11, 0) IDENTITY,
 	FieldID           NUMERIC(11, 0) NOT NULL,
 	TextValue   	  VARCHAR(255) NOT NULL
)
GO
ALTER TABLE PickListMaster
ADD CONSTRAINT PK_PickListMaster_RecordID PRIMARY KEY(RecordID)
GO
ALTER TABLE PickListMaster
  ADD CONSTRAINT FK_PickListMaster_FieldID FOREIGN KEY(FieldID)
  REFERENCES FieldMaster(FieldID) ON DELETE CASCADE
GO
CREATE TABLE TableAssignment
(
 	RecordID      NUMERIC(11, 0) IDENTITY,
 	FileID        NUMERIC(11, 0) NOT NULL,
 	FieldID       NUMERIC(11, 0) NOT NULL,
 	FieldValue    VARCHAR(255) NOT NULL
)
GO
ALTER TABLE TableAssignment
  ADD CONSTRAINT FK_TableAssignment_FieldID FOREIGN KEY(FieldID)
  REFERENCES FieldMaster(FieldID) ON DELETE CASCADE
GO
CREATE procedure [dbo].[RETURNDBTimeZone] (@vdbtimezone  varchar(100) output)
as
Begin

DEClARE @date1 datetime 
declare @date2 datetime

Declare @DBTimeZone varchar(100)
Declare @DBTimeZoneTemp varchar(100)
set @date1 = getdate()
set @date2 = getutcdate()

if @date1 > @date2
	Begin
	select @DBTimeZoneTemp = rtrim(ltrim(Convert(char(6),dbo.ReturnFormatedDateTime(getdate()- getutcdate(),0,1))))
	select @DBTimeZone = '+'+ Convert(char(6),dbo.ReturnFormatedDateTime(getdate()- getutcdate(),0,1))
	End
else if @date1 = @date2
	Begin
	select @DBTimeZoneTemp = '00:00'
	Select @DBTimeZone = '00:00';
	End
else
	Begin
	select @DBTimeZoneTemp = rtrim(ltrim(Convert(char(6),dbo.ReturnFormatedDateTime(getutcdate()-getdate() ,0,1))))
	select @DBTimeZone = '-'+Convert(char(6),dbo.ReturnFormatedDateTime(getutcdate()-getdate() ,0,1))
	End

if @DBTimeZoneTemp='00:00'
	Select @DBTimeZone='00:00'

set @vdbtimezone = @dbtimezone


End 
GO
CREATE TABLE File_Allocation(
	ParentFileId numeric(11, 0) NOT NULL,
	FileID numeric(11, 0) NOT NULL)
GO
ALTER TABLE File_Allocation ADD CONSTRAINT PK_File_Allocation PRIMARY KEY (ParentFileId,FileID)
GO
--- For AT ---
CREATE TABLE AuditTrails(
	RecordID [numeric](11, 0) IDENTITY(1,1) NOT NULL,
	ObjectID [numeric](11, 0) NOT NULL,
	Esign [varchar](5) NULL,
	TimeStamp [datetime] NOT NULL,
	TimeZone [varchar](255) NULL,
	SheetName [varchar](255) NULL,
	CellAddress [varchar](4000) NULL,
	Action [varchar](255) NULL,
	OldValue [varchar](max) NULL,
	NewValue [varchar](max) NULL,
	UserID [numeric](11, 0) NOT NULL,
	Role [varchar](255) NULL,
	Reason [varchar](255) NULL,
	Comments [varchar](4000) NULL 
)
GO
ALTER TABLE AuditTrails ADD CONSTRAINT PK_AuditTrails PRIMARY KEY(RecordID)
GO
CREATE TABLE AuditTrails_AR(
	RecordID [numeric](11, 0) IDENTITY(1,1) NOT NULL,
	ObjectID [numeric](11, 0) NOT NULL,
	Esign [varchar](5) NULL,
	TimeStamp [datetime] NOT NULL,
	TimeZone [varchar](255) NULL,
	SheetName [varchar](255) NULL,
	CellAddress [varchar](4000) NULL,
	Action [varchar](255) NULL,
	OldValue [varchar](max) NULL,
	NewValue [varchar](max) NULL,
	UserID [numeric](11, 0) NOT NULL,
	Role [varchar](255) NULL,
	Reason [varchar](255) NULL,
	Comments [varchar](4000) NULL, 
	ARDateTime [datetime] NOT NULL
)
GO
ALTER TABLE AuditTrails_AR ADD CONSTRAINT PK_AuditTrails_AR PRIMARY KEY(RecordID)
GO

-- For 6.1.0
ALTER TABLE UserMaster ADD DeleteDateTime DATETIME
Go
ALTER TABLE NotificationMaster ALTER COLUMN Message NVARCHAR(2000)
Go
ALTER TABLE NotificationMaster_Failure ALTER COLUMN Message NVARCHAR(2000)
Go
CREATE TABLE ActionNTFCTemplateMaster
(
	TemplateID numeric(11, 0) IDENTITY(1,1) NOT NULL,
	TemplateName nvarchar(255) NULL,
)
GO
ALTER TABLE ActionNTFCTemplateMaster ADD CONSTRAINT PK_ActionNTFCTemplateMaster PRIMARY KEY (TemplateID)
GO

CREATE TABLE ActionNTFCTemplateDetails
(
	RecordId numeric(11, 0) IDENTITY(1,1) NOT NULL,
	TemplateID numeric(11, 0)  NOT NULL,
	ActionID	nvarchar(255)  NOT NULL,
	Subject	nvarchar(255) NULL,
	Message	nvarchar(2000) NULL	
)
GO
ALTER TABLE ActionNTFCTemplateDetails ADD CONSTRAINT PK_ActNTFCTempDt_RecordID PRIMARY KEY (RecordId)
GO
ALTER TABLE ActionNTFCTemplateDetails ADD CONSTRAINT FK_ActNTFCTempDt_TemplateID FOREIGN KEY(TemplateID) 
  REFERENCES ActionNTFCTemplateMaster(TemplateID) ON DELETE CASCADE
Go	

CREATE TABLE ActionNTFCAssignment
(
	AssignmentID numeric(11, 0) IDENTITY(1,1) NOT NULL,
	FileID	numeric(11, 0)  NOT NULL,
	TemplateID numeric(11, 0)  NOT NULL,
	EntireWorkBook NUMERIC(1,0) NOT NULL DEFAULT 0,
	CellAddress nvarchar(2000) NULL	
)
Go
ALTER TABLE ActionNTFCAssignment ADD CONSTRAINT PK_ActNTFCAssign_AssignID PRIMARY KEY (AssignmentID)
GO
ALTER TABLE ActionNTFCAssignment ADD CONSTRAINT FK_ActNTFCAssign_FileID FOREIGN KEY(FileID) 
  REFERENCES FileConversionMaster(FileID) ON DELETE CASCADE
Go
ALTER TABLE ActionNTFCAssignment ADD CONSTRAINT FK_ActNTFCAssign_TemplateID FOREIGN KEY(TemplateID) 
  REFERENCES ActionNTFCTemplateMaster(TemplateID) ON DELETE CASCADE
GO

CREATE TABLE ActionNTFCUsers
(
	RecordId numeric(11, 0) IDENTITY(1,1) NOT NULL,
	AssignmentID numeric(11, 0) NOT NULL,
	ToUserID numeric(11, 0) NOT NULL,
	UGType VARCHAR(1)  NOT NULL DEFAULT 'U'	
)
Go
ALTER TABLE ActionNTFCUsers ADD CONSTRAINT PK_ActionNTFCUsers_RecordID PRIMARY KEY (RecordId)
GO
ALTER TABLE ActionNTFCUsers ADD CONSTRAINT FK_ActionNTFCUsers_AssignID FOREIGN KEY(AssignmentID) 
  REFERENCES ActionNTFCAssignment(AssignmentID) ON DELETE CASCADE
Go
CREATE TABLE MenuMaster_Admin(	
	MenuNumber numeric(11, 0) IDENTITY(1,1) NOT NULL,
	MenuOption nvarchar(255) NULL,
	MenuId numeric(11, 0))
GO
ALTER TABLE MenuMaster_Admin ADD CONSTRAINT PK_MenuMaster_Admin PRIMARY KEY (MenuNumber)
GO
CREATE TABLE TemplateMaster
(
 	TemplateID    NUMERIC(11, 0) IDENTITY(1, 1),
 	TemplateName  VARCHAR(50) NOT NULL
)
GO
ALTER TABLE TemplateMaster ADD CONSTRAINT PK_TemplateMaster_TemplateID PRIMARY KEY(TemplateID)
GO
CREATE TABLE MenuTrans_Admin(
	TransID numeric(11, 0) IDENTITY(1,1) NOT NULL,
	TemplateID numeric(11, 0) NOT NULL,
	MenuNumber numeric(11, 0) NOT NULL)
GO
ALTER TABLE MenuTrans_Admin ADD CONSTRAINT PK_MenuTrans_Admin PRIMARY KEY (MenuNumber,TemplateID)
GO
ALTER TABLE MenuTrans_Admin ADD CONSTRAINT FK_MenuTrans_Admin_TemplateID FOREIGN KEY(TemplateID) 
  REFERENCES TemplateMaster(TemplateID) ON DELETE CASCADE
GO
CREATE TABLE TemplateAssignment
(
 	TemplateID        NUMERIC(11, 0) NOT NULL,
 	UserID            NUMERIC(11, 0) NOT NULL,
 	UserGroup         VARCHAR(1) NOT NULL
)
GO
ALTER TABLE TemplateAssignment
  ADD CONSTRAINT FK_TemplateAss_TemplateID FOREIGN KEY(TemplateID)
  REFERENCES TemplateMaster(TemplateID) ON DELETE CASCADE
GO

INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Excel File Conversion',-1)
Go	
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Excel File Conversion -> Browse/Convert/Import File',0)
Go
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Excel File Conversion -> Unconvert',0)
Go
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Excel File Conversion -> Remove All E-Signatures',0)
Go
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Excel File Conversion -> Archive/Recall File',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Excel File Conversion -> File Search',0)
Go
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('User Accounts',-2)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('User Accounts -> Add/Delete/Recall/Modify/Import User',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('User Accounts -> User Activity Report',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('User Accounts -> Users Report',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Groups',-3)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Groups -> Add/Delete/Modify Group',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Admin Audit Trail Search',-4)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Admin Audit Trail Search -> Search',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Configuration',-5)
GO	
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Configuration -> E-Signature Settings',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Configuration -> Advance E-Signature Settings',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Configuration -> ADSync Configuration',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Configuration -> Template File Configuration',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Configuration -> Assign Privileges',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Configuration -> Notifications',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Configuration -> Menu Options',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Configuration -> Security',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Configuration -> File Security',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Global Settings',-6)
GO	
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Global Settings -> Save Global Settings',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Global Settings -> Role Management',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Global Settings -> Reason Management',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Global Settings -> Attributes',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Global Settings -> Password Manager',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Global Settings -> Multilingual Settings',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Admin Security Settings',-7)
GO	
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Admin Security Settings -> Admin Security Settings',0)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Upgrade License',-8)
GO
INSERT INTO MenuMaster_Admin (MenuOption,MenuId) VALUES ('Upgrade License -> Upgrade License',0)
GO

Delete from ActionMaster
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('1','Account Locked')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('2','Password Change')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('3','Add User')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('4','Remove User')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('5','Recall User')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('6','Modify User')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('7','Add Role')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('8','Modify Role')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('9','Delete Role')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('10','Add Reason')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('11','Modify Reason')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('12','Delete Reason')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('13','Role Assigned')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('14','Role Revoked')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('15','File Reconfigured')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('16','Menu Option Disabled')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('17','Menu Option Enabled')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('18','Privilege Assigned')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('19','Privilege Revoked')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('20','Security Assigned')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('21','Security Revoked')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('22','Global Settings')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('23','Password List Configuration')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('24','Add Group')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('25','Modify Group')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('26','Remove Group')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('27','Allocation Assigned')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('28','Allocation Revoked')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('29','Template File Security Assigned')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('30','Template File Security Revoked')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('31','Login Successful')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('32','Login Failure')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('33','Template File Save Path Assigned')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('34','Template File Save Path Revoked')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('35','Template File Save Name Address Assigned')
GO
INSERT INTO ActionMaster(ActionId,ActionName)
VALUES('36','Template File Save Name Address Revoked')
GO
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('37','Add Admin Security Template')
GO
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('38','Modify Admin Security Template')
GO
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('39','Delete Admin Security Template')
GO
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('40','Admin Menu Option Disabled')
GO
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('41','Admin Menu Option Enabled')
GO
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('42','Admin Security Template Assigned')
GO  
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('43','Admin Security Template Revoked')
GO
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('44','Add Action Notification Template')
GO
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('45','Modify Action Notification Template')
GO
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('46','Delete Action Notification Template')
GO
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('47','Action Assigned To Action Notification Template')
GO
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('48','Action Notification Template Assigned')
GO
INSERT INTO ActionMaster(ActionId,ActionName) 
VALUES('49','Action Notification Template Revoked')
GO
CREATE TABLE MailNotifications
(
	RecordID NUMERIC(11,0) IDENTITY(1,1) NOT NULL,
	FileId  NUMERIC(11,0) NOT NULL DEFAULT 0,
	FromUserName NVARCHAR(255),
	FromUserEmailID NVARCHAR(255) NOT NULL,
	ToUser  NVARCHAR(4000) NOT NULL,	
	Subject NVARCHAR(4000),
	Message NVARCHAR(4000),
	NotificationDate DATETIME,
	DeviceName NVARCHAR(510),
	LastNtfcDate	DATETIME,
	MailErrorMsg	NVARCHAR(2000),	
	IsSent  CHAR (1) NOT NULL DEFAULT 'N'
)
GO
ALTER TABLE MailNotifications ADD CONSTRAINT PK_MailNotifications_RecordID PRIMARY KEY (RecordId)
GO
INSERT INTO AdminSetting (SettingName, SettingValue) VALUES ('TemplateFileNameSep', ' ')
Go
CREATE TABLE ExcelDesktopFileInfo
(
	HostID NVARCHAR(4000) NOT NULL,
	RegKey  NVARCHAR(4000) NOT NULL
)
Go
ALTER TABLE FileConversionMaster ALTER COLUMN Author NVARCHAR(4000)
GO
ALTER TABLE FileConversionMaster ALTER COLUMN Title NVARCHAR(4000)
GO
ALTER TABLE FileConversionMaster ALTER COLUMN Subject NVARCHAR(4000)
GO
ALTER TABLE FileConversionMaster ALTER COLUMN Category NVARCHAR(4000)
GO
ALTER TABLE FileConversionMaster ALTER COLUMN Keywords NVARCHAR(4000)
GO
ALTER TABLE FileConversionMaster ALTER COLUMN Comments NVARCHAR(4000)
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(50,'Archive Audit Trails')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(51,'Role Based Notification Assigned')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(52,'Role Based Notification Revoked')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(53,'Login Failure Notification Assigned')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(54,'Login Failure Notification Revoked')
GO
--6.3.0
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(55,'File Attribute Add')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(56,'File Attribute Modify')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(57,'File Attribute Delete')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(58,'Unconvert File')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(59,'Remove All E-Signatures')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(60,'Archive File')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(61,'Recall Archived Files')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(62,'Add Domain')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(63,'Modify Domain')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(64,'Delete Domain')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(65,'AdSync Configuration')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(66,'SMTP Configuration')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(67,'Add Attribute')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(68,'Modify Attribute')
GO
INSERT INTO ActionMaster(ActionId,ActionName) VALUES(69,'Delete Attribute')
GO
ALTER TABLE FileConversionMaster ADD UserID numeric(11, 0)
Go
ALTER TABLE GroupMaster ADD CONVERTFILERIGHT NVARCHAR(10) DEFAULT 'TRUE'
Go
Update GroupMaster SET CONVERTFILERIGHT = 'TRUE' WHERE CONVERTFILERIGHT IS NULL
Go
ALTER TABLE UserMaster ADD CONVERTFILERIGHT NVARCHAR(10) DEFAULT 'FALSE'
Go
Update UserMaster SET CONVERTFILERIGHT = 'FALSE' WHERE CONVERTFILERIGHT IS NULL
Go

INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Convert File',0,'None','Convert File',	8,0,0,'Convert File','eInfotree -> Convert File',729)
GO 
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Convert Multiple Files',0,'None','Convert Multiple Files',	8,0,0,'Convert Multiple Files','eInfotree -> Convert Multiple Files',730)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> List of Converted Files',0,'None','List of Converted Files', 8,0,0,'List of Converted Files','eInfotree -> List of Converted Files',731)
GO

INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Convert File',0,'None','Convert File',	9,0,0,	'Convert File','eInfotree -> Convert File',	732)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Convert Multiple Files',0,'None','Convert Multiple Files',	9,0,0,	'Convert Multiple Files','eInfotree -> Convert Multiple Files',	733)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> List of Converted Files',0,'None','List of Converted Files',9,0,0,	'List of Converted Files','eInfotree -> List of Converted Files', 734)
GO

INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Convert File',0,'None','Convert File',	10,0,0,	'Convert File','eInfotree -> Convert File',	735)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Convert Multiple Files',0,'None','Convert Multiple Files',	10,0,0,	'Convert Multiple Files','eInfotree -> Convert Multiple Files',	736)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> List of Converted Files',0,'None','List of Converted Files',10,0,0,	'List of Converted Files','eInfotree -> List of Converted Files', 737)
GO

INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Convert File',0,'None','Convert File',	11,0,0,	'Convert File','eInfotree -> Convert File',	738)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Convert Multiple Files',0,'None','Convert Multiple Files',	11,0,0,	'Convert Multiple Files','eInfotree -> Convert Multiple Files',	739)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> List of Converted Files',0,'None','List of Converted Files',11,0,0,	'List of Converted Files','eInfotree -> List of Converted Files', 740)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Convert File','ConvertFile','None','Convert File',	12,0,0,	'Convert File','eInfotree -> Convert File',	741)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Convert Multiple Files','ConvertMultipleFiles','None','Convert Multiple Files', 12,0,0, 'Convert Multiple Files','eInfotree -> Convert Multiple Files',	742)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> List of Converted Files','ListOfConvertedFiles','None','List of Converted Files',12,0,0, 'List of Converted Files','eInfotree -> List of Converted Files', 743)
GO

INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Convert File','ConvertFile','None','Convert File',	14,0,0,	'Convert File','eInfotree -> Convert File',	744)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Convert Multiple Files','ConvertMultipleFiles','None','Convert Multiple Files', 14,0,0, 'Convert Multiple Files','eInfotree -> Convert Multiple Files',	745)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> List of Converted Files','ListOfConvertedFiles','None','List of Converted Files',14,0,0, 'List of Converted Files','eInfotree -> List of Converted Files', 746)
GO

Update FileconversionMaster Set UserId = isnull((Select userId from UserMaster where UserfullName = FileconversionMaster.convertedBy),1)
Go

-- 6.3.0 HF1

CREATE TABLE MigratedFiles
(
 	FileID NUMERIC(11),
 	Migrated VARCHAR(1) DEFAULT 'N' 	
)
Go

INSERT INTO ActionMaster (ActionId,ActionName) VALUES (70,'Reason Rights Assigned (Old)')
Go
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (71,'Reason Rights Revoked (Old)')
Go

-- -------------------------------------------------------
-- 6.3.0 SP1
-- -------------------------------------------------------

CREATE TABLE TrendTemplateMaster
(
	TemplateID		numeric(11, 0) IDENTITY(1,1) NOT NULL,
	TemplateName	nvarchar(255) NOT Null,
	TemplateDesc	NVARCHAR(255) NULL,
	DeleteStatus	nvarchar(1) NULL DEFAULT 'N'
)
GO
ALTER TABLE TrendTemplateMaster ADD CONSTRAINT PK_TrendTM_TemplateID PRIMARY KEY (TemplateID)
GO

CREATE TABLE TrendMaster
(
	TrendID			numeric(11, 0) IDENTITY(1,1) NOT NULL,	
	TrendName		nvarchar(255) NOT NULL,
	DeleteStatus	nvarchar(1) NULL DEFAULT 'N'
)
GO
ALTER TABLE TrendMaster ADD CONSTRAINT PK_TrendMaster_TrendID PRIMARY KEY (TrendID)
GO

CREATE TABLE TrendTemplateAssignment
(
	TemplateID		numeric(11, 0) NOT Null,
	TrendID			numeric(11, 0) NOT Null
)
GO
ALTER TABLE TrendTemplateAssignment ADD CONSTRAINT PK_TrendTempAsign PRIMARY KEY (TemplateID,TrendID)
GO

CREATE TABLE TrendFileDetails
(
	TrendFileID		numeric(11, 0) IDENTITY(1,1) NOT NULL,
	TrendID			numeric(11, 0) NOT NULL,
	FileID			numeric(11, 0) NOT NULL,
	SheetName		nvarchar(255) Not NULL,
	CellAddress		nvarchar(255) Not NULL,
	FileType		nvarchar(255) Not NULL
)
GO
ALTER TABLE TrendFileDetails ADD CONSTRAINT PK_TrendFileDet_TrendFileID PRIMARY KEY (TrendFileID)
GO

CREATE TABLE TrendTransactions
(
	TrendTransID	numeric(11, 0) IDENTITY(1,1) NOT NULL,	
	TrendFileID		numeric(11, 0) NOT NULL,
	TrendID			numeric(11, 0) NOT NULL,
	FileID			numeric(11, 0) NOT NULL,
	TrendValue		numeric(25,6) NULL,
)
GO
ALTER TABLE TrendTransactions ADD CONSTRAINT PK_TrendTrans_TrendTransID PRIMARY KEY (TrendTransID)
GO

INSERT INTO ActionMaster (ActionId,ActionName) VALUES (72,'Add Trend Template')
Go
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (73,'Modify Trend Template')
Go
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (74,'Delete Trend Template')
Go
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (75,'Add Trend')
GO
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (76,'Modify Trend')
GO
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (77,'Delete Trend')
GO
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (78,'Assign Trend File')
GO
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (79,'Revoke Trend File')
Go


UPDATE MenuMaster_Admin SET MenuId = 1 WHERE MenuNumber IN (2,3,4,5,6)
Go
UPDATE MenuMaster_Admin SET MenuId = 7 WHERE MenuNumber IN (8,9,10)
Go
UPDATE MenuMaster_Admin SET MenuId = 11 WHERE MenuNumber IN (12)
Go
UPDATE MenuMaster_Admin SET MenuId = 13 WHERE MenuNumber IN (14)
Go
UPDATE MenuMaster_Admin SET MenuId = 15 WHERE MenuNumber IN (16,17,18,19,20,21,22,23,24)
Go
UPDATE MenuMaster_Admin SET MenuId = 25 WHERE MenuNumber IN (26,27,28,29,30,31)
Go
UPDATE MenuMaster_Admin SET MenuId = 32 WHERE MenuNumber IN (33)
Go
UPDATE MenuMaster_Admin SET MenuId = 34 WHERE MenuNumber IN (35)
Go

UPDATE MenuMaster_Admin SET MenuOption = 'Configuration -> Template Configuration' WHERE MenuNumber = 19
Go

INSERT INTO MenuMaster_Admin (MenuOption,MenuId)VALUES('Global Settings -> Archive',25)
Go

INSERT INTO MenuMaster_Admin (MenuOption,MenuId)VALUES('Configuration -> Trend Templates',15)
Go

INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Show Trend Chart',0,'None','Show Trend Chart', 8,0,0,'Show Trend Chart','eInfotree -> Show Trend Chart',747)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Show Trend Chart',0,'None','Show Trend Chart',9,0,0,	'Show Trend Chart','eInfotree -> Show Trend Chart', 748)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Show Trend Chart',0,'None','Show Trend Chart',10,0,0,	'Show Trend Chart','eInfotree -> Show Trend Chart', 749)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Show Trend Chart',0,'None','Show Trend Chart',11,0,0,	'Show Trend Chart','eInfotree -> Show Trend Chart', 750)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Show Trend Chart','ShowTrendChart','None','Show Trend Chart',12,0,0, 'Show Trend Chart','eInfotree -> Show Trend Chart', 751)
GO
INSERT INTO MenuMaster (MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('eInfotree -> Show Trend Chart','ShowTrendChart','None','Show Trend Chart',14,0,0, 'Show Trend Chart','eInfotree -> Show Trend Chart', 752)
GO

-- -----------
-- 06-Sep-2012
-- -----------
ALTER TABLE TrendTransactions ADD TrendValueText NVARCHAR(255)
GO
ALTER TABLE TrendTransactions ADD FileName NVARCHAR(255)
GO

-- -----------
-- 10-Sep-2011
-- -----------
CREATE TABLE TrendQueryMaster
(
	QueryID		numeric(11, 0) IDENTITY(1,1) NOT NULL,
	QueryName	nvarchar(50) NOT NULL,
	QueryDescription	nvarchar(255) NULL,
	TemplateID		numeric(11, 0) NOT Null,
	FilterTrendValueChecked nvarchar(10) NULL,
	FilterTrendValueOperator nvarchar(50) NULL,
	FilterTrendValueFrom	nvarchar(50) NULL,
	FilterTrendValueTo		nvarchar(50) NULL,
	FilterFileNameChecked	nvarchar(10) NULL,
	FilterFileNameOperator	nvarchar(50) NULL,
	FilterFileName			nvarchar(255) NULL,
	FilterDOCChekced		nvarchar(10) NULL,
	FilterDOCOperator		nvarchar(50) NULL,
	FilterDOCDateFrom		nvarchar(50) NULL,
	FilterDOCDateTo			nvarchar(50) NULL,
	FilterDOCDay			nvarchar(50) NULL,
	FilterDOCMonth			nvarchar(50) NULL
)
GO
ALTER TABLE TrendQueryMaster ADD CONSTRAINT PK_TrendQueryMaster_QueryID PRIMARY KEY (QueryID)
GO

CREATE TABLE TrendQueryDetails
(
	QueryDetailsID		numeric(11, 0) IDENTITY(1,1) NOT NULL,
	QueryID				numeric(11, 0) NOT Null,	
	TrendID				numeric(11, 0) NOT Null,
	FunctionID			numeric(11, 0) NOT Null,
	FunctionName		nvarchar(255) NULL
)
GO
ALTER TABLE TrendQueryDetails ADD CONSTRAINT PK_TrendQDet_QueryDetailsID PRIMARY KEY (QueryDetailsID)
GO

CREATE TABLE TrendQuerySecurity
(
	QueryID			numeric(11, 0) NOT Null,
	UserID			numeric(11, 0) NOT Null,
	UserGroup		nvarchar(1) NOT Null
)
GO


INSERT INTO ActionMaster (ActionId,ActionName) VALUES (80,'Add Trend Query')
GO
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (81,'Modify Trend Query')
Go
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (82,'Delete Trend Query')
Go 
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (83,'Trend Query Security Assigned')
GO
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (84,'Trend Query Security Revoked')
Go
-- -------------------------------------------------------

-- -------------------------------------------------------
-- 6.4.0
-- -------------------------------------------------------
CREATE TABLE FileSharePointData
(
	FileID [numeric](11, 0) not NULL,
	SiteURL [nvarchar](255) NULL,
	HiddenLibName [nvarchar](255) NULL,
	ListID [nvarchar](255) NULL,
 CONSTRAINT [PK_FileSharePointData] PRIMARY KEY CLUSTERED 
(
	FileID ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT AdminSetting
(SettingName,SettingValue)
VALUES
('SHAREPOINT','ON')
GO

ALTER TABLE MenuMaster ADD MENUINDEX NUMERIC(11,0)
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> PivotTable and PivotChart Report...','2915','None','Data -> PivotTable and PivotChart Report...','8','True','30253|30469|5473|436|457|464|462|459|460|3790|4388|4391|3648|4389|4392|3650','Data -> PivotTable and PivotChart Report...','Data -> PivotTable and PivotChart Report...','753')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> PivotTable and PivotChart Report...','2915','None','Data -> PivotTable and PivotChart Report...','9','True','30253|30469|5473|436|457|464|462|459|460|3790|4388|4391|3648|4389|4392|3650','Data -> PivotTable and PivotChart Report...','Data -> PivotTable and PivotChart Report...','754')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> PivotTable and PivotChart Report...','2915','None','Data -> PivotTable and PivotChart Report...','10','True','3790|460|5920|5919|459|462|464|436|5473|30469|30253','Data -> PivotTable and PivotChart Report...','Data -> PivotTable and PivotChart Report...','755')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('Data -> PivotTable and PivotChart Report...','2915','None','Data -> PivotTable and PivotChart Report...','11','True','3790|460|5920|5919|459|462|464|436|5473|30469|30253','Data -> PivotTable and PivotChart Report...','Data -> PivotTable and PivotChart Report...','756')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View','-9',NULL,'View','8','False','-9','View','View','757')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Normal','723','None','View -> Normal','8','False','723','View -> Normal','View -> Normal','758')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Page Break Preview','724','None','View -> Page Break Preview','8','False','724','View -> Page Break Preview','View -> Page Break Preview','759')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Toolbars','30045','None','View -> Toolbars','8','False','30045','View -> Toolbars','View -> Toolbars','760')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Formula Bar','849','None','View -> Formula Bar','8','False','849','View -> Formula Bar','View -> Formula Bar','761')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Status Bar','850','None','View -> Status Bar','8','False','850','View -> Status Bar','View -> Status Bar','762')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Header and Footer...','762','None','View -> Header and Footer...','8','False','762','View -> Header and Footer...','View -> Header and Footer...','763')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Comments','1594','None','View -> Comments','8','False','1594','View -> Comments','View -> Comments','764')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Custom Views...','950','None','View -> Custom Views...','8','False','950','View -> Custom Views...','View -> Custom Views...','765')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Full Screen','178','None','View -> Full Screen','8','False','178','View -> Full Screen','View -> Full Screen','766')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Zoom...','925','None','View -> Zoom...','8','False','925','View -> Zoom...','View -> Zoom...','767')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View','-9',NULL,'View','9','False','-9','View','View','768')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Normal','723','None','View -> Normal','9','False','723','View -> Normal','View -> Normal','769')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Page Break Preview','724','None','View -> Page Break Preview','9','False','724','View -> Page Break Preview','View -> Page Break Preview','770')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Toolbars','30045','None','View -> Toolbars','9','False','30045','View -> Toolbars','View -> Toolbars','771')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Formula Bar','849','None','View -> Formula Bar','9','False','849','View -> Formula Bar','View -> Formula Bar','772')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Status Bar','850','None','View -> Status Bar','9','False','850','View -> Status Bar','View -> Status Bar','773')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Header and Footer...','762','None','View -> Header and Footer...','9','False','762','View -> Header and Footer...','View -> Header and Footer...','774')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Comments','1594','None','View -> Comments','9','False','1594','View -> Comments','View -> Comments','775')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Custom Views...','950','None','View -> Custom Views...','9','False','950','View -> Custom Views...','View -> Custom Views...','776')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Full Screen','178','None','View -> Full Screen','9','False','178','View -> Full Screen','View -> Full Screen','777')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Zoom...','925','None','View -> Zoom...','9','False','925','View -> Zoom...','View -> Zoom...','778')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View','-9',NULL,'View','10','False','-9','View','View','779')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Normal','723','None','View -> Normal','10','False','723','View -> Normal','View -> Normal','780')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Page Break Preview','724','None','View -> Page Break Preview','10','False','724','View -> Page Break Preview','View -> Page Break Preview','781')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Task Pane','5746','None','View -> Task Pane','10','False','5746','View -> Task Pane','View -> Task Pane','782')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Toolbars','30045','None','View -> Toolbars','10','False','30045','View -> Toolbars','View -> Toolbars','783')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Formula Bar','849','None','View -> Formula Bar','10','False','849','View -> Formula Bar','View -> Formula Bar','784')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Status Bar','850','None','View -> Status Bar','10','False','850','View -> Status Bar','View -> Status Bar','785')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Header and Footer...','762','None','View -> Header and Footer...','10','False','762','View -> Header and Footer...','View -> Header and Footer...','786')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Comments','1594','None','View -> Comments','10','False','1594','View -> Comments','View -> Comments','787')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Custom Views...','950','None','View -> Custom Views...','10','False','950','View -> Custom Views...','View -> Custom Views...','788')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Full Screen','178','None','View -> Full Screen','10','False','178','View -> Full Screen','View -> Full Screen','789')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Zoom...','925','None','View -> Zoom...','10','False','925','View -> Zoom...','View -> Zoom...','790')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View','-9',NULL,'View','11','False','-9','View','View','791')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Normal','723','None','View -> Normal','11','False','723','View -> Normal','View -> Normal','792')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Page Break Preview','724','None','View -> Page Break Preview','11','False','724','View -> Page Break Preview','View -> Page Break Preview','793')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Task Pane','5746','None','View -> Task Pane','11','False','5746','View -> Task Pane','View -> Task Pane','794')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Toolbars','30045','None','View -> Toolbars','11','False','30045','View -> Toolbars','View -> Toolbars','795')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Formula Bar','849','None','View -> Formula Bar','11','False','849','View -> Formula Bar','View -> Formula Bar','796')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Status Bar','850','None','View -> Status Bar','11','False','850','View -> Status Bar','View -> Status Bar','797')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Header and Footer...','762','None','View -> Header and Footer...','11','False','762','View -> Header and Footer...','View -> Header and Footer...','798')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Comments','1594','None','View -> Comments','11','False','1594','View -> Comments','View -> Comments','799')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Custom Views...','950','None','View -> Custom Views...','11','False','950','View -> Custom Views...','View -> Custom Views...','800')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Full Screen','178','None','View -> Full Screen','11','False','178','View -> Full Screen','View -> Full Screen','801')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber)
VALUES('View -> Zoom...','925','None','View -> Zoom...','11','False','925','View -> Zoom...','View -> Zoom...','802')
GO

--Version 8
UPDATE MenuMaster SET MENUINDEX =8101 WHERE MENUNUMBER=1
GO
UPDATE MenuMaster SET MENUINDEX =8102 WHERE MENUNUMBER=2
GO
UPDATE MenuMaster SET MENUINDEX =8103 WHERE MENUNUMBER=3
GO
UPDATE MenuMaster SET MENUINDEX =8104 WHERE MENUNUMBER=4
GO
UPDATE MenuMaster SET MENUINDEX =8105 WHERE MENUNUMBER=5
GO
UPDATE MenuMaster SET MENUINDEX =8106 WHERE MENUNUMBER=6
GO
UPDATE MenuMaster SET MENUINDEX =8107 WHERE MENUNUMBER=7
GO
UPDATE MenuMaster SET MENUINDEX =8108 WHERE MENUNUMBER=8
GO
UPDATE MenuMaster SET MENUINDEX =8109 WHERE MENUNUMBER=9
GO
UPDATE MenuMaster SET MENUINDEX =8110 WHERE MENUNUMBER=10
GO
UPDATE MenuMaster SET MENUINDEX =8111 WHERE MENUNUMBER=11
GO
UPDATE MenuMaster SET MENUINDEX =8112 WHERE MENUNUMBER=12
GO
UPDATE MenuMaster SET MENUINDEX =8113 WHERE MENUNUMBER=13
GO
UPDATE MenuMaster SET MENUINDEX =8201 WHERE MENUNUMBER=14
GO
UPDATE MenuMaster SET MENUINDEX =8202 WHERE MENUNUMBER=15
GO
UPDATE MenuMaster SET MENUINDEX =8203 WHERE MENUNUMBER=16
GO
UPDATE MenuMaster SET MENUINDEX =8204 WHERE MENUNUMBER=17
GO
UPDATE MenuMaster SET MENUINDEX =8205 WHERE MENUNUMBER=18
GO
UPDATE MenuMaster SET MENUINDEX =8206 WHERE MENUNUMBER=19
GO
UPDATE MenuMaster SET MENUINDEX =8207 WHERE MENUNUMBER=20
GO
UPDATE MenuMaster SET MENUINDEX =8208 WHERE MENUNUMBER=21
GO
UPDATE MenuMaster SET MENUINDEX =8209 WHERE MENUNUMBER=22
GO
UPDATE MenuMaster SET MENUINDEX =8210 WHERE MENUNUMBER=23
GO
UPDATE MenuMaster SET MENUINDEX =8211 WHERE MENUNUMBER=24
GO
UPDATE MenuMaster SET MENUINDEX =8301 WHERE MENUNUMBER=757
GO
UPDATE MenuMaster SET MENUINDEX =8302 WHERE MENUNUMBER=758
GO
UPDATE MenuMaster SET MENUINDEX =8303 WHERE MENUNUMBER=759
GO
UPDATE MenuMaster SET MENUINDEX =8304 WHERE MENUNUMBER=760
GO
UPDATE MenuMaster SET MENUINDEX =8305 WHERE MENUNUMBER=761
GO
UPDATE MenuMaster SET MENUINDEX =8306 WHERE MENUNUMBER=762
GO
UPDATE MenuMaster SET MENUINDEX =8307 WHERE MENUNUMBER=763
GO
UPDATE MenuMaster SET MENUINDEX =8308 WHERE MENUNUMBER=764
GO
UPDATE MenuMaster SET MENUINDEX =8309 WHERE MENUNUMBER=765
GO
UPDATE MenuMaster SET MENUINDEX =8310 WHERE MENUNUMBER=766
GO
UPDATE MenuMaster SET MENUINDEX =8311 WHERE MENUNUMBER=767
GO
UPDATE MenuMaster SET MENUINDEX =8401 WHERE MENUNUMBER=25
GO
UPDATE MenuMaster SET MENUINDEX =8402 WHERE MENUNUMBER=26
GO
UPDATE MenuMaster SET MENUINDEX =8403 WHERE MENUNUMBER=27
GO
UPDATE MenuMaster SET MENUINDEX =8404 WHERE MENUNUMBER=28
GO
UPDATE MenuMaster SET MENUINDEX =8405 WHERE MENUNUMBER=29
GO
UPDATE MenuMaster SET MENUINDEX =8406 WHERE MENUNUMBER=30
GO
UPDATE MenuMaster SET MENUINDEX =8406 WHERE MENUNUMBER=31
GO
UPDATE MenuMaster SET MENUINDEX =8407 WHERE MENUNUMBER=32
GO
UPDATE MenuMaster SET MENUINDEX =8408 WHERE MENUNUMBER=33
GO
UPDATE MenuMaster SET MENUINDEX =8409 WHERE MENUNUMBER=34
GO
UPDATE MenuMaster SET MENUINDEX =8410 WHERE MENUNUMBER=35
GO
UPDATE MenuMaster SET MENUINDEX =8411 WHERE MENUNUMBER=36
GO
UPDATE MenuMaster SET MENUINDEX =8501 WHERE MENUNUMBER=37
GO
UPDATE MenuMaster SET MENUINDEX =8502 WHERE MENUNUMBER=38
GO
UPDATE MenuMaster SET MENUINDEX =8503 WHERE MENUNUMBER=39
GO
UPDATE MenuMaster SET MENUINDEX =8504 WHERE MENUNUMBER=40
GO
UPDATE MenuMaster SET MENUINDEX =8505 WHERE MENUNUMBER=41
GO
UPDATE MenuMaster SET MENUINDEX =8506 WHERE MENUNUMBER=42
GO
UPDATE MenuMaster SET MENUINDEX =8507 WHERE MENUNUMBER=43
GO
UPDATE MenuMaster SET MENUINDEX =8601 WHERE MENUNUMBER=44
GO
UPDATE MenuMaster SET MENUINDEX =8602 WHERE MENUNUMBER=45
GO
UPDATE MenuMaster SET MENUINDEX =8603 WHERE MENUNUMBER=46
GO
UPDATE MenuMaster SET MENUINDEX =8604 WHERE MENUNUMBER=47
GO
UPDATE MenuMaster SET MENUINDEX =8605 WHERE MENUNUMBER=48
GO
UPDATE MenuMaster SET MENUINDEX =8606 WHERE MENUNUMBER=49
GO
UPDATE MenuMaster SET MENUINDEX =8607 WHERE MENUNUMBER=50
GO
UPDATE MenuMaster SET MENUINDEX =8608 WHERE MENUNUMBER=51
GO
UPDATE MenuMaster SET MENUINDEX =8609 WHERE MENUNUMBER=52
GO
UPDATE MenuMaster SET MENUINDEX =8701 WHERE MENUNUMBER=53
GO
UPDATE MenuMaster SET MENUINDEX =8702 WHERE MENUNUMBER=54
GO
UPDATE MenuMaster SET MENUINDEX =8703 WHERE MENUNUMBER=55
GO
UPDATE MenuMaster SET MENUINDEX =8704 WHERE MENUNUMBER=56
GO
UPDATE MenuMaster SET MENUINDEX =8705 WHERE MENUNUMBER=57
GO
UPDATE MenuMaster SET MENUINDEX =8706 WHERE MENUNUMBER=58
GO
UPDATE MenuMaster SET MENUINDEX =8707 WHERE MENUNUMBER=59
GO
UPDATE MenuMaster SET MENUINDEX =8708 WHERE MENUNUMBER=60
GO
UPDATE MenuMaster SET MENUINDEX =8709 WHERE MENUNUMBER=61
GO
UPDATE MenuMaster SET MENUINDEX =8710 WHERE MENUNUMBER=62
GO
UPDATE MenuMaster SET MENUINDEX =8711 WHERE MENUNUMBER=753
GO
UPDATE MenuMaster SET MENUINDEX =8801 WHERE MENUNUMBER=63
GO
UPDATE MenuMaster SET MENUINDEX =8802 WHERE MENUNUMBER=64
GO
UPDATE MenuMaster SET MENUINDEX =8803 WHERE MENUNUMBER=65
GO
UPDATE MenuMaster SET MENUINDEX =8804 WHERE MENUNUMBER=66
GO
UPDATE MenuMaster SET MENUINDEX =8901 WHERE MENUNUMBER=67
GO
UPDATE MenuMaster SET MENUINDEX =8902 WHERE MENUNUMBER=68
GO
UPDATE MenuMaster SET MENUINDEX =8903 WHERE MENUNUMBER=69
GO
UPDATE MenuMaster SET MENUINDEX =8904 WHERE MENUNUMBER=70
GO
UPDATE MenuMaster SET MENUINDEX =8905 WHERE MENUNUMBER=71
GO
UPDATE MenuMaster SET MENUINDEX =8906 WHERE MENUNUMBER=72
GO
UPDATE MenuMaster SET MENUINDEX =8907 WHERE MENUNUMBER=73
GO
UPDATE MenuMaster SET MENUINDEX =8908 WHERE MENUNUMBER=74
GO
UPDATE MenuMaster SET MENUINDEX =8909 WHERE MENUNUMBER=75
GO
UPDATE MenuMaster SET MENUINDEX =8910 WHERE MENUNUMBER=76
GO
UPDATE MenuMaster SET MENUINDEX =8911 WHERE MENUNUMBER=77
GO
UPDATE MenuMaster SET MENUINDEX =8912 WHERE MENUNUMBER=78
GO
UPDATE MenuMaster SET MENUINDEX =8913 WHERE MENUNUMBER=79
GO
UPDATE MenuMaster SET MENUINDEX =8914 WHERE MENUNUMBER=729
GO
UPDATE MenuMaster SET MENUINDEX =8915 WHERE MENUNUMBER=730
GO
UPDATE MenuMaster SET MENUINDEX =8916 WHERE MENUNUMBER=731
GO
UPDATE MenuMaster SET MENUINDEX =8917 WHERE MENUNUMBER=747
GO
--Version 9
UPDATE MenuMaster SET MENUINDEX =9101 WHERE MENUNUMBER=80
GO
UPDATE MenuMaster SET MENUINDEX =9102 WHERE MENUNUMBER=81
GO
UPDATE MenuMaster SET MENUINDEX =9103 WHERE MENUNUMBER=82
GO
UPDATE MenuMaster SET MENUINDEX =9104 WHERE MENUNUMBER=83
GO
UPDATE MenuMaster SET MENUINDEX =9105 WHERE MENUNUMBER=84
GO
UPDATE MenuMaster SET MENUINDEX =9106 WHERE MENUNUMBER=85
GO
UPDATE MenuMaster SET MENUINDEX =9107 WHERE MENUNUMBER=86
GO
UPDATE MenuMaster SET MENUINDEX =9108 WHERE MENUNUMBER=87
GO
UPDATE MenuMaster SET MENUINDEX =9109 WHERE MENUNUMBER=88
GO
UPDATE MenuMaster SET MENUINDEX =9110 WHERE MENUNUMBER=89
GO
UPDATE MenuMaster SET MENUINDEX =9111 WHERE MENUNUMBER=90
GO
UPDATE MenuMaster SET MENUINDEX =9112 WHERE MENUNUMBER=91
GO
UPDATE MenuMaster SET MENUINDEX =9113 WHERE MENUNUMBER=92
GO
UPDATE MenuMaster SET MENUINDEX =9201 WHERE MENUNUMBER=93
GO
UPDATE MenuMaster SET MENUINDEX =9202 WHERE MENUNUMBER=94
GO
UPDATE MenuMaster SET MENUINDEX =9203 WHERE MENUNUMBER=95
GO
UPDATE MenuMaster SET MENUINDEX =9204 WHERE MENUNUMBER=96
GO
UPDATE MenuMaster SET MENUINDEX =9205 WHERE MENUNUMBER=97
GO
UPDATE MenuMaster SET MENUINDEX =9206 WHERE MENUNUMBER=98
GO
UPDATE MenuMaster SET MENUINDEX =9207 WHERE MENUNUMBER=99
GO
UPDATE MenuMaster SET MENUINDEX =9208 WHERE MENUNUMBER=100
GO
UPDATE MenuMaster SET MENUINDEX =9209 WHERE MENUNUMBER=101
GO
UPDATE MenuMaster SET MENUINDEX =9210 WHERE MENUNUMBER=102
GO
UPDATE MenuMaster SET MENUINDEX =9211 WHERE MENUNUMBER=103
GO
UPDATE MenuMaster SET MENUINDEX =9301 WHERE MENUNUMBER=768
GO
UPDATE MenuMaster SET MENUINDEX =9302 WHERE MENUNUMBER=769
GO
UPDATE MenuMaster SET MENUINDEX =9303 WHERE MENUNUMBER=770
GO
UPDATE MenuMaster SET MENUINDEX =9304 WHERE MENUNUMBER=771
GO
UPDATE MenuMaster SET MENUINDEX =9305 WHERE MENUNUMBER=772
GO
UPDATE MenuMaster SET MENUINDEX =9306 WHERE MENUNUMBER=773
GO
UPDATE MenuMaster SET MENUINDEX =9307 WHERE MENUNUMBER=774
GO
UPDATE MenuMaster SET MENUINDEX =9308 WHERE MENUNUMBER=775
GO
UPDATE MenuMaster SET MENUINDEX =9309 WHERE MENUNUMBER=776
GO
UPDATE MenuMaster SET MENUINDEX =9310 WHERE MENUNUMBER=777
GO
UPDATE MenuMaster SET MENUINDEX =9311 WHERE MENUNUMBER=778
GO
UPDATE MenuMaster SET MENUINDEX =9401 WHERE MENUNUMBER=104
GO
UPDATE MenuMaster SET MENUINDEX =9402 WHERE MENUNUMBER=105
GO
UPDATE MenuMaster SET MENUINDEX =9403 WHERE MENUNUMBER=106
GO
UPDATE MenuMaster SET MENUINDEX =9404 WHERE MENUNUMBER=107
GO
UPDATE MenuMaster SET MENUINDEX =9405 WHERE MENUNUMBER=108
GO
UPDATE MenuMaster SET MENUINDEX =9406 WHERE MENUNUMBER=109
GO
UPDATE MenuMaster SET MENUINDEX =9407 WHERE MENUNUMBER=110
GO
UPDATE MenuMaster SET MENUINDEX =9408 WHERE MENUNUMBER=111
GO
UPDATE MenuMaster SET MENUINDEX =9409 WHERE MENUNUMBER=112
GO
UPDATE MenuMaster SET MENUINDEX =9410 WHERE MENUNUMBER=113
GO
UPDATE MenuMaster SET MENUINDEX =9411 WHERE MENUNUMBER=114
GO
UPDATE MenuMaster SET MENUINDEX =9412 WHERE MENUNUMBER=115
GO
UPDATE MenuMaster SET MENUINDEX =9501 WHERE MENUNUMBER=116
GO
UPDATE MenuMaster SET MENUINDEX =9502 WHERE MENUNUMBER=117
GO
UPDATE MenuMaster SET MENUINDEX =9503 WHERE MENUNUMBER=118
GO
UPDATE MenuMaster SET MENUINDEX =9504 WHERE MENUNUMBER=119
GO
UPDATE MenuMaster SET MENUINDEX =9505 WHERE MENUNUMBER=120
GO
UPDATE MenuMaster SET MENUINDEX =9506 WHERE MENUNUMBER=121
GO
UPDATE MenuMaster SET MENUINDEX =9507 WHERE MENUNUMBER=122
GO
UPDATE MenuMaster SET MENUINDEX =9601 WHERE MENUNUMBER=123
GO
UPDATE MenuMaster SET MENUINDEX =9602 WHERE MENUNUMBER=124
GO
UPDATE MenuMaster SET MENUINDEX =9603 WHERE MENUNUMBER=125
GO
UPDATE MenuMaster SET MENUINDEX =9604 WHERE MENUNUMBER=126
GO
UPDATE MenuMaster SET MENUINDEX =9605 WHERE MENUNUMBER=127
GO
UPDATE MenuMaster SET MENUINDEX =9606 WHERE MENUNUMBER=128
GO
UPDATE MenuMaster SET MENUINDEX =9607 WHERE MENUNUMBER=129
GO
UPDATE MenuMaster SET MENUINDEX =9608 WHERE MENUNUMBER=130
GO
UPDATE MenuMaster SET MENUINDEX =9609 WHERE MENUNUMBER=131
GO
UPDATE MenuMaster SET MENUINDEX =9701 WHERE MENUNUMBER=132
GO
UPDATE MenuMaster SET MENUINDEX =9702 WHERE MENUNUMBER=133
GO
UPDATE MenuMaster SET MENUINDEX =9703 WHERE MENUNUMBER=134
GO
UPDATE MenuMaster SET MENUINDEX =9704 WHERE MENUNUMBER=135
GO
UPDATE MenuMaster SET MENUINDEX =9705 WHERE MENUNUMBER=136
GO
UPDATE MenuMaster SET MENUINDEX =9706 WHERE MENUNUMBER=137
GO
UPDATE MenuMaster SET MENUINDEX =9707 WHERE MENUNUMBER=138
GO
UPDATE MenuMaster SET MENUINDEX =9708 WHERE MENUNUMBER=139
GO
UPDATE MenuMaster SET MENUINDEX =9709 WHERE MENUNUMBER=140
GO
UPDATE MenuMaster SET MENUINDEX =9710 WHERE MENUNUMBER=141
GO
UPDATE MenuMaster SET MENUINDEX =9711 WHERE MENUNUMBER=754
GO
UPDATE MenuMaster SET MENUINDEX =9801 WHERE MENUNUMBER=142
GO
UPDATE MenuMaster SET MENUINDEX =9802 WHERE MENUNUMBER=143
GO
UPDATE MenuMaster SET MENUINDEX =9803 WHERE MENUNUMBER=144
GO
UPDATE MenuMaster SET MENUINDEX =9804 WHERE MENUNUMBER=145
GO
UPDATE MenuMaster SET MENUINDEX =9901 WHERE MENUNUMBER=146
GO
UPDATE MenuMaster SET MENUINDEX =9902 WHERE MENUNUMBER=147
GO
UPDATE MenuMaster SET MENUINDEX =9903 WHERE MENUNUMBER=148
GO
UPDATE MenuMaster SET MENUINDEX =9904 WHERE MENUNUMBER=149
GO
UPDATE MenuMaster SET MENUINDEX =9905 WHERE MENUNUMBER=150
GO
UPDATE MenuMaster SET MENUINDEX =9906 WHERE MENUNUMBER=151
GO
UPDATE MenuMaster SET MENUINDEX =9907 WHERE MENUNUMBER=152
GO
UPDATE MenuMaster SET MENUINDEX =9908 WHERE MENUNUMBER=153
GO
UPDATE MenuMaster SET MENUINDEX =9909 WHERE MENUNUMBER=154
GO
UPDATE MenuMaster SET MENUINDEX =9910 WHERE MENUNUMBER=155
GO
UPDATE MenuMaster SET MENUINDEX =9911 WHERE MENUNUMBER=156
GO
UPDATE MenuMaster SET MENUINDEX =9912 WHERE MENUNUMBER=157
GO
UPDATE MenuMaster SET MENUINDEX =9913 WHERE MENUNUMBER=158
GO
UPDATE MenuMaster SET MENUINDEX =9914 WHERE MENUNUMBER=732
GO
UPDATE MenuMaster SET MENUINDEX =9915 WHERE MENUNUMBER=733
GO
UPDATE MenuMaster SET MENUINDEX =9916 WHERE MENUNUMBER=734
GO
UPDATE MenuMaster SET MENUINDEX =9917 WHERE MENUNUMBER=748
GO
--Version 10
UPDATE MenuMaster SET MENUINDEX =10101 WHERE MENUNUMBER=159
GO
UPDATE MenuMaster SET MENUINDEX =10102 WHERE MENUNUMBER=160
GO
UPDATE MenuMaster SET MENUINDEX =10103 WHERE MENUNUMBER=161
GO
UPDATE MenuMaster SET MENUINDEX =10104 WHERE MENUNUMBER=162
GO
UPDATE MenuMaster SET MENUINDEX =10105 WHERE MENUNUMBER=163
GO
UPDATE MenuMaster SET MENUINDEX =10106 WHERE MENUNUMBER=164
GO
UPDATE MenuMaster SET MENUINDEX =10107 WHERE MENUNUMBER=165
GO
UPDATE MenuMaster SET MENUINDEX =10108 WHERE MENUNUMBER=166
GO
UPDATE MenuMaster SET MENUINDEX =10109 WHERE MENUNUMBER=167
GO
UPDATE MenuMaster SET MENUINDEX =10110 WHERE MENUNUMBER=168
GO
UPDATE MenuMaster SET MENUINDEX =10111 WHERE MENUNUMBER=169
GO
UPDATE MenuMaster SET MENUINDEX =10112 WHERE MENUNUMBER=170
GO
UPDATE MenuMaster SET MENUINDEX =10113 WHERE MENUNUMBER=171
GO
UPDATE MenuMaster SET MENUINDEX =10201 WHERE MENUNUMBER=172
GO
UPDATE MenuMaster SET MENUINDEX =10202 WHERE MENUNUMBER=173
GO
UPDATE MenuMaster SET MENUINDEX =10203 WHERE MENUNUMBER=174
GO
UPDATE MenuMaster SET MENUINDEX =10204 WHERE MENUNUMBER=175
GO
UPDATE MenuMaster SET MENUINDEX =10205 WHERE MENUNUMBER=176
GO
UPDATE MenuMaster SET MENUINDEX =10206 WHERE MENUNUMBER=177
GO
UPDATE MenuMaster SET MENUINDEX =10207 WHERE MENUNUMBER=178
GO
UPDATE MenuMaster SET MENUINDEX =10208 WHERE MENUNUMBER=179
GO
UPDATE MenuMaster SET MENUINDEX =10209 WHERE MENUNUMBER=180
GO
UPDATE MenuMaster SET MENUINDEX =10210 WHERE MENUNUMBER=181
GO
UPDATE MenuMaster SET MENUINDEX =10211 WHERE MENUNUMBER=182
GO
UPDATE MenuMaster SET MENUINDEX =10301 WHERE MENUNUMBER=779
GO
UPDATE MenuMaster SET MENUINDEX =10302 WHERE MENUNUMBER=780
GO
UPDATE MenuMaster SET MENUINDEX =10303 WHERE MENUNUMBER=781
GO
UPDATE MenuMaster SET MENUINDEX =10304 WHERE MENUNUMBER=782
GO
UPDATE MenuMaster SET MENUINDEX =10305 WHERE MENUNUMBER=783
GO
UPDATE MenuMaster SET MENUINDEX =10306 WHERE MENUNUMBER=784
GO
UPDATE MenuMaster SET MENUINDEX =10307 WHERE MENUNUMBER=785
GO
UPDATE MenuMaster SET MENUINDEX =10308 WHERE MENUNUMBER=786
GO
UPDATE MenuMaster SET MENUINDEX =10309 WHERE MENUNUMBER=787
GO
UPDATE MenuMaster SET MENUINDEX =10310 WHERE MENUNUMBER=788
GO
UPDATE MenuMaster SET MENUINDEX =10311 WHERE MENUNUMBER=789
GO
UPDATE MenuMaster SET MENUINDEX =10312 WHERE MENUNUMBER=790
GO
UPDATE MenuMaster SET MENUINDEX =10401 WHERE MENUNUMBER=183
GO
UPDATE MenuMaster SET MENUINDEX =10402 WHERE MENUNUMBER=184
GO
UPDATE MenuMaster SET MENUINDEX =10403 WHERE MENUNUMBER=185
GO
UPDATE MenuMaster SET MENUINDEX =10404 WHERE MENUNUMBER=186
GO
UPDATE MenuMaster SET MENUINDEX =10405 WHERE MENUNUMBER=187
GO
UPDATE MenuMaster SET MENUINDEX =10406 WHERE MENUNUMBER=188
GO
UPDATE MenuMaster SET MENUINDEX =10407 WHERE MENUNUMBER=189
GO
UPDATE MenuMaster SET MENUINDEX =10408 WHERE MENUNUMBER=190
GO
UPDATE MenuMaster SET MENUINDEX =10409 WHERE MENUNUMBER=191
GO
UPDATE MenuMaster SET MENUINDEX =10410 WHERE MENUNUMBER=192
GO
UPDATE MenuMaster SET MENUINDEX =10411 WHERE MENUNUMBER=193
GO
UPDATE MenuMaster SET MENUINDEX =10412 WHERE MENUNUMBER=194
GO
UPDATE MenuMaster SET MENUINDEX =10501 WHERE MENUNUMBER=195
Go
UPDATE MenuMaster SET MENUINDEX =10502 WHERE MENUNUMBER=196
GO
UPDATE MenuMaster SET MENUINDEX =10503 WHERE MENUNUMBER=197
GO
UPDATE MenuMaster SET MENUINDEX =10504 WHERE MENUNUMBER=198
GO
UPDATE MenuMaster SET MENUINDEX =10505 WHERE MENUNUMBER=199
GO
UPDATE MenuMaster SET MENUINDEX =10506 WHERE MENUNUMBER=200
GO
UPDATE MenuMaster SET MENUINDEX =10507 WHERE MENUNUMBER=201
GO
UPDATE MenuMaster SET MENUINDEX =10601 WHERE MENUNUMBER=202
GO
UPDATE MenuMaster SET MENUINDEX =10602 WHERE MENUNUMBER=203
GO
UPDATE MenuMaster SET MENUINDEX =10603 WHERE MENUNUMBER=204
GO
UPDATE MenuMaster SET MENUINDEX =10604 WHERE MENUNUMBER=205
GO
UPDATE MenuMaster SET MENUINDEX =10605 WHERE MENUNUMBER=206
GO
UPDATE MenuMaster SET MENUINDEX =10606 WHERE MENUNUMBER=207
GO
UPDATE MenuMaster SET MENUINDEX =10607 WHERE MENUNUMBER=208
GO
UPDATE MenuMaster SET MENUINDEX =10608 WHERE MENUNUMBER=209
GO
UPDATE MenuMaster SET MENUINDEX =10609 WHERE MENUNUMBER=210
GO
UPDATE MenuMaster SET MENUINDEX =10701 WHERE MENUNUMBER=211
GO
UPDATE MenuMaster SET MENUINDEX =10702 WHERE MENUNUMBER=212
GO
UPDATE MenuMaster SET MENUINDEX =10703 WHERE MENUNUMBER=213
GO
UPDATE MenuMaster SET MENUINDEX =10704 WHERE MENUNUMBER=214
GO
UPDATE MenuMaster SET MENUINDEX =10705 WHERE MENUNUMBER=215
GO
UPDATE MenuMaster SET MENUINDEX =10706 WHERE MENUNUMBER=216
GO
UPDATE MenuMaster SET MENUINDEX =10707 WHERE MENUNUMBER=217
GO
UPDATE MenuMaster SET MENUINDEX =10708 WHERE MENUNUMBER=218
GO
UPDATE MenuMaster SET MENUINDEX =10709 WHERE MENUNUMBER=219
GO
UPDATE MenuMaster SET MENUINDEX =10710 WHERE MENUNUMBER=220
GO
UPDATE MenuMaster SET MENUINDEX =10711 WHERE MENUNUMBER=755
GO
UPDATE MenuMaster SET MENUINDEX =10801 WHERE MENUNUMBER=221
GO
UPDATE MenuMaster SET MENUINDEX =10802 WHERE MENUNUMBER=222
GO
UPDATE MenuMaster SET MENUINDEX =10803 WHERE MENUNUMBER=223
GO
UPDATE MenuMaster SET MENUINDEX =10804 WHERE MENUNUMBER=224
GO
UPDATE MenuMaster SET MENUINDEX =10901 WHERE MENUNUMBER=225
GO
UPDATE MenuMaster SET MENUINDEX =10902 WHERE MENUNUMBER=226
GO
UPDATE MenuMaster SET MENUINDEX =10903 WHERE MENUNUMBER=227
GO
UPDATE MenuMaster SET MENUINDEX =10904 WHERE MENUNUMBER=228
GO
UPDATE MenuMaster SET MENUINDEX =10905 WHERE MENUNUMBER=229
GO
UPDATE MenuMaster SET MENUINDEX =10906 WHERE MENUNUMBER=230
GO
UPDATE MenuMaster SET MENUINDEX =10907 WHERE MENUNUMBER=231
GO
UPDATE MenuMaster SET MENUINDEX =10908 WHERE MENUNUMBER=232
GO
UPDATE MenuMaster SET MENUINDEX =10909 WHERE MENUNUMBER=233
GO
UPDATE MenuMaster SET MENUINDEX =10910 WHERE MENUNUMBER=234
GO
UPDATE MenuMaster SET MENUINDEX =10911 WHERE MENUNUMBER=235
GO
UPDATE MenuMaster SET MENUINDEX =10912 WHERE MENUNUMBER=236
GO
UPDATE MenuMaster SET MENUINDEX =10913 WHERE MENUNUMBER=237
GO
UPDATE MenuMaster SET MENUINDEX =10914 WHERE MENUNUMBER=735
GO
UPDATE MenuMaster SET MENUINDEX =10915 WHERE MENUNUMBER=736
GO
UPDATE MenuMaster SET MENUINDEX =10916 WHERE MENUNUMBER=737
GO
UPDATE MenuMaster SET MENUINDEX =10917 WHERE MENUNUMBER=749
GO
--Version 11
UPDATE MenuMaster SET MENUINDEX =11101 WHERE MENUNUMBER=238
GO
UPDATE MenuMaster SET MENUINDEX =11102 WHERE MENUNUMBER=239
GO
UPDATE MenuMaster SET MENUINDEX =11103 WHERE MENUNUMBER=240
GO
UPDATE MenuMaster SET MENUINDEX =11104 WHERE MENUNUMBER=241
GO
UPDATE MenuMaster SET MENUINDEX =11105 WHERE MENUNUMBER=242
GO
UPDATE MenuMaster SET MENUINDEX =11106 WHERE MENUNUMBER=243
GO
UPDATE MenuMaster SET MENUINDEX =11107 WHERE MENUNUMBER=244
GO
UPDATE MenuMaster SET MENUINDEX =11108 WHERE MENUNUMBER=245
GO
UPDATE MenuMaster SET MENUINDEX =11109 WHERE MENUNUMBER=246
GO
UPDATE MenuMaster SET MENUINDEX =11110 WHERE MENUNUMBER=247
GO
UPDATE MenuMaster SET MENUINDEX =11111 WHERE MENUNUMBER=248
GO
UPDATE MenuMaster SET MENUINDEX =11112 WHERE MENUNUMBER=249
GO
UPDATE MenuMaster SET MENUINDEX =11113 WHERE MENUNUMBER=250
GO
UPDATE MenuMaster SET MENUINDEX =11201 WHERE MENUNUMBER=251
GO
UPDATE MenuMaster SET MENUINDEX =11202 WHERE MENUNUMBER=252
GO
UPDATE MenuMaster SET MENUINDEX =11203 WHERE MENUNUMBER=253
GO
UPDATE MenuMaster SET MENUINDEX =11204 WHERE MENUNUMBER=254
GO
UPDATE MenuMaster SET MENUINDEX =11205 WHERE MENUNUMBER=255
GO
UPDATE MenuMaster SET MENUINDEX =11206 WHERE MENUNUMBER=256
GO
UPDATE MenuMaster SET MENUINDEX =11207 WHERE MENUNUMBER=257
GO
UPDATE MenuMaster SET MENUINDEX =11208 WHERE MENUNUMBER=258
GO
UPDATE MenuMaster SET MENUINDEX =11209 WHERE MENUNUMBER=259
GO
UPDATE MenuMaster SET MENUINDEX =11210 WHERE MENUNUMBER=260
GO
UPDATE MenuMaster SET MENUINDEX =11211 WHERE MENUNUMBER=261
GO
UPDATE MenuMaster SET MENUINDEX =11301 WHERE MENUNUMBER=791
GO
UPDATE MenuMaster SET MENUINDEX =11302 WHERE MENUNUMBER=792
GO
UPDATE MenuMaster SET MENUINDEX =11303 WHERE MENUNUMBER=793
GO
UPDATE MenuMaster SET MENUINDEX =11304 WHERE MENUNUMBER=794
GO
UPDATE MenuMaster SET MENUINDEX =11305 WHERE MENUNUMBER=795
GO
UPDATE MenuMaster SET MENUINDEX =11306 WHERE MENUNUMBER=796
GO
UPDATE MenuMaster SET MENUINDEX =11307 WHERE MENUNUMBER=797
GO
UPDATE MenuMaster SET MENUINDEX =11308 WHERE MENUNUMBER=798
GO
UPDATE MenuMaster SET MENUINDEX =11309 WHERE MENUNUMBER=799
GO
UPDATE MenuMaster SET MENUINDEX =11310 WHERE MENUNUMBER=800
GO
UPDATE MenuMaster SET MENUINDEX =11311 WHERE MENUNUMBER=801
GO
UPDATE MenuMaster SET MENUINDEX =11312 WHERE MENUNUMBER=802
GO
UPDATE MenuMaster SET MENUINDEX =11401 WHERE MENUNUMBER=262
GO
UPDATE MenuMaster SET MENUINDEX =11402 WHERE MENUNUMBER=263
GO
UPDATE MenuMaster SET MENUINDEX =11403 WHERE MENUNUMBER=264
GO
UPDATE MenuMaster SET MENUINDEX =11404 WHERE MENUNUMBER=265
GO
UPDATE MenuMaster SET MENUINDEX =11405 WHERE MENUNUMBER=266
GO
UPDATE MenuMaster SET MENUINDEX =11406 WHERE MENUNUMBER=267
GO
UPDATE MenuMaster SET MENUINDEX =11407 WHERE MENUNUMBER=268
GO
UPDATE MenuMaster SET MENUINDEX =11408 WHERE MENUNUMBER=269
GO
UPDATE MenuMaster SET MENUINDEX =11409 WHERE MENUNUMBER=270
GO
UPDATE MenuMaster SET MENUINDEX =11410 WHERE MENUNUMBER=271
GO
UPDATE MenuMaster SET MENUINDEX =11411 WHERE MENUNUMBER=272
GO
UPDATE MenuMaster SET MENUINDEX =11412 WHERE MENUNUMBER=273
GO
UPDATE MenuMaster SET MENUINDEX =11413 WHERE MENUNUMBER=274
GO
UPDATE MenuMaster SET MENUINDEX =11501 WHERE MENUNUMBER=275
GO
UPDATE MenuMaster SET MENUINDEX =11502 WHERE MENUNUMBER=276
GO
UPDATE MenuMaster SET MENUINDEX =11503 WHERE MENUNUMBER=277
GO
UPDATE MenuMaster SET MENUINDEX =11504 WHERE MENUNUMBER=278
GO
UPDATE MenuMaster SET MENUINDEX =11505 WHERE MENUNUMBER=279
GO
UPDATE MenuMaster SET MENUINDEX =11506 WHERE MENUNUMBER=280
GO
UPDATE MenuMaster SET MENUINDEX =11507 WHERE MENUNUMBER=281
GO
UPDATE MenuMaster SET MENUINDEX =11601 WHERE MENUNUMBER=282
GO
UPDATE MenuMaster SET MENUINDEX =11602 WHERE MENUNUMBER=283
GO
UPDATE MenuMaster SET MENUINDEX =11603 WHERE MENUNUMBER=284
GO
UPDATE MenuMaster SET MENUINDEX =11604 WHERE MENUNUMBER=285
GO
UPDATE MenuMaster SET MENUINDEX =11605 WHERE MENUNUMBER=286
GO
UPDATE MenuMaster SET MENUINDEX =11606 WHERE MENUNUMBER=287
GO
UPDATE MenuMaster SET MENUINDEX =11607 WHERE MENUNUMBER=288
GO
UPDATE MenuMaster SET MENUINDEX =11608 WHERE MENUNUMBER=289
GO
UPDATE MenuMaster SET MENUINDEX =11609 WHERE MENUNUMBER=290
GO
UPDATE MenuMaster SET MENUINDEX =11610 WHERE MENUNUMBER=291
GO
UPDATE MenuMaster SET MENUINDEX =11701 WHERE MENUNUMBER=292
GO
UPDATE MenuMaster SET MENUINDEX =11702 WHERE MENUNUMBER=293
GO
UPDATE MenuMaster SET MENUINDEX =11703 WHERE MENUNUMBER=294
GO
UPDATE MenuMaster SET MENUINDEX =11704 WHERE MENUNUMBER=295
GO
UPDATE MenuMaster SET MENUINDEX =11705 WHERE MENUNUMBER=296
GO
UPDATE MenuMaster SET MENUINDEX =11706 WHERE MENUNUMBER=297
GO
UPDATE MenuMaster SET MENUINDEX =11707 WHERE MENUNUMBER=298
GO
UPDATE MenuMaster SET MENUINDEX =11708 WHERE MENUNUMBER=299
GO
UPDATE MenuMaster SET MENUINDEX =11709 WHERE MENUNUMBER=300
GO
UPDATE MenuMaster SET MENUINDEX =11710 WHERE MENUNUMBER=301
GO
UPDATE MenuMaster SET MENUINDEX =11711 WHERE MENUNUMBER=302
GO
UPDATE MenuMaster SET MENUINDEX =11712 WHERE MENUNUMBER=303
GO
UPDATE MenuMaster SET MENUINDEX =11713 WHERE MENUNUMBER=756
GO
UPDATE MenuMaster SET MENUINDEX =11801 WHERE MENUNUMBER=304
GO
UPDATE MenuMaster SET MENUINDEX =11802 WHERE MENUNUMBER=305
GO
UPDATE MenuMaster SET MENUINDEX =11803 WHERE MENUNUMBER=306
GO
UPDATE MenuMaster SET MENUINDEX =11804 WHERE MENUNUMBER=307
GO
UPDATE MenuMaster SET MENUINDEX =11901 WHERE MENUNUMBER=308
GO
UPDATE MenuMaster SET MENUINDEX =11902 WHERE MENUNUMBER=309
GO
UPDATE MenuMaster SET MENUINDEX =11903 WHERE MENUNUMBER=310
GO
UPDATE MenuMaster SET MENUINDEX =11904 WHERE MENUNUMBER=311
GO
UPDATE MenuMaster SET MENUINDEX =11905 WHERE MENUNUMBER=312
GO
UPDATE MenuMaster SET MENUINDEX =11906 WHERE MENUNUMBER=313
GO
UPDATE MenuMaster SET MENUINDEX =11907 WHERE MENUNUMBER=314
GO
UPDATE MenuMaster SET MENUINDEX =11908 WHERE MENUNUMBER=315
Go
UPDATE MenuMaster SET MENUINDEX =11909 WHERE MENUNUMBER=316
GO
UPDATE MenuMaster SET MENUINDEX =11910 WHERE MENUNUMBER=317
GO
UPDATE MenuMaster SET MENUINDEX =11911 WHERE MENUNUMBER=318
GO
UPDATE MenuMaster SET MENUINDEX =11912 WHERE MENUNUMBER=319
GO
UPDATE MenuMaster SET MENUINDEX =11913 WHERE MENUNUMBER=320
GO
UPDATE MenuMaster SET MENUINDEX =11914 WHERE MENUNUMBER=738
GO
UPDATE MenuMaster SET MENUINDEX =11915 WHERE MENUNUMBER=739
GO
UPDATE MenuMaster SET MENUINDEX =11916 WHERE MENUNUMBER=740
GO
UPDATE MenuMaster SET MENUINDEX =11917 WHERE MENUNUMBER=750
GO
--Version 12
UPDATE MenuMaster SET MENUINDEX =12101 WHERE MENUNUMBER=321
GO
UPDATE MenuMaster SET MENUINDEX =12102 WHERE MENUNUMBER=322
GO
UPDATE MenuMaster SET MENUINDEX =12103 WHERE MENUNUMBER=323
GO
UPDATE MenuMaster SET MENUINDEX =12104 WHERE MENUNUMBER=324
GO
UPDATE MenuMaster SET MENUINDEX =12105 WHERE MENUNUMBER=325
GO
UPDATE MenuMaster SET MENUINDEX =12106 WHERE MENUNUMBER=326
GO
UPDATE MenuMaster SET MENUINDEX =12107 WHERE MENUNUMBER=327
GO
UPDATE MenuMaster SET MENUINDEX =12108 WHERE MENUNUMBER=328
GO
UPDATE MenuMaster SET MENUINDEX =12109 WHERE MENUNUMBER=329
GO
UPDATE MenuMaster SET MENUINDEX =12110 WHERE MENUNUMBER=330
GO
UPDATE MenuMaster SET MENUINDEX =12201 WHERE MENUNUMBER=331
GO
UPDATE MenuMaster SET MENUINDEX =12202 WHERE MENUNUMBER=332
GO
UPDATE MenuMaster SET MENUINDEX =12203 WHERE MENUNUMBER=333
GO
UPDATE MenuMaster SET MENUINDEX =12204 WHERE MENUNUMBER=334
GO
UPDATE MenuMaster SET MENUINDEX =12205 WHERE MENUNUMBER=335
GO
UPDATE MenuMaster SET MENUINDEX =12206 WHERE MENUNUMBER=336
GO
UPDATE MenuMaster SET MENUINDEX =12207 WHERE MENUNUMBER=337
GO
UPDATE MenuMaster SET MENUINDEX =12208 WHERE MENUNUMBER=338
GO
UPDATE MenuMaster SET MENUINDEX =12209 WHERE MENUNUMBER=339
GO
UPDATE MenuMaster SET MENUINDEX =12210 WHERE MENUNUMBER=340
GO
UPDATE MenuMaster SET MENUINDEX =12211 WHERE MENUNUMBER=341
GO
UPDATE MenuMaster SET MENUINDEX =12212 WHERE MENUNUMBER=342
GO
UPDATE MenuMaster SET MENUINDEX =12213 WHERE MENUNUMBER=343
GO
UPDATE MenuMaster SET MENUINDEX =12214 WHERE MENUNUMBER=344
GO
UPDATE MenuMaster SET MENUINDEX =12215 WHERE MENUNUMBER=345
GO
UPDATE MenuMaster SET MENUINDEX =12216 WHERE MENUNUMBER=346
GO
UPDATE MenuMaster SET MENUINDEX =12217 WHERE MENUNUMBER=347
GO
UPDATE MenuMaster SET MENUINDEX =12218 WHERE MENUNUMBER=348
Go
UPDATE MenuMaster SET MENUINDEX =12219 WHERE MENUNUMBER=349
GO
UPDATE MenuMaster SET MENUINDEX =12220 WHERE MENUNUMBER=350
GO
UPDATE MenuMaster SET MENUINDEX =12221 WHERE MENUNUMBER=351
GO
UPDATE MenuMaster SET MENUINDEX =12222 WHERE MENUNUMBER=352
GO
UPDATE MenuMaster SET MENUINDEX =12223 WHERE MENUNUMBER=353
GO
UPDATE MenuMaster SET MENUINDEX =12224 WHERE MENUNUMBER=354
GO
UPDATE MenuMaster SET MENUINDEX =12225 WHERE MENUNUMBER=355
GO
UPDATE MenuMaster SET MENUINDEX =12226 WHERE MENUNUMBER=356
GO
UPDATE MenuMaster SET MENUINDEX =12227 WHERE MENUNUMBER=357
GO
UPDATE MenuMaster SET MENUINDEX =12228 WHERE MENUNUMBER=358
GO
UPDATE MenuMaster SET MENUINDEX =12229 WHERE MENUNUMBER=359
GO
UPDATE MenuMaster SET MENUINDEX =12230 WHERE MENUNUMBER=360
GO
UPDATE MenuMaster SET MENUINDEX =12231 WHERE MENUNUMBER=361
GO
UPDATE MenuMaster SET MENUINDEX =12232 WHERE MENUNUMBER=362
GO
UPDATE MenuMaster SET MENUINDEX =12233 WHERE MENUNUMBER=363
GO
UPDATE MenuMaster SET MENUINDEX =12234 WHERE MENUNUMBER=364
GO
UPDATE MenuMaster SET MENUINDEX =12235 WHERE MENUNUMBER=365
GO
UPDATE MenuMaster SET MENUINDEX =12236 WHERE MENUNUMBER=366
GO
UPDATE MenuMaster SET MENUINDEX =12237 WHERE MENUNUMBER=367
GO
UPDATE MenuMaster SET MENUINDEX =12238 WHERE MENUNUMBER=368
GO
UPDATE MenuMaster SET MENUINDEX =12239 WHERE MENUNUMBER=369
GO
UPDATE MenuMaster SET MENUINDEX =12240 WHERE MENUNUMBER=370
GO
UPDATE MenuMaster SET MENUINDEX =12241 WHERE MENUNUMBER=371
GO
UPDATE MenuMaster SET MENUINDEX =12242 WHERE MENUNUMBER=372
GO
UPDATE MenuMaster SET MENUINDEX =12243 WHERE MENUNUMBER=373
GO
UPDATE MenuMaster SET MENUINDEX =12244 WHERE MENUNUMBER=374
GO
UPDATE MenuMaster SET MENUINDEX =12245 WHERE MENUNUMBER=375
GO
UPDATE MenuMaster SET MENUINDEX =12246 WHERE MENUNUMBER=376
GO
UPDATE MenuMaster SET MENUINDEX =12301 WHERE MENUNUMBER=377
GO
UPDATE MenuMaster SET MENUINDEX =12302 WHERE MENUNUMBER=378
GO
UPDATE MenuMaster SET MENUINDEX =12303 WHERE MENUNUMBER=379
GO
UPDATE MenuMaster SET MENUINDEX =12304 WHERE MENUNUMBER=380
GO
UPDATE MenuMaster SET MENUINDEX =12305 WHERE MENUNUMBER=381
GO
UPDATE MenuMaster SET MENUINDEX =12306 WHERE MENUNUMBER=382
GO
UPDATE MenuMaster SET MENUINDEX =12307 WHERE MENUNUMBER=383
GO
UPDATE MenuMaster SET MENUINDEX =12308 WHERE MENUNUMBER=384
GO
UPDATE MenuMaster SET MENUINDEX =12309 WHERE MENUNUMBER=385
GO
UPDATE MenuMaster SET MENUINDEX =12310 WHERE MENUNUMBER=386
GO
UPDATE MenuMaster SET MENUINDEX =12311 WHERE MENUNUMBER=387
GO
UPDATE MenuMaster SET MENUINDEX =12312 WHERE MENUNUMBER=388
GO
UPDATE MenuMaster SET MENUINDEX =12313 WHERE MENUNUMBER=389
GO
UPDATE MenuMaster SET MENUINDEX =12314 WHERE MENUNUMBER=390
GO
UPDATE MenuMaster SET MENUINDEX =12315 WHERE MENUNUMBER=391
GO
UPDATE MenuMaster SET MENUINDEX =12316 WHERE MENUNUMBER=392
GO
UPDATE MenuMaster SET MENUINDEX =12317 WHERE MENUNUMBER=393
GO
UPDATE MenuMaster SET MENUINDEX =12318 WHERE MENUNUMBER=394
GO
UPDATE MenuMaster SET MENUINDEX =12319 WHERE MENUNUMBER=395
GO
UPDATE MenuMaster SET MENUINDEX =12320 WHERE MENUNUMBER=396
GO
UPDATE MenuMaster SET MENUINDEX =12401 WHERE MENUNUMBER=397
GO
UPDATE MenuMaster SET MENUINDEX =12402 WHERE MENUNUMBER=398
GO
UPDATE MenuMaster SET MENUINDEX =12403 WHERE MENUNUMBER=399
GO
UPDATE MenuMaster SET MENUINDEX =12404 WHERE MENUNUMBER=400
GO
UPDATE MenuMaster SET MENUINDEX =12405 WHERE MENUNUMBER=401
GO
UPDATE MenuMaster SET MENUINDEX =12406 WHERE MENUNUMBER=402
GO
UPDATE MenuMaster SET MENUINDEX =12407 WHERE MENUNUMBER=403
GO
UPDATE MenuMaster SET MENUINDEX =12408 WHERE MENUNUMBER=404
GO
UPDATE MenuMaster SET MENUINDEX =12409 WHERE MENUNUMBER=405
GO
UPDATE MenuMaster SET MENUINDEX =12410 WHERE MENUNUMBER=406
GO
UPDATE MenuMaster SET MENUINDEX =12411 WHERE MENUNUMBER=407
GO
UPDATE MenuMaster SET MENUINDEX =12412 WHERE MENUNUMBER=408
GO
UPDATE MenuMaster SET MENUINDEX =12413 WHERE MENUNUMBER=409
GO
UPDATE MenuMaster SET MENUINDEX =12414 WHERE MENUNUMBER=410
GO
UPDATE MenuMaster SET MENUINDEX =12415 WHERE MENUNUMBER=411
GO
UPDATE MenuMaster SET MENUINDEX =12416 WHERE MENUNUMBER=412
GO
UPDATE MenuMaster SET MENUINDEX =12417 WHERE MENUNUMBER=413
GO
UPDATE MenuMaster SET MENUINDEX =12418 WHERE MENUNUMBER=414
GO
UPDATE MenuMaster SET MENUINDEX =12419 WHERE MENUNUMBER=415
GO
UPDATE MenuMaster SET MENUINDEX =12420 WHERE MENUNUMBER=416
GO
UPDATE MenuMaster SET MENUINDEX =12421 WHERE MENUNUMBER=417
GO
UPDATE MenuMaster SET MENUINDEX =12422 WHERE MENUNUMBER=418
GO
UPDATE MenuMaster SET MENUINDEX =12423 WHERE MENUNUMBER=419
GO
UPDATE MenuMaster SET MENUINDEX =12501 WHERE MENUNUMBER=420
GO
UPDATE MenuMaster SET MENUINDEX =12502 WHERE MENUNUMBER=421
GO
UPDATE MenuMaster SET MENUINDEX =12503 WHERE MENUNUMBER=422
GO
UPDATE MenuMaster SET MENUINDEX =12504 WHERE MENUNUMBER=423
GO
UPDATE MenuMaster SET MENUINDEX =12505 WHERE MENUNUMBER=424
GO
UPDATE MenuMaster SET MENUINDEX =12506 WHERE MENUNUMBER=425
GO
UPDATE MenuMaster SET MENUINDEX =12507 WHERE MENUNUMBER=426
GO
UPDATE MenuMaster SET MENUINDEX =12508 WHERE MENUNUMBER=427
GO
UPDATE MenuMaster SET MENUINDEX =12509 WHERE MENUNUMBER=428
GO
UPDATE MenuMaster SET MENUINDEX =12510 WHERE MENUNUMBER=429
GO
UPDATE MenuMaster SET MENUINDEX =12511 WHERE MENUNUMBER=430
GO
UPDATE MenuMaster SET MENUINDEX =12512 WHERE MENUNUMBER=431
GO
UPDATE MenuMaster SET MENUINDEX =12513 WHERE MENUNUMBER=432
GO
UPDATE MenuMaster SET MENUINDEX =12514 WHERE MENUNUMBER=433
GO
UPDATE MenuMaster SET MENUINDEX =12515 WHERE MENUNUMBER=434
Go
UPDATE MenuMaster SET MENUINDEX =12516 WHERE MENUNUMBER=435
Go
UPDATE MenuMaster SET MENUINDEX =12517 WHERE MENUNUMBER=436
GO
UPDATE MenuMaster SET MENUINDEX =12518 WHERE MENUNUMBER=437
GO
UPDATE MenuMaster SET MENUINDEX =12601 WHERE MENUNUMBER=438
GO
UPDATE MenuMaster SET MENUINDEX =12602 WHERE MENUNUMBER=439
GO
UPDATE MenuMaster SET MENUINDEX =12603 WHERE MENUNUMBER=440
GO
UPDATE MenuMaster SET MENUINDEX =12604 WHERE MENUNUMBER=441
GO
UPDATE MenuMaster SET MENUINDEX =12605 WHERE MENUNUMBER=442
GO
UPDATE MenuMaster SET MENUINDEX =12606 WHERE MENUNUMBER=443
GO
UPDATE MenuMaster SET MENUINDEX =12607 WHERE MENUNUMBER=444
GO
UPDATE MenuMaster SET MENUINDEX =12608 WHERE MENUNUMBER=445
GO
UPDATE MenuMaster SET MENUINDEX =12609 WHERE MENUNUMBER=446
GO
UPDATE MenuMaster SET MENUINDEX =12610 WHERE MENUNUMBER=447
GO
UPDATE MenuMaster SET MENUINDEX =12611 WHERE MENUNUMBER=448
Go
UPDATE MenuMaster SET MENUINDEX =12612 WHERE MENUNUMBER=449
Go
UPDATE MenuMaster SET MENUINDEX =12613 WHERE MENUNUMBER=450
GO
UPDATE MenuMaster SET MENUINDEX =12614 WHERE MENUNUMBER=451
GO
UPDATE MenuMaster SET MENUINDEX =12615 WHERE MENUNUMBER=452
GO
UPDATE MenuMaster SET MENUINDEX =12616 WHERE MENUNUMBER=453
GO
UPDATE MenuMaster SET MENUINDEX =12617 WHERE MENUNUMBER=454
GO
UPDATE MenuMaster SET MENUINDEX =12618 WHERE MENUNUMBER=455
GO
UPDATE MenuMaster SET MENUINDEX =12701 WHERE MENUNUMBER=456
GO
UPDATE MenuMaster SET MENUINDEX =12702 WHERE MENUNUMBER=457
GO
UPDATE MenuMaster SET MENUINDEX =12703 WHERE MENUNUMBER=458
GO
UPDATE MenuMaster SET MENUINDEX =12704 WHERE MENUNUMBER=459
GO
UPDATE MenuMaster SET MENUINDEX =12705 WHERE MENUNUMBER=460
Go
UPDATE MenuMaster SET MENUINDEX =12706 WHERE MENUNUMBER=461
GO
UPDATE MenuMaster SET MENUINDEX =12707 WHERE MENUNUMBER=462
GO
UPDATE MenuMaster SET MENUINDEX =12708 WHERE MENUNUMBER=463
GO
UPDATE MenuMaster SET MENUINDEX =12709 WHERE MENUNUMBER=464
GO
UPDATE MenuMaster SET MENUINDEX =12801 WHERE MENUNUMBER=465
GO
UPDATE MenuMaster SET MENUINDEX =12802 WHERE MENUNUMBER=466
GO
UPDATE MenuMaster SET MENUINDEX =12803 WHERE MENUNUMBER=467
GO
UPDATE MenuMaster SET MENUINDEX =12804 WHERE MENUNUMBER=468
GO
UPDATE MenuMaster SET MENUINDEX =12805 WHERE MENUNUMBER=469
GO
UPDATE MenuMaster SET MENUINDEX =12806 WHERE MENUNUMBER=470
GO
UPDATE MenuMaster SET MENUINDEX =12807 WHERE MENUNUMBER=471
GO
UPDATE MenuMaster SET MENUINDEX =12808 WHERE MENUNUMBER=472
GO
UPDATE MenuMaster SET MENUINDEX =12809 WHERE MENUNUMBER=473
GO
UPDATE MenuMaster SET MENUINDEX =12810 WHERE MENUNUMBER=474
GO
UPDATE MenuMaster SET MENUINDEX =12811 WHERE MENUNUMBER=475
GO
UPDATE MenuMaster SET MENUINDEX =12812 WHERE MENUNUMBER=476
GO
UPDATE MenuMaster SET MENUINDEX =12813 WHERE MENUNUMBER=477
GO
UPDATE MenuMaster SET MENUINDEX =12814 WHERE MENUNUMBER=478
GO
UPDATE MenuMaster SET MENUINDEX =12815 WHERE MENUNUMBER=479
GO
UPDATE MenuMaster SET MENUINDEX =12816 WHERE MENUNUMBER=480
GO
UPDATE MenuMaster SET MENUINDEX =12817 WHERE MENUNUMBER=481
GO
UPDATE MenuMaster SET MENUINDEX =12818 WHERE MENUNUMBER=482
Go
UPDATE MenuMaster SET MENUINDEX =12819 WHERE MENUNUMBER=483
GO
UPDATE MenuMaster SET MENUINDEX =12820 WHERE MENUNUMBER=484
GO
UPDATE MenuMaster SET MENUINDEX =12821 WHERE MENUNUMBER=485
GO
UPDATE MenuMaster SET MENUINDEX =12822 WHERE MENUNUMBER=486
GO
UPDATE MenuMaster SET MENUINDEX =12823 WHERE MENUNUMBER=487
GO
UPDATE MenuMaster SET MENUINDEX =12824 WHERE MENUNUMBER=488
GO
UPDATE MenuMaster SET MENUINDEX =12901 WHERE MENUNUMBER=489
GO
UPDATE MenuMaster SET MENUINDEX =12902 WHERE MENUNUMBER=490
GO
UPDATE MenuMaster SET MENUINDEX =12903 WHERE MENUNUMBER=491
GO
UPDATE MenuMaster SET MENUINDEX =12904 WHERE MENUNUMBER=492
GO
UPDATE MenuMaster SET MENUINDEX =12905 WHERE MENUNUMBER=493
GO
UPDATE MenuMaster SET MENUINDEX =12906 WHERE MENUNUMBER=494
GO
UPDATE MenuMaster SET MENUINDEX =12907 WHERE MENUNUMBER=495
GO
UPDATE MenuMaster SET MENUINDEX =12908 WHERE MENUNUMBER=496
GO
UPDATE MenuMaster SET MENUINDEX =12909 WHERE MENUNUMBER=497
GO
UPDATE MenuMaster SET MENUINDEX =12910 WHERE MENUNUMBER=498
Go
UPDATE MenuMaster SET MENUINDEX =12911 WHERE MENUNUMBER=499
GO
UPDATE MenuMaster SET MENUINDEX =12912 WHERE MENUNUMBER=500
GO
UPDATE MenuMaster SET MENUINDEX =12913 WHERE MENUNUMBER=501
GO
UPDATE MenuMaster SET MENUINDEX =12914 WHERE MENUNUMBER=502
GO
UPDATE MenuMaster SET MENUINDEX =12915 WHERE MENUNUMBER=503
GO
UPDATE MenuMaster SET MENUINDEX =12916 WHERE MENUNUMBER=504
GO
UPDATE MenuMaster SET MENUINDEX =12917 WHERE MENUNUMBER=505
GO
UPDATE MenuMaster SET MENUINDEX =12918 WHERE MENUNUMBER=506
GO
UPDATE MenuMaster SET MENUINDEX =12970 WHERE MENUNUMBER=507
GO
UPDATE MenuMaster SET MENUINDEX =12971 WHERE MENUNUMBER=508
GO
UPDATE MenuMaster SET MENUINDEX =12972 WHERE MENUNUMBER=509
GO
UPDATE MenuMaster SET MENUINDEX =12973 WHERE MENUNUMBER=510
GO
UPDATE MenuMaster SET MENUINDEX =12974 WHERE MENUNUMBER=511
GO
UPDATE MenuMaster SET MENUINDEX =12975 WHERE MENUNUMBER=512
GO
UPDATE MenuMaster SET MENUINDEX =12976 WHERE MENUNUMBER=513
GO
UPDATE MenuMaster SET MENUINDEX =12977 WHERE MENUNUMBER=514
GO
UPDATE MenuMaster SET MENUINDEX =12978 WHERE MENUNUMBER=515
GO
UPDATE MenuMaster SET MENUINDEX =12979 WHERE MENUNUMBER=516
GO
UPDATE MenuMaster SET MENUINDEX =12980 WHERE MENUNUMBER=517
GO
UPDATE MenuMaster SET MENUINDEX =12981 WHERE MENUNUMBER=518
GO
UPDATE MenuMaster SET MENUINDEX =12982 WHERE MENUNUMBER=519
GO
UPDATE MenuMaster SET MENUINDEX =12983 WHERE MENUNUMBER=741
GO
UPDATE MenuMaster SET MENUINDEX =12984 WHERE MENUNUMBER=742
GO
UPDATE MenuMaster SET MENUINDEX =12985 WHERE MENUNUMBER=743
GO
UPDATE MenuMaster SET MENUINDEX =12986 WHERE MENUNUMBER=751
GO
--Version 14 
UPDATE MenuMaster SET MENUINDEX =13101 WHERE MENUNUMBER=520
GO
UPDATE MenuMaster SET MENUINDEX =13102 WHERE MENUNUMBER=521
GO
UPDATE MenuMaster SET MENUINDEX =13103 WHERE MENUNUMBER=522
GO
UPDATE MenuMaster SET MENUINDEX =13104 WHERE MENUNUMBER=523
GO
UPDATE MenuMaster SET MENUINDEX =13105 WHERE MENUNUMBER=524
GO
UPDATE MenuMaster SET MENUINDEX =13106 WHERE MENUNUMBER=525
GO
UPDATE MenuMaster SET MENUINDEX =13107 WHERE MENUNUMBER=526
GO
UPDATE MenuMaster SET MENUINDEX =13108 WHERE MENUNUMBER=527
GO
UPDATE MenuMaster SET MENUINDEX =13109 WHERE MENUNUMBER=528
GO
UPDATE MenuMaster SET MENUINDEX =13110 WHERE MENUNUMBER=529
GO
UPDATE MenuMaster SET MENUINDEX =13111 WHERE MENUNUMBER=530
GO
UPDATE MenuMaster SET MENUINDEX =13112 WHERE MENUNUMBER=531
GO
UPDATE MenuMaster SET MENUINDEX =13201 WHERE MENUNUMBER=532
GO
UPDATE MenuMaster SET MENUINDEX =13202 WHERE MENUNUMBER=533
GO
UPDATE MenuMaster SET MENUINDEX =13203 WHERE MENUNUMBER=534
GO
UPDATE MenuMaster SET MENUINDEX =13204 WHERE MENUNUMBER=535
GO
UPDATE MenuMaster SET MENUINDEX =13205 WHERE MENUNUMBER=536
GO
UPDATE MenuMaster SET MENUINDEX =13206 WHERE MENUNUMBER=537
GO
UPDATE MenuMaster SET MENUINDEX =13207 WHERE MENUNUMBER=538
GO
UPDATE MenuMaster SET MENUINDEX =13208 WHERE MENUNUMBER=539
GO
UPDATE MenuMaster SET MENUINDEX =13209 WHERE MENUNUMBER=540
GO
UPDATE MenuMaster SET MENUINDEX =13210 WHERE MENUNUMBER=541
GO
UPDATE MenuMaster SET MENUINDEX =13211 WHERE MENUNUMBER=542
GO
UPDATE MenuMaster SET MENUINDEX =13212 WHERE MENUNUMBER=543
GO
UPDATE MenuMaster SET MENUINDEX =13213 WHERE MENUNUMBER=544
GO
UPDATE MenuMaster SET MENUINDEX =13214 WHERE MENUNUMBER=545
GO
UPDATE MenuMaster SET MENUINDEX =13215 WHERE MENUNUMBER=546
GO
UPDATE MenuMaster SET MENUINDEX =13216 WHERE MENUNUMBER=547
GO
UPDATE MenuMaster SET MENUINDEX =13217 WHERE MENUNUMBER=548
GO
UPDATE MenuMaster SET MENUINDEX =13218 WHERE MENUNUMBER=549
Go
UPDATE MenuMaster SET MENUINDEX =13219 WHERE MENUNUMBER=550
GO
UPDATE MenuMaster SET MENUINDEX =13220 WHERE MENUNUMBER=551
GO
UPDATE MenuMaster SET MENUINDEX =13221 WHERE MENUNUMBER=552
GO
UPDATE MenuMaster SET MENUINDEX =13222 WHERE MENUNUMBER=553
GO
UPDATE MenuMaster SET MENUINDEX =13223 WHERE MENUNUMBER=554
GO
UPDATE MenuMaster SET MENUINDEX =13224 WHERE MENUNUMBER=555
GO
UPDATE MenuMaster SET MENUINDEX =13225 WHERE MENUNUMBER=556
GO
UPDATE MenuMaster SET MENUINDEX =13226 WHERE MENUNUMBER=557
GO
UPDATE MenuMaster SET MENUINDEX =13227 WHERE MENUNUMBER=558
GO
UPDATE MenuMaster SET MENUINDEX =13228 WHERE MENUNUMBER=559
GO
UPDATE MenuMaster SET MENUINDEX =13229 WHERE MENUNUMBER=560
GO
UPDATE MenuMaster SET MENUINDEX =13230 WHERE MENUNUMBER=561
GO
UPDATE MenuMaster SET MENUINDEX =13231 WHERE MENUNUMBER=562
GO
UPDATE MenuMaster SET MENUINDEX =13232 WHERE MENUNUMBER=563
GO
UPDATE MenuMaster SET MENUINDEX =13233 WHERE MENUNUMBER=564
GO
UPDATE MenuMaster SET MENUINDEX =13234 WHERE MENUNUMBER=565
GO
UPDATE MenuMaster SET MENUINDEX =13235 WHERE MENUNUMBER=566
GO
UPDATE MenuMaster SET MENUINDEX =13236 WHERE MENUNUMBER=567
GO
UPDATE MenuMaster SET MENUINDEX =13237 WHERE MENUNUMBER=568
GO
UPDATE MenuMaster SET MENUINDEX =13238 WHERE MENUNUMBER=569
GO
UPDATE MenuMaster SET MENUINDEX =13239 WHERE MENUNUMBER=570
GO
UPDATE MenuMaster SET MENUINDEX =13240 WHERE MENUNUMBER=571
GO
UPDATE MenuMaster SET MENUINDEX =13241 WHERE MENUNUMBER=572
GO
UPDATE MenuMaster SET MENUINDEX =13242 WHERE MENUNUMBER=573
GO
UPDATE MenuMaster SET MENUINDEX =13243 WHERE MENUNUMBER=574
GO
UPDATE MenuMaster SET MENUINDEX =13244 WHERE MENUNUMBER=575
GO
UPDATE MenuMaster SET MENUINDEX =13245 WHERE MENUNUMBER=576
GO
UPDATE MenuMaster SET MENUINDEX =13246 WHERE MENUNUMBER=577
GO
UPDATE MenuMaster SET MENUINDEX =13301 WHERE MENUNUMBER=578
GO
UPDATE MenuMaster SET MENUINDEX =13302 WHERE MENUNUMBER=579
GO
UPDATE MenuMaster SET MENUINDEX =13303 WHERE MENUNUMBER=580
GO
UPDATE MenuMaster SET MENUINDEX =13304 WHERE MENUNUMBER=581
GO
UPDATE MenuMaster SET MENUINDEX =13305 WHERE MENUNUMBER=582
GO
UPDATE MenuMaster SET MENUINDEX =13306 WHERE MENUNUMBER=583
GO
UPDATE MenuMaster SET MENUINDEX =13307 WHERE MENUNUMBER=584
GO
UPDATE MenuMaster SET MENUINDEX =13308 WHERE MENUNUMBER=585
GO
UPDATE MenuMaster SET MENUINDEX =13309 WHERE MENUNUMBER=586
GO
UPDATE MenuMaster SET MENUINDEX =13310 WHERE MENUNUMBER=587
GO
UPDATE MenuMaster SET MENUINDEX =13311 WHERE MENUNUMBER=588
GO
UPDATE MenuMaster SET MENUINDEX =13312 WHERE MENUNUMBER=589
GO
UPDATE MenuMaster SET MENUINDEX =13313 WHERE MENUNUMBER=590
GO
UPDATE MenuMaster SET MENUINDEX =13314 WHERE MENUNUMBER=591
GO
UPDATE MenuMaster SET MENUINDEX =13315 WHERE MENUNUMBER=592
GO
UPDATE MenuMaster SET MENUINDEX =13316 WHERE MENUNUMBER=593
GO
UPDATE MenuMaster SET MENUINDEX =13317 WHERE MENUNUMBER=594
GO
UPDATE MenuMaster SET MENUINDEX =13318 WHERE MENUNUMBER=595
GO
UPDATE MenuMaster SET MENUINDEX =13319 WHERE MENUNUMBER=596
GO
UPDATE MenuMaster SET MENUINDEX =13320 WHERE MENUNUMBER=597
GO
UPDATE MenuMaster SET MENUINDEX =13321 WHERE MENUNUMBER=598
GO
UPDATE MenuMaster SET MENUINDEX =13322 WHERE MENUNUMBER=599
GO
UPDATE MenuMaster SET MENUINDEX =13323 WHERE MENUNUMBER=600
GO
UPDATE MenuMaster SET MENUINDEX =13324 WHERE MENUNUMBER=601
GO
UPDATE MenuMaster SET MENUINDEX =13325 WHERE MENUNUMBER=602
GO
UPDATE MenuMaster SET MENUINDEX =13326 WHERE MENUNUMBER=603
GO
UPDATE MenuMaster SET MENUINDEX =13401 WHERE MENUNUMBER=604
GO
UPDATE MenuMaster SET MENUINDEX =13402 WHERE MENUNUMBER=605
GO
UPDATE MenuMaster SET MENUINDEX =13403 WHERE MENUNUMBER=606
GO
UPDATE MenuMaster SET MENUINDEX =13404 WHERE MENUNUMBER=607
GO
UPDATE MenuMaster SET MENUINDEX =13405 WHERE MENUNUMBER=608
GO
UPDATE MenuMaster SET MENUINDEX =13406 WHERE MENUNUMBER=609
GO
UPDATE MenuMaster SET MENUINDEX =13407 WHERE MENUNUMBER=610
GO
UPDATE MenuMaster SET MENUINDEX =13408 WHERE MENUNUMBER=611
GO
UPDATE MenuMaster SET MENUINDEX =13409 WHERE MENUNUMBER=612
GO
UPDATE MenuMaster SET MENUINDEX =13410 WHERE MENUNUMBER=613
GO
UPDATE MenuMaster SET MENUINDEX =13411 WHERE MENUNUMBER=614
GO
UPDATE MenuMaster SET MENUINDEX =13412 WHERE MENUNUMBER=615
GO
UPDATE MenuMaster SET MENUINDEX =13413 WHERE MENUNUMBER=616
GO
UPDATE MenuMaster SET MENUINDEX =13414 WHERE MENUNUMBER=617
GO
UPDATE MenuMaster SET MENUINDEX =13415 WHERE MENUNUMBER=618
GO
UPDATE MenuMaster SET MENUINDEX =13416 WHERE MENUNUMBER=619
GO
UPDATE MenuMaster SET MENUINDEX =13417 WHERE MENUNUMBER=620
GO
UPDATE MenuMaster SET MENUINDEX =13418 WHERE MENUNUMBER=621
GO
UPDATE MenuMaster SET MENUINDEX =13419 WHERE MENUNUMBER=622
GO
UPDATE MenuMaster SET MENUINDEX =13420 WHERE MENUNUMBER=623
GO
UPDATE MenuMaster SET MENUINDEX =13421 WHERE MENUNUMBER=624
GO
UPDATE MenuMaster SET MENUINDEX =13422 WHERE MENUNUMBER=625
GO
UPDATE MenuMaster SET MENUINDEX =13423 WHERE MENUNUMBER=626
GO
UPDATE MenuMaster SET MENUINDEX =13501 WHERE MENUNUMBER=627
GO
UPDATE MenuMaster SET MENUINDEX =13502 WHERE MENUNUMBER=628
GO
UPDATE MenuMaster SET MENUINDEX =13503 WHERE MENUNUMBER=629
GO
UPDATE MenuMaster SET MENUINDEX =13504 WHERE MENUNUMBER=630
GO
UPDATE MenuMaster SET MENUINDEX =13505 WHERE MENUNUMBER=631
GO
UPDATE MenuMaster SET MENUINDEX =13506 WHERE MENUNUMBER=632
GO
UPDATE MenuMaster SET MENUINDEX =13507 WHERE MENUNUMBER=633
GO
UPDATE MenuMaster SET MENUINDEX =13508 WHERE MENUNUMBER=634
GO
UPDATE MenuMaster SET MENUINDEX =13509 WHERE MENUNUMBER=635
GO
UPDATE MenuMaster SET MENUINDEX =13510 WHERE MENUNUMBER=636
GO
UPDATE MenuMaster SET MENUINDEX =13511 WHERE MENUNUMBER=637
GO
UPDATE MenuMaster SET MENUINDEX =13512 WHERE MENUNUMBER=638
GO
UPDATE MenuMaster SET MENUINDEX =13513 WHERE MENUNUMBER=639
GO
UPDATE MenuMaster SET MENUINDEX =13514 WHERE MENUNUMBER=640
GO
UPDATE MenuMaster SET MENUINDEX =13515 WHERE MENUNUMBER=641
Go
UPDATE MenuMaster SET MENUINDEX =13516 WHERE MENUNUMBER=642
Go
UPDATE MenuMaster SET MENUINDEX =13517 WHERE MENUNUMBER=643
GO
UPDATE MenuMaster SET MENUINDEX =13518 WHERE MENUNUMBER=644
GO
UPDATE MenuMaster SET MENUINDEX =13601 WHERE MENUNUMBER=645
GO
UPDATE MenuMaster SET MENUINDEX =13602 WHERE MENUNUMBER=646
GO
UPDATE MenuMaster SET MENUINDEX =13603 WHERE MENUNUMBER=647
GO
UPDATE MenuMaster SET MENUINDEX =13604 WHERE MENUNUMBER=648
GO
UPDATE MenuMaster SET MENUINDEX =13605 WHERE MENUNUMBER=649
GO
UPDATE MenuMaster SET MENUINDEX =13606 WHERE MENUNUMBER=650
GO
UPDATE MenuMaster SET MENUINDEX =13607 WHERE MENUNUMBER=651
GO
UPDATE MenuMaster SET MENUINDEX =13608 WHERE MENUNUMBER=652
GO
UPDATE MenuMaster SET MENUINDEX =13609 WHERE MENUNUMBER=653
GO
UPDATE MenuMaster SET MENUINDEX =13610 WHERE MENUNUMBER=654
GO
UPDATE MenuMaster SET MENUINDEX =13611 WHERE MENUNUMBER=655
Go
UPDATE MenuMaster SET MENUINDEX =13612 WHERE MENUNUMBER=656
Go
UPDATE MenuMaster SET MENUINDEX =13613 WHERE MENUNUMBER=657
GO
UPDATE MenuMaster SET MENUINDEX =13614 WHERE MENUNUMBER=658
GO
UPDATE MenuMaster SET MENUINDEX =13615 WHERE MENUNUMBER=659
GO
UPDATE MenuMaster SET MENUINDEX =13616 WHERE MENUNUMBER=660
GO
UPDATE MenuMaster SET MENUINDEX =13617 WHERE MENUNUMBER=661
GO
UPDATE MenuMaster SET MENUINDEX =13618 WHERE MENUNUMBER=662
GO
UPDATE MenuMaster SET MENUINDEX =13701 WHERE MENUNUMBER=663
GO
UPDATE MenuMaster SET MENUINDEX =13702 WHERE MENUNUMBER=664
GO
UPDATE MenuMaster SET MENUINDEX =13703 WHERE MENUNUMBER=665
GO
UPDATE MenuMaster SET MENUINDEX =13704 WHERE MENUNUMBER=666
GO
UPDATE MenuMaster SET MENUINDEX =13705 WHERE MENUNUMBER=667
Go
UPDATE MenuMaster SET MENUINDEX =13706 WHERE MENUNUMBER=668
GO
UPDATE MenuMaster SET MENUINDEX =13707 WHERE MENUNUMBER=669
GO
UPDATE MenuMaster SET MENUINDEX =13708 WHERE MENUNUMBER=670
GO
UPDATE MenuMaster SET MENUINDEX =13709 WHERE MENUNUMBER=671
GO
UPDATE MenuMaster SET MENUINDEX =13710 WHERE MENUNUMBER=672
GO
UPDATE MenuMaster SET MENUINDEX =13801 WHERE MENUNUMBER=673
GO
UPDATE MenuMaster SET MENUINDEX =13802 WHERE MENUNUMBER=674
GO
UPDATE MenuMaster SET MENUINDEX =13803 WHERE MENUNUMBER=675
GO
UPDATE MenuMaster SET MENUINDEX =13804 WHERE MENUNUMBER=676
GO
UPDATE MenuMaster SET MENUINDEX =13805 WHERE MENUNUMBER=677
GO
UPDATE MenuMaster SET MENUINDEX =13806 WHERE MENUNUMBER=678
GO
UPDATE MenuMaster SET MENUINDEX =13807 WHERE MENUNUMBER=679
GO
UPDATE MenuMaster SET MENUINDEX =13808 WHERE MENUNUMBER=680
GO
UPDATE MenuMaster SET MENUINDEX =13809 WHERE MENUNUMBER=681
GO
UPDATE MenuMaster SET MENUINDEX =13810 WHERE MENUNUMBER=682
GO
UPDATE MenuMaster SET MENUINDEX =13811 WHERE MENUNUMBER=683
GO
UPDATE MenuMaster SET MENUINDEX =13812 WHERE MENUNUMBER=684
GO
UPDATE MenuMaster SET MENUINDEX =13813 WHERE MENUNUMBER=685
GO
UPDATE MenuMaster SET MENUINDEX =13814 WHERE MENUNUMBER=686
GO
UPDATE MenuMaster SET MENUINDEX =13815 WHERE MENUNUMBER=687
GO
UPDATE MenuMaster SET MENUINDEX =13816 WHERE MENUNUMBER=688
GO
UPDATE MenuMaster SET MENUINDEX =13817 WHERE MENUNUMBER=689
GO
UPDATE MenuMaster SET MENUINDEX =13818 WHERE MENUNUMBER=690
Go
UPDATE MenuMaster SET MENUINDEX =13819 WHERE MENUNUMBER=691
GO
UPDATE MenuMaster SET MENUINDEX =13820 WHERE MENUNUMBER=692
GO
UPDATE MenuMaster SET MENUINDEX =13821 WHERE MENUNUMBER=693
GO
UPDATE MenuMaster SET MENUINDEX =13822 WHERE MENUNUMBER=694
GO
UPDATE MenuMaster SET MENUINDEX =13823 WHERE MENUNUMBER=695
GO
UPDATE MenuMaster SET MENUINDEX =13901 WHERE MENUNUMBER=696
GO
UPDATE MenuMaster SET MENUINDEX =13902 WHERE MENUNUMBER=697
GO
UPDATE MenuMaster SET MENUINDEX =13903 WHERE MENUNUMBER=698
GO
UPDATE MenuMaster SET MENUINDEX =13904 WHERE MENUNUMBER=699
GO
UPDATE MenuMaster SET MENUINDEX =13905 WHERE MENUNUMBER=700
GO
UPDATE MenuMaster SET MENUINDEX =13906 WHERE MENUNUMBER=701
GO
UPDATE MenuMaster SET MENUINDEX =13907 WHERE MENUNUMBER=702
GO
UPDATE MenuMaster SET MENUINDEX =13908 WHERE MENUNUMBER=703
GO
UPDATE MenuMaster SET MENUINDEX =13909 WHERE MENUNUMBER=704
GO
UPDATE MenuMaster SET MENUINDEX =13910 WHERE MENUNUMBER=705
GO
UPDATE MenuMaster SET MENUINDEX =13911 WHERE MENUNUMBER=706
Go
UPDATE MenuMaster SET MENUINDEX =13912 WHERE MENUNUMBER=707
GO
UPDATE MenuMaster SET MENUINDEX =13913 WHERE MENUNUMBER=708
GO
UPDATE MenuMaster SET MENUINDEX =13914 WHERE MENUNUMBER=709
GO
UPDATE MenuMaster SET MENUINDEX =13915 WHERE MENUNUMBER=710
GO
UPDATE MenuMaster SET MENUINDEX =13916 WHERE MENUNUMBER=711
GO
UPDATE MenuMaster SET MENUINDEX =13917 WHERE MENUNUMBER=712
GO
UPDATE MenuMaster SET MENUINDEX =13918 WHERE MENUNUMBER=713
GO
UPDATE MenuMaster SET MENUINDEX =13919 WHERE MENUNUMBER=714
GO
UPDATE MenuMaster SET MENUINDEX =13920 WHERE MENUNUMBER=715
GO
UPDATE MenuMaster SET MENUINDEX =13970 WHERE MENUNUMBER=716
GO
UPDATE MenuMaster SET MENUINDEX =13971 WHERE MENUNUMBER=717
GO
UPDATE MenuMaster SET MENUINDEX =13972 WHERE MENUNUMBER=718
GO
UPDATE MenuMaster SET MENUINDEX =13973 WHERE MENUNUMBER=719
GO
UPDATE MenuMaster SET MENUINDEX =13974 WHERE MENUNUMBER=720
GO
UPDATE MenuMaster SET MENUINDEX =13975 WHERE MENUNUMBER=721
GO
UPDATE MenuMaster SET MENUINDEX =13976 WHERE MENUNUMBER=722
GO
UPDATE MenuMaster SET MENUINDEX =13977 WHERE MENUNUMBER=723
GO
UPDATE MenuMaster SET MENUINDEX =13978 WHERE MENUNUMBER=724
GO
UPDATE MenuMaster SET MENUINDEX =13979 WHERE MENUNUMBER=725
GO
UPDATE MenuMaster SET MENUINDEX =13980 WHERE MENUNUMBER=726
GO
UPDATE MenuMaster SET MENUINDEX =13981 WHERE MENUNUMBER=727
GO
UPDATE MenuMaster SET MENUINDEX =13982 WHERE MENUNUMBER=728
GO
UPDATE MenuMaster SET MENUINDEX =13983 WHERE MENUNUMBER=744
GO
UPDATE MenuMaster SET MENUINDEX =13984 WHERE MENUNUMBER=745
GO
UPDATE MenuMaster SET MENUINDEX =13985 WHERE MENUNUMBER=746
GO
UPDATE MenuMaster SET MENUINDEX =13986 WHERE MENUNUMBER=752
GO
--New Admin AT
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (85,'Logout Successful')
GO
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (86,'Upgrade License')
Go
INSERT INTO ActionMaster (ActionId,ActionName) VALUES (87,'Convert File')
Go 
-- -------------------------------------------------------
-- 6.4.1
-- -------------------------------------------------------
ALTER TABLE DomainMaster ADD DOMAINPORT numeric(11, 0)
GO
CREATE NONCLUSTERED INDEX index_AT_objectID ON AuditTrails (ObjectID ASC)
GO
DELETE from MenuMaster WHERE Version=14 and menuid='ObjectBringForwardMenu'
GO
DELETE from MenuMaster WHERE Version=14 and menuid='ObjectSendBackwardMenu'
GO
DELETE FROM MenuMaster WHERE Version=15
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('File','-1','NONE','File','15','False',NULL,NULL,NULL,'803','15101')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('File -> Info','TabInfo','NONE','Info','15','False','18148',NULL,NULL,'804','15102')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('File -> New','TabOfficeStart','^{n}','New','15','False','19949',NULL,NULL,'805','15103')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('File -> Open','TabRecent','^{F12}|^{o}','Open','15','False','23',NULL,NULL,'806','15104')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('File -> Save','FileSave','%{F2}|{F12}|^{s}','Save','15','False','3',NULL,NULL,'807','15105')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('File -> Save As','TabSave','%{F2}|{F12}','Save As','15','False','748',NULL,NULL,'808','15106')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('File -> Print','TabPrint','^{p}','Print','15','False','18244',NULL,NULL,'809','15107')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('File -> Share','TabShare','NONE','Share','15','False','18147',NULL,NULL,'810','15108')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('File -> Close','FileClose','^{F4}','Close','15','False','106',NULL,NULL,'811','15109')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('File -> Options','ApplicationOptionsDialog','NONE','Optiions','15','False','11323',NULL,NULL,'812','15110')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home','-1','NONE','Home','15','False',NULL,NULL,NULL,'813','15201')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Paste','PasteMenu','^{v}|+{INSERT}','Paste','15','False','22|755',NULL,NULL,'814','15202')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Cut','Cut','^{x}|+{DEL}|+{DELETE}','Cut','15','False','21',NULL,NULL,'815','15203')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Copy','Copy','^{c}|^{INSERT}','Copy','15','False','19',NULL,NULL,'816','15204')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Format Printer','FormatPainter','NONE','Format Printer','15','False',NULL,NULL,NULL,'817','15205')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Clipboard (DialogBoxLauncher)','ShowClipboard','NONE','Clipboard (DialogBoxLauncher)','15','False',NULL,NULL,NULL,'818','15206')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Font','Font','NONE','Font','15','False',NULL,NULL,NULL,'819','15207')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Font size','FontSize','NONE','Font size','15','False',NULL,NULL,NULL,'820','15208')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Font size Increase','FontSizeIncrease','NONE','Font size Increase','15','False',NULL,NULL,NULL,'821','15209')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Font size Decrease','FontSizeDecrease','NONE','Font size Decrease','15','False',NULL,NULL,NULL,'822','15210')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Font Bold','Bold','NONE','Font Bold','15','False',NULL,NULL,NULL,'823','15211')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Font Italic','Italic','NONE','Font Italic','15','False',NULL,NULL,NULL,'824','15212')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Font Underline','UnderlineGallery','NONE','Font Underline','15','False',NULL,NULL,NULL,'825','15213')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Borders','BordersGallery','NONE','Borders','15','False',NULL,NULL,NULL,'826','15214')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Fill Color','CellFillColorPicker','NONE','Fill Color','15','False',NULL,NULL,'FontShadingColorMoreColorsDialog','827','15215')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Font Color','FontColorPicker','NONE','Font Color','15','False',NULL,NULL,'FontColorMoreColorsDialogExcel','828','15216')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Font (DialogBoxLauncher)','FormatCellsFontDialog','^1','Font (DialogBoxLauncher)','15','False',NULL,NULL,NULL,'829','15217')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Top Align','AlignTopExcel','NONE','Top Align','15','False',NULL,NULL,NULL,'830','15218')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Middle Align','AlignMiddleExcel','NONE','Middle Align','15','False',NULL,NULL,NULL,'831','15219')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Bottom Align','AlignBottomExcel','NONE','Bottom Align','15','False',NULL,NULL,NULL,'832','15220')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Orientation','OrientationMenu','NONE','Orientation','15','False',NULL,NULL,NULL,'833','15221')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Align Text to Left','AlignLeft','NONE','Align Text to Left','15','False',NULL,NULL,NULL,'834','15222')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Center','AlignCenter','NONE','Center','15','False',NULL,NULL,NULL,'835','15223')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Align Text to Right','AlignRight','NONE','Align Text to Right','15','False',NULL,NULL,NULL,'836','15224')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Increase Indent','IndentIncreaseExcel','NONE','Increase Indent','15','False',NULL,NULL,NULL,'837','15225')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Decrease Indent','IndentDecreaseExcel','NONE','Decrease Indent','15','False',NULL,NULL,NULL,'838','15226')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Wrap text','WrapText','NONE','Wrap text','15','False',NULL,NULL,NULL,'839','15227')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Alignment (DialogBoxLauncher)','CellAlignmentOptions','^1','Alignment (DialogBoxLauncher)','15','False',NULL,NULL,NULL,'840','15228')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Number Format','NumberFormatGallery','NONE','Number Format','15','False',NULL,NULL,NULL,'841','15229')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Accounting Number Format','AccountingFormatMenu','NONE','Accounting Number Format','15','False',NULL,NULL,NULL,'842','15230')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Percent Style','PercentStyle','NONE','Percent Style','15','False',NULL,NULL,NULL,'843','15231')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Comma Style','CommaStyle','NONE','Comma Style','15','False',NULL,NULL,NULL,'844','15232')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Increase Decimal','DecimalsIncrease','NONE','Increase Decimal','15','False',NULL,NULL,NULL,'845','15233')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Decrease Decimal','DecimalsDecrease','NONE','Decrease Decimal','15','False',NULL,NULL,NULL,'846','15234')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Number (DialogBoxLauncher)','FormatCellsNumberDialog','^1','Number (DialogBoxLauncher)','15','False',NULL,NULL,NULL,'847','15235')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Conditional Formatting','ConditionalFormattingMenu','NONE','Conditional Formatting','15','False',NULL,NULL,NULL,'848','15236')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Format as Table','FormatAsTableGallery','NONE','Format as Table','15','False',NULL,NULL,NULL,'849','15237')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Cell Styles','CellStylesGallery','NONE','Cell Styles','15','False',NULL,NULL,NULL,'850','15238')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Insert','InsertCellstMenu','^+{+}','Insert','15','False','295|296|297|3181',NULL,NULL,'851','15239')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Delete','TableDeleteRowsAndColumnsMenu','^{-}','Delete','15','False','478|292',NULL,NULL,'852','15240')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Format','FormatCellsMenu','NONE','Format','15','False','855',NULL,NULL,'853','15241')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Sum','AutoSumMenu','NONE','Sum','15','False',NULL,NULL,NULL,'854','15242')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Fill','FillMenu','^{d}|^{r}','Fill','15','False','30020',NULL,NULL,'855','15243')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Clear','ClearMenu','{DEL}|{DELETE}','Clear','15','False','30021|3125',NULL,NULL,'856','15244')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Sort & Filter','SortFilterMenu','NONE','Sort & Filter','15','False','31402|31435',NULL,NULL,'857','15245')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Home -> Find & Select','SelectMenuExcel','^{f}|^{h}|^{g}','Find & Select','15','False','1849',NULL,NULL,'858','15246')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert','-1','NONE','Insert','15','False',NULL,NULL,NULL,'859','15301')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> PivotTable','PivotTableInsertMenu','NONE','PivotTable','15','False',NULL,NULL,NULL,'860','15302')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Table','TableInsertExcel','^{t}','Table','15','False',NULL,NULL,NULL,'861','15303')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Picture','PictureInsertFromFile','NONE','Picture','15','False',NULL,NULL,NULL,'862','15304')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Clip Art','ClipArtInsert','NONE','Clip Art','15','False',NULL,NULL,NULL,'863','15305')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Shapes','ShapesInsertGallery','NONE','Shapes','15','False',NULL,NULL,NULL,'864','15306')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> SmartArt','SmartArtInsert','NONE','SmartArt','15','False',NULL,NULL,NULL,'865','15307')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Screenshot','ScreenshotInsertGallery','NONE','Screenshot','15','False',NULL,NULL,NULL,'866','15308')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Column','ChartTypeColumnInsertGallery','NONE','Column','15','False',NULL,NULL,NULL,'867','15309')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Line','ChartTypeLineInsertGallery','NONE','Line','15','False',NULL,NULL,NULL,'868','15310')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Pie','ChartTypePieInsertGallery','NONE','Pie','15','False',NULL,NULL,NULL,'869','15311')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Bar','ChartTypeBarInsertGallery','NONE','Bar','15','False',NULL,NULL,NULL,'870','15312')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Area','ChartTypeAreaInsertGallery','NONE','Area','15','False',NULL,NULL,NULL,'871','15313')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Scatter','ChartTypeXYScatterInsertGallery','NONE','Scatter','15','False',NULL,NULL,NULL,'872','15314')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Other Charts','ChartTypeOtherInsertGallery','NONE','Other Charts','15','False',NULL,NULL,NULL,'873','15315')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Charts (DialogBoxLauncher)','ChartTypeAllInsertDialog','NONE','Charts (DialogBoxLauncher)','15','False',NULL,NULL,NULL,'874','15316')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Line (Sparkline)','SparklineLineInsert','NONE','Line','15','False',NULL,NULL,NULL,'875','15317')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Column (Sparkline)','SparklineColumnInsert','NONE','Column','15','False',NULL,NULL,NULL,'876','15318')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Win/Loss (Sparkline)','SparklineWinLossInsert','NONE','Win/Loss','15','False',NULL,NULL,NULL,'877','15319')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Slicer','SlicerInsert','NONE','Slicer','15','False',NULL,NULL,NULL,'878','15320')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Header & Footer','HeaderFooterInsert','NONE','Header & Footer','15','False',NULL,NULL,NULL,'879','15321')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> WordArt','WordArtInsertGallery','NONE','WordArt','15','False',NULL,NULL,NULL,'880','15322')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Signature Line','SignatureLineInsertMenu','NONE','Signature Line','15','False',NULL,NULL,NULL,'881','15323')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Object','OleObjectctInsert','NONE','Object','15','False',NULL,NULL,NULL,'882','15324')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Equation','InsertBuildingBlocksEquationsGallery','NONE','Equation','15','False',NULL,NULL,NULL,'883','15325')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Insert -> Symbol','SymbolInsert','NONE','Symbol','15','False',NULL,NULL,NULL,'884','15326')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout','-1','NONE','Page Layout','15','False',NULL,NULL,NULL,'885','15401')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Themes','ThemesGallery','NONE','Themes','15','False',NULL,NULL,NULL,'886','15402')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Colors','ThemeColorsGallery','NONE','Colors','15','False',NULL,NULL,NULL,'887','15403')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Fonts','ThemeFontsGallery','NONE','Fonts','15','False',NULL,NULL,NULL,'888','15404')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Effects','ThemeEffectsGallery','NONE','Effects','15','False',NULL,NULL,NULL,'889','15405')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Margins','PageMarginsGallery','NONE','Margins','15','False',NULL,NULL,NULL,'890','15406')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Orientation','PageOrientationGallery','NONE','Orientation','15','False',NULL,NULL,NULL,'891','15407')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Size','PageSizeGallery','NONE','Size','15','False',NULL,NULL,NULL,'892','15408')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Print Area','PrintAreaMenu','NONE','Print Area','15','False',NULL,NULL,NULL,'893','15409')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Breaks','PageBreakMenu','NONE','Breaks','15','False',NULL,NULL,NULL,'894','15410')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Background','SheetBackground','NONE','Background','15','False',NULL,NULL,NULL,'895','15411')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Print Titles','PrintTitles','NONE','Print Titles','15','False',NULL,NULL,NULL,'896','15412')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Page Setup (DialogBoxLauncher)','PageSetupPageDialog','NONE','Page Setup (DialogBoxLauncher)','15','False',NULL,NULL,NULL,'897','15413')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Width','PageScaleToFitWidth','NONE','Width','15','False',NULL,NULL,NULL,'898','15414')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Height','PageScaleToFitHeight','NONE','Height','15','False',NULL,NULL,NULL,'899','15415')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Scale','PageScaleToFitScale','NONE','Scale','15','False',NULL,NULL,NULL,'900','15416')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Scale to Fit (DialogBoxLauncher)','PageSetupPageDialog','NONE','Scale to Fit (DialogBoxLauncher)','15','False',NULL,NULL,NULL,'901','15417')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Selection Pane','SelectionPane','NONE','Selection Pane','15','False',NULL,NULL,NULL,'904','15420')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Align','ObjectAlignMenu','NONE','Align','15','False',NULL,NULL,NULL,'905','15421')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Group','ObjectsGroupMenu','NONE','Group','15','False',NULL,NULL,NULL,'906','15422')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Page Layout -> Rotate','ObjectRotateGallery','NONE','Rotate','15','False',NULL,NULL,NULL,'907','15423')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas','-1','NONE','Formulas','15','False',NULL,NULL,NULL,'908','15501')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> AutoSum','AutoSumMenu','%{=}','AutoSum','15','False',NULL,NULL,NULL,'909','15502')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Recently Used','FunctionsRecentlyUsedtInsertGallery','NONE','Recently Used','15','False',NULL,NULL,NULL,'910','15503')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Financial','FunctionsFinancialInsertGallery','NONE','Financial','15','False',NULL,NULL,NULL,'911','15504')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Logical','FunctionsLogicalInsertGallery','NONE','Logical','15','False',NULL,NULL,NULL,'912','15505')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Text','FunctionsTextInsertGallery','NONE','Text','15','False',NULL,NULL,NULL,'913','15506')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Date & Time','FunctionsDateTimeInsertGallery','NONE','Date & Time','15','False',NULL,NULL,NULL,'914','15507')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Lookup & Reference','FunctionsLookupReferenceInsertGallery','NONE','Lookup & Reference','15','False',NULL,NULL,NULL,'915','15508')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Math & Trig','FunctionsMathTrigInsertGallery','NONE','Math & Trig','15','False',NULL,NULL,NULL,'916','15509')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> More Functions','FormulaMoreFunctionsMenu','NONE','More Functions','15','False',NULL,NULL,NULL,'917','15510')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Trace Precedents','TracePrecedents','NONE','Trace Precedents','15','False',NULL,NULL,NULL,'918','15511')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Trace Dependents','TraceDependents','NONE','Trace Dependents','15','False',NULL,NULL,NULL,'919','15512')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Remove Arrows','TraceRemoveArrowsMenu','NONE','Remove Arrows','15','False',NULL,NULL,NULL,'920','15513')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Error Checking','ErrorCheckingMenu','NONE','Error Checking','15','False',NULL,NULL,NULL,'921','15514')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Evaluate Formula','FormulaEvaluate','NONE','Evaluate Formula','15','False',NULL,NULL,NULL,'922','15515')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Watch Window','WatchWindow','NONE','Watch Window','15','False',NULL,NULL,NULL,'923','15516')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Calculation Options','CalculationOptionsMenu','NONE','Calculation Options','15','False',NULL,NULL,NULL,'924','15517')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Formulas -> Calculate Now','CalculateNow','NONE','Calculate Now','15','False',NULL,NULL,NULL,'925','15518')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data','-1','NONE','Data','15','False',NULL,NULL,NULL,'926','15601')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> From Web','GetExternalDataFromWeb','NONE','From Web','15','False',NULL,NULL,NULL,'927','15602')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> From Text','GetExternalDataFromText','NONE','From Text','15','False',NULL,NULL,NULL,'928','15603')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> From Other Sources','GetExternalDataFromOtherSources','NONE','From Other Sources','15','False',NULL,NULL,NULL,'929','15604')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Existing Connections','GetExternalDataExistingConnections','NONE','Existing Connections','15','False',NULL,NULL,NULL,'930','15605')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Connections','Connections','NONE','Connections','15','False',NULL,NULL,NULL,'931','15606')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Properties','ConnectionProperties','NONE','Properties','15','False',NULL,NULL,NULL,'932','15607')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Edit Links','EditLinks','NONE','Edit Links','15','False',NULL,NULL,NULL,'933','15608')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Sort A to Z','SortAscendingExcel','NONE','Sort A to Z','15','False',NULL,NULL,NULL,'934','15609')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Sort Z to A','SortDescendingExcel','NONE','Sort Z to A','15','False',NULL,NULL,NULL,'935','15610')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Sort','SortDialog','NONE','Sort','15','False',NULL,NULL,NULL,'936','15611')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Filter','Filter','^+{L}','Filter','15','False',NULL,NULL,NULL,'937','15612')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Clear','SortClear','NONE','Clear','15','False',NULL,NULL,NULL,'938','15613')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Reapply','FilterReapply','NONE','Reapply','15','False',NULL,NULL,NULL,'939','15614')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Advanced','AdvancedFilterDialog','NONE','Advanced','15','False',NULL,NULL,NULL,'940','15615')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Text to Columns','ConvertTextToTable','NONE','Text to Columns','15','False',NULL,NULL,NULL,'941','15616')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Data Validations','DataValidationMenu','NONE','Data Validations','15','False',NULL,NULL,NULL,'942','15617')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Data -> Consolidate','Consolidate','NONE','Consolidate','15','False',NULL,NULL,NULL,'943','15618')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Review','-1','NONE','Review','15','False',NULL,NULL,NULL,'944','15701')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Review -> Spelling','Spelling','{F7}','Spelling','15','False',NULL,NULL,NULL,'945','15702')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Review -> New Comment','ReviewNewComment','NONE','New Comment','15','False',NULL,NULL,NULL,'946','15703')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Review -> Delete','ReviewDeleteComment','NONE','Delete','15','False',NULL,NULL,NULL,'947','15704')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Review -> Previous','ReviewPreviousComment','NONE','Previous','15','False',NULL,NULL,NULL,'948','15705')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Review -> Next','ReviewNextComment','NONE','Next','15','False',NULL,NULL,NULL,'949','15706')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Review -> Show/Hide Comment','ReviewShowOrHideComment','NONE','Show/Hide Comment','15','False',NULL,NULL,NULL,'950','15707')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Review -> Show All Comments','ReviewShowAllComments','NONE','Show All Comments','15','False',NULL,NULL,NULL,'951','15708')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Review -> Show Ink','ReviewShowInk','NONE','Show Ink','15','False',NULL,NULL,NULL,'952','15709')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Review -> Protect Sheet','SheetProtect','NONE','Protect Sheet','15','False',NULL,NULL,NULL,'953','15710')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View','-1','NONE','View','15','False',NULL,NULL,NULL,'954','15801')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Normal','ViewNormalViewExcel','NONE','Normal','15','False',NULL,NULL,NULL,'955','15802')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Page Layout','ViewPageLayoutView','NONE','Page Layout','15','False',NULL,NULL,NULL,'956','15803')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Page Break Preview','ViewPageBreakPreviewView','NONE','Page Break Preview','15','False',NULL,NULL,NULL,'957','15804')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Custom Views','ViewCustomViews','NONE','Custom Views','15','False',NULL,NULL,NULL,'958','15805')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Ruler','ViewRulerExcel','NONE','Ruler','15','False',NULL,NULL,NULL,'959','15806')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Formula Bar','ViewFormulaBar','NONE','Formula Bar','15','False',NULL,NULL,NULL,'960','15807')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Zoom','ZoomDialog','NONE','Zoom','15','False',NULL,NULL,NULL,'961','15808')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> 100%','ZoomCurrent100','NONE','100%','15','False',NULL,NULL,NULL,'962','15809')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Zoom to Selection','ZoomToSelection','NONE','Zoom to Selection','15','False',NULL,NULL,NULL,'963','15810')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> New Window','WindowNew','NONE','New Window','15','False',NULL,NULL,NULL,'964','15811')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Arrange All','WindowsArrangeAll','NONE','Arrange All','15','False',NULL,NULL,NULL,'965','15812')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Freeze Panes','ViewFreezePanesGallery','NONE','Freeze Panes','15','False',NULL,NULL,NULL,'966','15813')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Split','WindowSplitToggle','NONE','Split','15','False',NULL,NULL,NULL,'967','15814')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Unhide','WindowUnhide','NONE','Unhide','15','False',NULL,NULL,NULL,'968','15815')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> View Side by Side','ViewSideBySide','NONE','View Side by Side','15','False',NULL,NULL,NULL,'969','15816')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Synchronous Scrolling','WindowSideBySideSynchronousScrolling','NONE','Synchronous Scrolling','15','False',NULL,NULL,NULL,'970','15817')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Reset Window Position','WindowResetPosition','NONE','Reset Window Position','15','False',NULL,NULL,NULL,'971','15818')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Switch Windows','WindowSwitchWindowsMenuExcel','NONE','Switch Windows','15','False',NULL,NULL,NULL,'972','15819')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('View -> Macros','MenuMacros','NONE','Macros','15','False',NULL,NULL,NULL,'973','15820')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer','-1','NONE','Developer','15','False',NULL,NULL,NULL,'974','15901')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Visual Basic','VisualBasic','NONE','Visual Basic','15','False',NULL,NULL,NULL,'975','15902')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Macros','MacroPlay','NONE','Macros','15','False',NULL,NULL,NULL,'976','15903')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Record Macro','MacroRecord','NONE','Record Macro','15','False',NULL,NULL,NULL,'977','15904')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Use Relative References','MacroRelativeReferences','NONE','Use Relative References','15','False',NULL,NULL,NULL,'978','15905')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Macro Security','MacroSecurity','NONE','Macro Security','15','False',NULL,NULL,NULL,'979','15906')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Add-Ins','AddInManager','NONE','Add-Ins','15','False',NULL,NULL,NULL,'980','15907')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> COM Add-Ins','ComAddInsDialog','NONE','COM Add-Ins','15','False',NULL,NULL,NULL,'981','15908')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Insert','ControlsGallery','NONE','Insert','15','False',NULL,NULL,NULL,'982','15909')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Design Mode','DesignMode','NONE','Design Mode','15','False',NULL,NULL,NULL,'983','15910')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Properties','ControlProperties','NONE','Properties','15','False',NULL,NULL,NULL,'984','15911')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> View Code','ViewCode','NONE','View Code','15','False',NULL,NULL,NULL,'985','15912')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Run Dialog','RunDialog','NONE','Run Dialog','15','False',NULL,NULL,NULL,'986','15913')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Source','XmlSource','NONE','Source','15','False',NULL,NULL,NULL,'987','15914')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Map Properties','XmlMapProperties','NONE','Map Properties','15','False',NULL,NULL,NULL,'988','15915')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Expansion packs','XmlExpansionPacksExcel','NONE','Expansion packs','15','False',NULL,NULL,NULL,'989','15916')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Refresh Data','XmlDataRefresh','NONE','Refresh Data','15','False',NULL,NULL,NULL,'990','15917')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Import','XmlImport','NONE','Import','15','False',NULL,NULL,NULL,'991','15918')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Export','XmlExport','NONE','Export','15','False',NULL,NULL,NULL,'992','15919')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('Developer -> Document Panel','DocumentPanelTemplate','NONE','Document Panel','15','False',NULL,NULL,NULL,'993','15920')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree','-8','NONE','eInfotree','15','False','-8','eInfotree','eInfotree','994','15970')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Enter E-Signature','Sign-off','None','Enter E-Signature','15','False','0','Enter E-Signature','eInfotree -> Enter E-Signature','995','15971')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Review Changes','Certify','{F10}','Review Changes','15','False','0','Review Changes','eInfotree -> Review Changes','996','15972')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Lock Workbook','Lockworkbook','%+{F1}|+{F11}','Lock Workbook','15','False','0','Lock Workbook','eInfotree -> Lock Workbook','997','15973')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Change Password','ChangePassword','None','Change Password','15','False','0','Change Password','eInfotree -> Change Password','998','15974')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> View Audit Trail','ViewAuditTrail','{F4}','View Audit Trail','15','False','0','View Audit Trail','eInfotree -> View Audit Trail','999','15975')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> View Cell Changes','ViewCellChanges','None','View Cell Changes','15','False','0','View Cell Changes','eInfotree -> View Cell Changes','1000','15976')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Audit Trail Query Builder','AuditTrailQueryBuilder','None','Audit Trail Query Builder','15','False','0','Audit Trail Query Builder','eInfotree -> Audit Trail Query Builder','1001','15977')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Cell Revision History','CellRevisionHistory','None','Cell Revision History','15','False','0','Cell Revision History','eInfotree -> Cell Revision History','1002','15978')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Create Remote Copy','CreateReadOnlyWorkbook','None','Create Remote Copy','15','False','0','Create Remote Copy','eInfotree -> Create Remote Copy','1003','15979')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Archive Audit Trail','ArchiveAuditTrail','None','Archive Audit Trail','15','False','0','Archive Audit Trail','eInfotree -> Archive Audit Trail','1004','15980')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Options','Options','None','Options','15','False','0','Options','eInfotree -> Options','1005','15981')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Work Offline','WorkOffline','None','Work Offline','15','False','0','Work Offline','eInfotree -> Work Offline','1006','15982')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Convert File','ConvertFile','None','Convert File','15','False','0','Convert File','eInfotree -> Convert File','1007','15983')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Convert Multiple Files','ConvertMultipleFiles','None','Convert Multiple Files','15','False','0','Convert Multiple Files','eInfotree -> Convert Multiple Files','1008','15984')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> List of Converted Files','ListOfConvertedFiles','None','List of Converted Files','15','False','0','List of Converted Files','eInfotree -> List of Converted Files','1009','15985')
GO
INSERT INTO MenuMaster(MenuOption,MenuId,Menushortcutstring,MenuCaption,Version,IsToolBar,ToolbarId,ToolbarCaption,ToolbarName,MenuNumber,MENUINDEX)
VALUES('eInfotree -> Show Trend Chart','ShowTrendChart','None','Show Trend Chart','15','False','0','Show Trend Chart','eInfotree -> Show Trend Chart','1010','15986')
GO
--Flag for WORKBOOKPROTECTION / SHAREPOINT
DELETE FROM AdminSetting WHERE SettingName='SHAREPOINT'
GO
INSERT AdminSetting (SettingName,SettingValue) VALUES ('SHAREPOINT','OFF')
GO
DELETE FROM AdminSetting WHERE SettingName='ENABLEDWORKBOOKPROTECTION'
GO
INSERT AdminSetting (SettingName,SettingValue) VALUES ('ENABLEDWORKBOOKPROTECTION','ON')
GO
--Excel Desktop 7.0.0 Update
UPDATE MenuMaster SET ToolbarId = '7373|3183|3181|295' WHERE MenuOption='Insert -> Rows'
GO
UPDATE MenuMaster SET ToolbarId = '3183|3181|295' WHERE MenuOption='Insert -> Columns'
GO
UPDATE MenuMaster SET ToolbarId = '30024|541|882|883|884',IsToolBar = 1 WHERE MenuOption='Format -> Row'
GO
UPDATE MenuMaster SET ToolbarId = '30025|542|886|887',IsToolBar = 1 WHERE MenuOption='Format -> Column'
GO
ALTER procedure [dbo].[RETURNDBTimeZone] (@vdbtimezone  varchar(100) output)
as
Begin

DEClARE @date1 datetime 
declare @date2 datetime

Declare @DBTimeZone varchar(100)
Declare @DBTimeZoneTemp varchar(100)
set @date1 = getdate()
set @date2 = getutcdate()

if @date1 > @date2
	Begin
	select @DBTimeZoneTemp = rtrim(ltrim(Convert(char(6),dbo.ReturnFormatedDateTime(getdate()- getutcdate(),0,1))))
	--07-Aug-2013 (start)
	--select @DBTimeZone = '+'+ Convert(char(6),dbo.ReturnFormatedDateTime(getdate()- getutcdate(),0,1))
	select @DBTimeZone = '+'+ Convert(char(6),dbo.ReturnFormatedDateTime(dateadd(minute, abs(datediff(minute, getutcdate(), getdate())), 0),0,1))
	--07-Aug-2013 (End)
	End
else if @date1 = @date2
	Begin
	select @DBTimeZoneTemp = '00:00'
	Select @DBTimeZone = '00:00';
	End
else
	Begin
	select @DBTimeZoneTemp = rtrim(ltrim(Convert(char(6),dbo.ReturnFormatedDateTime(getutcdate()-getdate() ,0,1))))
	--07-Aug-2013 (start)
	--select @DBTimeZone = '-'+Convert(char(6),dbo.ReturnFormatedDateTime(getutcdate()-getdate() ,0,1))
	select @DBTimeZone = '+'+ Convert(char(6),dbo.ReturnFormatedDateTime(dateadd(minute, abs(datediff(minute, getdate(), getutcdate())), 0),0,1))
	--07-Aug-2013 (End)
	End
if @DBTimeZoneTemp='00:00'
	Select @DBTimeZone='00:00'

set @vdbtimezone = @dbtimezone
PRINT @vdbtimezone 
End 
GO
/* ---------------------------------------------------------------------*/
/* ------------------ Upgrader 7.0.0 to 7.0.1 --------------------------*/
/* ---------------------------------------------------------------------*/
ALTER TABLE SecurityConfigRN ALTER COLUMN CellRange NVARCHAR(2000)
GO
ALTER TABLE SecurityConfigRN Add SecurityType NVARCHAR(1)
GO
ALTER TABLE SecurityConfigRN Add SecurityOn NVARCHAR(1)
GO
ALTER TABLE SecurityConfigWK Add SecurityType NVARCHAR(1)
GO
ALTER TABLE SecurityConfigWK Add SecurityOn NVARCHAR(1)
GO
UPDATE SecurityConfigRN SET SecurityType='D'
GO
UPDATE SecurityConfigWK SET SecurityType='D'
GO
UPDATE SecurityConfigRN SET SecurityOn='C'
GO
UPDATE SecurityConfigWK SET SecurityOn='C'
GO
/* ---------------------------------------------------------------------*/
/* ------------------ Upgrader 7.0.1 to 7.1.0 --------------------------*/
/* ---------------------------------------------------------------------*/
ALTER TABLE UserMaster ADD IsSuperAdmin NVARCHAR(1) DEFAULT 0 
GO
UPDATE UserMaster SET IsSuperAdmin = 0
GO
UPDATE UserMaster SET  IsSuperAdmin = 1 WHERE Userid = 1
GO
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
--12-Dec-2013 7.0.1 HF1
ALTER TABLE FilesBasedOnTemplates Add ChildFileID numeric(11, 0) NULL
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
