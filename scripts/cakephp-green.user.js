// ==UserScript==
// @name         CakePHP - GreenCakePHP
// @version      1.1
// @author       @JaviertINC
// @match        *://*/*/debug-kit/toolbar/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    //Toolbar
    GM_addStyle("body #toolbar.toolbar{ background-color: #4caf50; border-radius: 8px 0 0 0; } ");
    GM_addStyle("body #toolbar.toolbar.open{ border-radius: 0; } ");

    GM_addStyle("body #toolbar .toolbar-inner li.panel-active .panel-button { color: #4caf50!important; } ");
    GM_addStyle("body #toolbar .toolbar-inner .panel.panel-active { color: #4caf50!important; } ");
    GM_addStyle("h2.panel-title { background-color: #4caf50!important; } ");
    GM_addStyle("span.package-version { background-color: #4caf50!important; } ");
    GM_addStyle(".btn-primary { border: 1px solid #6fbf72!important; background-color: #4caf50!important; box-shadow: 0 2px 0 #2d6930!important; font-weight: bold; outline: none!important; } ");
    GM_addStyle(".terminal { background-color: #1a1a1a; color: #4caf50; border: 2px solid #4caf50; border-radius: 5px; }");
    GM_addStyle(".terminal .loading{ color: #4caf50; }");
    GM_addStyle("table th { border-bottom: 3px solid #4caf50!important; }");


})();
