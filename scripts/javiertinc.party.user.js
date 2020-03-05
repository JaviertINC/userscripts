// ==UserScript==
// @name         JaviertINC | PartyAnimations
// @version      0.5
// @description  PartyAnimation
// @icon         https://raw.githubusercontent.com/JaviertINC/javiertinc.github.io/master/libs/icons/jtParty.ico
// @author       @JaviertINC
// @match        *://*.*.*/*
// @include      *://*.*/*
// @include      *://*/*
// @include      *://*.*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/javiert.party.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

	var css = [
		"yly#jtParty {",
		"	width: calc(100vw);",
		"	height: calc(100vh);",
		"	border: 30px solid red;",
		"	position: fixed;",
		"	top: 0;",
		"	left: 0;",
		"	animation: partyjaar;",
		"	animation-iteration-count: infinite;",
		"	-moz-animation-iteration-count: infinite;",
		"	-webkit-animation-iteration-count: infinite;",
		"	-o-animation-iteration-count: infinite;",
		"	animation-duration: 10s;",
		"	background-color: transparent;",
		"	z-index: 999999;",
		"}",

		"@keyframes partyjaar {",
		"	0% {border-width: 0px;}",
		"	6% {border-width: 0px;}",
		"	5% {border-width: 30px; border-color: purple;}",
		"	9% {border-width: 0px;}",
		"	10% {border-width: 30px; border-color: orange;}",
		"	14% {border-width: 0px;}",
		"	15% {border-width: 30px; border-color: red;}",
		"	19% {border-width: 0px;}",
		"	20% {border-width: 30px; border-color: #0000ff;}",
		"	24% {border-width: 0px;}",
		"	25% {border-width: 30px; border-color: #ff0093;}",
		"	29% {border-width: 0px;}",
		"	30% {border-width: 30px; border-color: #00ffcd;}",
		"	34% {border-width: 0px;}",
		"	35% {border-width: 30px; border-color: #2af33e;}",
		"	39% {border-width: 0px;}",
		"	40% {border-width: 30px; border-color: #002cff;}",
		"	44% {border-width: 0px;}",
		"	45% {border-width: 30px; border-color: #4caf50;}",
		"	49% {border-width: 0px;}",
		"	50% {border-width: 30px; border-color: #ff0000;}",
		"	54% {border-width: 0px;}",
		"	55% {border-width: 30px; border-color: #003093;}",
		"	59% {border-width: 0px;}",
		"	60% {border-width: 30px; border-color: #f180bb;}",
		"	64% {border-width: 0px;}",
		"	65% {border-width: 30px; border-color: #7f1a6e;}",
		"	69% {border-width: 0px;}",
		"	70% {border-width: 30px; border-color: #950c15;}",
		"	74% {border-width: 0px;}",
		"	75% {border-width: 30px; border-color: #00ff00;}",
		"	79% {border-width: 0px;}",
		"	80% {border-width: 30px; border-color: #00dc6e;}",
		"	84% {border-width: 0px;}",
		"	85% {border-width: 30px; border-color: #ff00ff;}",
		"	89% {border-width: 0px;}",
		"	90% {border-width: 30px; border-color: #7a777a;}",
		"	94% {border-width: 0px;}",
		"	95% {border-width: 30px; border-color: #4caf50;}",
		"	99% {border-width: 0px;}",
		"	100% {border-width: 30px; border-color: yellow;}",
		"}",
	].join("\n");

	GM_addStyle(css);

	var div = document.createElement('yly');
	div.id = 'jtParty';
	var body = document.querySelector('body');
	body.appendChild(div);

})();
