// ==UserScript==
// @name         SPIEGEL Plus unblock
// @namespace    http://wtfuii.github.com/
// @version      0.9
// @description  Decryipt SPIEGEL Plus articles with ease
// @author       wtfuii
// @match        http://www.spiegel.de/*
// @grant        none
// @run-at       end
// ==/UserScript==

$(document).ready( function() {
    $(".obfuscated-content").removeClass();

    var obfuscatedNodes = $(".obfuscated");
    $.each(obfuscatedNodes, function(index) {
        var node = obfuscatedNodes[index];
        var nodeContents = $(node).contents().filter(function() {
            return this.nodeType === 1 || 3;
        });
        $.each(nodeContents, function(nodeContentsIndex) {
            var result = "";
            var nodeContent = nodeContents[nodeContentsIndex];
            for (var i = 0; i < nodeContent.textContent.length; i++) {
                var oldCharCode = nodeContent.textContent.charCodeAt(i);
                var newChar = oldCharCode != 32 ? String.fromCharCode(oldCharCode - 1) : String.fromCharCode(oldCharCode);
                result = result + newChar;
            }
            nodeContent.textContent = result;
        });
    });
});
