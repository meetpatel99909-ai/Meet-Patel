(function (global, undefined) {
    var RESTRICTION_ZONE = "main";

    function confirmCallBackFn(arg) {
        radalert("<strong>radconfirm</strong> returned the following result: <h3 style='color: #ff0000;'>" + arg + "</h3>", 420, 220, "Result");
    }

    function promptCallBackFn(arg) {
        radalert("After 7.5 million years, <strong>Deep Thought</strong> answers:<h3 style='color: #ff0000;'>" + arg + "</h3>", 360, 250, "Deep Thought");
    }

    function OpenAlert(pstrMsg, Title) {
        radalert(pstrMsg, 330, 200, Title);
        return false;
    }
    function OpenConfirm(pstrMsg, Title) {
        radconfirm(pstrMsg, confirmCallBackFn, 330, 200, null, Title);
        return false;
    }
    function OpenPrompt() {
        radprompt('<span style=\'color: #333399;\'>What is the answer of Life, Universe and Everything?</span>', promptCallBackFn, 330, 230, null, 'The Question', '42');
        return false;
    }


    function CloseWindow1() {
        //pass the data object onward
        GetRadWindow().close();
    }


    function OpenEsigRsnWindow(pagename, width, height, title) {


        var wndName;
        if (!wndName)
            wndName = "popup_" + Math.random();
        var currentWnd = GetRadWindow();
        var browserWnd = window;
        if (currentWnd)
            browserWnd = currentWnd.BrowserWindow;

        //            oWnd.set_modal(true);
        setTimeout(function () {
            var wnd = browserWnd.radopen(pagename, wndName);
            wnd.setSize(width, height);
            wnd.center();
            //            oWnd.DestroyOnClose = true;
            wnd.set_modal(true);
            wnd.__parentBackReference = window; //pass the current window object of the page that opens the dialog so it can be used later

            if (title)
                wnd.set_title(title); //you can pass more parameters for RadWindow settings, e.g., modality, dimensions, etc.
        }, 0);
        return false;
    }


    function OpenWindow(pagename, width, height, Level, title, strWinName) {
        var wndName;
        if (Level == "1") {
            wndName = "RadWindow1";
        }

        else if (Level == "2") {
            wndName = "RadWindow2";
        }

        else if (Level == "3") {
            wndName = "RadWindow3";
        }

        if (!wndName)
            wndName = strWinName; //"popup_" + Math.random();
        var currentWnd = GetRadWindow();
        var browserWnd = window;
        if (currentWnd)
            browserWnd = currentWnd.BrowserWindow;

        //            oWnd.set_modal(true);
        setTimeout(function () {
            //store the overflow   

            bodyOverflow = window.parent.document.body.style.overflow;
            htmlOverflow = window.parent.document.documentElement.style.overflow;
            //hide the overflow   
            window.parent.document.body.style.overflow = "hidden";
            window.parent.document.documentElement.style.overflow = "hidden";

            try { var wnd = browserWnd.top.radopen(pagename, wndName); }
            catch (err)
            { var wnd = browserWnd.radopen(pagename, wndName); }

            wnd.setSize(width, height);
            wnd.set_modal(true);
            wnd.setActive(true);
            wnd.center();
            if (wnd.isMaximized()) {
                wnd.minimize();
            }
            //            oWnd.DestroyOnClose = true;
            //            wnd.set_modal(true);
            wnd.__parentBackReference = window; //pass the current window object of the page that opens the dialog so it can be used later

            if (title)
                wnd.set_title(title); //you can pass more parameters for RadWindow settings, e.g., modality, dimensions, etc.
            //you can even add arguments that will pass data from the parent to the child as shown here
            //http://www.telerik.com/help/aspnet-ajax/window-programming-using-radwindow-as-dialog.html
            //in the On the Dialog Page section that shows how to access custom fields in the RadWindow object and use them.
            //of course, you can also use querystrings in the URL.
            wnd.add_close(OnClientClose);
        }, 0);


        return false;

        //            var oBrowserWnd = GetRadWindow().BrowserWindow;
        //            var oWnd = oBrowserWnd.radopen(pagename, "RadWindow2");
        //            oWnd.setSize(width, height);
        //            oWnd.center();
        //            //        wnd.moveTo(sender.get_left(), sender.get_top()));
        //            //            oWnd.set_offsetElementID(wnd.get_windowManager().get_offsetElementID());
        //            oWnd.DestroyOnClose = true;
        //            oWnd.set_modal(true);
        //            return false;

        //        else {
        //            var wnd = window.radopen(pagename, "RadWindow1");
        //            //        wnd.set_modal(true)
        //            wnd.setSize(width, height);
        //            wnd.center();
        //            //        wnd.moveTo(sender.get_left(), sender.get_top()));
        //            wnd.set_offsetElementID(wnd.get_windowManager().get_offsetElementID());
        //            oWnd.set_modal(true);
        //            return false;
        //        }

    }


    function OpenWindowMaximized(pagename, width, height, Level, title) {
        var wndName;
        if (Level == "1") {
            wndName = "RadWindow1";
        }

        else if (Level == "2") {
            wndName = "RadWindow2";
        }

        else if (Level == "3") {
            wndName = "RadWindow3";
        }

        if (!wndName)
            wndName = "popup_" + Math.random();
        var currentWnd = GetRadWindow();
        var browserWnd = window;
        if (currentWnd)
            browserWnd = currentWnd.BrowserWindow;


        setTimeout(function () {

            var wnd = browserWnd.radopen(pagename, wndName);
            wnd.setSize(width, height);
            wnd.setActive(true);
            wnd.maximize();
            wnd.center();
            //            if (wnd.isMaximized()) {
            //                wnd.minimize();
            //            }

            wnd.__parentBackReference = window;
            wnd.parent = currentWnd;

            if (title)
                wnd.set_title(title);



        }, 0);
        return false;


    }
    function GetRadWindow() {
        var oWindow = null;
        if (window.radWindow) oWindow = window.radWindow; //Will work in Moz in all cases, including clasic dialog
        else if (window.frameElement && window.frameElement.radWindow) oWindow = window.frameElement.radWindow; //IE (and Moz az well)
        return oWindow;
    }

    //    function GetRadWindow() {
    //        var oWindow = null;
    //        if (window.radWindow)
    //            oWindow = window.radWindow;
    //        else if (window.frameElement && window.frameElement.radWindow)
    //            oWindow = window.frameElement.radWindow;
    //        return oWindow;
    //    }

    function controlWindowButtons(sender, args) {
        GetRadWindowManager()[sender.get_value()]();
    }

    function showWindow(sender, args) {
        sender.set_restrictionZoneID(RESTRICTION_ZONE);
    }
    //function OnClientClose(oWnd, args) {
    //    //get the transferred arguments
    //    //try {
    //    //    var arg = args.get_argument();

    //    //    if (arg) {
    //    //        oWnd.__parentBackReference.fnClientClose(arg);
    //    //    }

    //    //} catch (err)
    //    //{ }
    //}

    ////function clientClose(sender, args) {
    ////    debugger
    ////    if (args.get_argument() != null) {
    ////        alert("'" + sender.get_name() + "'" + " was closed and returned the following argument: '" + args.get_argument() + "'");
    ////    }
    ////}
    global.showWindow = showWindow;
    global.OpenWindow = OpenWindow;
    global.OpenWindowMaximized = OpenWindowMaximized;
    global.OpenEsigRsnWindow = OpenEsigRsnWindow;
    global.CloseWindow = CloseWindow1;
    global.confirmCallBackFn = confirmCallBackFn;
    global.promptCallBackFn = promptCallBackFn;
    global.OpenAlert = OpenAlert;
    global.OpenConfirm = OpenConfirm;
    global.OpenPrompt = OpenPrompt;
    global.controlWindowButtons = controlWindowButtons;
})(window);

