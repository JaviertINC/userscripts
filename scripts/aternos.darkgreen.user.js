// ==UserScript==
// @name          Aternos | DarkGreen
// @description   Una versión oscura, ayuda a cuidar tus ojos :D
// @author        @JaviertINC
// @version       0.3
// @icon          https://www.google.com/s2/favicons?domain=aternos.org
// @updateURL     https://javiertinc.github.io/aternos-antiadblock/aternos.darkgreen.user.js
// @match         *://aternos.org/*
// @run-at        document-end
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        ".main{ background-color: #222!important; color: #f1f1f1!important; }",
        ".header{ background-color: #4c4c4c!important; border-bottom: 1px solid #4caf50!important; }",
        ".navigation{ background-color: #4c4c4c!important; border-right: 1px solid #4caf50!important; }",
        ".navigation .item{ border-top-color: #4caf50!important; border-left-color: #333!important; border-bottom-color: #4caf50!important; }",
        ".navigation .item:last-of-type{ border-bottom-color: #4caf50!important; }",
        ".server-ip,.btn.btn-huge.btn-green,.btn.btn-blue.btn-small.btn-clickme,.btn.btn-white.btn-small,.friend-access-small-button.friend-access-page.btn.btn-white{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
        ".server-status{ border: 1px solid #4caf50!important; }",
        ".btn.btn-blue.btn-notext-mobile,.btn.btn-green.btn-small.btn-no-margin{ background-color: #666!important; border: 1px solid #4caf50!important; }",
        ".server-info-box-title{ background-color: #4c4c4c!important; border-top: 1px solid #4caf50!important; border-left: 1px solid #4caf50!important; border-right: 1px solid #4caf50!important; }",
        ".server-info-box-body,.server-tutorials{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
        ".btn.btn-white.btn-small,.friend-access-small-button.friend-access-page.btn.btn-white,.content h1{ color: #fff!important; }",
        ".navigation .item:hover,.navigation .item.active{ background-color: #666!important; }",
        ".console-title{ background-color: #4c4c4c!important; border-bottom-color: #4caf50!important; }",
        ".console{ background-color: #000!important; color: #4caf50!important; border: 1px solid #4caf50!important; }",

	].join("\n");
    GM_addStyle(css);

})();
