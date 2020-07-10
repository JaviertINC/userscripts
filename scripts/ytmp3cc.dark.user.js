// ==UserScript==
// @name          YTmp3.cc | Dark Default
// @namespace     https://javiertinc.cl/userscripts
// @version       0.2
// @description   Una versión oscura, ayuda a cuidar tus ojos :D
// @homepage      https://javiertinc.cl/userscripts/script/ytmp3cc.dark
// @author        @JaviertINC
// @include       *://ytmp3.cc/*
// @updateURL     https://javiertinc.github.io/userscripts/scripts/ytmp3cc.dark.user.js
// @icon          https://www.google.com/s2/favicons?domain=ytmp3.cc
// @run-at        document-start
// ==/UserScript==

(function() {
    'use strict';

        var t = "d";
        if(t != readCookie('theme')){
            switch ($("link").attr("href", "/css/a/" + t + ".css?_=" + (new Date).getTime()), $("#logo").attr("src", "images/" + t + ".png"), t) {
                case "d":
                    $(this).attr("href", "l").text("Theme [Light]");
                    break;
                case "l":
                    $(this).attr("href", "d").text("Theme [Dark]")
            }
            return $.ajax({
                url: "t.php",
                async: !1,
                cache: !1,
                data: {
                    t: t
                },
                type: "POST"
            });
        }

        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }
})();
