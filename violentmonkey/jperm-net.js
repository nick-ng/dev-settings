// ==UserScript==
// @name        jperm.net Algorithm Trainer Customisation
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://jperm.net/
// @grant       none
// @version     1.0
// @author      https://github.com/nick-ng
// @description Flips the algorithm trainer so it makes the case on the bottom.
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/jperm-net.js
// @run-at      document-idle
// ==/UserScript==

(() => {
	const ID = "f28372fc-c4b4-4dce-bac0-8087c7f6411f";

	for (let i = 0; i < 100; i++) {
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

	const makeElement = (tag, parent, text, attributes, before = false) => {
		const tempElement = document.createElement(tag);

		if (text) {
			tempElement.textContent = text;
		}

		if (parent) {
			if (before) {
				parent.prepend(tempElement);
			} else {
				parent.appendChild(tempElement);
			}
		}

		if (!attributes.id) {
			tempElement.setAttribute("id", getNextElementId());
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
	const scrambleEl = document.getElementById("scramble-text");

	const getUpsideDownScramble = () => {
		const scramble = scrambleEl.textContent;

		if (!scramble) {
			return "";
		}

		return scramble
			.replaceAll("U", "dd")
			.replaceAll("B", "ff")
			.replaceAll("F", "bb")
			.replaceAll("D", "uu")
			.replaceAll("uu", "U")
			.replaceAll("bb", "B")
			.replaceAll("ff", "F")
			.replaceAll("dd", "D");
	};

	setInterval(() => {
		const upsideDownScramble = getUpsideDownScramble();
		const timerEl = document.getElementById("timer-container");
		const upsideDownEl = document.getElementById("upside-down-scramble");

		scrambleEl.setAttribute("style", "font-size: 1em; color: #cccccc;");

		if (upsideDownEl) {
			if (upsideDownEl.textContent !== upsideDownScramble) {
				upsideDownEl.textContent = upsideDownScramble;
			}
		} else {
			makeElement(
				"div",
				timerEl,
				upsideDownScramble,
				{
					id: "upside-down-scramble",
					style: ["font-size: 1.6em;"].join(";"),
				},
				true
			);
		}
	}, 500);
})();
