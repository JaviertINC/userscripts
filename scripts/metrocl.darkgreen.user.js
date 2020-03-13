// ==UserScript==
// @name         Metro.cl | DarkGreen
// @version      0.1
// @icon         https://www.google.com/s2/favicons?domain=metro.cl
// @author       @JaviertINC
// @match        https://metro.cl/
// @updateURL    https://javiertinc.github.io/userscripts/scripts/metrocl.darkgreen.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

	var css = [
		":focus{outline: none!important;}",
		"body,.estadoEstaciones li:last-child::before{ background-color: #242424!important; color: #f1f1f1!important; }",
		".popover{ background-color: #4c4c4c!important; border-color: #4caf50!important; color: #4caf50!important; }",
		".popover-body{ color: #4caf50!important; }",
		".popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after, .popover.bs-popover-bottom .arrow::after { border-bottom-color: #4caf50; }",
		".row.bColorRojo,.row.pTop10 .col-md-6{ display:none;}",

	].join("\n");

	GM_addStyle(css);

})();
