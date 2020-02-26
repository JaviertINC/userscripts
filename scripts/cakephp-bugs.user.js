// ==UserScript==
// @name         CakePHP | Bugs GreenDark
// @version      0.7
// @description  Personaliza los estilos de los errores de CakePHP
// @author       @JaviertINC
// @match        *://localhost/*
// @include      https://cakephp.org/@JaviertINC
// @updateURL    https://github.com/JaviertINC/userscripts/raw/master/scripts/cakephp-bugs.user.js
// @grant        GM_addStyle
// ==/UserScript==


(function() {
    'use strict';

    //Errores
    GM_addStyle(".cake-error { background-color: #000!important; color: #4caf50!important; padding: 5px 8px; border: 2px solid #4caf50; border-radius: 5px;} ");
    GM_addStyle("pre.stack-trace{ color: #9b9b9b; border: 1px solid #4caf50; padding: 10px; border-radius: 5px; } ");
    GM_addStyle(".cake-debug-output{ background-color: #000; color: #4caf50; padding: 10px; border: 2px solid #4caf50; border-radius: 5px;} ");
    GM_addStyle(".cake-debug-output .cake-debug{ background-color: #000; color: #4caf50; padding: 6px 4px; border: 2px solid #4caf50; border-radius: 5px; margin-bottom: 0px} ");
    //GM_addStyle("header { background-color: #4caf50; color: #ffffff; border-bottom: 3px solid #197E1D; }");

})();
