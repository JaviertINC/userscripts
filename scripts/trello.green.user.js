// ==UserScript==
// @name         Trello | Green Style
// @version      1.3
// @description  Estilo personalizado de Trello, sin ser premium.
// @author       @JaviertINC
// @match        *://trello.com/b/*
// @include      *://*.trello.com/b/*
// @include      https://trello.com/JaviertINC
// @updateURL    https://javiertinc.github.io/userscripts/scripts/trello.green.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle("body{ color: #4caf50; } ");
    GM_addStyle("#trello-root{ background-image: unset!important; background-color: #4c4c4c; } ");
    GM_addStyle(".body-light-board-background .board-header-btn{ color: #4caf50; } ");
    GM_addStyle(".body-light-board-background .board-header-btn:hover{ color: #3dff50; } ");
    GM_addStyle(".list{ background-color: #323232!important; border: 1px solid #4caf50; } ");
    GM_addStyle("textarea,.badge-icon{ color: #fff!important; } ");
    GM_addStyle(".member{ background-color: #111; color: #4caf50!important; border: 1px solid #4caf50; } ");
    GM_addStyle(".member:hover{ background-color: #555555; color: #4caf50!important; border: 1px solid #4caf50; } ");
    GM_addStyle("._2B-WAviGr8Py3r{ opacity: 1; } ");
    GM_addStyle("._1q-xxtNvcdFBca{ display: none; } ");
    GM_addStyle(".body-light-board-background .board-header-btn .icon-sm { color: #4caf50; } ");
    GM_addStyle(".list-card { background-color: #111!important; } ");
    GM_addStyle(".list-card-title { color: #f1f1f1!important; } ");
    GM_addStyle(".open-card-composer,.open-card-composer .icon-add,.card-composer-container .icon-template-card { color: #a0a0a0; }");
    GM_addStyle(".badge.is-due-past { background-color: #ff0505; border-radius: 5px; color: #fff; font-weight: bold; }");
    GM_addStyle(".badge.is-due-now { background-color: #ff0000; border-radius: 5px; color: #fff; font-weight: bold; text-decoration: underline; } }");
    GM_addStyle(".badge.is-due-complete { background-color: #43c501; border-radius: 5px; color: #fff; font-weinght: bold; }");
    GM_addStyle(".badge.is-due-soon { background-color: #ffd100; border-radius: 5px; color: #fff; font-weinght: bold; } ");
    GM_addStyle(".body-light-board-background .board-header-btn:not(.no-edit),.body-light-board-background .board-header-btn:not(.no-edit):hover { background-color: rgba(0,0,0,.5); border: 1px solid #4caf50; border-radius: 5px; }");
    GM_addStyle(".body-custom-board-background #header { border-bottom: 1px solid #4caf50!important; } ");
    GM_addStyle(".board-menu-tab-content { background-color: #4c4c4c; }");
    GM_addStyle(".icon-lg, .icon-md, .icon-sm, a {	color: #4caf50; }");
    GM_addStyle(".icon-lg:hover, .icon-md:hover, .icon-sm:hover, a:hover { color: #3E9F26; } ");
    GM_addStyle(".board-menu-container { border-left: 1px solid #4caf50; } ");
    GM_addStyle(".board-menu-navigation-item-link-summary { color: #3c8c40; }");
    GM_addStyle(".board-menu-navigation-item-link:not(.disabled):hover .board-menu-navigation-item-link-icon { color: #3E9F26; } ");
    GM_addStyle(".quiet, .quiet a {	color: #a0a0a0; }");
    GM_addStyle(".show-more { border-radius: 5px; color: #4caf50; }");
    GM_addStyle(".action-comment { background-color: rgba(255,255,255,0.1); ");
    GM_addStyle(".js-empty-slot-upsell { display: none; } ");
    GM_addStyle("hr { background-color: #4caf5031; }");
    GM_addStyle("._24AWINHReYjNBf { background-color: #000; color: #4caf50; border: 1px solid #4caf50; }");
    GM_addStyle(".list-card-edit-title, .list-card-edit-title:focus, .list-card-edit-title:hover { background-color: #4c4c4c; padding-left: 3px; margin-bottom: 3px; }");
    GM_addStyle(".body-light-board-background .board-header { background-color: #292929!important; } ");
    GM_addStyle(".body-light-board-background .board-canvas { background-image: linear-gradient(to bottom, rgb(41, 41, 41), rgb(44, 44, 44), rgb(47, 47, 47), rgb(50, 50, 50), rgb(53, 53, 53), rgb(56, 56, 56), rgb(62, 62, 62), rgb(67, 67, 67), rgb(73, 73, 73), rgb(78, 78, 78), rgb(84, 84, 84), rgb(89, 89, 89)); } ");
	GM_addStyle("#board { margin-bottom: 0px!important; }");
	GM_addStyle(".body-light-board-background .list-wrapper.mod-add.is-idle .placeholder { color: #4caf50; border: 1px solid #4caf50; margin: 0; border-radius: 3px; }");


})();
