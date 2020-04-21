// ==UserScript==
// @name          MercadoLibre Chile | DarkGreen
// @description   Una versión oscura, cuida tus ojos :D
// @author        @JaviertINC
// @version       1.2
// @icon          https://www.google.com/s2/favicons?domain=mercadolibre.com
// @updateURL     https://javiertinc.github.io/userscripts/scripts/mercadolibre.darkgreen.user.js
// @match         https://*.mercadolibre.cl/*
// @run-at        document-start
// @grant         GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        "body,main,main > div{ background-color: #242424!important; }",
		".nav-header{ background-color: #4c4c4c!important; border-bottom: 1px solid #4caf50!important;  }",
        ".nav-bounds.nav-bounds-with-cp .nav-menu-cp.nav-menu-cp-logged .nav-menu-cp-send, .nav-menu-item a, .nav-menu-item a:link, .nav-menu-item a:visited,#nav-header-menu a,.quantity-results{ color: #f1f1f1!important; }",
        ".nav-bounds.nav-bounds-with-cp .nav-menu-cp .nav-menu-link-cp{ color: #d5d5d5!important; }",
        ".nav-bounds.nav-bounds-with-cp .nav-menu-cp.nav-menu-cp-logged:hover {	border-color: transparent!important; }",
        ".nav-menu-item:first-child > a:link, .nav-menu-item:first-child > a:visited,#nav-header-menu i::before,#nav-header-menu .nav-header-username-chevron, #nav-header-menu > a.option-bookmarks .bookmarks-text::after,.nav-menu-item .nav-menu-categories-link::after{color: #fff !important; }",
        ".breadcrumb__title,.dt-title,.view-options dt{ color: #4caf50!important; }",
        ".andes-pagination__button.andes-pagination__button--current .andes-pagination__link{ font-weight: bold; color: #4caf50!important; background-color: #5f5f5f!important; border: 2px solid #4caf50!important; height: 36px!important; }",
        ".andes-pagination__button .andes-pagination__link{color: #f1f1f1!important; background-color: #4c4c4c!important; border: 1px solid #4caf50!important; height: 36px!important; }",
        ".andes-pagination__button:hover .andes-pagination__link{ color: #4caf50!important; background-color: #5f5f5f!important; border: 2px solid #4caf50!important; height: 36px!important; }",
        ".andes-pagination__arrow{ border-color: #f1f1f1!important; }",
        ".section-header h1,.ui-item__title{ color: #f1f1f1!important; }",
        ".section-header .ui-link, .section-header a,.ui-item__price,.andes-modal--loose .andes-modal-dialog__button-close::after, .andes-modal--loose .andes-modal-dialog__button-close::before{ color: #4caf50!important; }",
        ".official-stores{ background-image: linear-gradient(0,#111,#242424 100%)!important; }",
        ".ui-item{ border: 1px solid #4caf50!important; background-color: #4c4c4c!important; }",
        ".ui-item__attributes, .ui-item__installments{ color: #888!important; font-size: .8rem!important; }",
        ".carousel-container .next-button::after, .carousel-container .next-button::before, .carousel-container .prev-button::after, .carousel-container .prev-button::before,.categories .slick-dots li.slick-active button{ background-color: #4caf50!important; }",
        ".carousel-container .next-button, .carousel-container .prev-button,.ui-item__bookmark,.ui-card{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
        ".ui-item__bookmark-icon{ fill: #4caf50!important; }",
        ".ui-dropdown__link .ui-dropdown__indicator .ui-icon{ stroke: #4caf50!important; }",
        ".official-stores-slide-action a,.official-stores-slide-title,.collections .cb-title,.myml-nav__section-title{ color: #f1f1f1!important; }",
        ".ui-card:hover .official-stores-slide-action a,.collections .ui-dropdown__link,.collection .main-item .main-item-title,.categories .icon .nc-icon{ color: #4caf50!important; }",
        ".official-stores-slide-item{ border-color: #4caf50!important; }",
        ".collection .main-item .main-item-label{ color: #ddd!important; }",
        ".ui-card.foot-main{ border: none!important; }",
        ".recommendations .highlight-seed.trigger-item__wrapper h2, .recommendations .highlight-seeds .trigger-item__wrapper h2,button.nav-search-btn, button.nav-search-btn:focus{ color: #fff!important; }",
        ".categories .category{ background-color: #4c4c4c!important; color: #f1f1f1!important; }",
        ".categories .category:hover { background-color: #5d5d5d!important; }",
        ".categories .category, .categories .filler{ outline-color: #4caf50!important; }",
        ".categories .category + .category:hover{ bottom: unset!important; }",
        "input[type=\"text\"].nav-search-input, input[type=\"search\"].nav-search-input{ background-color: #666!important; border: 1px solid #4caf50!important; color: #fff!important; }",
        "::placeholder{ color: #aaa!important; }",
        "button.nav-search-btn, button.nav-search-btn:focus{ background-color: #666!important; border: 1px solid #4caf50!important; border-left: none!important;}",
        ".andes-modal-dialog{ background-color: #4c4c4c!important; }",
        ".andes-modal--loose .andes-modal-dialog__header-title,.payment-wrapper,.myml-nav__section--toggle .myml-nav__user-permalink,.myml-title{ color: #fff!important; }",
        ".myml-nav{ background-color: #4c4c4c!important; border-right: 1px solid #4caf50!important; }",
        ".menu-myml-ads{ display: none!important; }",
        ".app-wrapper--menu-expanded.app-wrapper--menu-expanded-static [class^=\"myml-nav__ham\"]{ background-color: #fff!important; }",
        "a, a:active, a:link,.purchases-list-container .ch-pagination li a:visited, .purchases-list-container .myml-ui-item__name a:visited, .purchases-list-container .myml-ui-list-item__secondary-action a:visited, .purchases-list-container .purchases-list__message-action a:visited{ color: #4caf50!important; }",
        "a:hover{ color: #3b9e40!important; }",
        ".andes-breadcrumb .andes-breadcrumb__label,.purchases-title,.purchase-status__title{ color: #f1f1f1!important; }",
        ".ch-btn, .ch-btn:focus, .ch-btn:visited, a.ch-btn{ background-image: unset!important; background-color: #4c4c4c!important; border: 1px solid #4caf50!important; color: #fff!important; }",
        ".ch-btn:hover, a.ch-btn:hover{ background-image: unset!important; background-color: #666!important; }",
        ".ui-badge, .ui-box--lite{ background-color: #4c4c4c!important; border-color: #4caf50!important; border-radius: 10px; }",
        ".myml-ui-item__description,.myml-ui-user-info{ color: #ccc!important; }",
        ".purchase-vpp-status__title,.ch-price,.recommendations-component-wrapper .recommendations-title,.nav-footer-copyright,body,.nav-header-username,#nav-header-menu .user-menu .user-menu__user-badge-title,#nav-header-menu [for=\"nav-header-user-switch\"]::after{ color: #fff!important; }",
        ".nav-footer, [for=\"nav-footer-access-switch\"],.nav-footer a.nav-footer-downloadapp,.review-wrapper,#nav-header-menu .user-menu{ background-color: #4c4c4c!important; border-color: #4caf50!important; }",
        "#nav-header-menu .user-menu .user-menu__user-info-outer-container{ border-color: #4caf50!important; }",
        ".user-menu__user-badge-email{ color: #4caf50!important; }",
        "#nav-header-menu .user-menu .ui-button--primary,#nav-header-menu .user-menu,.payment-data .payment-data-container,.ui-button--primary,.item__result-container{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
        "#nav-header-menu .user-menu .user-menu__loyalty-components,#nav-header-menu .user-menu .user-menu__chevron,.payment-data-section-leading, .payment-data-section-trailing{ border-color: transparent!important;}",
        ".base[stroke=\"#eee\"]{ stroke: #222!important;  }",
        "#nav-header-menu .user-menu .user-menu__avatar-text{ background-color: #4caf50!important; box-shadow: unset!important; }",
        "#nav-header-menu .user-menu .user-menu__shortcuts a:hover{ background-color: #4caf50!important; }",
        ".ui-button--primary,.itemList .price-info .price,.mfOrders .rightControls,.ui-recommendations__header__title{ color: #fff!important; }",
        ".ui-checkbox__mimic::before{ content: ' '!important; background-color: #666!important; border: 1px solid #4caf50!important; }",
        ".outline-section,.carousel-common__section{ background-color: #111!important; }",

	].join("\n");
	GM_addStyle(css);

})();
