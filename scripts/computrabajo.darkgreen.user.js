// ==UserScript==
// @name         CompuTrabajo | DarkGreen
// @version      0.3
// @description  Una versión oscura, ayuda a cuidar tus ojos :D
// @icon         https://www.google.com/s2/favicons?domain=computrabajo.cl
// @author       @JaviertINC
// @match        *://www.computrabajo.cl/*
// @include      *://candidato.computrabajo.cl/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/computrabajo.darkgreen.user.js
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

	var css = [
        "body{ background-color: #242424!important; color: #f1f1f1!important;}",
        ".m_web{ background-color: #4c4c4c!important; border-bottom: 1px solid #4caf50!important; }",
        ".nav.activo, .nav.activo:focus, .nav.activo:hover{ background-color: #4caf50!important; color: #fff!important; border: 0!important;}",
        ".nav:hover{ background-color: rgba(255,255,255,.2)!important; }",
        ".nav.new span{ background-color: #4caf50!important; }",
        ".nav.new span::before{ border-bottom: 5px solid #4caf50!important; }",
        ".nav a{ color: #fff!important; }",
        "a{ color: #4caf50!important; }",
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
        ".paginas ul{ border-color: #4caf50!important; }",
        ".paginas li{ background-color: #4c4c4c!important; border-color: #4caf50!important; }",
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
        ".submit_n{ background: unset!important; background-color: #4caf50!important; }",
        ".box_filtrar .deshacer{ background-color: #444!important; color: #fff!important; font-weight: bold!important; }",
        ".box_filtrar_sel{ background-color: #333!important; }",
        ".box_filtrar_sel li{ border-bottom-color: #4caf50!important; padding: 0!important; }",
        ".box_filtrar_sel li a.buildLink{ padding: .8rem .5rem!important; margin: 0!important; display: block!important; }",
        ".box_filtrar ul{ max-height: 200px!important; background-color: #444!important; }",
        ".iC img{ box-shadow: 0 0 13px #4caf50!important; }",
        ".box_filtrar_ch{ padding: 0!important; }",
        ".box_filtrar_t{ margin-bottom: 0!important; }",
    ].join("\n");
	GM_addStyle(css);

})();