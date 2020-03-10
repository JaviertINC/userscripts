// ==UserScript==
// @name          GitHub | Dark Green
// @version       2.9
// @description	  Github Darker Green
// @icon          https://www.google.com/s2/favicons?domain=github.com
// @author        @JaviertINC
// @include       *://github.com/*
// @include       https://github.com/JaviertINC
// @updateURL     https://javiertinc.github.io/userscripts/scripts/github.darkgreen.user.js
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==
(function() {
	var css = [
		"body,.Counter{background-color: #242424!important; color: #f1f1f1!important; }",
		"a,.text-bold.link-gray-dark.lh-default.v-align-middle,.f3.lh-condensed.link-gray-dark.no-underline.text-bold,.link-gray-dark,.f4.text-normal.mb-3,.text-gray-dark.lh-condensed.mb-1{color: #4caf50!important;}",
		"a.link-gray-dark:hover,.link-gray-dark:active;.link-gray-dark:focus,.link-gray-dark{ color: #008000!important; text-decoration: underline!important; }",
		".f4.text-normal.mb-3:hover,.link-gray-dark,.f4.text-normal.mb-3:active,.link-gray-dark,.f4.text-normal.mb-3:focus{ color: #4caf50!important; text-decoration: underline!important; }",
		":focus{outline: none!important;}",
		"::selection{background-color:#4caf50!important;color:#fff!important}",
		"::-moz-selection{background-color:#4caf50!important;color:#fff!important}",
		".Header, .user-profile-nav,.user-profile-sticky-bar::after{background-color: #4c4c4c!important;border-bottom: 1px solid #4caf50!important;}",
		".border, .avatar-before-user-status, .Box,.SelectMenu-modal{border-color: #4caf50!important;}",
		".p-name,.pinned-item-name{ color: #4caf50!important; }",
		".p-nickname{ font-size: 15px!important; }",
		".text-gray, .octicon{ color: #f1f1f1!important;}",
		".Box, .user-status-container,.SelectMenu-modal{background-color: #4c4c4c!important; }",
		".UnderlineNav-item.selected, .UnderlineNav-item[aria-current], .UnderlineNav-item[role=\"tab\"][aria-selected=\"true\"]{ border-bottom-color: #4caf50!important;}",
		"rect[fill=\"#ebedf0\"]{fill:#333!important}",
		".btn-link.muted-link,span.btn-link.f6.mb-2,.pr-2.text-mono.link-gray,.pinned-items-setting-link.muted-link,.f6.text-gray-light.muted-link.no-wrap{color: #d1d1d1!important; text-decoration: underline!important;}",
		".btn-link.muted-link:hover,.btn-link.muted-link:active,.btn-link.muted-link:focus,btn-link,span.btn-link.f6.mb-2:hover,span.btn-link.f6.mb-2:active,span.btn-link.f6.mb-2:focus,.pr-2.text-mono.link-gray:hover,.pr-2.text-mono.link-gray:active,.pr-2.text-mono.link-gray:focus,.pinned-items-setting-link.muted-link:hover,.pinned-items-setting-link.muted-link:active,.pinned-items-setting-link.muted-link:focus,.f6.text-gray-light.muted-link.no-wrap:hover,.f6.text-gray-light.muted-link.no-wrap:active,.f6.text-gray-light.muted-link.no-wrap:focus{color: #4caf50!important; text-decoration: underline!important;}",
		".btn{ background-color: #4c4c4c!important; background-image: unset!important; border: 1px solid #4caf50!important; color: #f1f1f1!important; }",
		".btn:hover{ text-decoration: underline!important; }",
		".bg-gray-light{ background-color: #343434!important;}",
		".pagehead{border-bottom: 1px solid #4caf50!important;}",
		"span.text-gray-dark{color: #f1f1f1!important;}",
		".message.text-inherit,.lh-default.v-align-middle a.link-gray,.btn-link span{color: #909090!important; }",
		".btn-link span:hover{color: #4caf50!important; text-decoration: underline!important;}",
		".commit-tease{color: unset!important; }",
		".overall-summary,.repository-lang-stats-graph,.Box-body{border-color: #4caf50!important;}",
		".reponav-item.selected{background-color: #242424!important; color: #f1f1f1!important; border-color: transparent!important;}",
		".Popover-message::after,.markdown-body h1, .markdown-body h2{ border-bottom-color: #4caf50!important; }",
		"a.f5.text-bold.link-gray-dark.no-underline{color: #4caf50!important;}",
		"a.link-gray.no-underline{color: #4caf50!important;}",
		".final-path{color: #4caf50!important; text-decoration: underline!important; }",
		".bg-blue-light { background-color: #4c4c4c !important; }",
		".markdown-body .highlight pre, .markdown-body pre{background-color: #313131!important;}",
		".pl-pds, .pl-s, .pl-s .pl-pse .pl-s1, .pl-sr, .pl-sr .pl-cce, .pl-sr .pl-sra, .pl-sr .pl-sre {	color: #0ff!important; }",
		".pl-c { color: #6a737d; }",
		".markdown-body table td, .markdown-body table th { border-color: #4caf50!important; }",
		".markdown-body table tr,.markdown-body table tr:nth-child(2n) { background-color: transparent!important; }",
		".Box-header { background-color: #4c4c4c!important; border-color: #4caf50!important; }",
		".social-count { color: #4caf50!important; background-color: #313131!important; border-color: #4caf50!important; }",
		"table.files{ background-color: #333!important; }",
		"table.files tr.navigation-focus td, table.files tr[aria-selected=\"true\"] td{ background-color: #303030!important; }",
		".profile-timeline.discussion-timeline::before { background-color: #4caf50!important; }",
		".profile-timeline-month-heading{background-color: #4caf50!important; padding: 10px!important; }",
		".discussion-item-icon { color: #e1e1e1!important; background-color: #4c4c4c!important;	border: 1px solid #4caf50!important; }",
		".profile-rollup-wrapper + .profile-rollup-wrapper { border-top: 1px solid #4caf50!important; }",
		".profile-timeline-year-list{background-color: #242424!important; }",
		".js-year-link{text-align: center!important; }",
		".js-year-link:hover{background-color: #4c4c4c!important;}",
		".filter-item.selected, .filter-item[aria-current], .filter-item[aria-selected=\"true\"]{background-color: #4caf50!important; color: #f1f1f1!important;}",
		".form-control.width-full.js-pinned-items-filter-input{ color: #4caf50; background-color: #333!important; border: 1px solid #4caf50!important;}",
		".form-control.width-full.js-pinned-items-filter-input:focus { border-color: #4caf50!important; box-shadow: inset 0 1px 2px rgba(27,255,35,.075),0 0 0 .2em rgba(3,102,3,.3)!important; }",
		".pinned-item-checkbox:checked + .pinned-item-name { color: #4caf50!important; background-color: #333!important; }",
		".js-remaining-pinned-items-count{padding: 12px!important; background-color: #252525!important; border-radius: 6px!important; }",
		".profile-timeline-card-wrapper{border-top: 0!important; border-bottom: 0!important; }",
		".profile-timeline-card.border.bg-white.border-gray-dark.rounded-1.p-3{ background-color: #4c4c4c!important; }",
		".Box-footer.Box-row--gray{ background-color: #3d3d3d!important; }",
		".Box-footer{ border-top: 1px solid #4caf50!important; }",
		".border-top,table.files td,.SelectMenu-filter{border-top-color: #4caf50!important;}",
		".border-bottom,.SelectMenu-item{border-bottom-color: #4caf50!important;}",
		".muted-link,.link-gray{color: #6f6f6f!important; }",
		".muted-link:hover,.muted-link:active,.muted-link:focus,.link-gray:hover,.link-gray:active,.link-gray:focus{color: #008000!important; text-decoration: underline!important; }",
		".orghead{ background-color: #343434!important; border-bottom: 1px solid #4caf50; color: #f1f1f1!important; }",
		".pagehead-tabs-item.selected{background-color: #242424!important; border: none!important;}",
		".pagehead-tabs-item{border: none!important; }",
		".text-gray-dark.css-truncate.css-truncate-target,.text-gray-dark.css-truncate.css-truncate-target a{color: #4caf50!important;}",
		".team-breadcrumb-item.team-breadcrumb-item-selected.text-gray-dark{color: #4caf50!important; text-decoration: underline!important; }",
		".flash{ background-color: #000!important; color: #f1f1f1!important; }",
		".border-gray-light{border-color: #4caf50!important;}",
		".btn-link{ color: #4caf50!important; }",
		".btn-link:hover,.btn-link:active,.btn-link:focus{ color: #008000!important; text-decoration: underline!important; }",
		".SelectMenu-item{background-color: #393939!important;}",
		".profile-timeline.discussion-timeline .profile-timeline-month-heading::after{background-color: #4caf50!important;}",
		".repo-file-upload-text.alternate-text, p.repo-file-upload-choose{ color: #f1f1f1!important; }",
		".js-manifest-file-entry .name{ color: #4caf50!important; }",
		".repo-file-upload-progress .repo-file-upload-meter{ background-color: #4c4c4c!important; color: #f1f1f1!important; border: 1px solid #4caf50!important; border-bottom: none!important; }",



		/*
		"rect[fill=\"#eee\"],ul.legend li:nth-child(1){background-color:#333!important}",
		"rect[fill=\"#c6e48b\"],ul.legend li:nth-child(2){background-color:#a8cf6a!important;fill:#a8cf6a!important}",
		"rect[fill=\"#7bc96f\"],ul.legend li:nth-child(3){background-color:#93c346!important;fill:#93c346!important}",
		"rect[fill=\"#239a3b\"],ul.legend li:nth-child(4){background-color:#004d00!important;fill:#004d00!important}",
		"rect[fill=\"#196127\"],ul.legend li:nth-child(5){background-color:#008000!important;fill:#008000!important}",
		*/

	].join("\n");
	GM_addStyle(css);

	var url_favicon = "https://javiertinc.github.io/libs/icons/github.ico";
	re_favicon(url_favicon);

    	function re_favicon(url_favicon){
		var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = url_favicon;
		document.getElementsByTagName('head')[0].appendChild(link);
    	}
	document.addEventListener("DOMContentLoaded", function(){
		setTimeout(() => {
			re_favicon(url_favicon);
		}, 1500);
	});
})();
