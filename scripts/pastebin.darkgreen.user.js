// ==UserScript==
// @name          Pastebin | DarkGreen
// @description   Una versión oscura, cuida tus ojos :D
// @author        @JaviertINC
// @version       0.3
// @icon          https://www.google.com/s2/favicons?domain=pastebin.com
// @updateURL     https://javiertinc.github.io/userscripts/scripts/pastebin.darkgreen.user.js
// @match         *://pastebin.com/*
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

	var css = [
		"#main_frame{background-color: #242424!important; border-bottom-color: #4caf50!important;}",
        "#header{ background-color: #4c4c4c!important; border-bottom: 1px solid #4caf50!important; background-image: unset!important; }",
        "#monster_frame{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; border-top: none!important; border-left-color: #4caf50!important; border-right-color: #4caf50!important; border-bottom-color: #4caf50!important; color: #f1f1f1!important; }",
        ".content_title{ color: #4caf50!important; border-bottom-color: #4caf50!important; }",
        "div#content_right{ background: unset!important; border-left: 2px solid #4caf50!important; }",
        ".content_right_title a, a.folder_link{ color: #4caf50!important; }",
        "a{ color: #4caf50!important; text-decoration: underline!important; }",
        "#header_top{ background: unset!important; }",
        ".btn-sign.sign-in{ border-color: #4caf50!important; text-decoration: none!important; color: #f1f1f1!important; background-color: #4c4c4c!important; }",
        ".btn-sign.sign-in:hover{ background-color: #333!important; }",
        ".btn-sign.sign-up{ border-color: #4caf50!important; text-decoration: none!important; color: #f1f1f1!important; background-color: #4c4c4c!important; }",
        ".btn-sign.sign-up:hover{ background-color: #333!important; }",
        "input.search_input{ background: #515151 url('https://pastebin.com/i/search.png') no-repeat 7px 7px!important; border: 1px solid #4caf50!important; }",
        "button.i_highlight{ background-size: 15px!important; }",
        ".button1.btnbig { border-color: #4caf50!important; text-decoration: none!important; color: #f1f1f1!important; background-color: #4c4c4c!important; } ",
        ".button1.btnbig:hover{ background-color: #333!important; }",

	].join("\n");
	GM_addStyle(css);

})();
