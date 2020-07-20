// ==UserScript==
// @name         CompuTrabajo | DarkGreen
// @namespace    https://javiertinc.cl/userscripts
// @version      1.1
// @description  Una versión oscura, ayuda a cuidar tus ojos :D
// @homepage     https://javiertinc.cl/userscripts/script/computrabajo.darkgreen
// @author       @JaviertINC
// @match        *://www.computrabajo.cl/*
// @include      *://candidato.computrabajo.cl/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/computrabajo.darkgreen.user.js
// @icon         https://www.google.com/s2/favicons?domain=computrabajo.cl
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    var ads = false;

	var css = [
        "html,body{ background-color: #242424!important; color: #f1f1f1!important;}",

        ".m_web{ background-color: #4c4c4c!important; border-bottom: 1px solid #4caf50!important; }",
        ".cS{ background-color: #444!important; }",
        ".logo_svg h1{ color: #fff!important; }",

        ".nav.activo, .nav.activo:focus, .nav.activo:hover{ background-color: #4caf50!important; color: #fff!important; border: 0!important;}",
        ".nav:hover{ background-color: rgba(255,255,255,.2)!important; }",
        ".nav.new span{ background-color: #4caf50!important; }",
        ".nav.new span::before{ border-bottom: 5px solid #4caf50!important; }",
        ".nav a{ color: #fff!important; }",

        ".menu_right .box_cand_sub{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; top: 47px!important; border-top: none!important; }",
        ".triangulo_inf_login{ background: unset!important; }",
        ".menu_right .box_cand_sub .content_subnav .icon{ border-color: #4caf50!important; }",
        ".menu_right .box_cand_sub .subnav_btn{ background-color: #4caf50!important; color: #fff!important; padding: .5rem 1rem!important; display: flex!important; border-radius: 0!important; -webkit-border-radius: 0!important; -moz-border-radius: 0!important; }",
        ".menu_right .box_cand_sub .subnav_btn span:not(.subnav_icon){ margin-top: .4rem !important; padding: 0 .3rem !important; display: block !important; }",
        ".menu_right .box_cand_sub .subnav_btn span.subnav_icon{ margin-top: .5rem!important; }",
        ".menu_right .box_cand_sub .content_subnav .links_cand{ text-align: unset!important; }",
        ".menu_right .box_cand_sub .content_subnav .links_cand li{ text-align: left!important; display: block!important; }",
        ".menu_right .box_cand_sub .content_subnav .links_cand li:nth-child(1){ text-align: center!important; }",
        ".menu_right .box_cand_sub .content_subnav .links_cand li a{ display: block!important; padding: .4rem 1rem!important; }",
        ".menu_right .box_cand_sub .content_subnav .links_cand li a:hover,.menu_right .box_cand_sub .content_subnav .links_cand li a:focus{ background-color: rgba(255,255,255,.1)!important; }",

        "a{ color: #4caf50!important; }",
        ".submit_n{ background: unset!important; background-color: #4caf50!important; color: #fff!important; }",
        ".breadcrumb .breadcrumb .active{ color: #f1f1f1!important; }",

        ".buscador, .companies_logos, .offers_insc, .offers_suggest, .publi_apli, .publi_banner_lateral, .user_info, .visitas_perfil{ background-color: #4c4c4c!important; color: #f1f1f1!important; border-color: #4caf50!important; }",
        ".ccp_menu{ background-color: #444!important; border-bottom: 5px solid #4caf50!important; }",
        ".ccp_menu li.selec .ccp_flecha, .ccp_menu li:hover .ccp_flecha{ background: unset!important; }",
        ".ccp_menu li.selec{ background-color: #4caf50!important; }",
        ".ccp_menu li:not(.selec):hover{ background-color: rgba(255,255,255,.1)!important; }",
        ".ccp_menu li{ border-right-color: #666!important; }",
        ".ccp_menu ul{ border-left-color: #666!important; }",
        ".ccp_menu li a{ color: #fff!important; }",

        ".config .bx{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
        ".formulario .forms{ background-color: #4c4c4c!important; }",
        ".forms{ background-color: #4c4c4c!important; border-color: #4caf50!important; }",
        ".forms h2{ border-top: unset!important; border-bottom-color: #4caf50!important; color: #fff!important; }",
        "input, select, textarea{ background-color: #333!important; border: 1px solid #4caf50!important; color: #fff!important; }",
        ".fields p, .form_inputs p{ color: #ccc!important; }",
        ".forms p span{ color: #fc0000!important; }",
        ".formulario .experiencia_texto p span{ color: #ccc!important; }",
        ".fields ul:not(.autocomplete):not(.list) li, .form_inputs ul:not(.autocomplete):not(.list) li{ background-color: #4caf50!important; }",
        ".fields ul:not(.autocomplete):not(.list) li a, .form_inputs ul:not(.autocomplete):not(.list) li a{ color: #fff!important; }",
        "#DetalleExperiencias, #DetalleFormaciones{ background-color: #4c4c4c!important; }",
        ".forms_info{ background-color: #666!important; border-color: #4caf50!important; }",
        ".forms_info2 p, .forms_info p{ color: #fff!important; }",
        ".experiencia_texto.new .experiencia_title{ border-bottom-color: #4caf50!important; }",
        ".formulario footer{ border-top-color: #4caf50!important; }",
        ".home_ac_v2 .buscador .input_select, .home_ac_v2 .buscador .input_text{ border: none!important; background: unset!important; }",
        ".filter.box{ width: unset!important; }",

        ".block_cand_offers .user_info{ border: 1px solid #4caf50!important; }",
        ".block_cand_offers .img{ background-color: #4c4c4c!important; border: none!important; border-radius: 2px 0 0 2px!important; -webkit-border-radius: 2px 0 0 2px!important; -moz-border-radius: 2px 0 0 2px!important; }",
        ".cv_completed.box_green .cv_user_complete{ background-color: #4caf50!important; }",
        ".cv_completed .cv_100{ background-color: #343434!important; }",
        ".cv_completed .txt,.cv_completed.box_green .txt + span{ color: #fff!important; }",
        ".block_cand_offers .info .block_link{ background-color: #4c4c4c!important; border: none!important; border-left: 1px solid #3c3c3c!important; color: #fff!important; border-radius: 0 0 1px 0!important; -webkit-border-radius: 0 0 1px 0!important; -moz-border-radius: 0 0 1px 0!important; }",
        ".block_cand_offers .info{ background-color: rgba(0,0,0,.2)!important; }",
        ".block_cand_offers .info h1{ color: #fff!important; }",

        ".mis_aplicaciones{ background-color: #4c4c4c!important; border-color: #4caf50!important; }",
        ".mis_aplicaciones:hover{ border-radius: 3px 0 3px 3px!important; }",
        ".mis_aplicaciones .acciones{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; border-left: none!important; right: -42px!important; border-radius: 0 5px 5px 0!important; }",
        ".progress li{ background-color: #666!important; border-color: #4caf50!important; color: #fff!important; }",
        ".progress li .triangulo{ border-left-color: #666!important; right: -11.7px!important; }",
        ".progress .completa{ background-color: #444!important; }",
        ".progress .completa .triangulo{ border-left-color: #444!important; right: -11.7px!important; }",
        ".progress .en_progreso::before, .progress .finalista::before, .progress .leida::before { border-left-color: #4caf50!important; }",
        ".progress .aplicada.activa,.progress .leida.activa,.progress .en_progreso.activa,.progress .finalista.activa{ background-color: #4caf50!important; }",
        ".progress .aplicada.activa .triangulo,.progress .leida.activa .triangulo,.progress .en_progreso.activa .triangulo,.progress .finalista.activa .triangulo{ border-left-color: #4caf50!important; }",
        ".progress .finalizado_txt{ color: #fff!important; background-color: #4c4c4caa!important; margin: 0!important; padding: .9rem!important;  }",

        ".alert .bx{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
        ".alert .form{ background-color: #5c5c5c!important; border-color: #4caf50!important; }",

        ".content_popup .c_t, .t_c.container .c_t{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
        ".content_popup .c_t p, .t_c.container .c_t p{ color: #f1f1f1!important; }",

        ".sC{ background-color: rgba(40, 40, 40, .8)!important; }",
        ".bS .submit_n{ border-color: #4caf50!important; }",

        ".t_log{ background-color: #4c4c4c!important; color: #fff!important; border-top: 1px solid #4caf50!important; }",
        ".bxS{ background-color: #373737!important; }",
        ".iS a h2, .iS a h3{ color: #fff!important; }",

        ".bCF{ background-color: #4c4c4c!important; }",

        ".box, .boxn{ background-color: #4c4c4c!important; border-color: #4caf50!important; }",
        ".bContact ul{ background-color: rgba(255,255,255,.1)!important; border-color: #4caf50!important; color: #fff!important; font-weight: bold!important; box-shadow: unset!important; -webkit-box-shadow: unset!important; -moz-box-shadow: unset!important; }",
        ".ins_attach_cv{ background-color: #4c4c4c!important; border-top-color: #4caf50!important; border-bottom-color: #4caf50!important; }",
        ".ins_attach_cv label{ background-color: #555!important; border-color: #4caf50!important; }",

        ".lO.parrilla_oferta{ width: 80%!important; padding: 0!important; }",
        ".box_order_by{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
        ".box_order_by p{ color: #f1f1f1!important; padding: 10px 15px!important; }",
        ".box_order_by li a{ padding: 7px 15px 8px!important; }",
        ".box_order_by .selected, .box_order_by .selected:hover{ background-color: #4caf50!important; }",
        ".box_order_by li:hover, .box_order_by li:focus{ background-color: rgba(255,255,255,.2)!important; }",
        ".box_order_by li span{ color: #f1f1f1!important; }",
        ".box_order_by .selected span, .box_order_by li:hover span{ color: #fff!important; }",
        ".link_ofertas{ background-color: #4caf50!important; }",
        ".link_ofertas:hover,.link_ofertas:focus{ background-color: #5dbf61!important; }",
        ".pg_grid .before.only, .pg_grid .next.only{ border-color: #4caf50!important; }",
        ".pg_grid .before, .pg_grid .next{ background-color: #4c4c4c!important; }",
        ".lU,.lU::after{ background-color: #4caf50!important; }",
        ".lU span{ font-weight: bold!important; }",
        ".oU{ border-color: #4caf50!important; }",
        ".adG, .bRS{ color: #f1f1f1!important; background-color: #4c4c4c!important; border-color: #4caf50!important; }",
        ".oD{ background-color: #5d5d5d!important; }",
        ".bRS h2 a{ color: #fff!important; font-weight: bold; }",
        ".lT, .lT a, .lT a:hover,.dO{ color: #ddd!important; }",

        ".paginas{ margin-bottom: 1rem!important; }",
        ".paginas ul{ border-color: #4caf50!important; }",
        ".paginas li,.paginas ul li a{ background-color: #4c4c4c!important; border-color: #4caf50!important; }",
        ".paginas li:hover a,.paginas li:focus a{ background-color: #5c5c5c!important; }",
        ".paginas a,.paginas a:hover,.paginas a:focus{ color: #fff!important; }",
        ".paginas .active,.paginas .active:hover,.paginas .active:focus,.paginas .active a,.paginas .active:hover a,.paginas .active:focus a{ background-color: #4caf50!important; }",

        ".box_filtrar{ border-color: #4caf50!important; }",
        ".box_filtro{ background-color: #4c4c4c!important; border-top-left-radius: 3px!important; border-top-right-radius: 3px!important; border-bottom: 1px solid #4caf50!important; }",
        ".box_filtrar_t2 .icon + *, .box_filtrar_t .icon + *{ color: #fff!important; }",
        ".box_filtrar_t, .box_filtrar_t2{ background-color: #5d5d5d!important; }",
        ".box_filtrar_cl input,.box_filtrar_cl .submit_n{ margin: .4rem 2.5%!important; width: 95%!important; }",
        ".box_filtrar_cl input[type=\"text\"]{ background-color: #666!important; color: #fff!important; border: 1px solid #4caf50!important; }",
        ".box_filtrar_t{ border-top: 7px solid #4caf50!important; }",
        ".box_filtrar_cl{ background-color: #333!important; padding: 0!important; }",
        ".box_filtrar .deshacer{ background-color: #444!important; color: #fff!important; font-weight: bold!important; }",
        ".box_filtrar_sel{ background-color: #333!important; }",
        ".box_filtrar_sel li{ border-bottom-color: #4caf50!important; padding: 0!important; }",
        ".box_filtrar_sel li a.buildLink{ padding: .8rem .5rem!important; margin: 0!important; display: block!important; }",
        ".box_filtrar ul{ max-height: 200px!important; background-color: #444!important; }",
        ".iC img{ box-shadow: 0 0 13px #4caf50!important; }",
        ".box_filtrar_ch{ padding: 0!important; }",
        ".box_filtrar_t{ margin-bottom: 0!important; }",

        ".boxWhite{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; padding: 0!important; }",
        ".menuV.dTabs, .menuV{ background-color: #4c4c4c!important;  border-bottom: 5px solid #4caf50!important; }",
        ".menuV.dTabs .tabs a,.menuV .tabs a{ color: #fff!important; border: none!important; padding: .7rem 1rem!important; font-weight: bold!important; }",
        ".menuV.dTabs .tabs a:hover,.menuV.dTabs .tabs a:focus,.menuV .tabs a:hover,.menuV .tabs a:focus{ background-color: rgba(255,255,255,.2)!important; }",
        ".menuV.dTabs .tabs a.selec,.menuV .tabs a.selec{ background-color: #4caf50!important; border-bottom: none!important; }",
        ".menuV.dTabs.fixed h2{ line-height: 1.2rem!important; }",
        ".menuV .tabs a span{ color: #fff!important; }",
        ".menuV .tabs a::before{ height: 0!important; background: unset!important; }",
        ".menuV .tabs .selec::after, .menuV .tabs a:hover::after { height: unset!important; background: unset!important; }",
        ".boxWhite h1.m0{ padding-top: 1rem!important;}",
        ".fc80,.datePosted{ color: #ddd!important; }",
        ".boxWhite ul.m0{ padding: 1rem!important; }",
        ".boxWhite.fl.w_100.ocultar_mvl.p30 h2{ padding-top: 1rem!important; padding-left: 1rem!important; }",
        ".boxWhite.fl.w_100.ocultar_mvl.p30 ul.m0{ padding-top: 0rem!important; padding-left: 1rem!important; }",
        ".menuV.dTabs.fixed .fixed_btn .submit_n{ position: absolute!important; top: 2rem!important; right: 3rem!important; color: #fff!important; }",
        ".btn_postular{ margin: 1rem auto!important; }",
        ".boxWhite.fl.w_100.links_search.mt20.mb20.ocultar_mvl{ padding: 1rem!important; }",
        ".boxWhite.fl.w_100.mb20.mt20.mt10_r.mb0_r{ padding: 1rem!important; }",

        ".boxWhite.fl.w_100 .fl100{ padding: 1rem!important; }",
        ".box_offer{ background-color: #4c4c4c!important; border-color: #4caf50!important; }",
        ".comparativa_inscritos .legend_graph{ background-color: #4c4c4c!important; border-left-color: #4caf50!important; }",

        ".box_i ul{ background-color: #4c4c4c!important; }",
        ".btn_scroll_mobile{ background-color: #4caf50!important; box-shadow: unset!important; -webkit-box-shadow: unset!important; -moz-box-shadow: unset!important; }",
        ".btn_scroll_mobile::before { border-bottom-color: #4caf50!important; border-right: 1px solid #4caf50!important; }",
        ".btn_scroll_mobile #it-fixed-print{ color: #fff!important; font-weight: bold!important; }",
        ".btn_scroll_mobile .submit_n{ background-color: #4c4c4c!important; border: unset!important; }",
        ".box_i ul .info_pub{ color: #ccc!important; }",
        ".box_i ul .info_pub span{ color: #fff!important; }",
        ".box_r_titulo{ border-bottom-color: #4caf50!important; }",
        ".orange .submit_n{ border-color: #4caf50!important; }",
        ".btnwhite.no_hover, .submit_wh2.no_hover{ color: #fff!important; }",
        ".btnwhite, .submit_wh2{ text-shadow: unset!important; }",
        ".empresa_facet .infoEmpVal .text_empresa h1{ color: #fff!important; }",
        ".tooltip_sello_icon{ color: #4caf50!important; }",

        ".b_i_r, .b_t_c{ background-color: #4c4c4c!important; border-color: #4caf50!important; color: #f1f1f1!important; }",
        ".offers_insc li > span, .offers_insc li a{ color: #fff!important; }",
        ".offers_insc li a span{ color: #4caf50!important; }",
        ".offers_suggest li span{ color: #ccc!important; }",
        ".btnwhite, .submit_wh2{ background: unset!important; background-color: #4caf50!important; color: #fff!important; border-color: #4caf50!important; }",
        ".btnwhite:not(.no_hover):hover, .submit_wh2:not(.no_hover):hover{ background: unset!important; background-color: #5dbf61!important; color: #fff!important; }",

        ".b_c_r .b_t_pdf, .b_c_r .b_v_t, .b_c_r .c_b{ background-color: #4c4c4c!important; border-color: #4caf50!important; color: #f1f1f1!important; }",
        ".b_c_r .c_q .explain{ background-color: #4c4c4c!important; }",
        ".explain ul li{ background-color: #666!important; }",
        ".b_c_r .title{ color: #fff!important; }",
        ".rTest{ background-color: #4c4c4c!important; border-color: #4caf50!important; }",

        ".lL{ background-color: #242424!important; }",
        ".lS{ margin: 0 0 40px!important; padding: 1rem 0!important; background-color: #4c4c4c!important; border: 1px solid #4caf50!important; }",
        ".sL{ border-bottom-color: #4caf50!important; color: #fff!important; }",
        ".sL .active,.sL .active:hover,.sL .active:focus{ background-color: #4caf50!important; border: 1px solid #4caf50!important; color: #fff!important; }",
        ".sL li{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; color: #fff!important; }",
        ".sL li:hover,.sL li:focus{ background-color: #5d5d5d!important; }",

        "body #pop-up-webpush-sub{ background-color: #4c4c4c!important; border: 1px solid #4caf50!important; top: 2rem!important; }",
        "body #pop-up-webpush-sub #webpush_subscribe_ok{  background: unset!important; background-color: #4caf50!important; color: #fff!important; }",

        ".footer_countries{ border-top-color: #4caf50!important; background-color: #333!important;  }",
        ".footer_countries ul li a{ color: #fff!important; }",

        ".socialicon .twitter:hover, .socialicon .twitter:focus,.socialicon .facebook:hover,.socialicon .facebook:focus{ background-color: #4caf50!important; }",

        ".footer_c{ border-top-color: #4caf50!important; background-color: #4c4c4c!important; }",
        ".info_footer{ color: #f1f1f1!important; }",
        ".last_footer{ color: #f1f1f1!important; }",
    ].join("\n");
	GM_addStyle(css);
    if(window.location.href == "https://www.computrabajo.cl/"){
        document.getElementsByClassName("footer_countries")[0].setAttribute("data-original","");
        document.getElementsByClassName("footer_countries")[0].setAttribute("style","");
    }

    if(window.location.href == "https://candidato.computrabajo.cl/Candidate/ofertas-de-trabajo/"){
        window.location.href = "https://www.computrabajo.cl/ofertas-de-trabajo/";
    }

    if(!ads){
        if(document.getElementById("logosSection") === true){
            document.getElementById("logosSection").remove();
        }
        if(document.getElementById("divPromoteAppResponsive") === true){
            document.getElementById("divPromoteAppResponsive").remove();
        }
        /* */
        var add_css = [
            ".publi_apli{ display: none!important; }",
            ".publi_logos{ display: none!important; }",
        ].join("\n");
        GM_addStyle(add_css);
        /* */

    }

})();