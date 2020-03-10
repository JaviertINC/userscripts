// ==UserScript==
// @name          Twitter | TweetDeck DarkGreen
// @version       0.7
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
		"html.dark .focus, html.dark input:focus, html.dark select:focus, html.dark textarea:focus { border-color: #4caf50!important; box-shadow: inset 0 1px 3px rgba(20,253,20,.1),0 0 8px rgba(29,161,29,.6); }",
		"html.dark .column-title-edit-box,html.dark .app-search-input{ background-color: #5c5c5c!important; border-color: #4caf50!important; }",
		'html.dark .Button, html.dark .Button.is-visited, html.dark .Button:visited, html.dark button, html.dark button.is-visited, html.dark button:visited, html.dark input.is-visited[type="button"], html.dark input:visited[type="button"], html.dark input[type="button"]{ border-color: #4caf50!important; color: #4caf50!important; }',
		'html.dark button.btn-on-dark:focus, html.dark input[type="button"].btn-on-dark:focus {	box-shadow: 0 0 0 2px #4c4c4c,0 0 0 4px #4caf50!important; }',
		'html.dark button.btn-on-dark.is-selected, html.dark button.btn-on-dark:active, html.dark button.btn-on-dark:focus, html.dark button.btn-on-dark:hover, html.dark input[type="button"].btn-on-dark.is-selected, html.dark input[type="button"].btn-on-dark:active, html.dark input[type="button"].btn-on-dark:focus, html.dark input[type="button"].btn-on-dark:hover{ background-color: #4c4c4c!important; }',
		'html.dark .Button.is-focus, html.dark .Button:focus, html.dark button.is-focus, html.dark button:focus, html.dark input.is-focus[type="button"], html.dark input:focus[type="button"] { box-shadow: 0 0 0 2px #4c4c4c,0 0 0 4px #4caf50!important; background: #4c4c4c!important; border-color: #4caf50!important; color: #4caf50!important; }',
		".Icon.icon-compose,html.dark .column-number{color: #fff!important;}",
		"html.dark .attach-compose-buttons .tweet-button:active, html.dark .attach-compose-buttons .tweet-button:focus, html.dark .attach-compose-buttons .tweet-button:hover { border: 1px solid #4caf50 !important; box-shadow: none !important; border-right: none !important; }",
		"html.dark .column-nav-link::after { right: 5px!important; color: #f1f1f1!important; }",
		"html.dark .search-input-clear-search, html.dark .search-input-perform-search, html.dark .search-input-spinner{ top: 41%!important; }",
		"html.dark .caret-outer { border-bottom: 7px solid #4caf50!important; }",
		"html.dark .caret-inner { border-bottom: 6px solid #4caf50!important; }",
		"html.dark .popover{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
		".padding-h--12.padding-v--6.txt-bold.color-twitter-darker-gray{ color: #fff!important; font-size: 15px!important; font-weight: bold!important; }",
		"html.dark input, html.dark select, html.dark textarea { background: #5c5c5c!important; border: 1px solid #4caf50!important; }",
		"html.dark .column-nav-updates{ color: #4caf50!important; }",
		"html.dark body, body{ background-color: #4caf50!important; }",
	].join("\n");
	GM_addStyle(css);
})();
