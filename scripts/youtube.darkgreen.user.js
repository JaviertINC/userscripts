// ==UserScript==
// @name          YouTube | DarkGreen
// @description	  Una versión oscura, ayuda a cuidar tu vista :´3
// @author        @JaviertINC
// @version       0.2
// @match       *://www.youtube.com/*
// @icon          https://www.google.com/s2/favicons?domain=youtube.com
// @updateURL     https://javiertinc.github.io/userscripts/scripts/youtube.darkgreen.user.js
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==
(function() {

    var main_color = "#4caf50";

	var css = [
        //Fill
		".style-scope.ytd-topbar-logo-renderer[fill=\"#FF0000\"],",
        ".ytp-large-play-button.ytp-touch-device .ytp-large-play-button-bg,",
        ".ytp-cued-thumbnail-overlay:hover .ytp-large-play-button-bg,",
        ".ytp-muted-autoplay-endscreen-overlay:hover .ytp-large-play-button-bg,",
        "yt-icon,",
        ".yt-icon-container.yt-icon",

        "{ fill: "+ main_color +"!important; }",

	].join("\n");
	GM_addStyle(css);

})();
