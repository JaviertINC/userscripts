// ==UserScript==
// @name         Google Keep | DarkGreen
// @namespace    https://javiertinc.cl/userscripts
// @version      1.2
// @description  Una mejor versión de estilos para el Keep Dark con el toque Green
// @homepage     https://javiertinc.cl/userscripts/script/gkeep.darkgreen
// @author       @JaviertINC
// @match        *://keep.google.com/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/gkeep.darkgreen.user.js
// @icon         https://www.google.com/s2/favicons?domain=keep.google.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    let ads = false;

    let new_css = [
        '.v3pZbf-h1U9Be-hxXJme.IZ65Hb-TBnied{ background-color: #19c1f3!important; border-color: #9ddaff!important; }',

        '.v3pZbf-h1U9Be-hxXJme.CmABtb.RNfche,',
        '.v3pZbf-h1U9Be-hxXJme.x5ghY-MJoBVe-yOOK0-Bz112c,',
        '.v3pZbf-h1U9Be-hxXJme.IZ65Hb-NGme3c,',
        '.v3pZbf-h1U9Be-hxXJme .IZ65Hb-DaY83b-gKvOdd,',
        '.v3pZbf-h1U9Be-hxXJme.IZ65Hb-n0tgWb.oT9UPb,',
        '.v3pZbf-h1U9Be-hxXJme.IZ65Hb-TBnied .r4nke-YPqjbf.fmcmS-x3Eknd',
            '{background-color: #19c1f3!important; }',

        '.mrxPge-h1U9Be-hxXJme.IZ65Hb-TBnied',
            '{background-color: #4c4c4c!important; border-color: #4caf50!important; }',
        '.mrxPge-h1U9Be-hxXJme.CmABtb.RNfche, .mrxPge-h1U9Be-hxXJme.x5ghY-MJoBVe-yOOK0-Bz112c, .mrxPge-h1U9Be-hxXJme.IZ65Hb-NGme3c, .mrxPge-h1U9Be-hxXJme .IZ65Hb-DaY83b-gKvOdd, .mrxPge-h1U9Be-hxXJme.IZ65Hb-n0tgWb.oT9UPb, .mrxPge-h1U9Be-hxXJme.IZ65Hb-TBnied .r4nke-YPqjbf.fmcmS-x3Eknd',
            '{background-color: #4c4c4c!important; }',

        '.nllRtd-h1U9Be-hxXJme.IZ65Hb-TBnied',
            '{background-color: #4caf50!important; border-color: #4caf50!important; }',
        '.nllRtd-h1U9Be-hxXJme.CmABtb.RNfche, .nllRtd-h1U9Be-hxXJme.x5ghY-MJoBVe-yOOK0-Bz112c, .nllRtd-h1U9Be-hxXJme.IZ65Hb-NGme3c, .nllRtd-h1U9Be-hxXJme .IZ65Hb-DaY83b-gKvOdd, .nllRtd-h1U9Be-hxXJme.IZ65Hb-n0tgWb.oT9UPb, .nllRtd-h1U9Be-hxXJme.IZ65Hb-TBnied .r4nke-YPqjbf.fmcmS-x3Eknd',
            '{background-color: #4caf50!important; }',

        '.O2jK-h1U9Be-hxXJme.IZ65Hb-TBnied',
            '{background-color: #802f7f!important; border-color: #ec0bec!important; }',
        '.O2jK-h1U9Be-hxXJme.CmABtb.RNfche, .O2jK-h1U9Be-hxXJme.x5ghY-MJoBVe-yOOK0-Bz112c, .O2jK-h1U9Be-hxXJme.IZ65Hb-NGme3c, .O2jK-h1U9Be-hxXJme .IZ65Hb-DaY83b-gKvOdd, .O2jK-h1U9Be-hxXJme.IZ65Hb-n0tgWb.oT9UPb, .O2jK-h1U9Be-hxXJme.IZ65Hb-TBnied .r4nke-YPqjbf.fmcmS-x3Eknd',
            '{background-color: #802f7f!important; }',

        '.Q0hgme-XPtOyb',
            '{background-color: #666!important; box-shadow: inset 0 0 0 1px rgba(76, 175, 80,0.541)!important; color: #fff!important; }',
    ].join('\n');
	GM_addStyle(new_css);
})();
