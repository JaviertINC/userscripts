// ==UserScript==
// @name          Adf.ly | DarkGreen
// @description   Una versión oscura, ayuda a cuidar tus ojos :D
// @author        @JaviertINC
// @version       2.6
// @icon          https://external-content.duckduckgo.com/ip3/www.adf.ly.ico
// @updateURL     https://javiertinc.github.io/userscripts/scripts/adfly.darkgreen.user.js
// @match         *://adf.ly/*
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var c_main = "#4caf50";
    var c_main_rgb = "76, 175, 80";
    var c_bg_1 = "#4c4c4c";
    var c_bg_2 = "#242424";
    var c_bg_3 = "#666";
    var c_bg_4 = "#3d3d3d";
    var c_bg_5 = "#333";
    var c_title = "#fff";
    var c_subtitle = "#f1f1f1";
    var c_legend = "#ccc";

    var hide_unlinks = true;

    var name = "AdFly";
    var url = window.location.href;

    if(hide_unlinks){
        hide_unlinks = "li.forum,li.support{ display: none!important; }";
    }else{
        hide_unlinks = "";
    }

	var css = [
        hide_unlinks,
        "#top_bar{ background-color: "+ c_bg_1 +"!important; border-bottom: 1px solid "+ c_main +"!important; }",
        "#cookie_notice,.home footer#footer, .secondary footer#footer{ background-color: "+ c_bg_1 +"!important; border-top: 1px solid "+ c_main +"!important; }",
        "body{ background: unset!important; background-color: "+ c_bg_2 +"!important; }",
        "#footer,#footer .background,.multiplebgs #footer nav li a{ background: unset!important; }",
        "#footer a, #footer a:link, #footer a:hover, #footer a:visited{ color: "+ c_main +"!important; }",
        "#cookie_notice,.yesterday,.today,.all_time{ display: none!important; }",
        "#cookie_notice a{ color: "+ c_main +"!important; text-decoration: underline!important; }",
        "section.page > .container{ background-color: "+ c_bg_1 +"!important; border-color: "+ c_main +"!important; }",
        ".page h3{ color: "+ c_title +"!important; }",
        "section.dashboard section.announcements article .wrapper aside{ background-image: unset!important; background-color: "+ c_main +"!important; }",
        "section.dashboard section.announcements article .wrapper section,body, button, input, select, textarea,summary-views_copy,.page table tbody{ color: "+ c_subtitle +"!important; }",
        "a:link, a:visited, a:active,#top_bar .language_switcher h5,section.page > .container .highlight ul.earnings h4{ color: "+ c_main +"!important; }",
        "#top_bar .accountType a.selected{ background: unset!important; border-top: 2px solid "+ c_main +"!important; }",
        "#header nav li a,section.page > .container .highlight ul.earnings h4,.page h4,section.dashboard .highlight nav.sort ul.time > li a{ text-shadow: unset!important; }",
        "section.page > .container .highlight{ border-bottom-color: "+ c_main +"!important; background-color: "+ c_bg_1 +"!important;}",
        "section.page > .container section.bar,section.page > .container .highlight ul.earnings li,div.latest-news aside,section.dashboard .highlight nav.sort ul.time > li a,.chzn-container-single .chzn-single div,.button{ box-shadow: unset!important; background-image: unset!important; }",
        "section.page > .container .highlight ul.earnings.totals{ background: unset!important; background-color: "+ c_bg_2 +"!important; }",
        "div.latest-news aside{ background-color: "+ c_main +"!important; }",
        ".page table tbody tr:nth-child(2n){ background-color: "+ c_bg_3 +"!important; }",
        "section.dashboard .highlight nav.sort ul.time > li a.current, section.dashboard .highlight nav.sort ul.time > li.current a, #monthly-earnings-summary a.current,.chzn-container-single .chzn-single div,section.page > .container section.bar{ background: unset!important; background-color: "+ c_bg_1 +"!important; border-color: "+ c_main +"!important; }",
        "section.page > .container .highlight ul.earnings.totals,section.page > .container section.bar section.profile,section.page > .container section.bar section.profile figure, #editAvatarResult figure,.data .panels,.data nav.menu,.page table td, .page table th,section.withdraw section.history table{ border-color: "+ c_main +"!important; }",
        "section.page > .container section.bar section.profile,section.page > .container section.bar .shadow,section.page > .container section.bar section.shorten,section.page form#shrink #shrink_link,.blueButton2,section.vertiser #fullFilter h4.active, h4.lightBlueButton.active, .lightBlueButton.active, #monthly-earnings-summary h4.current{ background: unset!important; background-image: unset!important; }",
        "section.page > .container section.bar section.profile p{ color: "+ c_legend +"!important; }",
        "section.page > .container section.bar section.profile #editAvatarLink{ font-weight: bold!important; background-color: "+ c_bg_3 +"!important; top:0!important; width:100%!important; text-align: center!important; color: "+ c_title +"!important; padding: 4px; border-bottom: 1px solid "+ c_main +"!important; }",
        "section.page > .container section.bar section.profile figure, #editAvatarResult figure,.blueButton2,section.vertiser #fullFilter h4.active, h4.lightBlueButton.active, .lightBlueButton.active, #monthly-earnings-summary h4.current{ box-shadow: unset!important; }",
        "path[fill=\"#7cb5ec\"]{ fill: "+ c_main +"!important; }",
        "path[stroke=\"rgba(192,192,192,0.0001)\"]{ stroke: rgba("+ c_main_rgb +",0.0001)!important; }",
        "path[stroke=\"#7cb5ec\"]{ stroke: "+ c_main +"!important; }",
        "rect[fill=\"#FFFFFF\"]{ fill: "+ c_bg_1 +"!important; }",
        "section.page form#shrink #shrink_link{ background-color: "+ c_bg_3+"!important; border: 1px solid "+ c_main +"!important; }",
        ".blueButton2{ border: none!important; border-left: 1px solid "+ c_main +"!important; height: 39px!important; right: 10px!important; }",
        ".blueButton2:hover{ background-color: "+ c_bg_2 +"!important; }",
        "section.page > .container section.bar section.profile figure{ border-radius: 50%!important; }",
        "section.vertiser #fullFilter h4.active, h4.lightBlueButton.active, .lightBlueButton.active, #monthly-earnings-summary h4.current,.button{ background-color: "+ c_bg_2 +"!important; border-color: "+ c_main +"!important; text-shadow: unset!important; }",
        "#monthly-earnings-summary a,.page h2,.data nav.menu li{ text-shadow: unset!important; }",
        ".highcharts-xaxis-title,.page h2,.page h3,.page h4,#payment-email,#next-payment-date,.button{ color: "+ c_title +"!important; }",
        "section.withdraw section.payment #counter{ background: unset!important; }",
        ".button[href=\"/account/instantpay\"]{ padding: 10px 20px!important; border-width: 2px; border-radius: 5px; }",
        ".button[href=\"/account/instantpay\"]:hover{ background-color: "+c_bg_3 +"!important; }",
        "section.withdraw section.payment article section{ background-color: "+ c_bg_2 +"!important; border: 1px solid "+c_main+"!important; border-radius: 8px; background-image: unset!important; }",
        "section.page > .container section.bar{ border-top: 1px solid "+ c_main +"!important;}",
        ".multiplebgs #header nav,.multiplebgs #header nav li,.data nav.menu{ background: unset!important; }",
        "section.tools .data .panels{background-color: "+ c_bg_1 +"!important; }",
        "#tools-tabs .panel .code{ background-color: "+ c_bg_2 +"!important; }",
        "form input{ background-image:unset!important; background: unset!important; box-shadow: unset!important; background-color: "+ c_bg_3 +"!important; }",
        ".highcharts-yaxis-title{ color: "+ c_title +"!important; }",
        ".data nav.menu li:hover{ background-color: "+ c_bg_2 +"!important; }",
        ".highcharts-title,text tspan,g text{ fill: "+ c_title +"!important; color: "+ c_title +"!important; }",
        "section.withdraw section.payment #counter ul li.d1,section.withdraw section.payment #counter ul li.d2,section.withdraw section.payment #counter ul li.d3,section.withdraw section.payment #counter ul li.d4,section.withdraw section.payment #counter ul li.d5,section.withdraw section.payment #counter ul li.d6{ line-height: 40px!important; border-bottom: 3px solid "+ c_main +"!important; background: linear-gradient(0deg, rgba("+ c_main_rgb +",0.7035014689469538) 0%, rgba(76,76,76,0) 53%); }",
        ".page table thead th{ background: unset!important; background-image: unset!important; background-color: "+ c_bg_2 +"!important;}",
        ".page table thead{ text-shadow: unset!important; color: "+ c_title +"!important; }",
        "#footer a.paypal{ background: unset!important; }",
        "#footer a.payoneer{ background: unset!important; }",
        "#top_bar .language_switcher.hover h5,#top_bar .language_switcher ul{ background-color: "+ c_bg_4 +"!important; }",
        "#top_bar .language_switcher li:hover{ background: unset!important; background-color: "+ c_bg_5 +"!important; }",
        ".dataTables_paginate{ background: unset!important; background-image: unset!important; }",
        "section.withdraw section.history .dataTables_paginate,form input{ border-color: "+ c_main +"!important; }",
        ".page table tfoot{ color: "+ c_title +"!important; font-size: 16px!important; }",
        ".dataTables_paginate span{ background: unset!important; background-color: "+ c_bg_3 +"!important; color: "+ c_title +"!important; }",
        ".dataTables_paginate span.paginate_button{ border: unset!important; }",
        "form label{ color: "+ c_title +"!important; }",
        ".page table tbody td.total, #links-tabs table tfoot th.total{ background: unset!important; text-shadow: unset!important; color: "+ c_title +"!important; }",

	].join("\n");
	GM_addStyle(css);

    switch(url){
        case "https://adf.ly/publisher":
            document.title = "Dashboard | "+ name;
        break;
        case "https://adf.ly/publisher/tools":
            document.title = "Herramientas | "+ name;
        break;
        case "https://adf.ly/account/referrals":
            document.title = "Referidos | "+ name;
        break;
        case "https://adf.ly/account/withdraw":
            document.title = "Pagos | "+ name;
        break;
        case "https://adf.ly/account":
            document.title = "Mi Cuenta | "+ name;
        break;
    }

})();
