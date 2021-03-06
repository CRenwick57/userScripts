// ==UserScript==
// @name         Convert jpg:large urls to jpg on Twitter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect jpg:large urls to jpg urls
// @author       Chris Renwick
// @match        https://pbs.twimg.com/media/*
// @grant        none
// ==/UserScript==

//this script redirects any twitter image url ending in jpg:large to the same url ending in just jpg - this is useful if you save images you find on twitter and get tired of manually removing the :large
//note that the jpg:large format allows you to zoom further into tge image in your browser so if you're having trouble viewing very large images then disable this script


(function() {
    'use strict';
    if(window.location.toString().split('.')[window.location.toString().split('.').length-1] == 'jpg:large'){
        var sensible = window.location.toString().substring(0, window.location.toString().length - 6);
        window.location.assign(sensible);
    }
})();
