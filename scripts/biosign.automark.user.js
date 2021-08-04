// ==UserScript==
// @name         BioSign | AutoMark
// @namespace    https://javiertinc.cl/userscripts
// @version      0.4
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
            setTimeout(function(){
                $('#correcto > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > button:nth-child(1)').click();
            }, 1000);
        }
        if(url.href == "https://app.biosign.cl/Menu/Mantencion"){
            if(document.referrer == "https://app.biosign.cl/MarcaWeb?jt=mark"){
                window.close();
            }
        }
    });


	var css = [
        "body{ background-color: #2c2c2c!important; color: #f1f1f1!important;}",
        ".navbar-default{ background-color: #4c4c4c!important; color: #f1f1f1!important; }",
        ".caja_titulo{ background-color: #4caf50!important;}",
        ".navbar-right{ background-color: #4c4c4c!important; }",
        ".navbar-default .navbar-nav > li > a{ color: #fff!important; }",
        ".navbar-default .navbar-nav > li:hover{ background-color: #4caf50!important;}",
        ".navbar-default .navbar-nav > li:hover > a{ color: #fff!important; }",
        "table.table-bordered.dataTable th{ background-color: #4caf50!important; }",
        "table.table-bordered.dataTable td:last-child,",
        "table.table-bordered.dataTable td:last-child{ font-weight: bold!important; background-color: rgba(255,255,255,.5)!important}",
        ".table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td",
        "   { border-color: #4caf50!important; }",
        ".table-bordered{ border-color: #4caf50!important; }",
        ".table-striped > tbody > tr:nth-of-type(2n+1){background-color: rgba(255,255,255,.3)!important; }",
        ".table-striped > tbody{background-color: #4c4c4c!important; color: #fff!important; }",
        ".btn-primary{ background-color: #4caf50!important; border-color: #3b9e40!important; }",
        ".form-control:not(.btn-primary){ background-color: #6c6c6c!important; color: #fff!important; border-color: #4caf50!important; }",
        "form#filtros{ background-color: #4c4c4c!important; border: 1px solid #4caf50; padding: 1rem 1.5rem 0; border-radius: 5px; margin: 0 -15px 2rem}",
        "form#filtros label{ color: #fff!important; }",
        "footer{ background-color: #4caf50!important; }",
        ".pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus",
        "   { background-color: #6c6c6c!important; color: #aaa!important; border-color: #5c5c5c!important; }",
        ".pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus",
        "   { background-color: #4caf50!important; border-color: #3b9e40!important; }",
        ".pagination > li > a, .pagination > li > span{ background-color: #4c4c4c!important; border-color: #3c3c3c!important; color: #fff!important; }",
        ".pagination > li:hover > a, .pagination > li:hover > span{ background-color: #5c5c5c!important; border-color: #4c4c4c!important; color: #fff!important; }",
    ].join("\n");
	GM_addStyle(css);

})();
