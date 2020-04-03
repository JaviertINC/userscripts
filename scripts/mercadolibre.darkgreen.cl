// ==UserScript==
// @name          MercadoLibre Chile | DarkGreen
// @description   Una versión oscura, cuida tus ojos :D
// @author        @JaviertINC
// @version       0.4
// @icon          https://www.google.com/s2/favicons?domain=mercadolibre.cl
// @updateURL     https://javiertinc.github.io/userscripts/scripts/mercadolibre.darkgreen.user.js
// @match         https://*.mercadolibre.cl/*
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        "body{ background-color: #242424!important; }",
		".nav-header{ background-color: #4c4c4c!important; border-bottom: 1px solid #4caf50!important;  }",
        ".nav-bounds.nav-bounds-with-cp .nav-menu-cp.nav-menu-cp-logged .nav-menu-cp-send, .nav-menu-item a, .nav-menu-item a:link, .nav-menu-item a:visited,#nav-header-menu a,.quantity-results{ color: #f1f1f1!important; }",
        ".nav-bounds.nav-bounds-with-cp .nav-menu-cp .nav-menu-link-cp{ color: #d5d5d5!important; }",
        ".nav-bounds.nav-bounds-with-cp .nav-menu-cp.nav-menu-cp-logged:hover {	border-color: transparent!important; }",
        ".nav-menu-item:first-child > a:link, .nav-menu-item:first-child > a:visited,#nav-header-menu i::before,#nav-header-menu .nav-header-username-chevron, #nav-header-menu > a.option-bookmarks .bookmarks-text::after,.nav-menu-item .nav-menu-categories-link::after{color: #fff !important; }",
        ".breadcrumb__title,.dt-title,.view-options dt{ color: #4caf50!important; }",
        ".andes-pagination__button.andes-pagination__button--current .andes-pagination__link{ font-weight: bold; color: #4caf50!important; background-color: #5f5f5f!important; border: 2px solid #4caf50!important; height: 36px!important; }",
        ".andes-pagination__button .andes-pagination__link{color: #f1f1f1!important; background-color: #4c4c4c!important; border: 1px solid #4caf50!important; height: 36px!important; }",
        ".andes-pagination__button:hover .andes-pagination__link{ color: #4caf50!important; background-color: #5f5f5f!important; border: 2px solid #4caf50!important; height: 36px!important; }",
        ".andes-pagination__arrow{ border-color: #f1f1f1!important; }",

	].join("\n");
	GM_addStyle(css);

})();
