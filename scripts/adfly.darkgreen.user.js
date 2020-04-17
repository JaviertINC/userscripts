// ==UserScript==
// @name          Adf.ly | DarkGreen
// @description   Una versión oscura, cuida tus ojos :D
// @author        @JaviertINC
// @version       1.4
// @icon          https://www.google.com/s2/favicons?domain=adf.ly
// @updateURL     https://javiertinc.github.io/userscripts/scripts/adfly.darkgreen.user.js
// @match         *://adf.ly/*
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var main_color = "#4caf50";
    var main_rgb = "76, 175, 80";
    var bg_color = "#4c4c4c";
    var bg2_color = "#242424";
    var bg3_color = "#666";
    var title_color = "#fff";
    var subtitle = "#f1f1f1";
    var legend = "#ccc";
    var bg_input = "#666";

	var css = [
        "#top_bar{ background-color: "+ bg_color +"!important; border-bottom: 1px solid "+ main_color +"!important; }",
        "#cookie_notice,.home footer#footer, .secondary footer#footer{ background-color: "+ bg_color +"!important; border-top: 1px solid "+ main_color +"!important; }",
        "body{ background: unset!important; background-color: "+ bg2_color +"!important; }",
        "#footer,#footer .background,.multiplebgs #footer nav li a{ background: unset!important; }",
        "#footer a, #footer a:link, #footer a:hover, #footer a:visited{ color: "+ main_color +"!important; }",
        "#cookie_notice,.yesterday,.today,.all_time{ display: none!important; }",
        "#cookie_notice a{ color: "+ main_color +"!important; text-decoration: underline!important; }",
        "section.page > .container{ background-color: "+ bg_color +"!important; border-color: "+ main_color +"!important; }",
        ".page h3{ color: "+ title_color +"!important; }",
        "section.dashboard section.announcements article .wrapper aside{ background-image: unset!important; background-color: "+ main_color +"!important; }",
        "section.dashboard section.announcements article .wrapper section,body, button, input, select, textarea,summary-views_copy,.page table tbody{ color: "+ subtitle +"!important; }",
        "a:link, a:visited, a:active,#top_bar .language_switcher h5,section.page > .container .highlight ul.earnings h4{ color: "+ main_color +"!important; }",
        "#top_bar .accountType a.selected{ background: unset!important; border-top: 2px solid "+ main_color +"!important; }",
        "#header nav li a,section.page > .container .highlight ul.earnings h4,.page h4,section.dashboard .highlight nav.sort ul.time > li a{ text-shadow: unset!important; }",
        "section.page > .container .highlight{ border-bottom-color: "+ main_color +"!important; background-color: "+ bg_color +"!important;}",
        "section.page > .container section.bar,section.page > .container .highlight ul.earnings li,div.latest-news aside,section.dashboard .highlight nav.sort ul.time > li a,.chzn-container-single .chzn-single div,.button{ box-shadow: unset!important; background-image: unset!important; }",
        "section.page > .container .highlight ul.earnings.totals{ background: unset!important; background-color: "+ bg2_color +"!important; }",
        "div.latest-news aside{ background-color: "+ main_color +"!important; }",
        ".page table tbody tr:nth-child(2n){ background-color: "+ bg3_color +"!important; }",
        "section.dashboard .highlight nav.sort ul.time > li a.current, section.dashboard .highlight nav.sort ul.time > li.current a, #monthly-earnings-summary a.current,.chzn-container-single .chzn-single div,section.page > .container section.bar{ background: unset!important; background-color: "+ bg_color +"!important; border-color: "+ main_color +"!important; }",
        "section.page > .container .highlight ul.earnings.totals,section.page > .container section.bar section.profile,section.page > .container section.bar section.profile figure, #editAvatarResult figure,.data .panels,.data nav.menu,.page table td, .page table th,section.withdraw section.history table{ border-color: "+ main_color +"!important; }",
        "section.page > .container section.bar section.profile,section.page > .container section.bar .shadow,section.page > .container section.bar section.shorten,section.page form#shrink #shrink_link,.blueButton2,section.vertiser #fullFilter h4.active, h4.lightBlueButton.active, .lightBlueButton.active, #monthly-earnings-summary h4.current{ background: unset!important; background-image: unset!important; }",
        "section.page > .container section.bar section.profile p{ color: "+ legend +"!important; }",
        "section.page > .container section.bar section.profile #editAvatarLink{ font-weight: bold!important; background-color: "+ bg3_color +"!important; top:0!important; width:100%!important; text-align: center!important; color: "+ title_color +"!important; padding: 4px; border-bottom: 1px solid "+ main_color +"!important; }",
        "section.page > .container section.bar section.profile figure, #editAvatarResult figure,.blueButton2,section.vertiser #fullFilter h4.active, h4.lightBlueButton.active, .lightBlueButton.active, #monthly-earnings-summary h4.current{ box-shadow: unset!important; }",
        "path[fill=\"#7cb5ec\"]{ fill: "+ main_color +"!important; }",
        "path[stroke=\"rgba(192,192,192,0.0001)\"]{ stroke: rgba("+ main_rgb +",0.0001)!important; }",
        "path[stroke=\"#7cb5ec\"]{ stroke: "+ main_color +"!important; }",
        "rect[fill=\"#FFFFFF\"]{ fill: "+ bg_color +"!important; }",
        "section.page form#shrink #shrink_link{ background-color: "+ bg_input+"!important; border: 1px solid "+ main_color +"!important; }",
        ".blueButton2{ border: none!important; border-left: 1px solid "+ main_color +"!important; height: 39px!important; right: 10px!important; }",
        ".blueButton2:hover{ background-color: "+ bg2_color +"!important; }",
        "section.page > .container section.bar section.profile figure{ border-radius: 50%!important; }",
        "section.vertiser #fullFilter h4.active, h4.lightBlueButton.active, .lightBlueButton.active, #monthly-earnings-summary h4.current,.button{ background-color: "+ bg2_color +"!important; border-color: "+ main_color +"!important; text-shadow: unset!important; }",
        "#monthly-earnings-summary a,.page h2{ text-shadow: unset!important; }",
        ".highcharts-xaxis-title,.page h2,.page h3,.page h4,#payment-email,#next-payment-date,.button{ color: "+ title_color +"!important; }",
        "section.withdraw section.payment #counter{ background: url(\"https://javiertinc.github.io/images/adfly_downcounter.png\")!important; }",
        ".button[href=\"/account/instantpay\"]{ padding: 10px 20px!important; border-width: 2px; border-radius: 5px; }",
        ".button[href=\"/account/instantpay\"]:hover{ background-color: "+bg3_color +"!important; }",
        "section.withdraw section.payment article section{ background-color: "+ bg2_color +"!important; border: 1px solid "+main_color+"!important; border-radius: 8px; background: unset!important; background-image: unset!important; }",
        "section.page > .container section.bar{ border-top: 1px solid "+ main_color +"!important;}",
        ".multiplebgs #header nav,.multiplebgs #header nav li{ background: unset!important; }",
        "li.forum{ display: none!important; }",

	].join("\n");
	GM_addStyle(css);

})();
