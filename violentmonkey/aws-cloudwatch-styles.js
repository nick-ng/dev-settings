// ==UserScript==
// @name        AWS CloudWatch Styles
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://*.console.aws.amazon.com/cloudwatch/*
// @grant       none
// @version     1.1
// @author      https://github.com/nick-ng
// @description Changes the styles a bit so it's easier to see
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/aws-cloudwatch-styles.js
// @run-at      document-idle
// ==/UserScript==

(() => {
  // some different dark colours for variety
  const colours = ["#2638ff", "#0dad18", "#a50101", "#8b0ec9"];
  const randomColourIndex = Math.floor(Math.random() * colours.length)
  const STYLE = `
  .axis.dimmable .tick text.awsui-text-small,
  .legend text.legend-metric-name {
    fill: ${colours[randomColourIndex]}bb !important;
  }
  `;

  const ID = "e31899d9-11e9-418e-8228-2889b1426f8b";

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
  makeElement("style", headEl, STYLE, { id: getNextElementId() });
})();
