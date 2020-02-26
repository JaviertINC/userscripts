// ==UserScript==
// @name         API-UX | Gmail Dark Green Complement Style
// @version      1.4
// @author       @JaviertINC
// @match        *://mail.google.com/mail/u/*/
// @include      https://www.api-ux.com/@JaviertINC
// @grant        GM_addStyle
// @updateURL    https://github.com/JaviertINC/userscripts/raw/master/scripts/api-ux.gmail.user.js
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    // Custom Logo (Google Business)
    var logo_url = "http://www.api-ux.com/wp-content/uploads/2018/10/logo-blanco-2.png";
    
    GM_addStyle("#loading { background-color: #222 !important; }");
    GM_addStyle(".msg, .msgb { color: #4caf50!important; }");
    GM_addStyle("#nlpt::before { background-color: #4caf50!important; }");
    GM_addStyle(".submit_as_link { color: #4caf50!important; text-decoration: underline!important; }");

    GM_addStyle(".gb_ia { background-color: #222!important; border: 1px solid #4caf50!important; } ");
    GM_addStyle(".gb_ia:hover { background-color: #333!important; border: 1px solid #1dd01b!important; } ");
    GM_addStyle(".gb_Pa .gb_D { padding: 1px!important; }");
    GM_addStyle(".gb_Ia { border: 2px solid #4caf50!important; }");
    GM_addStyle(".gb_oa.gb_qa, .gb_oa { background: transparent url("+ logo_url +") center no-repeat; background-size: 80px 65px; width: 80px!important; height: 32px; }");
    GM_addStyle(".gb_ua.gb_ra.gb_va { display: none; }");

})();
