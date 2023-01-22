// ==UserScript==
// @name        YouTube Comments Hider
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://www.youtube.com/*
// @grant       none
// @version     1.0.2
// @author      https://github.com/nick-ng
// @description Hides YouTube comments.
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/youtube-comments-hider.js
// @run-at      document-idle
// ==/UserScript==

(() => {
  const ID = "edaa0b2d-7a33-4765-b7fb-f94c4654db95";

  for (let i = 0; i < 1; i++) {
    const tempOldElement = document.getElementById(`${ID}-${i}`);
    if (tempOldElement) {
      tempOldElement.remove();
    }
  }

  /**
   * helper functions
   */
  let counter = 0;
  const getNextElementId = () => `${ID}-${counter++}`;

  const makeElement = (tag, parent, text, attributes) => {
    const tempElement = document.createElement(tag);
    if (text) {
      tempElement.textContent = text;
    }
    if (parent) {
      parent.appendChild(tempElement);
    }
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        tempElement.setAttribute(key, value);
      });
    }
    return tempElement;
  };

  /**
   * DOM Elements
   */
  const headEl = document.getElementsByTagName("head")[0];
  makeElement(
    "style",
    headEl,
    `
    #comments #contents {
      transition-property: opacity;
      transition-duration: 1s;
      transition-timing-function: ease;
      transition-delay: 0.1s;
    }

    #comments:not(:hover) #contents {
      opacity: 0;
      position: relative;
    }

    #comments #header::after {
      content: 'Hover to see comments';
      color: white;
      text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
      font-size: 20px;
    }

    #comments:hover #header::after {
      display: none;
    }
  `,
    { id: getNextElementId() }
  );
})();
