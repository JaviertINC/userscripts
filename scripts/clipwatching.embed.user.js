// ==UserScript==
// @name         ClipWatching | DarkGreen
// @version      0.1
// @icon         https://www.google.com/s2/favicons?domain=clipwatching.com
// @author       @JaviertINC
// @match        *://clipwatching.com/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/clipwatching.embed.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

	var css = [
		":focus{outline: none!important;}",
		"body{margin: 0!important;}",
		".vjs5-hola-skin .vjs-progress-control .vjs-play-progress{ background-color: #4caf50!important; }",

	].join("\n");

	GM_addStyle(css);

})();
