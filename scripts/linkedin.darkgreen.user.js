// ==UserScript==
// @name         LinkedIn | DarkGreen
// @namespace    https://javiertinc.cl/userscripts
// @version      0.3
// @description  Una versión oscura, ayuda a cuidar tus ojos :D
// @homepage     https://javiertinc.cl/userscripts/script/linkedin.darkgreen
// @author       @JaviertINC
// @match        https://*.linkedin.com/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/linkedin.darkgreen.user.js
// @icon         https://www.google.com/s2/favicons?domain=linkedin.com
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        ".jt-darkgreen{",
        "    --color-brand: #4caf50;",
        "    --color-text: #f1f1f1; ",
        "    --color-text-shift-on-dark-flip: #fff!important; ",
        "    --color-text-low-emphasis: #e1e1e1!important; ",
        "    --color-text-low-emphasis-shift: #e1e1e1!important; ",
        "    --color-action: #4caf50; ",
        "    --color-action-active: #4caf50;",
        "    --color-border: #4caf50;",
        "    --color-border-faint: #4caf50;",
        "    --color-border-low-emphasis: #4caf50;",
        "    --color-background-canvas: #2c2c2c;",
        "    --color-background-container: #4c4c4c;",
        "    --color-background-brand-accent-4: #5c5c5c;",
        "    --color-background-new: #6c6c6c;",
        "    --color-background-none-tint-action-active: #4caf5066;",
        "    --voyager-color-action: #4caf50;",
        "    --voyager-color-action-hover: #5dbf61;",
        "    --voyager-color-action-active: #3b9d40;",
        "    --voyager-color-action-stick: #4caf50;",
        "    --voyager-color-background-container-tint-2: #3c3c3c;",
        "    --voyager-color-background-comment: #3c3c3c;",
        "    --color-icon: #4caf50;",
        "    --color-icon-nav: #f1f1f1; ",
        "    --color-icon-nav-active: #fff; ",
        "    --color-signal-negative: #4caf50;",
        "    --color-signal-positive: #4caf50;",
        "    --color-checked: #4caf50;",
        "}",
        ".jt-darkgreen .presence-entity__indicator{ box-shadow: 0 0 0 2px #4c4c4c!important; }",
        ".jt-darkgreen .me-wvmp-main__header-minimal, .jt-darkgreen .me-wvmp-mock-view.me-wvmp-viewer-card:hover, .jt-darkgreen .me-wvmp-viewer-card{ background-color: rgba(255,255,255,.05); }",
        ".jt-darkgreen .me-wvmp-viewer-card:hover{ background-color: rgba(255,255,255,.15); }",
        ".jt-darkgreen .me-wvmp-chart .highcharts-tooltip span, .jt-darkgreen .me-wvmp-pills-tab{ background-color: transparent; }",
        ".jt-darkgreen .pv-entity__logo-img{ box-shadow: 0 0 5px #4caf50; border-radius: 5px!important; }",
        ".jt-darkgreen .live-video-hero-image{ box-shadow: 0 1px 2px #4caf50; }",
        ".jt-darkgreen .pv-top-card__edit-photo{ box-shadow: 0 0 5px 1px #4caf50; }",
        ".jt-darkgreen .scaffold-layout__ad + .scaffold-layout__row{ margin-top: 2.4rem!important; }", //Fix Header & Body space
        ".jt-darkgreen .org-similar-pages-carousel{ background-color: #5c5c5c!important; }",
        ".jt-darkgreen .org-similar-pages-carousel::before, .org-similar-pages-carousel__company-card-logo, .org-top-card-listing, .org-top-card-listing__logo:not(.ghost-company) { background-color: #5c5c5c!important; }",
        ".jt-darkgreen .org-similar-pages-company-connections__relevance-icon{ background-color: #5c5c5c!important; }",
        ".jt-darkgreen hr{ border-color: #4caf5066!important;}",
        ".jt-darkgreen li-icon{ fill: #4caf50!important; }",


	].join("\n");
    GM_addStyle(css);

    $(document).ready(function(){
        $("html").addClass("jt-darkgreen");
    });

})();
