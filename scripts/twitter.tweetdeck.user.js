// ==UserScript==
// @name          Twitter | TweetDeck DarkGreen
// @version       0.4
// @description	  Twitter - TweetDeck DarkGreen Style
// @icon          https://www.google.com/s2/favicons?domain=tweetdeck.twitter.com
// @author        @JaviertINC
// @include       *://tweetdeck.twitter.com/*
// @include       *://tweetdeck.twitter.com/*JaviertINC
// @updateURL     https://javiertinc.github.io/userscripts/scripts/twitter.deck.user.js
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==
(function() {
	var css = [
		"html.dark .app-header,html.dark .column-nav-item,html.dark .app-title,html.dark .app-navigator,html.dark .column-header, html.dark .column-header-temp{ background-color: #4c4c4c!important; }",
		"html.dark body::before{ background-color: #4caf50!important; background-image: unset!important; }",
		'html.dark .Button.btn-fav.s-favorited, html.dark .Button.btn-fav.s-favorited:visited, html.dark .Button.Button--primary, html.dark .Button.Button--primary:visited, html.dark .ButtonGroup--primary > .Button, html.dark .ButtonGroup--primary > .Button:visited, html.dark .ButtonGroup--primary > .ButtonGroup > .Button, html.dark .ButtonGroup--primary > .ButtonGroup > .Button:visited, html.dark .ButtonGroup--primary > .ButtonGroup > button, html.dark .ButtonGroup--primary > .ButtonGroup > button:visited, html.dark .ButtonGroup--primary > .ButtonGroup > input:visited[type="button"], html.dark .ButtonGroup--primary > .ButtonGroup > input[type="button"], html.dark .ButtonGroup--primary > button, html.dark .ButtonGroup--primary > button:visited, html.dark .ButtonGroup--primary > input:visited[type="button"], html.dark .ButtonGroup--primary > input[type="button"], html.dark .s-following .follow-btn:hover .Button.following-text, html.dark .s-following .follow-btn:hover .Button.following-text:visited, html.dark .s-following .follow-btn:hover button.following-text, html.dark .s-following .follow-btn:hover button.following-text:visited, html.dark .s-following .follow-btn:hover input.following-text:visited[type="button"], html.dark .s-following .follow-btn:hover input.following-text[type="button"], html.dark button.btn-fav.s-favorited, html.dark button.btn-fav.s-favorited:visited, html.dark button.Button--primary, html.dark button.Button--primary:visited, html.dark input.btn-fav.s-favorited:visited[type="button"], html.dark input.btn-fav.s-favorited[type="button"], html.dark input.Button--primary:visited[type="button"], html.dark input.Button--primary[type="button"]{background-color: #4caf50!important; border-color: #0f0!important; }',
		"html.dark .app-search-fake{ color: #4caf50!important; border-color: #4caf50!important; }",
		"html.dark .app-nav-link,html.dark .app-nav-tab, html.dark a,html.dark .color-twitter-blue,html.dark .is-new .column-type-icon,html.dark .icon-follow-color{color: #4caf50!important; }",
		"html.dark .app-nav-link:hover,html.dark .app-nav-link:active,html.dark .app-nav-link:focus,html.dark .app-nav-tab:hover,html.dark .app-nav-tab:active:,html.dark .app-nav-tab:focus,html.dark a:hover,html.dark a:active,html.dark a:focus,html.dark .color-twitter-blue:hover,html.dark .color-twitter-blue:active,html.dark .color-twitter-blue:focus{color: #008000!important; text-decoration: underline!important; }",
		"html.dark .app-header{ border-right: 1px solid #4caf50!important; }",
		"html.dark .needs-scroll-bottom-offset.scroll-styled-h{ bottom: 0px!important; }",
		"html.dark .stream-item { border-bottom: 1px solid #4caf50!important;	background-color: #4c4c4c!important; }",
		"html.dark .border-divider,html.dark .column-header{ border-bottom: 1px solid #4caf50!important; }",
		"html.dark .bg-color-twitter-midnight-dark-gray,html.dark .column-panel{ background-color: #242424!important; }",
		".scroll-styled-h, .scroll-styled-v { scrollbar-color: #4caf50 #242424!important; }",
		"html.dark .is-narrow-columns .column{ margin-right: 3px!important; }",
		"html.dark .app-columns-container, html.dark .app-content{ background-color: #222!important; }",
		"html.dark .column-message { background-color: #4f4f4f!important; }",
		".js-column-nav-menu-flyover.column-nav-flyout {background-color: transparent!important; }",
		".js-column-nav-menu-flyover.column-nav-flyout div{ margin-left: 5px!important; border: 1px solid #4caf50!important; color: #f1f1f1!important; border-radius: 5px!important; }",
		".attribution.txt-mute.txt-sub-antialiased.txt-ellipsis.vertical-align--baseline{ color: #4caf50!important; }",
	].join("\n");
	GM_addStyle(css);
})();
