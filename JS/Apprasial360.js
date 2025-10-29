var _info = navigator.userAgent;
var _ns = false;
var _ie = (_info.indexOf("MSIE") > 0 && _info.indexOf("Win") > 0 && _info.indexOf("Windows 3.1") < 0);
var glngReturn;

function AllowOnlyNumericData(ev) {
    try {
        var objevent = (_ie) ? event : ev;
        if (objevent.shiftKey)
            return false;
        else {
            var value = (_ie) ? event.keyCode : ev.charCode;
            if (value == 0)
                value = (_ie) ? event.keyCode : ev.keyCode;

            if ((value == 35 || value == 36 || value == 13 || value == 9 || value == 8 || value == 37 || value == 39) || (value >= 48 && value <= 57))
                return true;
            else
                return false;
        }
    } catch (e) { }
}

function GetRadWindow() {
    var oWindow = null;
    if (window.radWindow) oWindow = window.radWindow; //Will work in Moz in all cases, including clasic dialog
    else if (window.frameElement && window.frameElement.radWindow) oWindow = window.frameElement.radWindow; //IE (and Moz az well)
    return oWindow;
}

function CloseWindow(strValue, ParentWindowName, strReturnValue, strFrom, strUserIds, strUserNames) {

    try {
        var oWnd = GetRadWindow();
        var objArg = new Object();

        if (strReturnValue == '' || strReturnValue == undefined || strReturnValue == 'undefined' || strReturnValue == null || strReturnValue == 'null') {
            strReturnValue = '';
        }
        objArg.success = strValue;
        objArg.returnVal = strReturnValue;
        objArg.from = strFrom;
        objArg.UserIds = strUserIds;
        objArg.UserNames = strUserNames;

        if (strValue == true || strValue == 'true') {
            try {
                var dialog1;

                if (ParentWindowName == '' || ParentWindowName == undefined || ParentWindowName == 'undefined' || ParentWindowName == null || ParentWindowName == 'null') {
                    dialog1 = oWnd;
                }
                else {
                    dialog1 = oWnd.get_windowManager().getWindowByName(ParentWindowName);
                }

                if (dialog1 != '' && dialog1 != undefined && dialog1 != 'undefined' && dialog1 != null && dialog1 != 'null') {
                    var contentWin = dialog1.get_contentFrame().contentWindow;

                    if (ParentWindowName == '' || ParentWindowName == undefined || ParentWindowName == 'undefined' || ParentWindowName == null || ParentWindowName == 'null') {

                        try { contentWin.parent.fnCallBackFunctionOnClose(strReturnValue, strFrom); }
                        catch (ex)
                        { contentWin.parent.frames["frmDashboard"].fnCallBackFunctionOnClose(strReturnValue, strFrom); }

                    }
                    else {
                        contentWin.fnCallBackFunctionOnClose(strReturnValue, strFrom);
                    }
                }

            }
            catch (err) {
                alert(err.message);
                oWnd.Close(objArg);
            }
        }

        oWnd.Close(objArg);
        //closeHandler(GetRadWindow(), null);

    } catch (err1)
    { alert(err1.message); }

}
var bodyOverflow = "";
var htmlOverflow = "";
function closeHandler(sender, args) {
    //restore the overflow   
    try {
        window.parent.document.body.style.overflow = bodyOverflow;
        window.parent.document.documentElement.style.overflow = htmlOverflow;
        sender.remove_close(closeHandler);
    } catch (err)
    { }
}

function ShowMessageBox(strErrorCode, MessageType, strPWNAME, strWinNameToRefresh, strMessage) {

    var strReturn;
    var Message;
    Message = strErrorCode;
    var objWin;
    try {
        var currentWnd;
        try { currentWnd = GetRadWindow(); } catch (ed) { }
        var browserWnd = window;
        if (currentWnd)
            browserWnd = currentWnd.BrowserWindow;

        try { objWin = browserWnd; } catch (ert) { }


        if (objWin == null || objWin == undefined) {
            try {

                if (strErrorCode != '') {
                    alert(strErrorCode);
                }
                else {
                    alert(strMessage);
                }


            } catch (ee) { }
            return false;
        }
        //Added:Changed by Bijal Shah on 24-Mar-10 to implement #TN3964

        if (strWinNameToRefresh == 'undefined' || strWinNameToRefresh == undefined) {
            strWinNameToRefresh = '';
        }

        if (strErrorCode != '' && strErrorCode != undefined) {

            try {
                OpenWindow('frmMsgBox.aspx?ErrorMessage=' + Message + '&MessageType=' + MessageType + '&CWNAME=radwinmsg89745&PWNAME=' + strPWNAME + '&WinNameToRefresh=' + strWinNameToRefresh, 300, 150, "4", "Message");
            } catch (err)
            { alert(err.message); }

            return false;
        }
        else {
            OpenWindow('frmMsgBox.aspx?CWNAME=radwinmsg89745&PWNAME=' + strPWNAME + '&WinNameToRefresh=' + strWinNameToRefresh, 300, 150, "4", "Message");
            return false;
        }

        return strReturn;
    }
    catch (ex) {
        alert(ex.message);
        return false;
    }
}


function OpenConfirmationNew(strTitle, strMessage, intWidth, intHeight, strParentWindow, strFrom, strReturnVal) {
    if (strFrom == null || strFrom == undefined)
    { strFrom = ''; }
    if (strReturnVal == null || strReturnVal == undefined)
    { strReturnVal = ''; }

    if (intWidth != null)
        OpenWindow("frmConformation.aspx?Title=" + strTitle + "&Message=" + strMessage + '&CWNAME=RadWin3&PWNAME=' + strParentWindow + '&FromForConfirmCallback=' + strFrom + '&ReturnVal=' + strReturnVal, intWidth, intHeight, 4, strTitle, 'RadWin3');
    else
        OpenWindow("frmConformation.aspx?Title=" + strTitle + "&Message=" + strMessage + '&CWNAME=RadWin3&PWNAME=' + strParentWindow + '&FromForConfirmCallback=' + strFrom + '&ReturnVal=' + strReturnVal, 500, 170, 4, strTitle, 'RadWin3');

    return false;
}

function DisplayWait() {
    try {
        window.parent.parent.document.getElementById('uctRibbonM_progressIndicator').style.display = 'inline';
    }
    catch (ex) {
    }
}

function DisplayNone() {
    try {
        window.parent.document.getElementById('uctRibbonM_progressIndicator').style.display = 'none';
    }
    catch (ex) {
    }
}
