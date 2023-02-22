// ==UserScript==
// @name        Salesforce Code Block Style
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://*.lightning.force.com/*
// @grant       none
// @version     1.0
// @author      https://github.com/nick-ng
// @description Make Salesforce "code blocks" use mono space font and increase size.
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/salesforce-codeblock-styles.js
// @run-at      document-idle
// ==/UserScript==

(() => {
  const ID = "30b25df9-ada5-4d65-a26f-611c3f68f719";

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
    *[id*=codeBlock], .codeBlock {
      font-family: monospace !important;
      font-size: 10pt !important;
    }
  `,
    { id: getNextElementId() }
  );
})();
