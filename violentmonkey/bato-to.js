// ==UserScript==
// @name        Bato.to adjustments
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://bato.to/chapter/*
// @grant       none
// @version     1.0
// @author      https://github.com/nick-ng
// @description Add a space between pages
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/bato-to.js
// @run-at      document-idle
// ==/UserScript==

(() => {
	const ID = "974ff67b-ec7e-4d51-a876-55999370463b"

	const elements = ["style"]

	for (let i = 0; i < elements.length; i++) {
	  const tempOldElement = document.getElementById(`${ID}-${elements[i]}`);
	  if (tempOldElement) {
		 tempOldElement.remove();
	  }
	}

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

	const styleId = `${ID}-style`
	const headEl = document.getElementsByTagName("head")[0];

	makeElement("style", headEl, `
	div#viewer div.item {
		margin: 1rem 0;
	}

	div#viewer div.item span.page-num {
		right: 100%;
		bottom: 0;
		white-space: nowrap;
		margin: 0 1rem;
	}

	`, {
	  id: styleId
	})
 })();
