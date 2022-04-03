// ==UserScript==
// @name         Whatsapp Web | DarkGreen
// @namespace    https://javiertinc.cl/userscripts
// @version      4.0
// @description  Una versión oscura, ayuda a cuidar tus ojos :D
// @homepage     https://javiertinc.cl/userscripts/script/whatsapp.darkgreen
// @author       @JaviertINC
// @match        *://web.whatsapp.com/*
// @include      https://web.whatsapp.com/JaviertINC
// @updateURL    https://javiertinc.github.io/userscripts/scripts/whatsapp.darkgreen.user.js
// @icon         https://www.google.com/s2/favicons?domain=whatsapp.com
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
        ".darkgreen {",
        "    --gray-200: #4caf50;",
        "    --teal: #4caf50;",
        "    --app-background-stripe: #4caf50;",
        "    --intro-background: #4c4c4c;",
        "    --primary: #fff;",
        "    --primary-title: #fff;",
        "    --primary-strong: #f1f1f1;",
        "    --primary-stronger: #f1f1f1;",
        "    --primary-strong-rgb: 255,255,255;",
        "    --primary-rgb: 255,255,255;",
        "    --secondary: #eee;",
        "    --secondary-lighter: #e1e1e1;",
        "    --secondary-stronger: #f1f1f1;",
        "    --unread-timestamp: #4caf5088;",
        "    --input-placeholder: #f1f1f1f1;",
        "    --border-stronger: #4caf50;",
        "    --button-primary-background: #4caf50;",
        "    --button-secondary: #4caf50;",
        "    --button-alternative-background: #4caf50;",
        "    --button-alternative: #fff;",
        "    --background-default: #393939;",
        "    --background-default-active: #4c4c4c;",
        "    --background-default-hover: #4c4c4c;",
        "    --startup-background: #4c4c4c;",
        "    --round-icon-background: #4caf50;",
        "    --border-list: #4caf50;",
        "    --icon: #fff;",
        "    --icon-lighter: #ddd;",
        "    --icon-ack: #4caf50;",
        "    --icon-search-back: #f1f1f1;",
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
        "    --panel-input-background: #343434;",
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
        "    --input-empty-value-placeholder: #4caf50;",
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
        "    --button-bubble: #4caf50;",
        "    --button-secondary-background-hover: #343434;",
        "    --chatlist-icon: #aaa;",
        "    --intro-secondary: #f1f1f1;",
        "    --message-primary: #fff;",
        "    --compose-primary: #fff;",
        "    --compose-input-background: #343434;",
        "    --compose-input-border: #4caf50;",
        "    --notification-biz-text: #fff;",
        "    --notification-e2e-text: #fff;",
        "    --search-input-background: #666;",
        "    --search-container-background: #4c4c4c;",
        "    --active-tab-marker: #4caf50;",
        "    --butterbar-update-background: #4caf50;",
        "    --spinner-highlight: #4caf50;",
        "    --modal-backdrop: rgba(0,0,0,.7);",
        "    --button-plain-background: #4caf50;",
        "    --beta-tag-background: #4caf50;",
        "    --intro-border: #4caf50;",
        "    --search-input-container-background: #4c4c4c;",
        "    --search-input-container-background-active: #4c4c4c;",
        "    --progress-background: #4caf50;",
        "    --drawer-background-deep: #2c2c2c;",
        "    --text-secondary-lighter: #f1f1f1f1;",
        "    --status-background: #2c2c2c;",
        "    --status-background-hover: #4c4c4c;",
        "    --link-preview: #fff;",
        "    --link-preview-lighter: #f1f1f1f1;",
        "",
        "}",
        ".darkgreen a{ color: #4caf50!important; }",
        ".darkgreen ._1i1U7.jZ4tp,.darkgreen ._1i1U7._2DNgV{ background-unset!important; }",
        ".darkgreen #startup{ background-color: #242424!important; }",
        ".darkgreen #startup._1UDDE{ fill: #4caf50!important; }",
        ".darkgreen ._1RQfk{ background-color: #393939!important; }",
        ".darkgreen ._3pkkz{ border-bottom: 1px solid #4caf50!important; border-right: 1px solid #4caf50!important; }",
        ".darkgreen ._2nmDZ{ border-right: 1px solid #4caf50!important; }",
        ".darkgreen ._3auIg{ border: 1px solid #4caf50!important; }",
        ".darkgreen ._2y17h::after{ border: unset!important; background-color: unset!important; }",
        ".darkgreen ._1-iDe.Wu52Z{ border-right: 1px solid #4caf50!important; }",
        ".darkgreen ._2y17h,.darkgreen .gQzdc{ border-top: 1px solid #4caf50!important; border-bottom: 1px solid #4caf50!important; }",
        ".darkgreen _1vDUw B5rWa{ border-left: 1px solid #4caf50!important; }",
        ".darkgreen [data-asset-intro-image-light] { background-image: url(\""+ atob('aHR0cHM6Ly9qYXZpZXJ0aW5jLmdpdGh1Yi5pby9pbWFnZXMvd2hhdHNhcHAtY29ubmVjdGlvbi5wbmc=') +"\") !important; }",
        ".darkgreen [data-asset-chat-background-light]{background-image: url(\""+ background_img +"\") !important;}",
        ".darkgreen .Zq3Mc{ border: 1px solid #4caf50!important; color: #fff!important; }",
        ".darkgreen .rRAIq[style\"background-color: rgb(251, 251, 251);\"]{ background-color: #222!important; }",
        ".darkgreen path[fill=\"#009588\"]{ fill:#4caf50!important; }",
        ".darkgreen span[data-icon=\"back-blue\"]{ color: #4caf50!important; }",
        ".darkgreen .B5rWa{ border-left: 1px solid #4caf50!important; border-bottom: 1px solid #4caf50!important; }",
        ".darkgreen .gQzdc{ border-top: none!important; border-left: 1px solid #4caf50!important; }",
        ".darkgreen .message-in .tail-container,.darkgreen .message-in .tail-override-right .tail-container, .darkgreen .message-out .tail-override-right .tail-container, .darkgreen .message-in .tail-override-left .tail-container{ background-image: unset!important; }",
        ".darkgreen .message-out .tail-container,.darkgreen .message-out .tail-container.highlight{ background-image: unset!important; }",
        ".darkgreen .Pg7Si progress{ background-color: #4c4c4c!important; color: #4caf50!important; }",
        ".darkgreen .Pg7Si progress[value]::-webkit-progress-value{ background-color: #4caf50!important; }",
        ".darkgreen ._2EXPL{ filter: unset!important;}",
        ".darkgreen ._1CnF3{ border: 1px solid #4caf50!important; }",
        ".darkgreen ._3lLzD{ color: #f1f1f1!important; }",
        ".darkgreen ._2u2Mg ._1WliW,.darkgreen ._1wCju ._2UkYn,.darkgreen .Qgzj8.gqwaM._3FXB1{ border-radius: 0!important;}",
        ".darkgreen ._2u2Mg ._1WliW,.darkgreen ._1wCju ._2UkYn{ border: 1px solid #4caf50!important; }",
        ".darkgreen ._2fq0t{ border: 1px solid #4caf50!important; border-left: 0!important;}",
        ".darkgreen .app-wrapper-web .h70RQ,.darkgreen ._1E1g0{ border: 1px solid #4caf50!important; }",
        ".darkgreen .YUoyu{ opacity: "+ background_opacity +"!important; }",
        ".darkgreen ._9a59P{ color: #fff!important; }",
        ".darkgreen [data-icon=\"search\"]{ color: #fff!important; }",
        ".darkgreen ._2vJ01{ border-top: 1px solid #4caf50!important; }",
        ".darkgreen header{ border-bottom: 1px solid #4caf50!important; }",
        ".darkgreen .G_MLO{ border: 1px solid #4caf50!important; }",
        ".darkgreen ._3pTi5{ color: var(--message-primary)!important; }",
        ".darkgreen ._39vRn{ color: var(--message-primary)!important; }",
        ".darkgreen .NRCvf{ color: #ccc!important; }",
        ".darkgreen ._3Whw5.selectable-text.invisible-space.copyable-text{ color: #f1f1f1!important; }",
        ".darkgreen a._3Whw5.selectable-text.invisible-space.copyable-text{ color: #4caf50!important; }",
        ".darkgreen .matched-mention{ color: #4caf50!important; }",
        ".darkgreen ._10szZ, .darkgreen .wGgmc{ color:#f1f1f1!important; }",
        "[title=\"Theme\"],[title=\"Tema\"]{ display: none!important; }",
        ".darkgreen [data-icon=\"intro-md-beta-logo-dark\"] [fill=\"#42CBA5\"]{ fill: #4caf50!important; }",
        ".darkgreen [data-icon=\"intro-md-beta-logo-dark\"] [fill=\"#364147\"] {fill: #6c6c6c!important; }",

        //JT Buttons
        ".jt-theme-btn{ background-color: var(--panel-background); color: var(--primary); border: 1px solid var(--panel-background-colored); border-right: none; position: fixed; top: 140px; right: 0; padding: 1rem; border-radius: 5px 0 0 5px; cursor: pointer; z-index: 999; }",
        ".jt-background-btn{ background-color: var(--panel-background); color: var(--primary); border: 1px solid var(--panel-background-colored); border-right: none; position: fixed; top: calc(140px + 58px + .5rem + 58px + .5rem); right: 0; padding: 1rem; border-radius: 5px 0 0 5px; cursor: pointer; z-index: 999; }",
        ".jt-privacy-btn{ background-color: var(--panel-background); color: var(--primary); border: 1px solid var(--panel-background-colored); border-right: none; position: fixed; top: calc(140px + 58px + .5rem); right: 0; padding: 1rem; border-radius: 5px 0 0 5px; cursor: pointer; z-index: 999; }",
        ".jt-privacy .jt-privacy-btn,.jt-privacy .jt-privacy-btn:hover{ background-color: var(--panel-background-colored); }",
        ".jt-autor-corrector-btn{ display: none; background-color: var(--panel-background); color: var(--primary); border: 1px solid var(--panel-background-colored); border-right: none; position: fixed; top: calc(140px + 58px + .5rem + 58px + .5rem + 58px + .5rem); right: 0; padding: 1rem; border-radius: 5px 0 0 5px; cursor: pointer; z-index: 999; }",
        ".jt-theme-btn:hover,.jt-background-btn:hover,.jt-privacy-btn:hover,.jt-autor-corrector-btn:hover{ background-color: var(--panel-input-background); }",

        //JT Chat Privacy
        ".jt-privacy ._3m_Xw ._2nY6U:not(._2_TVt){ transition: all 0.3s; filter: blur(5px)!important; }",
        ".jt-privacy ._3m_Xw:hover,.jt-privacy ._3m_Xw:hover ._2nY6U{ filter: blur(0px)!important; }",

        //JT Modals
        ".hide{ display: none!important; }",
        ".jt-theme-list{",
        "  background-color: rgba(0,0,0,.5);",
        "  color: var(--primary);",
        "  position: fixed;",
        "  display: block;",
        "  width: 100%;",
        "  height: 100%;",
        "  top: 0;",
        "  left: 0;",
        "  z-index: 99999999;",
        "}",
        ".jt-theme-list .jt-modal{ background-color: var(--intro-background); color: var(--primary); border: 1px solid var(--panel-background-colored); display: block; width: 650px; height: 70%; margin: 1rem auto 0; z-index: 999999999; }",
        ".jt-theme-list .jt-modal .jt-modal-header{ border-bottom: 1px solid var(--panel-background-colored); padding: 1rem; font-size: 1.8rem; display: flex; justify-content: space-between; }",
        ".jt-theme-list .jt-modal .jt-modal-header span{ cursor: pointer; padding: 0 .5rem; }",
        ".jt-theme-list .jt-modal .jt-modal-body{ padding: 1rem; }",
        ".jt-theme-list .jt-modal .jt-modal-body a{ font-weight: bold; font-size: 2rem; color: var(--primary); padding: .3rem 0; cursor: pointer; display: block; }",
        ".jt-theme-list .jt-modal .jt-modal-body a:hover{ color: var(--gray-200); text-decoration: underline; }",
    ].join("\n");
	GM_addStyle(css);




    setTimeout(() => {
        setTimeout(() => {
            init();
        }, 200);
    }, 100);

    function init(){
        var ct = localStorage.theme;
        var dg = "darkgreen";
        if(ct == '"' + dg + '"'){
            document.querySelector('body').classList.add(dg);
            if(document.querySelector('body').classList.contains("dark")){
                document.querySelector('body').classList.remove('dark');
            }
        }
        if(localStorage.jt_privacy == "enabled"){
            document.querySelector('body').classList.add("jt-privacy");
        }
        if(localStorage.jt_background != null || localStorage.jt_background == ""){
            localStorage.jt_background = "0";
        }
        setTimeout(() => {
            add_theme_config();
            //add_background_config();
            add_privacy_config();
            //add_autor_corrector_config();
            add_config_script();
        }, 4000);
    }

    function add_theme_config(){
        var jt_theme_btn = document.createElement('div');
        jt_theme_btn.classList.add("jt-theme-btn");
        jt_theme_btn.setAttribute("onclick", "allThemes()");
        jt_theme_btn.setAttribute("title", "¡Cambia el estilo de WhatsApp!");
        jt_theme_btn.innerHTML = '<span data-icon="settings-theme"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 1l3.22 3.22h4.56v4.56L23 12l-3.22 3.22v4.56h-4.56L12 23l-3.22-3.22H4.22v-4.56L1 12l3.22-3.22V4.22h4.56L12 1zm0 5v12c3.31 0 6-2.69 6-6a6.005 6.005 0 0 0-5.775-5.996L12 6z" fill="currentColor"></path></svg></span>';
        document.body.appendChild(jt_theme_btn);
        add_theme_list();
    }
    function add_theme_list(){
        var jt_theme_listing = document.createElement('div');
        jt_theme_listing.classList.add("jt-theme-list");
        jt_theme_listing.classList.add("hide");
        jt_theme_listing.innerHTML = '<div class="jt-modal"><div class="jt-modal-header"><h4>Usa WhatsApp con tu estilo favorito.</h4><span onclick="hideThemes()">X</span></div><div class="jt-modal-body"><p><a onclick="setTheme(\'1\')">Light</a> (Default)</p><br/><p><a onclick="setTheme(\'2\')">Dark</a> (By WhatsApp Team)</p><br/><p><a onclick="setTheme(\'3\')">DarkGreen</a> (By @JaviertINC)</p></div></div></div></div>';
        document.body.appendChild(jt_theme_listing);
    }
    function add_background_config(){
        var jt_theme_btn = document.createElement('div');
        jt_theme_btn.classList.add("jt-background-btn");
        jt_theme_btn.setAttribute("onclick", "background_config()");
        jt_theme_btn.setAttribute("title", "¡Cambia el fondo de WhatsApp!");
        jt_theme_btn.innerHTML = '<span data-icon="settings-wallpaper"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M4.9 5.9h6.4V4.1H4.9c-1 0-1.8.8-1.8 1.8v6.4h1.8V5.9zm5.3 8l-3.6 4.4h10.7l-2.7-3.6-1.8 2.4-2.6-3.2zm6.2-4c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3.6 1.3 1.3 1.3 1.3-.6 1.3-1.3zm2.7-5.8h-6.4v1.8h6.4v6.4h1.8V5.9c0-1-.8-1.8-1.8-1.8zm0 16h-6.4v1.8h6.4c1 0 1.8-.8 1.8-1.8v-6.4h-1.8v6.4zM4.9 13.7H3.1v6.4c0 1 .8 1.8 1.8 1.8h6.4v-1.8H4.9v-6.4z"></path></svg></span>';
        document.body.appendChild(jt_theme_btn);
    }
    function add_privacy_config(){
        var jt_privacy_btn = document.createElement('div');
        jt_privacy_btn.classList.add("jt-privacy-btn");
        jt_privacy_btn.setAttribute("onclick", "privacy_config()");
        jt_privacy_btn.setAttribute("title", "¡Protege tus otros chats de vistas indeseadas!");
        jt_privacy_btn.innerHTML = '<span data-icon="settings-privacy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24"><path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path></svg></span>';
        document.body.appendChild(jt_privacy_btn);
    }
    function add_autor_corrector_config(){
        var jt_autor_corrector_btn = document.createElement('div');
        jt_autor_corrector_btn.classList.add("jt-autor-corrector-btn");
        jt_autor_corrector_btn.setAttribute("onclick", "toggle_autor_corrector()");
        jt_autor_corrector_btn.setAttribute("title", "¡Activa el autocorrector en tiempo real!");
        jt_autor_corrector_btn.innerHTML = '<span data-icon="autor-corrector"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24"><path fill="currentColor" d="M272 256h91.36c43.2 0 82-32.2 84.51-75.34a79.82 79.82 0 0 0-25.26-63.07 79.81 79.81 0 0 0 9.06-44.91C427.9 30.57 389.3 0 347 0h-75a16 16 0 0 0-16 16v224a16 16 0 0 0 16 16zm40-200h40a24 24 0 0 1 0 48h-40zm0 96h56a24 24 0 0 1 0 48h-56zM155.12 22.25A32 32 0 0 0 124.64 0H99.36a32 32 0 0 0-30.48 22.25L.59 235.73A16 16 0 0 0 16 256h24.93a16 16 0 0 0 15.42-11.73L68.29 208h87.42l11.94 36.27A16 16 0 0 0 183.07 256H208a16 16 0 0 0 15.42-20.27zM89.37 144L112 75.3l22.63 68.7zm482 132.48l-45.21-45.3a15.88 15.88 0 0 0-22.59 0l-151.5 151.5-55.41-55.5a15.88 15.88 0 0 0-22.59 0l-45.3 45.3a16 16 0 0 0 0 22.59l112 112.21a15.89 15.89 0 0 0 22.6 0l208-208.21a16 16 0 0 0-.02-22.59z" class=""></path></svg></span>';
        document.body.appendChild(jt_autor_corrector_btn);
    }
    function add_config_script(){
        var jt_theme_script = document.createElement('script');
        var jt_script = [
            'function allThemes(){',
            '   document.querySelector(\'.jt-theme-list\').classList.remove("hide");',
            /*'   var theme = prompt(\'Ingresa el numero del estilo que deseas:\\n\\n1) Light (Default)\\n2) Dark (By WhatsApp)\\n3) DarkGreen (By @JaviertINC)\\n\', "3");',
        '   if (theme != null || theme != "") {',
        '     setTheme(theme);',
        '   }',*/
            '}',
            'function hideThemes(){',
            '   document.querySelector(\'.jt-theme-list\').classList.add("hide");',
            '}',
            'function setTheme(theme){',
            '   switch(theme){',
            '     case "1":',
            '       localStorage.theme = \'"light"\'',
            '       if(document.querySelector(\'body\').classList.contains("dark")){',
            '         document.querySelector(\'body\').classList.remove(\'dark\');',
            '       }',
            '       if(document.querySelector(\'body\').classList.contains("darkgreen")){',
            '         document.querySelector(\'body\').classList.remove(\'darkgreen\');',
            '       }',
            '     break;',
            '     case "2":',
            '       localStorage.theme = \'"dark"\'',
            '       document.querySelector(\'body\').classList.add("dark");',
            '       if(document.querySelector(\'body\').classList.contains("darkgreen")){',
            '         document.querySelector(\'body\').classList.remove(\'darkgreen\');',
            '       }',
            '     break;',
            '     case "3":',
            '       localStorage.theme = \'"darkgreen"\'',
            '       document.querySelector(\'body\').classList.add("darkgreen");',
            '       if(document.querySelector(\'body\').classList.contains("dark")){',
            '         document.querySelector(\'body\').classList.remove(\'dark\');',
            '       }',
            '     break;',
            '   }',
            '   hideThemes();',
            '}',
            'function background_config(){',
            '   var c_bg = prompt(\'Ingresa el enlace de tu imagen de fondo\\nIngresa 0 si quieres restaurar el fondo por defecto.\\n\', localStorage.jt_background);',
            '   if (c_bg != null || c_bg != "") {',
            '       set_background_image(c_bg)',
            '   }',
            '}',
            'function set_background_image(url){',
            '   var theme = localStorage.theme;',
            '   theme = theme.replace("\\"", "");',
            '   theme = theme.replace("\\"", "");',
            '   if(url == null || url == "" || url == "0"){',
            '       if(url == "0"){',
            '           switch(theme){',
            '               case "light":',
            '                   document.querySelector("[data-asset-chat-background-"+ theme +"]").setAttribute("style", "background: url(\'https://javiertinc.github.io/jtWhatsApp/images/bg-chat-tile-light.png\')!important;");',
            '               break;',
            '               case "dark":',
            '                   document.querySelector("[data-asset-chat-background-"+ theme +"]").setAttribute("style", "background: url(\'https://javiertinc.github.io/jtWhatsApp/images/bg-chat-tile-dark.png\')!important;");',
            '               break;',
            '               case "darkgreen":',
            '                   document.querySelector("[data-asset-chat-background-"+ theme +"]").setAttribute("style", "background: url(\'https://javiertinc.github.io/jtWhatsApp/images/bg-chat-tile-darkgreen.jpg\')!important;");',
            '               break;',
            '           }',
            '       }else{',
            '           url = localStorage.jt_background;',
            '           document.querySelector("[data-asset-chat-background-"+ theme +"]").setAttribute("style", "background: url(\'"+ url +"\')!important; background-size: cover!important;");',
            '       }',
            '   }else{',
            '       if(url.substring(0, 11) == "data:image/"){',
            '           localStorage.jt_background = url;',
            '           document.querySelector("[data-asset-chat-background-"+ theme +"]").setAttribute("style", "background: url(\'"+ url +"\')!important; background-size: cover!important;");',
            '       }else{',
            '           localStorage.jt_background = url;',
            '           document.querySelector("[data-asset-chat-background-"+ theme +"]").setAttribute("style", "background: url(\'https://external-content.duckduckgo.com/iu/?f=1&u="+ encodeURIComponent(url) +"\')!important; background-size: cover!important;");',
            '       }',
            '   }',
            '}',
            'function privacy_config(){',
            '   if(document.querySelector(\'body\').classList.contains("jt-privacy")){',
            '       document.querySelector(\'body\').classList.remove(\'jt-privacy\');',
            '       localStorage.jt_privacy = \'disabled\'',
            '   }else{',
            '       document.querySelector(\'body\').classList.add("jt-privacy");',
            '       localStorage.jt_privacy = \'enabled\'',
            '   }',
            '}',
            'function toggle_autor_corrector(){',
            '   alert("Esta función aún no está habilitada.");',
            '}',
        ].join("\n");
        jt_theme_script.innerHTML = jt_script;
        document.body.appendChild(jt_theme_script);
    }

})();
