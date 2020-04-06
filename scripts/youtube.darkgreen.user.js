// ==UserScript==
// @name          YouTube | DarkGreen
// @description	  Una versión oscura, ayuda a cuidar tu vista :´3
// @author        @JaviertINC
// @version       0.5
// @match         *://www.youtube.com/*
// @icon          https://www.google.com/s2/favicons?domain=youtube.com
// @updateURL     https://javiertinc.github.io/userscripts/scripts/youtube.darkgreen.user.js
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==
(function() {

    var main_color = "#4caf50";
    var white_color = "#f1f1f1";

	var css = [
        //Fill
		".style-scope.ytd-topbar-logo-renderer[fill=\"#FF0000\"],",
        ".ytp-large-play-button.ytp-touch-device .ytp-large-play-button-bg,",
        ".ytp-cued-thumbnail-overlay:hover .ytp-large-play-button-bg,",
        ".ytp-muted-autoplay-endscreen-overlay:hover .ytp-large-play-button-bg,",
        "yt-icon,",
        ".yt-icon-container.yt-icon",

        "{ fill: "+ main_color +"!important; }",


        //Stroke
        "yt-icon,",
        ".yt-icon-container.yt-icon",

        "{ stroke: unset!important; }",


        //Backkground
        ".ytp-swatch-background-color,",
        ".ytp-settings-button.ytp-hd-quality-badge::after,",
        "paper-button.ytd-subscribe-button-renderer,",
        "ytd-sentiment-bar-renderer[activated_] #like-bar.ytd-sentiment-bar-renderer,",
        "paper-toggle-button[checked]:not([disabled]) .toggle-button.paper-toggle-button,",
        ".ytp-chrome-controls .ytp-button[aria-pressed]::after,",
        "#progress.yt-page-navigation-progress,",
        "#progress.ytd-thumbnail-overlay-resume-playback-renderer",

        "{ background-color: "+ main_color +"!important; }",

        //Color Main
        "a.yt-simple-endpoint.yt-formatted-string,",
        ".ytp-swatch-color,",
        ".badge-style-type-live-now.ytd-badge-supported-renderer,",
        "ytd-button-renderer #button.ytd-button-renderer,",
        "a.yt-simple-endpoint.ytd-toggle-button-renderer",

        "{ color: "+ main_color +"!important; }",

        //Color White
        "paper-button.ytd-subscribe-button-renderer[subscribed]",

        "{ color: "+ white_color +"!important; }",

        //BorderColor
        ".badge-style-type-live-now.ytd-badge-supported-renderer,",
        "ytd-button-renderer.style-suggestive[is-paper-button] paper-button.ytd-button-renderer",

        "{ border-color: "+ main_color +"!important; }",

	].join("\n");
	GM_addStyle(css);

})();
