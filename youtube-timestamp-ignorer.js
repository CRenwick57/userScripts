// ==UserScript==
// @name         Youtube Timestamp Ignorer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Stops Youtube from remembering my last time watched in a video (not a perfect solution, doesn't always work)
// @author       Chris Renwick
// @include      https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    if(window.location.toString().indexOf('&t=') != -1){
        var m = document.getElementById('movie_player');
        m.seekTo(0);
    }
})();
