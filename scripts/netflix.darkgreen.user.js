// ==UserScript==
// @name          Netflix | DarkGreen
// @description   Una versión oscura, cuida tus ojos :D
// @author        @JaviertINC
// @version       0.8
// @icon          https://www.google.com/s2/favicons?domain=netflix.com
// @updateURL     https://javiertinc.github.io/userscripts/scripts/netflix.darkgreen.user.js
// @match         *://www.netflix.com/*
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var main_color = "#4caf50";
    var bg_color = "#4c4c4c";
    var bg2_color = "#242424";
    var bg3_color = "#666";
    var title_color = "#fff";
    var subtitle = "#f1f1f1";
    var bg_input = "#666";

	var css = [
		".pinning-header .main-header .logo,#hd .logo,.episodeLockup .episodePlay:hover .play, .episodeLockup .episodePlay:focus .play,.account-section-link,.profile-hub h3,.profile-hub .profile-change{ color:  "+ main_color +"!important; }",
        ".progress-completed,.jawBoneContainer .menu li.current span{ background-color: "+ main_color +"!important; }",
        "h1{ color: "+ title_color +"!important; }",
        ".nf-flat-button-primary,.nf-flat-button,.nf-svg-button-wrapper .nf-svg-button.simpleround,.nfDropDown.theme-lakira .label,.service-code{ background-color: "+ bg_color +"!important; border-color: "+ main_color +"!important; color: "+ title_color +"!important;}",
        ".bob-card-adult .bob-play-hitzone:hover ~ .bob-overview-wrapper .svg-icon-play-with-ring,.bob-card-adult .bob-play-hitzone:hover ~ .bob-jawbone-chevron{ color: "+ main_color +"!important; }",
        ".svg-icon.top-10-rank{ fill: "+ bg_color +"!important; }",
        "path[fill=\"#231f20\"],circle[fill=\"#231f20\"]{ fill: "+ main_color +"!important; }",
        "path[stroke=\"#595959\"]{ stroke: "+ main_color +"!important; }",
        ".member-header{ background-color: "+ bg_color +"!important; border-bottom: 1px solid "+ main_color +"!important; }",
        ".referral-page__sharing,.referral-page-steps__section{ background-color: "+ bg_color +"!important; }",
        "html, body{ background-color: "+ bg2_color +"!important; }",
        ".responsive-account-container,.profile-hub h4{ color: "+ subtitle +"!important; }",
        ".referralCode__input{ background-color: "+ bg_input +"!important; }",
        ".footer-divider{ border-color: "+ main_color +"!important; }",
        ".site-footer-wrapper{ background-color: "+ bg_color +"!important; color: "+ subtitle +"!important; }",
        ".footer-top-a,.footer-link,.account-section-heading{ color: "+ subtitle +"!important; }",
        ".btn.account-cancel-button{ background-image: unset!important; background-color: "+ bg_color+"!important; color: #f00!important; border: 1px solid #f00!important; }",
        ".btn.account-cancel-button:hover,.service-code:hover{ background-color: "+ bg3_color +"!important; }",


	].join("\n");
	GM_addStyle(css);

})();
