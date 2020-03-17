// ==UserScript==
// @name         Metro.cl | DarkGreen
// @version      1.2
// @icon         https://www.google.com/s2/favicons?domain=metro.cl
// @author       @JaviertINC
// @match        https://metro.cl/
// @include      https://metro.cl/mapa
// @updateURL    https://javiertinc.github.io/userscripts/scripts/metrocl.darkgreen.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

	var url_map = "https://www.metro.cl/images/metrored_servicios_full_2020_03_01.jpg";

	var css = [
		":focus{outline: none!important;}",
		"body,.estadoEstaciones li:last-child::before{ background-color: #242424!important; color: #f1f1f1!important; }",
		".popover{ background-color: #4c4c4c!important; border-color: #4caf50!important; color: #4caf50!important; }",
		".popover-body,a.fColorRojo span{ color: #4caf50!important; }",
		"a.fColorRojo span:hover,a span:hover{ color: #f1f1f1!important; }",
		".popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after, .popover.bs-popover-bottom .arrow::after { border-bottom-color: #4caf50; }",
		".row.bColorRojo,.row.pTop10 .col-md-6{ display:none;}",
		"a.fColorRojo{ display: none!important; }",
		".jt-metro-map { position: fixed!important; padding: 15px!important; background-color: #4c4c4c!important; color: #4caf50!important; text-decoration: underline!important; border: 2px solid #4caf50!important; max-width: 7%; text-align: center; }",
		".jt-metro-map.h{top: 20px!important; left: 10px!important; border-radius: 5px 5px 0 0!important;}",
		".jt-metro-map.m{top: 90px!important; left: 10px!important; border-radius: 0 0 5px 5px!important;}",
		"a.fColorRojo:hover, #jtMetroMap:hover{ background-color: #5d5d5d!important; color: #f1f1f1!important; text-decoration: underline!important; }",
		".oi.oi-x{ display: none; }",
		//".estadoL2 > li:nth-child(14){ background: url(\"../images/estadoL5.png\") left top no-repeat transparent!important; }",

	].join("\n");

    if(window.location.href == "https://metro.cl/"){
		GM_addStyle(css);
		document.body.innerHTML += '<a href="https://metro.cl/home" class="jt-metro-map h">Ir al Sitio Normal</a>';
		document.body.innerHTML += '<a href="https://metro.cl/mapa" target="_blank" class="jt-metro-map m">Ver el mapa de la Red</a>';

		document.addEventListener("DOMContentLoaded", function(){
			setTimeout(() => {
				window.location.reload();
			}, 300000);
		});
	}else if(window.location.href == "https://metro.cl/mapa"){
		var map = [
			"body{ background-color: #242424!important; }",
		].join("\n");
		GM_addStyle(map);
		document.body.innerHTML = '<img src="'+ url_map +'">';
	}

})();
