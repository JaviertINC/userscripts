// ==UserScript==
// @name         MegaPeliculasRip.net Add Skipper
// @namespace    https://javiertinc.cl/userscripts
// @version      0.1
// @author       @JaviertINC
// @match        https://www.megapeliculasrip.net/out/out/out/out/?*
// @match        https://www.megapeliculasrip.net/out/out/out/?*
// @match        https://www.megapeliculasrip.net/out/out/?*
// @match        https://www.megapeliculasrip.net/out/?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=megapeliculasrip.net
// @run-at          document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let url = window.location.href;
    let json = JSON.parse(atob(url.split("out/?")[1]))
    window.location.href = json.l;
})();
