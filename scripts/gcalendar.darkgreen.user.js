// ==UserScript==
// @name         Google Calendar | DarkGreen
// @namespace    https://javiertinc.cl/userscripts
// @version      0.2
// @description  Una mejor versión de estilos para el gCalendar Dark con el toque Green
// @homepage     https://javiertinc.cl/userscripts/script/gcalendar.darkgreen
// @author       @JaviertINC
// @match        *://calendar.google.com/calendar/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/gcalendar.darkgreen.user.js
// @icon         https://www.google.com/s2/favicons?domain=calendar.google.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    //https://ssl.gstatic.com/gb/images/p1_4d827a84.png

    let jtcalendar = [
        //Body
        'body',
        '{ background-color: #2c2c2c!important; }',

        //Header
        '#gb',
            '{background-color: #4c4c4c!important; border-bottom: 1px solid #4caf50!important; }',

        //Lines
        'body[data-viewfamily="EVENT"] .SGWAac',
        ',.Kk7lMc-DWWcKd-OomVLb-hgDUwe',
        '{ border-top-color: #4caf50!important; }',

        //Text
        '.gb_na svg, .gb_Hc svg, .gb_3c .gb_5d, .gb_Sc .gb_5d',
        ',.GXlaye .snByac, .rSoRzd, .Cd9hpd .snByac',
        ',.HLI7qf .c7fp5b, .mr0WL, .wy3aMe',
            '{color: #fff!important; }',

        //Icons
        'div.rF3YF .NMm5M, div.rF3YF .Ce1Y1c',
        '{color: #fff!important; fill: #fff!important;}',

        //Buttons
        '.ZFr60d, .Cd9hpd',
        '{ background: transparent!important;}',
        '.ZFr60d:hover, .ZFr60d:focus, , .Cd9hpd:hover',
        '{ background: #4caf50!important; }',
        '.GXlaye.qRI4pc',
        '{ border: 1px solid #4caf50!important; }',
        '.GXlaye.qRI4pc:hover',
        '{ background: #4caf50!important;}',

        //Button Create
        '.buGMKc',
        '{ background: #4caf50!important; color: #fff!important; box-shadow: 0px 1px 2px 0px #4caf504d,0px 1px 3px 1px #4caf5026;}',

        //Tools Bar
        'div.gboEAb',
        '{border-left-color: #4caf50!important; }',
        '.Kk7lMc-DWWcKd-OomVLb-haAclf',
        '{ background-color: #4c4c4c!important; }',


        //Calendar Lines
        '.t8qpF, .PhLhOd',
        '{ border-right-color: #4caf50!important; }',
        '.tNDBE:not(.Wyo4Qe)',
        '{ border-left-color: #4caf50!important; }',

        //Calendar Cubes
        '.tNDBE',
        '{ background-color: #3c3c3c!important; }',

        //Calendar Numbers
        '.yzYBvd',
        '{ color: #fff!important; }',
        '.yzYBvd.F262Ye', //Current Day
        '{ background-color: #4caf50!important; }',
        '.yzYBvd:hover',
        '{ background-color: #6c6c6c!important; }',

        //Calendar Notes Old
        '.g3dbUc.UflSff',
        '{ color: #999!important; }',

        //Calendar Notes Next
        '.g3dbUc.smECzc',
        '{ color: #f1f1f1!important; }',



    ].join('\n');
	GM_addStyle(jtcalendar);
})();
