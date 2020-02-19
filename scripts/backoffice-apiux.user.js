// ==UserScript==
// @name         Better BackOffice APIUX
// @version      1.2
// @description  Mejoramiento para el registro de horas en el BackOffice de Apiux
// @author       @JaviertINC
// @match        https://backoffice.api-ux.com/web*
// @updateURL    https://github.com/JaviertINC/userscripts/raw/master/scripts/backoffice-apiux.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    function _s(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    //Top Anouncament Bar (Disabled)
    _s(document.styleSheets[0], "#announcement_bar_table", "display: none;");

    //TopNavBar
    _s(document.styleSheets[0], "#oe_main_menu_navbar", "background-color: #444; color: #4caf50; border: none; border-bottom: 1px solid #4caf50;");
    _s(document.styleSheets[0], "#oe_main_menu_navbar li a, #oe_main_menu_navbar li button", "padding: 6px 8px 6px 8px!important; margin: 0px!important;");
    _s(document.styleSheets[0], ".navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus", "background-color: #3d3d3d!important;");

    //Registro de Horas
    //_s(document.styleSheets[0], "[data-id=\"name\"]", "background-color: #4caf50;");
    //_s(document.styleSheets[0], "[data-id=\"name\"]", "max-width: 300px!important;");
    _s(document.styleSheets[0], "[data-field=\"name\"]", "max-width: 300px!important;");
    _s(document.styleSheets[0], "[data-field=\"name\"]", "text-overflow: ellipsis!important;");

    _s(document.styleSheets[0], ".openerp .oe_list_content > tbody > tr > td.oe_list_field_cell", "white-space: pre-line;");

})();
