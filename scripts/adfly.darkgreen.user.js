// ==UserScript==
// @name          Adf.ly | DarkGreen
// @description   Una versión oscura, cuida tus ojos :D
// @author        @JaviertINC
// @version       0.3
// @icon          https://www.google.com/s2/favicons?domain=adf.ly
// @updateURL     https://javiertinc.github.io/userscripts/scripts/adfly.darkgreen.user.js
// @match         *://adf.ly/*
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
        "#cookie_notice,.home footer#footer, .secondary footer#footer{ background-color: "+ bg_color +"!important; border-top: 1px solid "+ main_color +"!important; }",
        "body{ background-color: "+ bg2_color +"!important; }",
        "#footer,#footer .background,.multiplebgs #footer nav li a{ background: unset!important; }",
        "#footer a, #footer a:link, #footer a:hover, #footer a:visited{ color: "+ main_color +"!important; }",
        "#cookie_notice{ display: none!important; }",
        "#cookie_notice a{ color: "+ main_color +"!important; text-decoration: underline!important; }",
        "section.page > .container{ background-color: "+ bg_color +"!important; border-color: "+ main_color +"!important; }",
        ".page h3{ color: "+ title_color +"!important; }",
	].join("\n");
	GM_addStyle(css);

})();
