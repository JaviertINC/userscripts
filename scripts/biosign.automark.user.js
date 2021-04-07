// ==UserScript==
// @name         BioSign | AutoMark
// @namespace    https://javiertinc.cl/userscripts
// @version      0.2
// @description  Registro semi-automático de BioSign
// @homepage     https://javiertinc.cl/userscripts/script/biosign.automark
// @author       @JaviertINC
// @match        *://app.biosign.cl/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/biosign.automark.user.js
// @icon         https://www.google.com/s2/favicons?domain=wp.biosign.cl
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @run-at       document-start
// ==/UserScript==


(function() {
    'use strict';

    // https://app.biosign.cl/MarcaWeb?jt=mark
    let modo = 1; //0: Presencial | 1: Remoto

    const url = window.location;

    $(document).ready(function(){
        //AutoMark
        if(url.href == "https://app.biosign.cl/MarcaWeb?jt=mark"){
            if(modo == 1){
                $('label.radio-inline:nth-child(2) > input:nth-child(1)').click();
            }
            $('#btn-login').click();
        }
        if(url.href == "https://app.biosign.cl/Menu/Mantencion"){
            if(document.referrer == "https://app.biosign.cl/MarcaWeb?jt=mark"){
                window.close();
            }
        }
    });

})();
