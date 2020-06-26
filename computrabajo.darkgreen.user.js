// ==UserScript==
// @name         CompuTrabajo | DarkGreen
// @version      0.0.1
// @description  Una versión oscura, ayuda a cuidar tus ojos :D
// @icon         https://www.google.com/s2/favicons?domain=computrabajo.cl
// @author       @JaviertINC
// @match        *://www.computrabajo.cl/*
// @include      *://candidato.computrabajo.cl/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/computrabajo.darkgreen.user.js
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        "body{ background-color: #242424!important; color: #f1f1f1!important;}",
        ".m_web{ background-color: #4c4c4c!important; border-bottom: 1px solid #4caf50!important; }",
    ].join("\n");
	GM_addStyle(css);

})();