// ==UserScript==
// @name         Nonolive | AutoTaps
// @namespace    https://javiertinc.cl/userscripts
// @version      0.1
// @description  AutoTaps para Nonolive
// @homepage     https://javiertinc.cl/userscripts/script/nonolive.autotaps
// @author       @JaviertINC
// @match        *://www.nonolive.com/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/nonolive.autotaps.user.js
// @icon         https://www.google.com/s2/favicons?domain=nonolive.com
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function(){
        var url = window.location.href;
        if(
            url == "https://www.nonolive.com/33034672" || //Canal de Jaidefinichon Goth
            url == "PON_AQUÍ_EL_CANAL_DEL_STRIMER_DONDE_QUIERES_AUTOTAPIAR"
        ){
            tap();
        }
    },7000);
    function tap(){
        setTimeout(function(){
            document.querySelector(".like-heart-container .like-btn").click();
            tap();
        },randy(10, 500));
    }
    function randy(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
})();