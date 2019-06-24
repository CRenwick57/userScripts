// ==UserScript==
// @name         Redirect mobile sites to desktop
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  if a url starts with "m.", we delete it
// @author       Chris Renwick
// @match        ://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var urlArray = window.location.toString().split('.');
    if(urlArray.includes("m")) {
        var fixedUrl = urlArray.filter(function(b) {return b!="m"}).join(".");
        console.log(fixedUrl);
        window.location.assign(fixedUrl);
    }
})();
