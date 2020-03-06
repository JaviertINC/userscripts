// ==UserScript==
// @name         Youtube | Better Youtube Embed
// @version      0.8
// @icon         https://www.google.com/s2/favicons?domain=www.youtube.com
// @author       @JaviertINC
// @match        *://*.youtube.com/embed/*
// @include      *://youtube.com/embed/*
// @include      *://*.youtube-nocookie.com/embed/*
// @include      *://youtube-nocookie.com/embed/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/youtube.embed.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

	var css = [
		":focus{outline: none!important;}",
		".ytp-youtube-button.ytp-button.yt-uix-sessionlink{display: none!important;}",
		".ytp-swatch-background-color{background-color: #4caf50!important;}",
		".ytp-title-link.yt-uix-sessionlink{font-size: 12px;}",
		".ytp-large-play-button.ytp-touch-device .ytp-large-play-button-bg, .ytp-cued-thumbnail-overlay:hover .ytp-large-play-button-bg, .ytp-muted-autoplay-endscreen-overlay:hover .ytp-large-play-button-bg{fill: #4caf50!important;}",
		"@media screen and (max-width:325px) {",
		"   .html5-main-video::-webkit-media-controls-wireless-playback-picker-button {",
        "      display:inline-block;",
		"   }",
		"}",
		".ytp-title-channel-logo{width: 30px!important; height: 30px!important;}",
		".ytp-embed:not(.ad-showing) .ytp-title-text {padding-top: 12px!important; }",
		".ytp-title-enable-channel-logo .ytp-title-text {padding-left: 37px!important; }",
		".ytp-embed:not(.ad-showing).ytp-small-mode .ytp-overflow-button {padding-top: 7px!important; margin-right: -10px!important;}",
	].join("\n");

	GM_addStyle(css);

})();
