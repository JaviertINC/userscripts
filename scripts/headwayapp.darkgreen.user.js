// ==UserScript==
// @name         HeadWayApp | DarkGreen
// @namespace    https://javiertinc.cl/userscripts
// @version      0.1
// @description  Una versión oscura, ayuda a cuidar tus ojos :D
// @homepage     https://javiertinc.cl/userscripts/script/headwayapp.darkgreen
// @author       @JaviertINC
// @match        https://headwayapp.co/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/headwayapp.darkgreen.user.js
// @icon         https://www.google.com/s2/favicons?domain=headwayapp.co
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        "body{ background-color: #242424!important; color: #f1f1f1!important; }",
        "header{ background-color: #4c4c4c!important; border-bottom: 1px solid #4caf50!important; }",
        "header a{ color: #fff!important; }",
        "#global-nav{ background-color: #4caf50!important; }",

        ".mCont,.changelogItem{ width: 650px!important; }",
        ".changelogItem{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; padding: 2.3rem 2rem!important; border-top: none!important; }",
        ".changelogItem time a{ color: #4caf50!important; }",
        ".newPost{ border: 1px solid #4caf50!important; background-color: #4c4c4c!important; padding: 0!important; min-height: 70px!important; }",
        ".newPost a{ padding: 1rem 1rem 1rem 5rem!important; width: 100%!important; }",
        ".newPost a svg{ margin: 1rem 2rem!important; }",
        ".newPost a:hover{ background-color: rgba(255,255,255,.1)!important; }",
        "body .changelogItem .actions .edit, body .newPost .actionButton{ display: block!important; margin: 0 auto!important;}",
        "body .changelogItem .actions .edit a{ background-color: #4caf50!important; color: #fff!important; padding: 7px 20px!important; border-radius: 8px!important; }",
        ".changelogItem .content code, .changelogItem .content pre{ background-color: #666!important; border: 1px solid #4caf50!important; color: #fff!important; }",

        "#editor-body.active #editor{ border-left-color: #4caf50!important; }",
        "#editor-body #editor{ background-color: #000!important; color: #4caf50!important; }",
        "#editor-body #editor .bodyCont{ border-bottom: unset!important; }",
        "#editor-body #editor .editorFooter{ background-color: #4c4c4c!important; border-top: 1px solid #4caf50!important; }",
        "#editor-body .help{ color: #f1f1f1!important; border-bottom-color: #4caf50!important; }",
        "#editor-body .help a{ color: #4caf50!important; }",
        "#editor-body .actions .delete a{ color: #4caf50!important; }",
        "#editor-body .actions .cancel a{ color: #ccc!important; }",
        ".switchCustom input[type=\"checkbox\"]:checked + .switchCont{ background-color: #4caf50cc!important; }",

        ".pagination a{ color: #4caf50!important; }",
        "footer{ color: #ccc!important;}",
        "footer a{ color: #fff!important; font-weight: bold!important; }",

        ".category_67761,.head.head_category_67761 .background{ background-color: #4caf50!important; }",
    ].join("\n");
	GM_addStyle(css);

})();