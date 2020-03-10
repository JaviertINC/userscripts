// ==UserScript==
// @name          Twitter | TweetDeck DarkGreen
// @version       0.1
// @description	  Twitter - TweetDeck DarkGreen Style
// @icon          https://www.google.com/s2/favicons?domain=tweetdeck.twitter.com
// @author        @JaviertINC
// @include       *://tweetdeck.twitter.com/*
// @include       *://tweetdeck.twitter.com/*JaviertINC
// @updateURL     https://javiertinc.github.io/userscripts/scripts/twitter.tweetdeck.user.js
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==
(function() {
	var css = [
		"html.dark .app-header,html.dark .column-nav-item,html.dark .app-title{ background-color: #4c4c4c!important; }",
		"html.dark body::before{ background-color: #4caf50!important; background-image: unset!important; }",
		'html.dark .Button.btn-fav.s-favorited, html.dark .Button.btn-fav.s-favorited:visited, html.dark .Button.Button--primary, html.dark .Button.Button--primary:visited, html.dark .ButtonGroup--primary > .Button, html.dark .ButtonGroup--primary > .Button:visited, html.dark .ButtonGroup--primary > .ButtonGroup > .Button, html.dark .ButtonGroup--primary > .ButtonGroup > .Button:visited, html.dark .ButtonGroup--primary > .ButtonGroup > button, html.dark .ButtonGroup--primary > .ButtonGroup > button:visited, html.dark .ButtonGroup--primary > .ButtonGroup > input:visited[type="button"], html.dark .ButtonGroup--primary > .ButtonGroup > input[type="button"], html.dark .ButtonGroup--primary > button, html.dark .ButtonGroup--primary > button:visited, html.dark .ButtonGroup--primary > input:visited[type="button"], html.dark .ButtonGroup--primary > input[type="button"], html.dark .s-following .follow-btn:hover .Button.following-text, html.dark .s-following .follow-btn:hover .Button.following-text:visited, html.dark .s-following .follow-btn:hover button.following-text, html.dark .s-following .follow-btn:hover button.following-text:visited, html.dark .s-following .follow-btn:hover input.following-text:visited[type="button"], html.dark .s-following .follow-btn:hover input.following-text[type="button"], html.dark button.btn-fav.s-favorited, html.dark button.btn-fav.s-favorited:visited, html.dark button.Button--primary, html.dark button.Button--primary:visited, html.dark input.btn-fav.s-favorited:visited[type="button"], html.dark input.btn-fav.s-favorited[type="button"], html.dark input.Button--primary:visited[type="button"], html.dark input.Button--primary[type="button"]{background-color: #4caf50!important; border-color: #0f0!important; }',
		"html.dark .app-search-fake{ color: #4caf50!important; border-color: #4caf50!important; }",
		"html.dark .app-nav-link{color: #4caf50!important; }",
		"html.dark .app-nav-link{color: #008000!important; text-decoration: underline!important; }",
	].join("\n");
	GM_addStyle(css);
})();
