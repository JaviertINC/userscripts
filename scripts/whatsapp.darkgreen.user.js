// ==UserScript==
// @name         Whatsapp Web | DarkGreen
// @version      3.5
// @description  Una versión oscura, ayuda a cuidar tus ojos :D
// @icon         https://www.google.com/s2/favicons?domain=whatsapp.com
// @author       @JaviertINC
// @match        *://web.whatsapp.com/*
// @include      https://web.whatsapp.com/JaviertINC
// @updateURL    https://javiertinc.github.io/userscripts/scripts/whatsapp.darkgreen.user.js
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    var hidden_privacy = false; // Protege tus otros chats (true, false)
    var background_img = "https://i.yesly.cl/lNmTEA4s"; //Pon tu fondo favorito :D (se recomienda que la imagen esté en un servidor seguro con HTTPS)
    var background_opacity = "0.18"; //Modifica la opacidad de tu fondo
    var disable_blur = true; //Desactiva el blur en las imagenes que ya no están disponibles

	var css = [
        "body.darkgreen{ background-color: #242424!important; background-image: unset!important;}",
        "._2zynu::after{ border-top: 6px solid #4caf50!important; }",
		".darkgreen {",
        "    --gray-200: #4caf50;",
        "    --teal: #4caf50;",
        "    --app-background-stripe: #4caf50;",
        "    --intro-background: #4c4c4c;",
        "    --primary: #fff;",
        "    --primary-title: #fff;",
        "    --primary-strong: #f1f1f1;",
        "    --primary-stronger: #f1f1f1;",
        "    --secondary: #eee;",
        "    --secondary-lighter: #e1e1e1;",
        "    --secondary-stronger: #f1f1f1;",
        "    --border-stronger: #4caf50;",
        "    --button-primary-background: #4caf50;",
        "    --button-secondary: #4caf50;",
        "    --button-alternative-background: #4caf50;",
        "    --button-alternative: #fff;",
        "    --background-default: #393939;",
        "    --background-default-active: #4c4c4c;",
        "    --background-default-hover: #4c4c4c;",
        "    --border-list: #4caf50;",
        "    --icon: #fff;",
        "    --icon-lighter: #ddd;",
        "    --icon-ack: #4caf50;",
        "    --icon-strong-rgb: 255,255,255",
        "    --icon-lighter-rgb: 200, 200, 200,.7;",
        "    --rich-text-panel-background: #4c4c4c;",
        "    --compose-background: #666;",
        "    --avatar-background: #242424;",
        "    --avatar-placeholder-background: #242424;",
        "    --panel-background: #4c4c4c;",
        "    --panel-background-deep: #4c4c4c;",
        "    --panel-background-deeper: #666;",
        "    --panel-background-lighter: #242424;",
        "    --panel-background-colored: #4caf50;",
        "    --panel-background-hover: #333;",
        "    --panel-header-background: #4c4c4c;",
        "    --panel-header-icon: #fff;",
        "    --unread-background: #4caf50;",
        "    --unread-marker-background: #4caf50;",
        "    --compose-panel-background: #4c4c4c;",
        "    --incoming-background: #4c4c4c;",
        "    --incoming-background-rgb: 76,76,76;",
        "    --incoming-background-deeper: #333;",
        "    --incoming-background-deeper-rgb: 51,51,51;",
        "    --outgoing-background: #4f4f4f;",
        "    --outgoing-background-deeper: #333;",
        "    --outgoing-background-deeper-rgb: 51,51,51;",
        "    --dropdown-background: #393939;",
        "    --dropdown-background-hover: #4caf50;",
        "    --conversation-panel-background: #242424;",
        "    --media-viewer-background-rgb: 51,51,51;",
        "    --border-panel: #4caf50;",
        "    --system-message-background: #4c4c4c;",
        "    --system-message-text: #fff;",
        "    --conversation-panel-border: #4caf50;",
        "    --thumb-border-active: #4caf50;",
        "    --input-border-active: #4caf50;",
        "    --highlight: #4caf50;",
        "    --outgoing-background-rgb: 79, 79, 79;",
        "    --primary-strong-rgb: 170,170,170;",
        "    --media-viewer-background: #4c4c4c;",
        "    --modal-backdrop-solid: #242424;",
        "    --modal-background: #4c4c4c;",
        "    --notification-biz-background: #4c4c4c;",
        "    --notification-e2e-background: #4c4c4c;",
        "    --drawer-section-background: #4c4c4c;",
        "    --drawer-background: #333;",
        "    --teal-lighter: #4caf50;",
        "    --bubble-meta: #aaa;",
        "    --bubble-meta-icon: #aaa;",
        "    --chatlist-icon: #aaa;",
        "    --intro-secondary: #f1f1f1;",
        "    --message-primary: #fff;",
        "    --compose-border: #4caf50;",
        "    --notification-biz-text: #fff;",
        "    --notification-e2e-text: #fff;",
        "    --search-input-background: #666;",
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
        "[data-asset-intro-image-light] { background-image: url(\""+ atob('aHR0cHM6Ly9qYXZpZXJ0aW5jLmdpdGh1Yi5pby9pbWFnZXMvd2hhdHNhcHAtY29ubmVjdGlvbi5wbmc=') +"\") !important; }",
        "[data-asset-chat-background-light]{background-image: url(\""+ background_img +"\") !important;}",
        ".Zq3Mc{ border: 1px solid #4caf50!important; color: #fff!important; }",
        ".rRAIq[style\"background-color: rgb(251, 251, 251);\"]{ background-color: #222!important; }",
        "path[fill=\"#009588\"]{ fill:#4caf50!important; }",
        "span[data-icon=\"back-blue\"]{ color: #4caf50!important; }",
        ".B5rWa{ border-left: 1px solid #4caf50!important; border-bottom: 1px solid #4caf50!important; }",
        ".gQzdc{ border-top: none!important; border-left: 1px solid #4caf50!important; }",
        ".message-in .tail-container, .message-in .tail-override-right .tail-container, .message-out .tail-override-right .tail-container, .message-in .tail-override-left .tail-container{ background-image: unset!important; }",
        ".message-out .tail-container,.message-out .tail-container.highlight{ background-image: unset!important; }",
        ".Pg7Si progress{ background-color: #4c4c4c!important; color: #4caf50!important; }",
        ".Pg7Si progress[value]::-webkit-progress-value{ background-color: #4caf50!important; }",
        "._2EXPL{ filter: unset!important;}",
        "._1CnF3{ border: 1px solid #4caf50!important; }",
        "._3lLzD{ color: #f1f1f1!important; }",
        "._2u2Mg ._1WliW,._1wCju ._2UkYn,.Qgzj8.gqwaM._3FXB1{ border-radius: 0!important;}",
        "._2u2Mg ._1WliW,._1wCju ._2UkYn{ border: 1px solid #4caf50!important; }",
        "._2fq0t{ border: 1px solid #4caf50!important; border-left: 0!important;}",
        ".app-wrapper-web .h70RQ,._1E1g0{ border: 1px solid #4caf50!important; }",
        ".YUoyu{ opacity: "+ background_opacity +"!important; }",
        "._9a59P{ color: #fff!important; }",
        "[data-icon=\"search\"]{ color: #fff!important; }",
    ].join("\n");
	GM_addStyle(css);

    if(hidden_privacy){
        var hidden_privacy_css = [
            "._210SC .eJ0yJ{ transition: all 0.3s; filter: blur(5px)!important; }",
            "._210SC .eJ0yJ._13opk,._210SC:hover .eJ0yJ{ filter: blur(0px)!important; }",
            "._210SC:hover{ filter: blur(1px)!important; }",
        ].join("\n");
        GM_addStyle(hidden_privacy_css);
    }
    if(disable_blur){
        var disable_blur_css = [
            "._20GbR { -webkit-filter: unset!important; filter: unset!important; }"
        ].join("\n");
        GM_addStyle(disable_blur_css);
    }

    document.querySelector('body').classList.add('darkgreen');

})();
