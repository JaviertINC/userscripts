// ==UserScript==
// @name         Whatsapp Web | Dark Mode
// @version      0.1
// @description  Activa la version Dark de Whatsapp Web  (Modo oscuro de whatsapp por defecto)
// @icon         https://www.google.com/s2/favicons?domain=whatsapp.com
// @author       @JaviertINC
// @match        *://web.whatsapp.com/*
// @include      https://web.whatsapp.com/JaviertINC
// @updateURL    https://javiertinc.github.io/userscripts/scripts/whatsapp.darkdefault.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('body').classList.add('dark');

})();
