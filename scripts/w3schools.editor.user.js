// ==UserScript==
// @name         W3Schools | Dark Green Editor
// @version      0.5
// @description  Personaliza los estilos de el editor de W3Schools (GreenDark)
// @author       @JaviertINC
// @match        https://www.w3schools.com/*/tryit.asp*
// @include      https://www.w3schools.com/@JaviertINC
// @updateURL    https://github.com/JaviertINC/userscripts/raw/master/scripts/w3schools.editor.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('body {  }');
    GM_addStyle('#tryitLeaderboard { display: none;}');
    GM_addStyle('body.darktheme .trytopnav, .trytopnav { top: 0px!important; background-color: #4c4c4c; color: #4caf50; font-weight: bold; font-family: "Tomorrow", sans-serif; }');
    GM_addStyle('#container{ background-color: #5d5d5d!important; top: 40px; padding-top: 10px; }');
    GM_addStyle('#iframeResult{ background-color: #ffffff!important; }');

    GM_addStyle('.w3-bar .w3-bar-item:hover { color: #f1f1f1 !important; }');
    GM_addStyle('.w3-button:hover { color: #000 !important; background-color: #3c3c3c !important; border-bottom: 1px solid #4caf50; }');

    GM_addStyle('@import url("https://fonts.googleapis.com/css?family=Tomorrow&display=swap"); }');
    GM_addStyle('font-family: "Tomorrow", sans-serif;');

    const jtBody = document.querySelector('body');
    jtBody.classList.add('darktheme');

})();
