// ==UserScript==
// @name          GitHub | Dark Green
// @namespace     https://javiertinc.github.io/userscripts
// @description	  Github Darker Green
// @author        JaviertINC
// @include       *://github.com/*
// @include       *://*.github.com/*
// @include       https://github.com/JaviertINC
// @updateURL     https://javiertinc.github.io/userscripts/scripts/github.darkgreen.user.js
// @run-at        document-start
// @grant         GM_addStyle
// @version       1.2
// ==/UserScript==
(function() {
	var css = [
		"body{background-color: #242424!important; color: #f1f1f1!important; }",
		"a{color: #4caf50!important;}",
		"::selection{background-color:#4caf50!important;color:#fff!important}",
		"::-moz-selection{background-color:#4caf50!important;color:#fff!important}",
		".Header{background-color: #4c4c4c!important;border-bottom: 1px solid #4caf50!important;}",
		".border, .avatar-before-user-status, .Box{border-color: #4caf50!important;}",
		".p-name{ color: #4caf50!important; }",
		".p-nickname{ font-size: 15px!important; }",
		".text-gray, .octicon{ color: #f1f1f1!important;}",
		".Box, .user-status-container{background-color: #4c4c4c!important; }",
		"rect[fill=\"#ebedf0\"]{fill:#333!important}",
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
