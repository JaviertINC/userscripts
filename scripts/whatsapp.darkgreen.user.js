// ==UserScript==
// @name         Whatsapp Web | DarkGreen
// @version      2.3
// @description  Una versión oscura, ayuda a cuidar tus ojos :D
// @icon         https://www.google.com/s2/favicons?domain=whatsapp.com
// @author       @JaviertINC
// @match        *://web.whatsapp.com/*
// @include      https://web.whatsapp.com/JaviertINC
// @updateURL    https://javiertinc.github.io/userscripts/scripts/whatsapp.darkdefault.user.js
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    var hidden_privacy = true; // Protege tus otros chats (true, false)
    var background_img = "https://sypkrum/img/bg1.jpeg"; //Pon tu fondo favorito :D (se recomienda que la imagen esté en un servidor seguro con HTTPS)
    var background_opacity = "0.18"; //Modifica la opacidad de tu fondo

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
        "    --incoming-background-deeper-rgb: 51,51,51;",
        "    --outgoing-background-deeper: #333;",
        "    --outgoing-background-deeper-rgb: 51,51,51;",
        "    --incoming-background-rgb: 51,51,51;",
        "    --primary-stronger: #f1f1f1;",
        "    --incoming-background: #4c4c4c;",
        "    --outgoing-background: #4f4f4f;",
        "    --icon-strong-rgb: 255,255,255",
        "    --dropdown-background: #393939;",
        "    --conversation-panel-background: #242424;",
        "    --unread-background: #4caf50;",
        "    --media-viewer-background-rgb: 51,51,51;",
        "    --border-panel: #4caf50;",
        "    --system-message-background: #4c4c4c;",
        "    --conversation-panel-border: #4caf50;",
        "    --teal: #4caf50;",
        "    --panel-background-deep: #4c4c4c;",
        "    --thumb-border-active: #4caf50;",
        "    --button-alternative-background: #4caf50;",
        "    --button-alternative: #fff;",
        "    --input-border-active: #4caf50;",
        "    --highlight: #4caf50;",
        "    --panel-background-hover: #333;",
        "}",
        "a{ color: #4caf50!important; }",
        "._1i1U7.jZ4tp,._1i1U7._2DNgV{ background-unset!important; }",
        "#startup{ background-color: #242424!important; }",
        "#startup._1UDDE{ fill: #4caf50!important; }",
        "._1RQfk{ background-color: #393939!important; }",
        "._3pkkz{ border-bottom: 1px solid #4caf50!important; border-right: 1px solid #4caf50!important; }",
        "._2nmDZ{ border-right: 1px solid #4caf50!important; }",
        "._3auIg{ border: 1px solid #4caf50!important; }",
        "._2y17h::after{ border: unset!important; background-color: unset!important; }",
        "._1-iDe.Wu52Z{ border-right: 1px solid #4caf50!important; }",
        "._2y17h,.gQzdc{ border-top: 1px solid #4caf50!important; border-bottom: 1px solid #4caf50!important; }",
        "_1vDUw B5rWa{ border-left: 1px solid #4caf50!important; }",
        "[data-asset-intro-image] { background-image: url(\""+ atob('aHR0cHM6Ly9qYXZpZXJ0aW5jLmdpdGh1Yi5pby9pbWFnZXMvd2hhdHNhcHAtY29ubmVjdGlvbi5wbmc=') +"\") !important; }",
        "[data-asset-chat-background] {background-image: url(\""+ background_img +"\") !important;}",
        ".Zq3Mc{ border: 1px solid #4caf50!important; color: #fff!important; }",
        ".rRAIq[style\"background-color: rgb(251, 251, 251);\"]{ background-color: #222!important; }",
		"path[fill=\"#009588\"]{ fill:#4caf50!important; }",
        "span[data-icon=\"back-blue\"]{ color: #4caf50!important; }",
        ".B5rWa{ border-left: 1px solid #4caf50!important; border-bottom: 1px solid #4caf50!important; }",
        ".gQzdc{ border-top: none!important; border-left: 1px solid #4caf50!important; }",
    ].join("\n");
	GM_addStyle(css);

    if(hidden_privacy){
        var hidden_privacy_css = [
            "._2EXPL{ transition: all 0.3s; filter: blur(5px)!important; }",
            "._2EXPL._1f1zm,._2EXPL._1f1zm:hover{ filter: blur(0px)!important; }",
            "._2EXPL:hover{ filter: blur(1px)!important; }",
            ".YUoyu{ opacity: "+ background_opacity +"!important; }",
        ].join("\n");
        GM_addStyle(hidden_privacy_css);
    }

    document.querySelector('body').classList.add('darkgreen');

})();
