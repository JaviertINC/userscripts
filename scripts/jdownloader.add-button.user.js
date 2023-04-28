// ==UserScript==
// @name         jDownloader | Add Button
// @version      1.3.0
// @namespace    https://javiertinc.cl/userscripts
// @description  Agrega el botón "Add to jDownloader" a los enlaces de descarga de UpToBox, MediaFire, PixelDrain
// @author       @JaviertINC
// @match        *://uptobox.com/*
// @match        *://www.mediafire.com/file/*
// @match        *://www.mediafire.com/file/*/*
// @match        *://pixeldrain.com/u/*
// @updateURL    https://javiertinc.github.io/userscripts/scripts/jdownloader.add-button.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jdownloader.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Configuraciones
    const autoAddToJDownloader = true;

    // Define las variables para los valores de los atributos
    const password = 'myPassword';
    const source = window.location.href;
    const url = window.location.href;
    const domain = window.location.hostname;

    // Crea un elemento form
    const form = document.createElement('form');

    // Establece los valores de los atributos
    form.action = 'http://127.0.0.1:9666/flash/add';
    form.target = 'hidden';
    form.method = 'POST';
    form.id = 'jdownloader';

    // Crea un input type="hidden" para la contraseña
    const passwordInput = document.createElement('input');
    passwordInput.type = 'hidden';
    passwordInput.name = 'passwords';
    passwordInput.value = password;

    // Crea un input type="hidden" para la fuente
    const sourceInput = document.createElement('input');
    sourceInput.type = 'hidden';
    sourceInput.name = 'source';
    sourceInput.value = source;

    // Crea un input type="hidden" para la URL
    const urlInput = document.createElement('input');
    urlInput.type = 'hidden';
    urlInput.name = 'urls';
    urlInput.value = url;

    // Crea un input type="submit" para enviar el formulario
    const submitInput = document.createElement('input');
    submitInput.type = 'submit';
    submitInput.name = 'submit';
    submitInput.style.backgroundColor = "#4c4c4c";
    submitInput.style.border = "3px solid #4caf50";
    submitInput.style.borderRadius = "8px";
    submitInput.style.display = "block";
    submitInput.style.fontWeight = "bold";
    submitInput.style.color = "#fff";
    submitInput.style.padding = "1rem 2rem";
    submitInput.style.margin = "auto";
    submitInput.style.cursor = "pointer";
    submitInput.id = 'btnjDownloader';
    submitInput.value = 'Add to JDownloader';

    // Agrega los elementos al formulario
    form.appendChild(passwordInput);
    form.appendChild(sourceInput);
    form.appendChild(urlInput);
    form.appendChild(submitInput);

    // Agrega el formulario al documento
    switch(domain){
        case "uptobox.com":
            document.getElementById("dl").appendChild(form);
            if(autoAddToJDownloader){
                setTimeout(() => {
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    var code = 'document.getElementById("btnjDownloader").click();setTimeout(() => {window.close();},500);';
                    try {
                        s.appendChild(document.createTextNode(code));
                        document.body.appendChild(s);
                    } catch (e) {
                        s.text = code;
                        document.body.appendChild(s);
                    }
                    window.close('','_parent','');
                }, 500);
            }
            break;
        case "www.mediafire.com":
            document.querySelector('form[name="download"]').appendChild(form);
            if(autoAddToJDownloader){
                setTimeout(() => {
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    var code = 'document.getElementById("btnjDownloader").click();setTimeout(() => {window.close();},500);';
                    try {
                        s.appendChild(document.createTextNode(code));
                        document.body.appendChild(s);
                    } catch (e) {
                        s.text = code;
                        document.body.appendChild(s);
                    }
                    window.close('','_parent','');
                }, 500);
            }
            break;
        case "pixeldrain.com":
            document.querySelector('#body .file_preview_row .toolbar').appendChild(form);
            if(autoAddToJDownloader){
                setTimeout(() => {
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    var code = 'document.getElementById("btnjDownloader").click();setTimeout(() => {window.close();},500);';
                    try {
                        s.appendChild(document.createTextNode(code));
                        document.body.appendChild(s);
                    } catch (e) {
                        s.text = code;
                        document.body.appendChild(s);
                    }
                    window.close('','_parent','');
                }, 500);
            }
            break;
    }
})();
