// ==UserScript==
// @name        GOG Styles
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://www.gog.com/*
// @grant       none
// @version     1.1
// @author      https://github.com/nick-ng
// @description Change some styles
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/gog-styles.js
// @run-at      document-idle
// ==/UserScript==

(() => {
	const STYLE = `
	span.game-link__name.row__column:first-child {
	  width: max-content;
	  display: block;
	}
	`;

	const ID = "be0dc500-c1b6-4ce0-8ebd-9297ad8c5c71";

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
