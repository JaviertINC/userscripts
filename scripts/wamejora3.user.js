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

    var css = 'html.wamejora3{--bg-header:#000;--bg-header-alt:#000;--bg-base-1:#000;--bg-base-2:#000;--bg-main:#000;--bg-light:#000;--txt-main:#fff;--txt-secondary:#fff;--color-main:#fff;--color-secondary:#fff;--input-bg:#000;--input-txt:#fff;--input-placeholder:#fff;--btn-primary-bg:#000;--btn-primary-bg-hover:#000;--btn-primary-txt:#fff;--btn-secondary-bg:#000;--btn-secondary-bg-hover:#000;--btn-secondary-txt:#fff;--chat-bg:#000;--msg-self-txt:#fff;--msg-self-bg:#000;--msg-self-bg-alt:#000;--msg-incoming-txt:#fff;--msg-incoming-bg:#000;--msg-incoming-bg-alt:#000;--backdrop-bg:#4c4c4c4c;--shadow-main:1px 1px 15px 5px #fff4;--bg-opacity:0.1}html.wamejora3{--bg-header:#ff9e9e;--bg-header-alt:#f96464;--bg-base-1:#f7dada;--bg-base-2:#f96464;--bg-main:#fff8f8;--bg-light:#6c6c6c;--txt-main:#ff9e9e;--txt-secondary:#fbb9b9;--color-main:#ffcdcd;--color-secondary:#fbb9b9;--input-bg:#ff9e9e;--input-txt:#fff;--input-placeholder:#fff;--btn-primary-bg:#f96464;--btn-primary-bg-hover:#e24a4a;--btn-primary-txt:#fff;--chat-bg:#ffdfdf;--msg-self-txt:#fff;--msg-self-bg:#fbb9b9;--msg-self-bg-alt:#ffcdcd;--msg-incoming-txt:#fff;--msg-incoming-bg:#fbb9b9;--msg-incoming-bg-alt:#ffcdcd}html.wamejora3{--bg-header:#ff9ee9;--bg-header-alt:#f964cd;--bg-base-1:#f7daf7;--bg-base-2:#f964cd;--bg-main:#fff8ff;--bg-light:#6c6c6c;--txt-main:#ff9ee9;--txt-secondary:#fbb9fb;--color-main:#FFCDEA;--color-secondary:#fbb9fb;--input-bg:#ff9ee9;--input-txt:#fff;--input-placeholder:#fff;--btn-primary-bg:#f964cd;--btn-primary-bg-hover:#e24ab5;--btn-primary-txt:#fff;--chat-bg:#ffdfff;--msg-self-txt:#fff;--msg-self-bg:#fbb9fb;--msg-self-bg-alt:#FFCDEA;--msg-incoming-txt:#fff;--msg-incoming-bg:#fbb9fb;--msg-incoming-bg-alt:#FFCDEA}html.wamejora3{--bg-header:#276ad5;--bg-header-alt:#578fe8;--bg-base-1:#2c2c2c;--bg-base-2:#3860a0;--bg-main:#2c2c2c;--bg-hover:#6c6c6c;--bg-active:#4c4c4c;--txt-main:#578fe8;--txt-secondary:#50c8d3;--color-main:#578fe8;--color-secondary:#3f71c2;--input-bg:#276ad5;--input-txt:#fff;--input-placeholder:#fff;--btn-primary-bg:#1248a0;--btn-primary-bg-hover:#1248a0;--btn-primary-txt:#fff;--btn-secondary-bg:#4c4c4c;--btn-secondary-bg-hover:#6c6c6c;--btn-secondary-txt:#fff;--chat-bg:#315fa8;--msg-self-txt:#fff;--msg-self-bg:#276ad5;--msg-self-bg-alt:#1248a0;--msg-incoming-txt:#fff;--msg-incoming-bg:#276ad5;--msg-incoming-bg-alt:#1248a0;--backdrop-bg:#4c4c4ccc;--shadow-main:0 6px 18px #1248a04c;--bg-opacity:0.7;--radius-app:6px}html.wamejora3{--bg-header:#9ea1ff;--bg-header-alt:#646ef9;--bg-base-1:#dadbf7;--bg-base-2:#6469f9;--bg-main:#d5d5ff;--bg-hover:#705dbb;--bg-active:#5947a2;--txt-main:#9ea1ff;--txt-secondary:#bab9fb;--color-main:#cecdff;--color-secondary:#b9bafb;--input-bg:#9ea1ff;--input-txt:#fff;--input-placeholder:#fff;--btn-primary-bg:#6466f9;--btn-primary-bg-hover:#4d4ae2;--btn-primary-txt:#fff;--chat-bg:#e0dfff;--msg-self-txt:#fff;--msg-self-bg:#b9bbfb;--msg-self-bg-alt:#cdcfff;--msg-incoming-txt:#fff;--msg-incoming-bg:#bcb9fb;--msg-incoming-bg-alt:#cdcfff;--backdrop-bg:#4c4c4ccc;--shadow-main:0 6px 18px #1248a04c;--bg-opacity:0.7;--radius-app:6px}html.wamejora3{--bg-header:#6fcf50;--bg-header-alt:#4caf50;--bg-base-1:#2c2c2c;--bg-base-2:#4caf50;--bg-main:#2c2c2c;--bg-hover:#6c6c6c;--bg-active:#4c4c4c;--txt-main:#6fcf50;--txt-secondary:#70d350;--color-main:#6fcf50;--color-secondary:#70d350;--input-bg:#6fcf50;--input-txt:#fff;--input-placeholder:#fff;--btn-primary-bg:#6fcf50;--btn-primary-bg-hover:#52af35;--btn-primary-txt:#fff;--btn-secondary-bg:#4c4c4c;--btn-secondary-bg-hover:#6c6c6c;--btn-secondary-txt:#fff;--chat-bg:#a2dda7;--msg-self-txt:#fff;--msg-self-bg:#4caf50;--msg-self-bg-alt:#70d350;--msg-incoming-txt:#fff;--msg-incoming-bg:#6fcf50;--msg-incoming-bg-alt:#52af35;--backdrop-bg:#4c4c4ccc;--shadow-main:0 6px 18px #6fcf504c;--bg-opacity:0.7;--radius-app:6px}html.wamejora3{--bg-header:#9ea1ff;--bg-header-alt:#646ef9;--bg-base-1:#1a1d7a;--bg-base-2:#6469f9;--bg-main:#2b2b5c;--bg-hover:#705dbb;--bg-active:#5947a2;--txt-main:#9ea1ff;--txt-secondary:#bab9fb;--color-main:#cecdff;--color-secondary:#b9bafb;--input-bg:#9ea1ff;--input-txt:#fff;--input-placeholder:#fff;--btn-primary-bg:#6466f9;--btn-primary-bg-hover:#4d4ae2;--btn-primary-txt:#fff;--chat-bg:#e0dfff;--msg-self-txt:#fff;--msg-self-bg:#5142aa;--msg-self-bg-alt:#3e308f;--msg-incoming-txt:#fff;--msg-incoming-bg:#5142aa;--msg-incoming-bg-alt:#3e308f;--backdrop-bg:#4c4c4ccc;--shadow-main:0 6px 18px #1248a04c;--bg-opacity:1;--radius-app:6px}html#whatsapp-web{--splashscreen-startup-background:var(--bg-base-1);--splashscreen-startup-background-rgb:17, 27, 33;--splashscreen-startup-icon:var(--txt-secondary);--splashscreen-primary-title:var(--txt-main);--splashscreen-secondary-lighter:var(--txt-secondary);--splashscreen-progress-primary:var(--color-main);--splashscreen-progress-background:var(--bg-base-2)}html.wamejora3{--app-background-stripe:var(--bg-header-alt);--app-background:var(--bg-base-1);--app-background-deeper:var(--bg-base-2);--button-primary:var(--btn-primary-txt);--button-primary-background:var(--btn-primary-bg);--button-primary-background-hover:var(--btn-primary-bg-hover);--navbar-background:var(--bg-base-1);--navbar-border:var(--color-main);--panel-header-icon:var(--color-main);--menu-bar-item-background-active:var(--btn-primary-bg);--secondary-stronger:var(--btn-primary-txt);--background-default:var(--bg-main);--background-default-hover:var(--bg-hover);--background-default-active:var(--bg-active);--panel-background-lighter:var(--color-main);--unread-marker-text:var(--btn-primary-txt);--unread-marker-background:var(--btn-primary-bg);--unread-timestamp:var(--txt-main);--chat-meta:var(--input-placeholder);--bubble-meta:var(--input-placeholder);--intro-background:var(--bg-base-1);--primary-title:var(--txt-main);--secondary-lighter:var(--txt-secondary);--dropdown-background:var(--input-bg);--dropdown-background-hover:var(--txt-secondary);--context-menu-text:var(--input-txt);--icon:var(--input-txt);--icon-search-back:var(--input-txt);--icon-lighter:var(--input-txt);--icon-ack:var(--msg-incoming-bg);--chatlist-icon:var(--msg-incoming-txt);--text-primary:var(--txt-main);--primary-strong:var(--txt-main);--text-secondary-emphasized:var(--txt-secondary);--link:var(--input-txt);--search-input-background:var(--input-bg);--primary:var(--input-txt);--search-input-container-background:var(--bg-main);--search-input-container-background-active:var(--bg-main);--search-container-background:var(--bg-main);--filters-container-background:var(--bg-main);--filters-item-active-background:var(--btn-primary-bg);--filters-item-active-color:var(--btn-primary-txt);--filters-item-background:var(--btn-secondary-bg);--filters-item-background-hover:var(--btn-secondary-bg-hover);--filters-item-color:var(--btn-secondary-txt);--panel-header-background:var(--bg-header);--border-stronger:var(--color-main);--secondary:var(--input-txt);--rich-text-panel-background:var(--input-bg);--compose-input-background:var(--input-bg);--compose-input-border:var(--input-txt);--active-tab-marker:var(--input-txt);--panel-input-background:var(--color-secondary);--conversation-panel-background:var(--chat-bg);--conversation-header-border:var(--input-txt);--conversation-panel-border:var(--chat-bg);--desktop-upsell-call-btn:var(--input-txt);--message-primary:var(--msg-self-txt);--quick-action-button-background:var(--msg-self-bg);--quick-action-button:var(--msg-self-txt);--round-entry-point-background-color:var(--msg-self-bg);--inverse:var(--msg-self-txt);--outgoing-background:var(--msg-self-bg);--outgoing-background-deeper:var(--msg-self-bg-alt);--incoming-primary:var(--msg-incoming-txt);--incoming-background:var(--msg-incoming-bg);--incoming-background-deeper:var(--msg-incoming-bg-alt);--system-message-background:var(--msg-self-bg);--system-message-text:var(--msg-self-txt);--teal:var(--input-txt);--progress-background:var(--input-txt);--modal-backdrop:var(--backdrop-bg);--modal-background:var(--bg-main);--audio-track-outgoing:var(--backdrop-bg);--audio-progress-played-outgoing:var(--msg-self-txt);--audio-progress-metadata:var(--msg-self-txt);--audio-control-outgoing:var(--msg-self-txt);--wds-sky-blue-300:#4c4c4c;--wds-emerald-400:#4c4c4c}html.wamejora3 [data-asset-chat-background-dark]{opacity:var(--bg-opacity)!important;background-position:center;background-size:cover}*{scrollbar-color:var(--color-main) transparent!important}.hide{display:none!important}.app-wrapper-web ._aigs{box-shadow:var(--shadow-main)!important}._ai01::after{display:none}.xpteuj8{color:var(--input-txt)}._amig{color:var(--input-txt)!important}._ami8 ._ajv2{color:var(--input-txt)!important}._aj-t{color:var(--context-menu-text)!important}._ajt-{color:var(--input-txt)!important}input[type="text"]._ahyh::placeholder{color:var(--input-txt)!important}._ajv7._ajv8,._ajv7._ajv9,._ajv7:active:not(._ajva){background-color:var(--bg-base-2);color:var(--input-txt)}.xz94d79{background:linear-gradient(to right, transparent 0%, var(--msg-self-bg-alt))}.xyq7fz5{background:linear-gradient(to right, transparent 0%, var(--msg-self-bg))}html.wamejora3 ._aigs{border-radius:var(--radius-app)}path[fill="#FFAD1F"]{fill:#4c4c4c4c!important}[data-js-navbar] [style="height:100%;"]{display:flex;flex-direction:column;justify-content:space-between;align-items:center}[data-js-navbar] [style="height:100%;"] [style="flex-grow: 1;"]{flex-grow:0!important}[data-js-navbar] [style="height:100%;"] .xyorhqc{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}.jt-btn{display:flex;justify-content:center;align-items:center;cursor:pointer;margin:10px 0 0;width:100%;height:100%}.jt-btn:hover,.jt-hide-sidebar .jt-btn.toggle-sidebar,.jt-privacy .jt-btn.privacy{background-color:var(--bg-base-2)!important;color:#fff!important}.jt-hide-sidebar .two ._aigw{display:none}html.wamejora3 .jt-privacy ._ak72._ak73{filter: blur(5px);transition:filter 0.2s}html.wamejora3 .jt-privacy ._ak72._ak73:hover{filter: blur(1px)}html.wamejora3 .jt-privacy ._ak72._ak7p{filter: blur(0px)!important}.jt-box-container{display:block;width:560px;height:100vh;position:fixed;z-index:99999;background-color:var(--backdrop-bg);box-sizing:border-box}.jt-box{display:block;width:512px;height:auto;margin:3rem auto;background-color:var(--bg-main);border-radius:var(--radius-app);padding:1rem;box-shadow:var(--shadow-main);box-sizing:border-box}.jt-box h3{display:block;width:100%;color:var(--input-txt);font-weight:bold;font-size:1.5rem;margin:0 0 1rem;box-sizing:border-box}.jt-box p{display:block;width:100%;color:var(--input-txt);font-size:1rem;margin:0 0 1rem;box-sizing:border-box}.jt-box input{display:block;width:100%;height:2rem;background-color:var(--input-bg);color:var(--input-txt);border:none;border-radius:var(--radius-app);font-size:1rem;padding:0 0.5rem;box-sizing:border-box}.jt-box-buttons{display:flex;justify-content:space-between;align-items:center;margin:1rem 0;gap:0.5rem;box-sizing:border-box}.jt-box button.jt-box-btn-primary{display:block;width:100%;height:2rem;background-color:var(--btn-primary-bg);color:var(--btn-primary-txt);border:none;border-radius:var(--radius-app);font-size:1rem;padding:0 0.5rem;cursor:pointer;box-sizing:border-box}.jt-box button.jt-box-btn-primary:hover{background-color:var(--btn-primary-bg-hover)}.jt-box button.jt-box-btn-secondary{display:block;width:100%;height:2rem;background-color:var(--btn-secondary-bg);color:var(--btn-secondary-txt);border:none;border-radius:var(--radius-app);font-size:1rem;padding:0 0.5rem;cursor:pointer;box-sizing:border-box}.jt-box button.jt-box-btn-secondary:hover{background-color:var(--btn-secondary-bg-hover)}';
    GM_addStyle(css);

    setTimeout(() => {
        console.log('timestart');
        init();
    }, 10000);

    function init(){
        setTimeout(() => {
            console.log('init');
            var ct = window.localStorage.getItem('theme');
            var dg = "darkgreen";
            if(ct == '"' + dg + '"'){
                document.querySelector('body').classList.add(dg);
                if(document.querySelector('body').classList.contains("dark")){
                    document.querySelector('body').classList.remove('dark');
                }
            }
            if(localStorage.getItem('jt_privacy') == "enabled"){
                document.querySelector('body').classList.add("jt-privacy");
            }

            var jt_style = document.createElement("style");
            jt_style.setAttribute("id","jtWAMejora3Styles");
            document.head.appendChild(jt_style);

            add_toggle_sidebar_config();
            add_background_config();
            add_theme_config();
            add_privacy_config();
            //add_theme_config_old();
            //add_privacy_config_old();
            //add_background_config();
            //add_autor_corrector_config();
            add_config_script();
        }, 5000);
    }

    function add_theme_config(){
        console.log('btn theme');
        var jt_btn = document.createElement('div');
        jt_btn.classList.add("jt-btn");
        jt_btn.classList.add("theme");
        jt_btn.classList.add("_ajvb");
        jt_btn.classList.add("_ajv7");
        jt_btn.setAttribute("onclick", "allThemes()");
        jt_btn.setAttribute("title", "¡Cambia el estilo de WhatsApp!");
        jt_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z"/></svg>';
        document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xyorhqc").insertBefore(jt_btn, document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xyorhqc").firstChild);
        add_theme_list();
    }

    function add_privacy_config(){
        console.log('btn privacy');
        var jt_btn = document.createElement('div');
        jt_btn.classList.add("jt-btn");
        jt_btn.classList.add("privacy");
        jt_btn.classList.add("_ajvb");
        jt_btn.classList.add("_ajv7");
        jt_btn.setAttribute("onclick", "privacy_config()");
        jt_btn.setAttribute("title", "¡Protege tus otros chats de vistas indeseadas!");
        jt_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24"><path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path></svg>';
        document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xyorhqc").insertBefore(jt_btn, document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xyorhqc").firstChild);
    }

    function add_toggle_sidebar_config(){
        console.log('btn toggle sidebar');
        var jt_btn = document.createElement('div');
        jt_btn.classList.add("jt-btn");
        jt_btn.classList.add("toggle-sidebar");
        jt_btn.classList.add("_ajvb");
        jt_btn.classList.add("_ajv7");
        jt_btn.setAttribute("onclick", "toogle_sidebar_config()");
        jt_btn.setAttribute("title", "¡Oculta la barra de chats!");
        jt_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-80v-560H200v560h120Zm80 0h360v-560H400v560Zm-80 0H200h120Z"/></svg>';
        document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xyorhqc").insertBefore(jt_btn, document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xyorhqc").firstChild);
    }

    function add_theme_list(){
        var jt_theme_listing = document.createElement('div');
        jt_theme_listing.classList.add("jt-theme-list");
        jt_theme_listing.classList.add("hide");
        jt_theme_listing.innerHTML = '<div class="jt-modal"><div class="jt-modal-header"><h4>Usa WhatsApp con tu estilo favorito.</h4><span onclick="hideThemes()">X</span></div><div class="jt-modal-body"><p><a onclick="setTheme(\'1\')">Light</a> (Default)</p><br/><p><a onclick="setTheme(\'2\')">Dark</a> (By WhatsApp Team)</p><br/><p><a onclick="setTheme(\'3\')">DarkGreen</a> (By @JaviertINC)</p><br/><p><a onclick="setTheme(\'4\')">WAMejora3</a> (By @JaviertINC)</p></div></div></div></div>';
        document.body.appendChild(jt_theme_listing);
    }
    function add_background_config(){
        var jt_btn = document.createElement('div');
        jt_btn.classList.add("jt-btn");
        jt_btn.classList.add("background");
        jt_btn.classList.add("_ajvb");
        jt_btn.classList.add("_ajv7");
        jt_btn.setAttribute("onclick", "background_config()");
        jt_btn.setAttribute("title", "¡Cambia el fondo de WhatsApp!");
        jt_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M4.9 5.9h6.4V4.1H4.9c-1 0-1.8.8-1.8 1.8v6.4h1.8V5.9zm5.3 8l-3.6 4.4h10.7l-2.7-3.6-1.8 2.4-2.6-3.2zm6.2-4c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3.6 1.3 1.3 1.3 1.3-.6 1.3-1.3zm2.7-5.8h-6.4v1.8h6.4v6.4h1.8V5.9c0-1-.8-1.8-1.8-1.8zm0 16h-6.4v1.8h6.4c1 0 1.8-.8 1.8-1.8v-6.4h-1.8v6.4zM4.9 13.7H3.1v6.4c0 1 .8 1.8 1.8 1.8h6.4v-1.8H4.9v-6.4z"></path></svg>';
        document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xyorhqc").insertBefore(jt_btn, document.querySelector(".x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xyorhqc").firstChild);
        var jt_box = document.createElement('div');
        jt_box.classList.add("jt-box-container");
        jt_box.classList.add("hide");
        jt_box.setAttribute('id','jtBackgroundChanger');
        jt_box.innerHTML = '<div class="jt-box"><h3>¡Cambiemos el fondo de pantalla!</h3><p>Por políticas de seguridad de Whatsapp, sólo se permite usar imágenes/gifs de Tenor y ytimg.</p><input type="text" id="jtBackgroundChangerInput" placeholder="https://media1.tenor.com/m/J9OjW0Z1tsAAAAAd/jinx-arcane-arcane-vi.gif"><div class="jt-box-buttons"><button class="jt-box-btn-primary" onclick="jtChangeBackground()">Cambiar</button><button class="jt-box-btn-secondary" onclick="background_config()">Cerrar</button></div></div>';
        document.body.appendChild(jt_box);
    }
    function add_config_script(){
        var jt_theme_script = document.createElement('script');
        var jt_script = [
            'function allThemes(){',
            //'   document.querySelector(\'.jt-theme-list\').classList.remove("hide");',
            '   var theme = prompt(\'Ingresa el numero del estilo que deseas:\\n\\n1) Light (Default)\\n2) Dark (By WhatsApp)\\n3) DarkGreen (By @JaviertINC)\\n\', "3");',
            '   if (theme != null || theme != "") {',
            '     setTheme(theme);',
            '   }',
            '}',
            'function hideThemes(){',
            '   document.querySelector(\'.jt-theme-list\').classList.add("hide");',
            '}',
            'function setTheme(theme){',
            '   switch(theme){',
            '     case "1":',
            '       window.localStorage.setItem("theme","light");',
            '       if(document.querySelector(\'body\').classList.contains("dark")){',
            '         document.querySelector(\'body\').classList.remove(\'dark\');',
            '       }',
            '       if(document.querySelector(\'body\').classList.contains("darkgreen")){',
            '         document.querySelector(\'body\').classList.remove(\'darkgreen\');',
            '       }',
            '       if(document.querySelector(\'html\').classList.contains("wamejora3")){',
            '         document.querySelector(\'html\').classList.remove(\'wamejora3\');',
            '       }',
            '     break;',
            '     case "2":',
            '       window.localStorage.setItem("theme","dark");',
            '       document.querySelector(\'body\').classList.add("dark");',
            '       if(document.querySelector(\'body\').classList.contains("darkgreen")){',
            '         document.querySelector(\'body\').classList.remove(\'darkgreen\');',
            '       }',
            '       if(document.querySelector(\'html\').classList.contains("wamejora3")){',
            '         document.querySelector(\'html\').classList.remove(\'wamejora3\');',
            '       }',
            '     break;',
            '     case "3":',
            '       window.localStorage.setItem("theme","darkgreen");',
            '       document.querySelector(\'body\').classList.add("darkgreen");',
            '       if(document.querySelector(\'body\').classList.contains("dark")){',
            '         document.querySelector(\'body\').classList.remove(\'dark\');',
            '       }',
            '       if(document.querySelector(\'html\').classList.contains("wamejora3")){',
            '         document.querySelector(\'html\').classList.remove(\'wamejora3\');',
            '       }',
            '     break;',
            '     case "4":',
            '       window.localStorage.setItem("theme","wamejora3");',
            '       document.querySelector(\'html\').classList.add("wamejora3");',
            '       if(document.querySelector(\'body\').classList.contains("dark")){',
            '         document.querySelector(\'body\').classList.remove(\'dark\');',
            '       }',
            '       if(document.querySelector(\'body\').classList.contains("darkgreen")){',
            '         document.querySelector(\'body\').classList.remove(\'darkgreen\');',
            '       }',
            '     break;',
            '   }',
            '   hideThemes();',
            '}',
            'function background_config(){',
            '   if(document.querySelector(\'#jtBackgroundChanger\').classList.contains("hide")){',
            '       document.querySelector(\'#jtBackgroundChanger\').classList.remove(\'hide\');',
            '   }else{',
            '       document.querySelector(\'#jtBackgroundChanger\').classList.add(\'hide\');',
            '   }',
            '}',
            'function jtChangeBackground(){',
            '   var new_bg = document.getElementById("jtBackgroundChangerInput").value',
            '   new_bg = new_bg.replace("\\"", "");',
            '   new_bg = new_bg.replace("\\"", "");',
            '   if(new_bg == null || new_bg == "" || new_bg == "0"){',
            '      alert("No has ingresado un enlace a una imagen usable.");',
            '   }else{',
            '      document.getElementById("jtWAMejora3Styles").innerHTML = \'[data-asset-chat-background-dark]{background-image: url("\'+ new_bg +\'")!important;}\';',
            '   }',
            '}',
            'function privacy_config(){',
            '   if(document.querySelector(\'body\').classList.contains("jt-privacy")){',
            '       document.querySelector(\'body\').classList.remove(\'jt-privacy\');',
            '       window.localStorage.setItem("jt_privacy","disabled");',
            '   }else{',
            '       document.querySelector(\'body\').classList.add("jt-privacy");',
            '       window.localStorage.setItem("jt_privacy","enabled");',
            '   }',
            '}',
            'function toogle_sidebar_config(){',
            '   if(document.querySelector(\'body\').classList.contains("jt-hide-sidebar")){',
            '       document.querySelector(\'body\').classList.remove(\'jt-hide-sidebar\');',
            '       window.localStorage.setItem("jt_hide_sidebar","disabled");',
            '   }else{',
            '       document.querySelector(\'body\').classList.add("jt-hide-sidebar");',
            '       window.localStorage.setItem("jt_hide_sidebar","enabled");',
            '   }',
            '}',
        ].join("\n");
        jt_theme_script.innerHTML = jt_script;
        document.body.appendChild(jt_theme_script);
    }

})();
