// ==UserScript==
// @name        Xanthics Gwennen Search String Generator
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://xanthics.github.io/*
// @grant       none
// @version     1.0.0
// @author      https://github.com/nick-ng
// @description Makes it a bit easier to see what items you've selected
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/xanthics-gwennen-search.js
// @run-at      document-idle
// ==/UserScript==

(() => {
  const ID = "a7608067-c608-40f8-a559-fb334fdde7cd";

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
    input[type=checkbox]:after {
      width: 100%;
      text-align: center;
      background-color: magenta;
    }

    input[type=checkbox] {
      width: 80%;
      text-align: center;
      background-color: black;
    }
  `,
    { id: getNextElementId() }
  );
})();
