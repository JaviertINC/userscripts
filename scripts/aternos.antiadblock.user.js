// ==UserScript==
// @name          Aternos | AntiAdblock
// @description   Elimina el antiadblock sin dañar la usabilidad del sitio :D (Prefiere ver la publicidad, son servidores gratis, es su forma de ingresos)
// @author        @JaviertINC
// @version       0.2
// @icon          https://www.google.com/s2/favicons?domain=aternos.org
// @updateURL     https://javiertinc.github.io/aternos-antiadblock/aternos.antiadblock.user.js
// @match         *://aternos.org/*
// @run-at        document-end
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        ".ad-replacement{ display: none!important; }",
        ".main{ height: 100vh!important; }",
        ".navigation{ height: 100vh!important; }",
        "#VIWzovhkdzsrlHBImsoCljRcaXsoSwvYqreKNGDNPdT{ display: none!important; }",
        ".header{ display: unset!important; height: 100px!important; }",

	].join("\n");
    GM_addStyle(css);

    function re_start(){
        $('.body, .header').each(function() {
            this.style.setProperty('display', '');
            this.style.setProperty('height', '');
        });
        $('#VIWzovhkdzsrlHBImsoCljRcaXsoSwvYqreKNGDNPdT')[0].style.display = 'none';
        $('.XcvLfpUfgbNTIbChEtgXdxUTTsyODyanOBWl').html("");
        $('#start').each(function() {
            this._ready = true;
        });
    }

			re_start();

		setTimeout(() => {
			re_start();
		}, 500);

		setTimeout(() => {
			re_start();
		}, 1000);

		setTimeout(() => {
			re_start();
		}, 1500);

})();
