// ==UserScript==
// @name         Whatsapp Web | DarkGreen
// @version      0.7
// @description  Una versión oscura, ayuda a cuidar tus ojos :D
// @icon         https://www.google.com/s2/favicons?domain=whatsapp.com
// @author       @JaviertINC
// @match        *://web.whatsapp.com/*
// @include      https://web.whatsapp.com/JaviertINC
// @updateURL    https://javiertinc.github.io/userscripts/scripts/whatsapp.darkdefault.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        "body.darkgreen{ background-color: #242424!important; background-image: unset!important;}",
        "._2zynu::after {	border-top: 6px solid #4caf50!important; }",
		".darkgreen {",
        "    --app-background-stripe: #4caf50;",
        "    --intro-background: #4c4c4c;",
        "    --primary-title: #fff;",
        "    --primary: #fff;",
        "    --primary-strong: #f1f1f1;",
        "    --primary-stronger: #f1f1f1;",
        "    --secondary-lighter: #e1e1e1;",
        "    --panel-background: #4c4c4c;",
        "    --secondary: #eee;",
        "    --border-stronger: #4caf50;",
        "    --button-secondary: #4caf50;",
        "    --background-default: #393939;",
        "    --background-default-hover: #4c4c4c;",
        "    --panel-background-lighter: #242424;",
        "    --border-list: #4caf50;",
        "    --background-default-active: #4c4c4c;",
        "    --secondary-stronger: #f1f1f1;",
        "    --icon: #fff;",
        "    --icon-lighter-rgb: 200, 200, 200,.7;",
        "    --icon-lighter: #ddd;",
        "    --icon-ack: #4caf50;",
        "    --avatar-background: #242424;",
        "    --avatar-placeholder-background: #242424;",
        "    --panel-background-colored: #4caf50;",
        "    --unread-marker-background: #4caf50;",
        "    --compose-panel-background: #4c4c4c;",
        "    --rich-text-panel-background: #4c4c4c;",
        "    --compose-background: #666;",
        "    --panel-background-deeper: #666;",
        "    --incoming-background-deeper: #333;",
        "    --incoming-background-deeper-rgb: 51,51,51",
        "    --incoming-background-rgb: 51,51,51",
        "    --primary-stronger: #f1f1f1;",
        "    --incoming-background: #4c4c4c;",
        "}",
        "a{ color: #4caf50!important; }",
        "._1i1U7.jZ4tp{ background-unset!important; }",
        "[data-asset-intro-image] { background-image: url(\"https://javiertinc.github.io/images/whatsapp-connection.png\") !important; }",
    ].join("\n");
	GM_addStyle(css);

    document.querySelector('body').classList.add('darkgreen');

})();
