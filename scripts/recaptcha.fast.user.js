// ==UserScript==
// @name         reCaptcha Fast
// @namespace    https://javiertinc.cl/userscripts
// @version      0.1
// @description  Apura la causa oe
// @homepage     https://javiertinc.cl/userscripts/script/recaptcha.fast
// @author       @JaviertINC
// @match        https://www.google.com/recaptcha/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/recaptcha.fast.user.js
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        "[style=\"transition: opacity 4s ease 0s;\"]{ transition: all 0s!important;}",

	].join("\n");
    GM_addStyle(css);

})();