// ==UserScript==
// @name         API-UX | Better BackOffice
// @version      1.6
// @description  Mejoramiento para el registro de horas en el BackOffice de Apiux
// @author       @JaviertINC
// @match        https://backoffice.api-ux.com/web*
// @include      https://www.api-ux.com/@JaviertINC
// @updateURL    https://github.com/JaviertINC/userscripts/raw/master/scripts/api-ux.backoffice.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    function _s(sheet, selector, rules, index) {
        if("insertRule" in sheet) {
            sheet.insertRule(selector + "{" + rules + "}", index);
        }
        else if("addRule" in sheet) {
            sheet.addRule(selector, rules, index);
        }
    }
    var sheet = document.styleSheets[0];

    //Top Anouncament Bar (Disabled)
    _s(sheet, "#announcement_bar_table", "display: none;");

    //TopNavBar
    _s(sheet, "#oe_main_menu_navbar", "background-color: #444; color: #4caf50; border: none; border-bottom: 1px solid #4caf50;");
    _s(sheet, "#oe_main_menu_navbar li a, #oe_main_menu_navbar li button", "padding: 6px 8px 6px 8px!important; margin: 0px!important;");
    _s(sheet, ".navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus", "background-color: #3d3d3d!important;");

    //Registro de Horas
    //_s(sheet, "[data-id=\"name\"]", "background-color: #4caf50;");
    _s(sheet, "[data-id=\"name\"]", "max-width: 300px!important;");
    _s(sheet, "[data-field=\"name\"]", "max-width: 300px!important;");
    _s(sheet, "[data-field=\"name\"]", "white-space: nowrap!important; overflow: hidden!important; display: inline-block!important; text-overflow: ellipsis!important;");

    _s(sheet, ".openerp .oe_list_content > tbody > tr > td.oe_list_field_cell", "white-space: pre-line;");
    _s(sheet, ".openerp .oe_tag_dark", "background-color: #4caf50!important; color: #eee!imporant;");
    _s(sheet, ".openerp .oe_loading", "font-size: 16px!important; font-weight: bold!important; top: 3%!important; padding: 6px 16px; background-color: #222!important; color: white; border: 1px solid #4caf50!important; border-radius: 8px!important;");
    _s(sheet, ".openerp button.oe_highlight", "background-color: #4caf50!important; background-image: -webkit-gradient(linear, left top, left bottom, from(#64DD17), to(#4caf50))!important; background-image: -webkit-linear-gradient(top, #64DD17, #4caf50)!important; background-image: -moz-linear-gradient(top, #64DD17, #4caf50)!important; background-image: -ms-linear-gradient(top, #64DD17, #4caf50)!important; background-image: -o-linear-gradient(top, #64DD17, #4caf50)!important; background-image: linear-gradient(to bottom, #64DD17, #4caf50)!important; -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(155, 155, 155, 0.4) inset!important; -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(155, 155, 155, 0.4) inset!important; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(155, 155, 155, 0.4) inset!important;");
    _s(sheet, ".openerp .oe_application a", "color: #4caf50!important; ");
    _s(sheet, ".openerp .oe_searchview .oe_searchview_facets .oe_searchview_facet .oe_facet_remove:hover", "background-color: #4caf50!important; color: #ffffff!important; ");
    _s(sheet, ".openerp .oe_searchview .oe_searchview_facets .oe_searchview_facet .oe_facet_remove", "color: #4caf50!important; ");
	_s(sheet, ".openerp .oe_searchview.oe_focused", "border-color: #4caf50!important; -moz-box-shadow: 0 1px 2px #4caf50 inset!important; -webkit-box-shadow: 0 1px 2px #4caf50 inset!important; box-shadow: 0 1px 2px #4caf50 inset!important;" );
	_s(sheet, "table, th, td","border: none!important;");
	_s(sheet, ".openerp .oe_secondary_menu_section","color: #4caf50!important;");
	_s(sheet, ".openerp .nav-pills > li.active > a, .openerp a.list-group-item.active > a","background-color: #4caf50!important; color: white!important;");
	_s(sheet, ".openerp .oe_tag", "border: 1px solid #4caf50!important;");
	_s(sheet, ".openerp .oe_searchview .oe_searchview_facets .oe_searchview_facet .oe_facet_value", "border-left: 1px solid #4caf50!important; text-shadow: none!important; color: #4caf50!important; font-weight: bold!important;");

	/*
	function init_0(){
		alert("d");
		document.getElementsByClassName("oe_footer").innerHTML = "Alphates3";
	}
	document.addEventListener("DOMContentLoaded", function(){
		setTimeout(() => { init_0(); }, 5000);
	}); */
})();
