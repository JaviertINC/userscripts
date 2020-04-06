// ==UserScript==
// @name          Aternos | AntiAdblock
// @description   Elimina el antiadblock sin dañar la usabilidad del sitio :D (Prefiere ver la publicidad, son servidores gratis, es su forma de ingresos)
// @author        @JaviertINC
// @version       0.1
// @icon          https://www.google.com/s2/favicons?domain=aternos.org
// @updateURL     https://javiertinc.github.io/aternos-antiadblock/aternos.antiadblock.user.js
// @match         *://aternos.org/*
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        ".ad-replacement{ display: none!important; }",
        ".main{ height: 100vh!important; }",
        ".navigation{ height: 100vh!important; }",
        "#VIWzovhkdzsrlHBImsoCljRcaXsoSwvYqreKNGDNPdT{ display: none!important; }",

	].join("\n");
	GM_addStyle(css);

})();
