// ==UserScript==
// @name         Tecnova | AutoLogin
// @namespace    https://javiertinc.cl/userscripts
// @version      0.8
// @description  Autologin para los sistemas de Tecnova
// @homepage     https://javiertinc.cl/userscripts/script/tecnova.autologin
// @author       @JaviertINC
// @match        *://*.tecnova.cl/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/tecnova.autologin.user.js
// @icon         https://www.google.com/s2/favicons?domain=intranet.tecnova.cl
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @run-at       document-start
// ==/UserScript==


(function() {
    'use strict';

    let user = '', //Tu Usuario de Tecnova (No Email)
        pass = '', //Tu Contraseña de Tecnova

        project = '2266', //Colmena Outsorcing
        activity = '10', //Desarrollo

        //System
        app = 0;
    const url = window.location;

    $(document).ready(function(){
        //Registro de Horas | AutoLogin
        if(url.href == "https://proyectos.tecnova.cl/login.php"){
            $('form[name="form1"] input[name="usuario"]').val(user);
            $('form[name="form1"] input[name="clave"]').val(pass);
            $('form[name="form1"] input[name="Submit"]').click();
        }
        //Registro de Horas | AutoSet Project
        if(url.href == 'https://proyectos.tecnova.cl/ingmod_horarios.php?id_usuario=1235&checkTodos='){
            $('#IdProyecto').val(project);
            seleccionProyecto();
        }
        //Registro de Horas | AutoSet Activity
        if(url.href == 'https://proyectos.tecnova.cl/ingmod_horarios.php'){
            $('#IdActividad').val(activity).trigger("change");
            $('head').append('<style>.jt-time-add-semana,.jt-time-add-viernes{ color: #fff; padding: 8px; border-radius: 5px; display: inline-block; margin: 1px; cursor: pointer; width: 7%; font-weight: bold; } .jt-time-add-semana{background-color: orange; } .jt-time-add-viernes{ background-color: #4caf50; }</style>');
                $('body > form:nth-child(1) > table:nth-child(54) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(3)').append('<br/>');
            let hv = 5, hl = 8, m = 30, time;
            for(let i = 0; i <= 69; i++){
                time = "" + hv + "." + m;
                $('body > form:nth-child(1) > table:nth-child(54) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(3)').append('<span class="jt-time-add-viernes" onclick="javascript:document.getElementById(\'IdCampoHoras\').value = '+ time +'">'+ time +'</span>');
                if(m >= 59){
                    hv = parseInt(hv) + 1;
                    m = 0;
                }else{
                    m = parseInt(m) + 1;
                }
            }
            m = 30;
            $('body > form:nth-child(1) > table:nth-child(54) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(3)').append('<br/>');
            for(let i = 0; i <= 69; i++){
                time = "" + hl + "." + m;
                $('body > form:nth-child(1) > table:nth-child(54) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(3)').append('<span class="jt-time-add-semana" onclick="javascript:document.getElementById(\'IdCampoHoras\').value = '+ time +'">'+ time +'</span>');
                if(m >= 59){
                    hl = parseInt(hl) + 1;
                    m = 0;
                }else{
                    m = parseInt(m) + 1;
                }
            }
        }

        //Registro de Horas | Redirect
        if(url.href == 'https://proyectos.tecnova.cl/ing_horarios.php' && document.title == 'Mensaje'){
            url.href = 'https://proyectos.tecnova.cl/login.php';
        }


        //Correo || AutoLogin
        if(url.hostname == "webmailinterno.tecnova.cl" && document.title == 'Tecnova Webmail :: Bienvenido a Tecnova Webmail'){
            $('#rcmloginuser').val(user);
            $('#rcmloginpwd').val(pass);
            $('#rcmloginsubmit').click();
        }

        //Intranet || AutoLogin
        if(url.hostname == "intranet.tecnova.cl" && document.title == 'Login – Intranet Tecnova'){
            $('#user').val(user);
            $('#pass').val(pass);
            $('#rememberme').click();
            $('#wp-submit').click();
        }

    });

})();
