// ==UserScript==
// @name          Aternos | DarkGreen
// @description   Una versión oscura, ayuda a cuidar tus ojos :D
// @author        @JaviertINC
// @version       2.1
// @icon          https://www.google.com/s2/favicons?domain=aternos.org
// @updateURL     https://javiertinc.github.io/aternos-antiadblock/aternos.darkgreen.user.js
// @match         *://aternos.org/*
// @run-at        document-end
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        "body,.main{ background-color: #222!important; color: #f1f1f1!important; }",
        ".header{ background-color: #4c4c4c!important; border-bottom: 1px solid #4caf50!important; }",
        ".navigation{ background-color: #4c4c4c!important; border-right: 1px solid #4caf50!important; }",
        ".navigation .item{ border-top-color: #4caf50!important; border-left-color: #333!important; border-bottom-color: #4caf50!important; }",
        ".navigation .item:last-of-type,.select.up .select-options .option, .select.up .option-category-back{ border-bottom-color: #4caf50!important; }",
        ".server-ip,.btn.btn-green,.btn.btn-blue,.btn.btn-white,.btn.btn-orange{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
        ".server-status{ border: 1px solid #4caf50!important; }",
        ".btn.btn-blue.btn-notext-mobile,.btn.btn-green.btn-small.btn-no-margin{ background-color: #666!important; border: 1px solid #4caf50!important; }",
        ".server-info-box-title{ background-color: #4c4c4c!important; border-top: 1px solid #4caf50!important; border-left: 1px solid #4caf50!important; border-right: 1px solid #4caf50!important; }",
        ".server-info-box-body,.server-tutorials{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
        ".btn.btn-white.btn-small,.friend-access-small-button.friend-access-page.btn.btn-white,.content h1,.servericon .mclist-edit,.btn.btn-white,.account-setting-input i,.account-setting-input input,.language-input-selector,.language-select{ color: #fff!important; }",
        ".navigation .item:hover,.navigation .item.active,.config-option-input{ background-color: #666!important; }",
        ".console-title{ background-color: #4c4c4c!important; border-bottom-color: #4caf50!important; }",
        ".console{ background-color: #000!important; color: #4caf50!important; border: 1px solid #4caf50!important; }",
        ".mclist-options,.config-options-file,.options-other{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; margin-bottom: 10px; padding: 18px!important; }",
        ".config-option{ border: 1px solid #4caf50!important; border-radius: 3px!important; }",
        ".config-option-output{ background-color: #000!important; color: #4caf50!important; }",
        ".number-option input,.input-number > div,.select,.select .select-options,.text-input,.account-setting-input input,.language-input-selector,.language-select{ background-color: #222!important; border: 1px solid #4caf50!important; }",
        ".select .select-options .option, .select .option-category-back{ border-top-color: #4caf50!important; }",
        ".select .select-options{ border-top: none!important; }",
        ".select .select-options .option:hover, .select .option-category-back:hover{ background-color: #4c4c4c!important; }",
        ".config-option.config-option-number[data-option\"max-players\"] .config-option-input.number-option{ height: 51px!important; }",
        ".toggle label{ background-color: #222!important; border: 1px solid #4caf50!important; padding: 2px!important;}",
        ".toggle:not(.inverted) input:not(:checked) + label::before, .toggle.inverted input:checked + label::before{ font-size: 22px!important; background-color: #d11!important; }",
        ".toggle:not(.inverted) input:checked + label::before, .toggle.inverted input:not(:checked) + label::before{ font-size: 22px!important; background-color: #4caf50!important; padding-top: 0!important; }",
        ".options-other{ margin: 0!important; border-radius: 3px!important; }",
        ".servericon{ border-color: #4caf50!important; background-color: #eee!important; }",
        ".account-setting,.account-setting,.list-input,.list-item,.world,.file-create,.file,.start-tutorials,.tutorial{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
        ".line-number{ color: #ccc!important; }",
        ".tutorial-text{ color: #fff!important; }",
        ".tutorial-text .tutorial-darker{ color: #aaa!important; }",
        ".content h2{ color: #f1f1f1!important; }",
        ".level-INFO .level-prefix, .level-NOTICE .level-prefix, .level-DEBUG .level-prefix, .level-TRACE .level-prefix{ color: #4caf50!important; }",
        ".log{ background-color: #000!important; color: #f1f1f1!important; }",
        ".software-type,a.playerlist-menu-item.blue,.start-activity,.start-activity-help .start-activity{ background-color: #4caf50!important; }",
        ".backup-quota{ background-color: #4caf50!important; }",
        ".btn-red,.server-status .status.offline{ background-color: #d11!important; }",
        ".offline .statusicon{ color: #d11!important; }",
        ".or-or span{ background-color: #4c4c4c!important; }",
        ".or-line{ border-top-color: #4caf50!important; }",
        ".go-input-group{ background-color: #666!important; color: #fff!important; border: 1px solid #4caf50!important; }",
        ".user{ border-left-color: #4caf50!important; }",
        ".status-console{ background-color: #000!important; color: #4caf50!important; }",
        ".pgb-blue .pgb-bar{ background-color: #4caf50!important; }",
        ".mclist-edit{ color: #4caf50!important; }",

	].join("\n");
    GM_addStyle(css);

})();
