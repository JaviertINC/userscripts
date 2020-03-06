// ==UserScript==
// @name          GitHub | Dark Green
// @version       1.8
// @description	  Github Darker Green
// @icon          https://www.google.com/s2/favicons?domain=github.com
// @author        JaviertINC
// @include       *://github.com/*
// @include       *://*.github.com/*
// @include       https://github.com/JaviertINC
// @updateURL     https://javiertinc.github.io/userscripts/scripts/github.darkgreen.user.js
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==
(function() {
	var css = [
		"body,.Counter{background-color: #242424!important; color: #f1f1f1!important; }",
		"a,.text-bold.link-gray-dark.lh-default.v-align-middle{color: #4caf50!important;}",
		":focus{outline: none!important;}",
		"::selection{background-color:#4caf50!important;color:#fff!important}",
		"::-moz-selection{background-color:#4caf50!important;color:#fff!important}",
		".Header, .user-profile-nav{background-color: #4c4c4c!important;border-bottom: 1px solid #4caf50!important;}",
		".border, .avatar-before-user-status, .Box{border-color: #4caf50!important;}",
		".p-name{ color: #4caf50!important; }",
		".p-nickname{ font-size: 15px!important; }",
		".text-gray, .octicon{ color: #f1f1f1!important;}",
		".Box, .user-status-container{background-color: #4c4c4c!important; }",
		".UnderlineNav-item.selected, .UnderlineNav-item[aria-current], .UnderlineNav-item[role=\"tab\"][aria-selected=\"true\"]{ border-bottom-color: #4caf50!important;}",
		"rect[fill=\"#ebedf0\"]{fill:#333!important}",
		".btn-link.muted-link,span.btn-link.f6.mb-2,.pr-2.text-mono.link-gray{color: #d1d1d1!important; text-decoration: underline!important;}",
		".btn-link.muted-link:hover,.btn-link.muted-link:active,.btn-link.muted-link:focus,btn-link{color: #4caf50!important; text-decoration: underline!important;}",
		".btn{ background-color: #4c4c4c!important; background-image: unset!important; border: 1px solid #4caf50!important; color: #f1f1f1!important; }",
		".btn:hover{ text-decoration: underline!important; }",
		".bg-gray-light{ background-color: #343434!important;}",
		".pagehead{border-bottom: 1px solid #4caf50!important;}",
		"span.text-gray-dark{color: #f1f1f1!important;}",
		".overall-summary,.repository-lang-stats-graph,.Box-body{border-color: #4caf50!important;}",
		".reponav-item.selected{background-color: #242424!important; color: #f1f1f1!important; border-color: transparent!important;}",
		".Popover-message::after { border-bottom-color: #4caf50!important; }",
		"a.f5.text-bold.link-gray-dark.no-underline{color: #4caf50!important;}",
		"a.link-gray.no-underline{color: #4caf50!important;}",
		".final-path{color: #4caf50!important; text-decoration: underline!important; }",
		".bg-blue-light { background-color: #4c4c4c !important; }",
		/*
		"rect[fill=\"#eee\"],ul.legend li:nth-child(1){background-color:#333!important}",
		"rect[fill=\"#c6e48b\"],ul.legend li:nth-child(2){background-color:#a8cf6a!important;fill:#a8cf6a!important}",
		"rect[fill=\"#7bc96f\"],ul.legend li:nth-child(3){background-color:#93c346!important;fill:#93c346!important}",
		"rect[fill=\"#239a3b\"],ul.legend li:nth-child(4){background-color:#004d00!important;fill:#004d00!important}",
		"rect[fill=\"#196127\"],ul.legend li:nth-child(5){background-color:#008000!important;fill:#008000!important}",
		*/

	].join("\n");
	GM_addStyle(css);
})();
