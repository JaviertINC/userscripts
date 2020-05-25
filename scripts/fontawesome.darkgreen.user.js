// ==UserScript==
// @name          FontAwesome | DarkGreen
// @description   Una versión oscura, cuida tus ojos :D
// @author        @JaviertINC
// @version       0.3
// @icon          https://www.google.com/s2/favicons?domain=fontawesome.com
// @updateURL     https://javiertinc.github.io/userscripts/scripts/fontawesome.darkgreen.user.js
// @match         https://fontawesome.com/*
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var main_color = "#4caf50";
    var bg_color = "#4c4c4c";
    var bg2_color = "#242424";
    var bg3_color = "#666";
    var title_color = "#fff";
    var subtitle = "#f1f1f1";
    var bg_input = "#666";

	var css = [
		"#top_bar{ background-color: "+ bg_color +"!important; border-bottom: 1px solid "+ main_color +"!important; }",
        ".bg-gray0{ background-color: "+ bg2_color +"!important; }",
	].join("\n");
	GM_addStyle(css);

})();
