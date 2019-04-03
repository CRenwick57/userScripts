// ==UserScript==
// @name         Redirect mobile sites to desktop
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  if a url starts with "m.", we delete it
// @author       Chris Renwick
// @match        ://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var bits = window.location.toString().split('.');
    if(bits.includes("m")) {
        var desktop = "";
        for(var i = 0; i < bits.length; i++){
            if (bits[i] != "m"){
                desktop=desktop.concat(bits[i]);
                desktop=desktop.concat('.');
            }
        }
        desktop=desktop.substring(0,desktop.length-1);
        console.log(desktop);
        window.location.assign(desktop);
    }
})();
