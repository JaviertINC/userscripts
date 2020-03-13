// ==UserScript==
// @name         API-UX | Better BackOffice
// @version      2.7
// @description  Mejoramiento para el registro de horas en el BackOffice de Apiux
// @icon         https://www.google.com/s2/favicons?domain=www.api-ux.com
// @author       @JaviertINC
// @match        https://backoffice.api-ux.com/web*
// @include      https://www.api-ux.com/@JaviertINC
// @updateURL    https://javiertinc.github.io/userscripts/scripts/api-ux.backoffice.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    var url_profile_img = ""; //Coloca aquí el enlace a tu imágen de perfil que quieres ver en el BackOffice de API-UX

	/*
	 *
	 *     Borraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar
	 *
	 */
	url_profile_img = "https://avatars3.githubusercontent.com/u/25622605";


    var sheet = document.styleSheets[0];

    //Top Anouncament Bar (Hidden)
    _s(sheet, "#announcement_bar_table", "display: none;");

    _s(sheet, "#oe_main_menu_navbar", "background-color: #444; color: #4caf50; border: none; border-bottom: 1px solid #4caf50;");
    _s(sheet, "#oe_main_menu_navbar li a, #oe_main_menu_navbar li button", "padding: 6px 8px 6px 8px!important; margin: 0px!important;");
    _s(sheet, ".navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus", "background-color: #3d3d3d!important;");

    _s(sheet, "[data-id=\"name\"]", "max-width: 300px!important;");
    _s(sheet, "[data-field=\"name\"]", "max-width: 300px!important;");
    _s(sheet, "[data-field=\"name\"]", "white-space: nowrap!important; overflow: hidden!important; display: inline-block!important; text-overflow: ellipsis!important;");

    _s(sheet, "[data-id=\"account_id\"]", "max-width: 284px!important;");
    _s(sheet, "[data-field=\"account_id\"]", "max-width: 284px!important;");
    _s(sheet, "[data-field=\"account_id\"]", "white-space: nowrap!important; overflow: hidden!important; text-overflow: ellipsis!important;");

	_s(sheet, ".openerp .oe_list_content > tbody > tr > td.oe_list_field_cell", "white-space: pre-line;");
	_s(sheet, ".openerp .oe_tag_dark", "background-color: #4caf50!important; color: #eee!imporant;");
	_s(sheet, ".openerp .oe_loading", "font-size: 16px!important; font-weight: bold!important; top: 3%!important; padding: 6px 16px; background-color: #222!important; color: white; border: 1px solid #4caf50!important; border-radius: 8px!important;");
	_s(sheet, ".openerp button.oe_highlight", "background-color: #4caf50!important; background-image: unset!important; -moz-box-shadow: unset!important; -webkit-box-shadow: unset!important; box-shadow: unset!important;");
	_s(sheet, ".openerp .oe_application a", "color: #4caf50!important; ");
	_s(sheet, ".openerp .oe_searchview .oe_searchview_facets .oe_searchview_facet .oe_facet_remove:hover", "background-color: #4caf50!important; color: #ffffff!important; ");
 	_s(sheet, ".openerp .oe_searchview .oe_searchview_facets .oe_searchview_facet .oe_facet_remove", "color: #4caf50!important; ");
	_s(sheet, ".openerp .oe_searchview.oe_focused", "border-color: #4caf50!important; -moz-box-shadow: 0 1px 2px #4caf50 inset!important; -webkit-box-shadow: 0 1px 2px #4caf50 inset!important; box-shadow: 0 1px 2px #4caf50 inset!important;" );
	_s(sheet, "table, th, td","border: none!important;");
	_s(sheet, ".openerp .oe_secondary_menu_section,.openerp .oe_searchview_drawer dt","color: #4caf50!important;");
	_s(sheet, ".openerp .nav-pills > li.active > a, .openerp a.list-group-item.active > a","background-color: #4caf50!important; color: white!important;");
	_s(sheet, ".openerp .oe_tag", "border: 1px solid #4caf50!important;");
	_s(sheet, ".openerp .oe_searchview .oe_searchview_facets .oe_searchview_facet .oe_facet_value", "border-left: 1px solid #4caf50!important; text-shadow: none!important; color: #4caf50!important; font-weight: bold!important;");
	_s(sheet, ".oe_form_field.oe_form_field_char.oe_form_required", "width: 300px!important; top: 29px!important;");
	_s(sheet, ".oe_form_field.oe_form_field_char.oe_form_required input", "width: 300px!important; height: 29px!important;");
	_s(sheet, ".openerp .oe_list.oe_list_editable.oe_editing .oe_form_field input, .openerp .oe_list.oe_list_editable.oe_editing .oe_form_field textarea", "border: 1px solid #4caf50!important; background-color: #4caf5055 !important; color: #fff!important;");
	_s(sheet, ".openerp .oe_form .oe_form_required input:not([disabled]):not([readonly]), .openerp .oe_form .oe_form_required select:not([disabled]):not([readonly]), .openerp .oe_form .oe_form_required textarea:not([disabled]):not([readonly])", "background-color: unset!important;");
	_s(sheet, ".openerp .oe_form .oe_form_required input:not([disabled]):not([readonly]), .openerp .oe_form .oe_form_required select:not([disabled]):not([readonly]), .openerp .oe_form .oe_form_required textarea:not([disabled]):not([readonly])", "border: 1px solid #4caf50!important; background-color: #4caf5055 !important; color: #fff!important;");
	//_s(sheet, ".openerp .oe_form .oe_form_required input:not([disabled]):not([readonly]), .openerp .oe_form .oe_form_required select:not([disabled]):not([readonly]), .openerp .oe_form .oe_form_required textarea:not([disabled]):not([readonly])", "background-color: #4caf5055 !important;");
	_s(sheet, ".openerp","background-color: #4c4c4c!important; color: #f1f1f1!important;");
	_s(sheet, ".openerp .oe_leftbar","background-color: transparent!important; border-right: 2px solid #4caf50!important;");
	_s(sheet, ".nav > li > a:hover, .nav > li > a:focus","background-color: #4caf5050!important;");
	_s(sheet, ".openerp .nav-pills li > a","color: #f1f1f1!important; border-radius: 4px 0 0 4px!important; ");
	_s(sheet, ".openerp .oe_leftbar > div .oe_footer","background-color: #4c4c4c!important; padding: 8px 0!important; border-top: 2px solid #4caf50!important;");
	_s(sheet, ".openerp .oe_view_manager table.oe_view_manager_header .oe_header_row","text-shadow: none!important;");
	_s(sheet, ".openerp .oe_view_manager_current > .oe_view_manager_header", "border-bottom: 2px solid #4caf50!important; background-color: #393939!important; background-image: unset!important; -moz-box-shadow: none!important;");
	_s(sheet, ".oe_header_row.oe_header_row_top td","padding: 10px 20px 0 20px!important;");
	_s(sheet, ".oe_header_row td","padding: 8px 20px!important;");
	_s(sheet, ".openerp .oe_application > div, .openerp .oe_list_content > thead, .openerp > thead","background-color: transparent!important;");
	_s(sheet, ".openerp .oe_view_nocontent","color: #f1f1f1!important;");
	_s(sheet, ".openerp .oe_view_nocontent .oe_view_nocontent_create","color: #ffffff!important;");
	_s(sheet, ".openerp .oe_list_content > tbody > tr:nth-child(2n+1)","background-color: rgba(0,0,0,.5)!important; background-image: unset!important;");
	_s(sheet, ".openerp .oe_list_content > thead","border-bottom: 2px solid #4caf50!important;");
	_s(sheet, ".openerp .oe_list_content > tbody > tr","border-top: 1px solid #4caf50!important;");
	_s(sheet, ".openerp .oe_list_content > tfoot", "border-top: unset!important; border-bottom: unset!important; background: transparent!important;");
	_s(sheet, ".openerp .oe_searchview_drawer .oe_searchview_section li", "background-color: #4c4c4c!important; border-radius: 5px!important; border: 1px solid #4caf50!important; padding: 0 3px!important;");
	_s(sheet, ".openerp .oe_searchview_drawer","background-color: #333333!important;");
	_s(sheet, ".oe_view_manager_wrapper","background-color: #343434!important;");
	_s(sheet, ".openerp .oe_searchview_drawer dl dd ul li.badge"," background-color: #4caf50!important; border: 1px solid #fff!important; border-radius: 5px!important; padding: 5px 3px!important; font-size: 13px!important;");
	_s(sheet, ".openerp .oe_mail .oe_msg","background-color: transparent!important;");
	_s(sheet, ".openerp .oe_mail .oe_msg.oe_msg_composer_compact .oe_compact_inbox", "border: 1px solid #4caf50!important; background: #5f5f5f!important;");
	_s(sheet, ".oe_suggest_title", "margin-top: -12px!important; ");
	_s(sheet, ".openerp .oe_mail_wall_aside .oe_sidebar_suggestion", "background-color: #4c4c4c!important; padding-top: unset!important; border: 1px solid #4caf50!important; margin-bottom: 8px!important; padding-bottom: 8px!important; ");
	_s(sheet, ".openerp .oe_mail_wall .oe_mail_wall_aside","width: 310px!important; ");
	_s(sheet, ".openerp .oe_mail_wall .oe_mail","background:#4c4c4c!important; border: 1px solid #4caf50!important; border-radius: 5px!important; padding: 8px 5px;!important; width: 700px!important; margin-right: 0px!important; ");
	_s(sheet, ".openerp .oe_view_manager_current > .oe_view_manager_header","box-shadow: unset!important; ");
	_s(sheet, ".oe_header_row.oe_header_row_top td","padding: 0 20px!important; ");
	_s(sheet, ".openerp .oe_mail .oe_msg","border: none!important; border-radius: 0!important; border-bottom: 1px solid #4caf50!important; ");
	_s(sheet, ".openerp .oe_mail .oe_attach_label,.openerp .oe_mail button.oe_attach, .openerp .oe_mail button.oe_full","color: #4caf50!important; ");
	_s(sheet, ".openerp a.button:link, .openerp a.button:visited, .openerp button, .openerp .oe_button, .openerp input[type=\"submit\"]{ border: 1px solid #4caf50!important; color: #f1f1f1!important; background-color: #4c4c4c!important; background-image: unset!important; -moz-box-shadow: unset!important; -webkit-box-shadow: unset!important; box-shadow: unset!important; text-shadow: unset!important; ");

	var url_logo = atob("aHR0cDovL3d3dy5hcGktdXguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL2xvZ28tYmxhbmNvLTIucG5n");
	var url_favicon = atob("aHR0cHM6Ly9qYXZpZXJ0aW5jLmdpdGh1Yi5pby9saWJzL2ljb25zL29kb28uaWNv");

	if(url_profile_img == "" || url_profile_img == null){
		url_profile_img = atob("aHR0cHM6Ly9pLmltZ3VyLmNvbS95d1Frd2I1LnBuZw==");
    	}

	function init_0(url_logo){
		re_footer();
		re_favicon(url_favicon);
		re_logo(url_logo);
		re_profile_img(url_profile_img);
	}
	function re_logo(url_logo){
		var logo_html = '<img src="'+ url_logo +'" style="max-width: 180px;">'
		document.getElementsByClassName("oe_logo")[0].innerHTML = logo_html;
	}
	function re_profile_img(url_profile_img){
		document.getElementsByClassName("oe_topbar_avatar")[0].src = url_profile_img;
	}
	function re_footer(){
		var footer_html = atob('PGRpdiBzdHlsZT0icGFkZGluZzogNXB4IDA7IGNvbG9yOiAjZjFmMWYxOyI+Q29uIHRlY25vbG9nJmlhY3V0ZTthIGRlIDxhIGhyZWY9Imh0dHA6Ly93d3cub2Rvby5jb20iIHRhcmdldD0iX2JsYW5rIj48c3Bhbj5PZG9vPC9zcGFuPjwvYT48YnI+PHNtYWxsPlkgbW9kaWZpY2FkbyBwb3IgPGEgaHJlZj0iaHR0cHM6Ly9qYXZpZXJ0aW5jLmdpdGh1Yi5pbyI+PHNwYW4gc3R5bGU9ImNvbG9yOiAjNGNhZjUwOyI+QEphdmllcnRJTkM8L3NwYW4+PC9hPjwvc21hbGw+PC9kaXY+');
		document.getElementsByClassName("oe_footer")[0].innerHTML = footer_html;
	}
	function _s(sheet, selector, rules, index) {
		if("insertRule" in sheet) {
	    		sheet.insertRule(selector + "{" + rules + "}", index);
		}
		else if("addRule" in sheet) {
	    		sheet.addRule(selector, rules, index);
		}
    }
    function re_favicon(url_favicon){
		var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = url_favicon;
		document.getElementsByTagName('head')[0].appendChild(link);
    }

	document.addEventListener("DOMContentLoaded", function(){
		setTimeout(() => {
			init_0(url_logo);
		}, 1500);
	});
	document.addEventListener("DOMContentLoaded", function(){
		setTimeout(() => {
			re_logo(url_logo);
			re_profile_img(url_profile_img);
		}, 3000);
	});
	document.addEventListener("DOMContentLoaded", function(){
		setTimeout(() => {
			re_logo(url_logo);
			re_profile_img(url_profile_img);
		}, 5000);
	});
	document.addEventListener("DOMContentLoaded", function(){
		setTimeout(() => {
			re_logo(url_logo);
			re_profile_img(url_profile_img);
		}, 10000);
	});
})();
