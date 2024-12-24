// ==UserScript==
// @name         Remove Header From Crunchyroll
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes all elements with the class "erc-large-header" from a webpage.
// @author       T8R
// @icon         https://www.crunchyroll.com/favicons/favicon-32x32.png
// @match        https://www.crunchyroll.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Function to remove elements with the class "erc-large-header"
  function removeLargeHeaders() {
    document.querySelectorAll(".erc-large-header").forEach((el) => el.remove());
  }

  // Observe DOM changes to handle dynamically loaded content
  const observer = new MutationObserver(() => {
    removeLargeHeaders();
  });

  // Start observing the document body for changes
  observer.observe(document.body, { childList: true, subtree: true });

  // Run the function once initially in case elements are already loaded
  removeLargeHeaders();
})();
