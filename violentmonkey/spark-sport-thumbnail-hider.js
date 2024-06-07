// ==UserScript==
// @name        Spark Sport Thumbnail Hider
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://watch.sparksport.co.nz/*
// @grant       none
// @version     1.0.0
// @author      https://github.com/nick-ng
// @description Hide thumbnails on Spark Sport so match results aren't spoiled.
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/spark-sport-thumbnail-hider.js
// @run-at      document-idle
// ==/UserScript==

(() => {
	const ID = "7945a42f-e643-4741-aa19-1178ff720f2e";

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
    img {
      opacity: 0;
    }
  `,
		{ id: getNextElementId() }
	);
})();
