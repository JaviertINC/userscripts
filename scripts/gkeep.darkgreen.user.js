// ==UserScript==
// @name         Google Keep | DarkGreen
// @namespace    https://javiertinc.cl/userscripts
// @version      1.4
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

    let jtkeep = [
        //Default
        '.zTETae-h1U9Be-hxXJme.IZ65Hb-TBnied',
            '{background-color: #6f6f6f!important; border-color: #ddd!important; }',
        '.zTETae-h1U9Be-hxXJme.CmABtb.RNfche, .zTETae-h1U9Be-hxXJme.x5ghY-MJoBVe-yOOK0-Bz112c, .zTETae-h1U9Be-hxXJme.IZ65Hb-NGme3c, .zTETae-h1U9Be-hxXJme .IZ65Hb-DaY83b-gKvOdd, .zTETae-h1U9Be-hxXJme.IZ65Hb-n0tgWb.oT9UPb, .zTETae-h1U9Be-hxXJme.IZ65Hb-TBnied .r4nke-YPqjbf.fmcmS-x3Eknd',
            '{background-color: #6f6f6f!important; }',
        '.zTETae-h1U9Be-hxXJme.CmABtb.RNfche, .zTETae-h1U9Be-hxXJme.x5ghY-MJoBVe-yOOK0-Bz112c, .zTETae-h1U9Be-hxXJme.IZ65Hb-NGme3c, .zTETae-h1U9Be-hxXJme .IZ65Hb-DaY83b-gKvOdd, .zTETae-h1U9Be-hxXJme.IZ65Hb-n0tgWb.oT9UPb, .zTETae-h1U9Be-hxXJme.IZ65Hb-TBnied .r4nke-YPqjbf.fmcmS-x3Eknd',
        ',.zTETae-h1U9Be-hxXJme.IZ65Hb-TBnied .h1U9Be-YPqjbf',
            '{color: #f1f1f1!important; }',


        //Gris
        '.mrxPge-h1U9Be-hxXJme.IZ65Hb-TBnied',
            '{background-color: #4c4c4c!important; border-color: #4caf50!important; }',
        '.mrxPge-h1U9Be-hxXJme.CmABtb.RNfche, .mrxPge-h1U9Be-hxXJme.x5ghY-MJoBVe-yOOK0-Bz112c, .mrxPge-h1U9Be-hxXJme.IZ65Hb-NGme3c, .mrxPge-h1U9Be-hxXJme .IZ65Hb-DaY83b-gKvOdd, .mrxPge-h1U9Be-hxXJme.IZ65Hb-n0tgWb.oT9UPb, .mrxPge-h1U9Be-hxXJme.IZ65Hb-TBnied .r4nke-YPqjbf.fmcmS-x3Eknd',
            '{background-color: #4c4c4c!important; }',

        //Verde
        '.nllRtd-h1U9Be-hxXJme.IZ65Hb-TBnied',
            '{background-color: #4caf50!important; border-color: #fff!important; }',
        '.nllRtd-h1U9Be-hxXJme.CmABtb.RNfche, .nllRtd-h1U9Be-hxXJme.x5ghY-MJoBVe-yOOK0-Bz112c, .nllRtd-h1U9Be-hxXJme.IZ65Hb-NGme3c, .nllRtd-h1U9Be-hxXJme .IZ65Hb-DaY83b-gKvOdd, .nllRtd-h1U9Be-hxXJme.IZ65Hb-n0tgWb.oT9UPb, .nllRtd-h1U9Be-hxXJme.IZ65Hb-TBnied .r4nke-YPqjbf.fmcmS-x3Eknd',
            '{background-color: #4caf50!important; }',

        //Rojo
        '.oq6NAc-h1U9Be-hxXJme.IZ65Hb-TBnied',
            '{background-color: #b82d2d!important; border-color: #f00!important; }',
        '.oq6NAc-h1U9Be-hxXJme.CmABtb.RNfche, .oq6NAc-h1U9Be-hxXJme.x5ghY-MJoBVe-yOOK0-Bz112c, .oq6NAc-h1U9Be-hxXJme.IZ65Hb-NGme3c, .oq6NAc-h1U9Be-hxXJme .IZ65Hb-DaY83b-gKvOdd, .oq6NAc-h1U9Be-hxXJme.IZ65Hb-n0tgWb.oT9UPb, .oq6NAc-h1U9Be-hxXJme.IZ65Hb-TBnied .r4nke-YPqjbf.fmcmS-x3Eknd',
            '{background-color: #b82d2d!important; }',

        //Morado
        '.O2jK-h1U9Be-hxXJme.IZ65Hb-TBnied',
            '{background-color: #802f7f!important; border-color: #ec0bec!important; }',
        '.O2jK-h1U9Be-hxXJme.CmABtb.RNfche, .O2jK-h1U9Be-hxXJme.x5ghY-MJoBVe-yOOK0-Bz112c, .O2jK-h1U9Be-hxXJme.IZ65Hb-NGme3c, .O2jK-h1U9Be-hxXJme .IZ65Hb-DaY83b-gKvOdd, .O2jK-h1U9Be-hxXJme.IZ65Hb-n0tgWb.oT9UPb, .O2jK-h1U9Be-hxXJme.IZ65Hb-TBnied .r4nke-YPqjbf.fmcmS-x3Eknd',
            '{background-color: #802f7f!important; }',

        //Celeste
        '.v3pZbf-h1U9Be-hxXJme.IZ65Hb-TBnied',
            '{ background-color: #19c1f3!important; border-color: #fff!important; }',
        '.v3pZbf-h1U9Be-hxXJme.CmABtb.RNfche,.v3pZbf-h1U9Be-hxXJme.x5ghY-MJoBVe-yOOK0-Bz112c,.v3pZbf-h1U9Be-hxXJme.IZ65Hb-NGme3c,.v3pZbf-h1U9Be-hxXJme .IZ65Hb-DaY83b-gKvOdd,.v3pZbf-h1U9Be-hxXJme.IZ65Hb-n0tgWb.oT9UPb,.v3pZbf-h1U9Be-hxXJme.IZ65Hb-TBnied .r4nke-YPqjbf.fmcmS-x3Eknd',
            '{background-color: #19c1f3!important; }',

        //

        //Tags
        '.Q0hgme-XPtOyb',
            '{background-color: rgba(255,255,255,.3)!important; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5)!important; color: rgba(0,0,0,.7)!important; }',

        '.IZ65Hb-jfdpUb-fmcmS',
            '{color: #ddd!important; }',

        '.VIpgJd-TUo6Hb.XKSfm-L9AdLc.eo9XGd',
            '{top: 10px!important; left: 7%!important; width: 93%!important; }',

        '.IZ65Hb-n0tgWb.IZ65Hb-QQhtn.oT9UPb',
            '{width: 93%!important;}',

        '.IZ65Hb-fbudBf .IZ65Hb-s2gQvd',
            '{max-height: 90vh!important; min-height: 90vh!important; height: 90vh!important; }',


    ].join('\n');
	GM_addStyle(jtkeep);
})();
