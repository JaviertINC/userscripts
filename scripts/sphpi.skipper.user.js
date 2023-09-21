// ==UserScript==
// @name         s.php?i=* | Skipper
// @version      0.2
// @namespace    https://javiertinc.cl/userscripts
// @description  Saltando la publicidaaaaaaaaa
// @author       @JaviertINC
// @match        */s.php?i=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let url = window.location.href;
    let code = url.split("s.php?i=")[1];
    let enc_url = atob(atob(atob(atob(atob(code)))));

    let dec_url = affineDecipher(enc_url);
    console.log('URL: ', dec_url);

    window.location.href = cleanURL(dec_url);

    function affineDecipher(cipherText) {
        var plainText = "";
        var a = 1;
        var b = 13;
        var aInverse = 1;

        for (var i = 1; i < 26; i++) {
            if ((a * i) % 26 == 1) {
                aInverse = i;
                break;
            }
        }

        for (var j = 0; j < cipherText.length; j++) {
            var c = cipherText.charCodeAt(j);

            if (c >= 65 && c <= 90) {
                plainText += String.fromCharCode(((aInverse * (c - 65 - b + 26)) % 26) + 65);
            }
            else if (c >= 97 && c <= 122) {
                plainText += String.fromCharCode(((aInverse * (c - 97 - b + 26)) % 26) + 97);
            }
            else {
                plainText += cipherText.charAt(j);
            }
        }

        return plainText;
    }

    function cleanURL(url){
        let urlParsed = url.split('|');
        return urlParsed[0];
    }
})();
