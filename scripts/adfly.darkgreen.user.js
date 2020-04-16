// ==UserScript==
// @name          Adf.ly | DarkGreen
// @description   Una versión oscura, cuida tus ojos :D
// @author        @JaviertINC
// @version       0.6
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
        "body{ background: unset!important; background-color: "+ bg2_color +"!important; }",
        "#footer,#footer .background,.multiplebgs #footer nav li a{ background: unset!important; }",
        "#footer a, #footer a:link, #footer a:hover, #footer a:visited{ color: "+ main_color +"!important; }",
        "#cookie_notice{ display: none!important; }",
        "#cookie_notice a{ color: "+ main_color +"!important; text-decoration: underline!important; }",
        "section.page > .container{ background-color: "+ bg_color +"!important; border-color: "+ main_color +"!important; }",
        ".page h3{ color: "+ title_color +"!important; }",
        "section.dashboard section.announcements article .wrapper aside{ background-image: unset!important; background-color: "+ main_color +"!important; }",
        "section.dashboard section.announcements article .wrapper section,body, button, input, select, textarea,summary-views_copy,.page table tbody{ color: "+ subtitle +"!important; }",
        "a:link, a:visited, a:active,#top_bar .language_switcher h5,section.page > .container .highlight ul.earnings h4{ color: "+ main_color +"!important; }",
        "#top_bar .accountType a.selected{ background: unset!important; border-top: 2px solid "+ main_color +"!important; }",
        "#header nav li a,section.page > .container .highlight ul.earnings h4,.page h4{ text-shadow: unset!important; }",
        "section.page > .container .highlight{ border-bottom-color: "+ main_color +"!important; background-color: "+ bg_color +"!important;}",
        "section.page > .container section.bar,section.page > .container .highlight ul.earnings li,div.latest-news aside,section.dashboard .highlight nav.sort ul.time > li a{ box-shadow: unset!important; background-image: unset!important; }",
        "section.page > .container .highlight ul.earnings.totals{ background: unset!important; background-color: "+ bg2_color +"!important; }",
        "div.latest-news aside{ background-color: "+ main_color +"!important; }",
        ".page table tbody tr:nth-child(2n){ background-color: "+ bg3_color +"!important; }",
	].join("\n");
	GM_addStyle(css);

})();
