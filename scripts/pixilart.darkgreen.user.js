// ==UserScript==
// @name         Pixilart - DarkGreen
// @version      0.1
// @namespace    https://javiertinc.cl/userscripts
// @description  Siempre es bueno cuidar tus ojitos con un estilo oscuro y qué mejor que con detallitos verdes :D
// @author       @JaviertINC
// @match        https://www.pixilart.com/draw*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/pixiliart.darkgreen.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pixilart.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    let css = [
        // Ajuste de espacios
        ".b-top #frames-placement{ bottom: 0!important; }",
        ".b-top .drawing-wrapper,.sidebar-tab-container .sidebar-content-wrapper{ height: 100%!important; }",
        "#drawing-tool-options{ top: 38px !important; }",

        //Estilo DarkGreen
        ".submit-drawing-bg{background: none!important; background-color: #4caf50!important; color: #fff!important; }",
        "#toolbar{ border-bottom: 1px solid #4caf50; }",
        "#frames-placement{ border-top: 1px solid #4caf50!important; }",
        "#drawing-container #left-sidebar{ border-right: 1px solid #4caf50; }",
        "#drawing-container #right-sidebar{ border: none!important; }",
        ".sidebar-tab-container .sidebar-content-wrapper{ border-left: 1px solid #4caf50; border-bottom: 1px solid #4caf50; border-radius: 0 0 0 5px; }",
        ".sidebar-tab-container .sidebar-tabs-wrapper{ border-bottom: 1px solid #4caf50; }",
        ".sidebar-tab-container .sidebar-tabs-wrapper .sidebar-tabs{ border-bottom: 1px solid #4caf50; border-left: 1px solid #4caf50; margin-top: 0!important; }",
        ".sidebar-tab-container .sidebar-tabs-wrapper .sidebar-tabs .sidebar-tab-notification.active{ background-color: #4caf50!important; }",
        ".sidebar-tab-container .sidebar-tabs-wrapper .sidebar-tabs .sidebar-tab-notification.active::after { background: #4caf50!important; }",

        //Botones
        "div.blue.accent-3,button.blue.accent-3{ background-color: #4caf50!important; }",
        ".popup-container .popup-container-wrapper .popup-wrapper .p-content-btn.active, .popup-container .popup-container-wrapper .popup-wrapper .p-content-btn.force_active{background-color: #4caf50!important; }",
        ".switch label input[type=\"checkbox\"]:checked + .lever{background-color: #4caf50!important; }",
        "[type=\"checkbox\"].filled-in:checked + label::after {background-color: #4caf50!important; border-color: #4caf50!important; }",
        ".tool-selection.active{ background-color: #4caf50!important; }",
    ].join('');

    GM_addStyle(css);
})();
