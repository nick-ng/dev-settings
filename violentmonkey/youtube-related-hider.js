// ==UserScript==
// @name        YouTube Related Hider
// @namespace   https://github.com/nick-ng/dev-settings/violent-monkey
// @match       https://www.youtube.com/*
// @grant       none
// @version     1.0.0
// @author      https://github.com/nick-ng
// @description Hides related videos on YouTube so the result of esports matches aren't spoiled.
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/youtube-related-hider.js
// @run-at      document-idle
// ==/UserScript==

(() => {
  const ID = "abc45f16-8c33-4edc-bbb4-be1e5f3dd10e";

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
    #related div {
      transition-property: opacity;
      transition-duration: 1s;
      transition-timing-function: ease;
      transition-delay: 0.1s;
    }

    #related:not(:hover) div {
      opacity: 0;
    }

    #related::before {
      content: 'Hover to see related videos';
      color: white;
      font-size: 20px;
    }

    #related:hover::before {
      display: none;
    }

    .ytp-videowall-still, .ytp-videowall-still-info-content {
      display: none;
    }

    .ytp-next-button.ytp-button {
      display: none;
    }

  `,
    { id: getNextElementId() }
  );
})();
