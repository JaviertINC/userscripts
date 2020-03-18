// ==UserScript==
// @name          YTmp3.cc | Dark Default
// @version       0.1
// @icon          https://www.google.com/s2/favicons?domain=ytmp3.cc
// @author        @JaviertINC
// @include       *://ytmp3.cc/*
// @updateURL     https://javiertinc.github.io/userscripts/scripts/ytmp3cc.dark.user.js
// @run-at        document-end
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

        var t = "d"
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
        })
})();
