// ==UserScript==
// @name            Index Of
// @description     Index Of Modificado :3
// @version         0.8
// @author          @JaviertINC
// @match           *://*/*
// @exclude         *://github.com/*
// @exclude         *://*.github.com/*
// @run-at          document-start
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    var titlea = document.title;
    var titleb = titlea.substr(0,10);
    var titlec = window.location.href;
    var titled = titlec.length - 3;
    var titlee = titlec.length;
    var titlef = titlec.substr(titled,titlee);
    var titleg = location.href.lastIndexOf('/') +1;
    var titleh = location.href.substring(titleg,99);
    var titlei = titlec.length - 4;
    var titlej = titlec.substr(titlei,titlee);
    var titlew = ".css";
    var titlex = Jmay(titleh);
    var titley = "Index of /";
    var titlez = ".js";
    function addGlobalStyle(css) {
                var head, style;
                head = document.getElementsByTagName('head')[0];
                if (!head) { return; }
                style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = css;
                head.appendChild(style);
    }
    function Jmay(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function Jico(){
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/png';
        link.rel = 'shortcut icon';
        link.href = '#';
        document.getElementsByTagName('head')[0].appendChild(link);link.type = 'image/png';
    }
    if(titleb == titley) {
        document.title += " | IndexOf";
        addGlobalStyle('body { color: white; background-color: black; padding: 15px 30px 0 30px;} a{color: #46d11f;} a:hover{color: #4caf30;} a:visited{color: #4caf30;} li:before{content: "⇝";} li:last-child {border: none;} ul{list-style-type: none;}');
        Jico();
    }
    if(titlef == titlez){
        document.title = titlex + " | IndexOf";
        addGlobalStyle('body { color: white; background-color: black; padding: 15px 30px 0 30px;} pre{color: #46d11f;}');
        Jico();
    }
    if(titlej == titlew){
        document.title = titlex + " | IndexOf";
        addGlobalStyle('body { color: white; background-color: black; padding: 15px 30px 0 30px;} pre{color: #46d11f;}');
        Jico();
    }
})();
