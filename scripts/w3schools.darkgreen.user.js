// ==UserScript==
// @name         W3Schools | DarkGreen
// @version      0.1
// @description  Personaliza los estilos de W3Schools
// @icon         https://www.google.com/s2/favicons?domain=www.w3schools.com
// @author       @JaviertINC
// @match        https://www.w3schools.com/*
// @include      https://www.w3schools.com/@JaviertINC
// @exclude      https://www.w3schools.com/*/tryit.asp*
// @updateURL    https://github.com/JaviertINC/userscripts/raw/master/scripts/w3schools.darkgreen.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('.w3schools-logo{ color: #f1f1f1!important; }');
    GM_addStyle('body .w3-row.w3-white.w3-padding.w3-hide-medium.w3-hide-small{ color: #4caf50!important; background-color: #393939!important; margin-top: 0!important; }');

    const jtBody = document.querySelector('body');
    jtBody.classList.add('darktheme');

})();
