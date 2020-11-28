// ==UserScript==
// @name         Nic.cl | DarkGreen
// @namespace    https://javiertinc.cl/userscripts
// @version      0.1
// @description  Una versión oscura, ayuda a cuidar tus ojos :D
// @homepage     https://javiertinc.cl/userscripts/script/nic_cl.darkgreen
// @author       @JaviertINC
// @match        https://www.nic.cl/registry/Whois.do?d=*
// @include      https://www.nic.cl/registry/BuscarDominio.do*
// @exclude      https://www.nic.cl/index.html
// @updateURL    https://javiertinc.github.io/userscripts/scripts/nic_cl.darkgreen.user.js
// @icon         https://www.google.com/s2/favicons?domain=nic.cl
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        "body{ background-color: #222!important; color: #f1f1f1!important; }",
        "#header-izq1interior{ height: 60px !important; background-size: auto 30px!important; }",
        "#cuerpo-interior{ display: none!important; }",
        ".boxhome [action=\"/registry/Whois.do\"]{ display: none!important; }",
        "#footer-corto{ display: none!important; }",

        ".titcajasinterior{ color: #fff!important; font-weight: bold!important; padding: .2rem 1rem .4rem!important; border-bottom-color: #4caf50!important; }",
        "#cajacentro-interior #box-tablaresultados{ display: block; position: relative; top: 30px; border-color: #4caf50!important; background-color: #4c4c4c!important; }",
        "input[type=\"text\"]{ background-color: #666!important; color: #fff!important; border: 1px solid #4caf50!important; border-radius: 8px!important; padding: .7rem!important; }",
        "#btn-dominiosinscritos{ background-image: unset!important; background-repeat: unset!important; height: unset!important; width: unset!important; border: unset!important; font-size: unset!important; margin-left: unset!important; overflow: hidden; text-indent: unset!important; }",
        "#btn-dominiosinscritos{ background-color: #4caf50!important; color: #fff!important; border-radius: 5px; padding: .7rem!important; margin-left: 7px!important; cursor: pointer!important; box-shadow: 0 0 10px #00000022!important; } ",
        "#btn-dominiosinscritos:hover{ background-color: #5dbf61!important; } ",
        ".tablabusqueda{ background-color: #5f5f5f!important; color: #eee!important; box-shadow: 0 0 10px #00000022!important; border-radius: 8px!important; }",
        ".tablabusqueda td:hover{ background-color: #5f5f5f!important; }",
        ".tablabusqueda td a{ color: #4caf50!important; }",
        ".tablabusqueda td a:hover{ color: #5dbf61!important;}",
        ".tablabusqueda tr:first-child td { color: #fff!important; }",
        ".tablabusqueda td{ color: #f1f1f1!important; }",
        ".tablabusqueda td button{ border-color: #4caf50!important; border-radius: 5px!important; }",
        "#box-tablaresultados p{ color: #eee!important; text-align: center!important; }",

	].join("\n");
    GM_addStyle(css);

})();
