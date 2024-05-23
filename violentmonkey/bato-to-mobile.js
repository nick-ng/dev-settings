// ==UserScript==
// @name        Bato.to adjustments (mobile)
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://bato.to/chapter/*
// @grant       none
// @version     1.0
// @author      https://github.com/nick-ng
// @description Add a space between pages (mobile)
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/bato-to-mobile.js
// @run-at      document-idle
// ==/UserScript==

(() => {
	const ID = "485279de-5401-43a5-8273-138b61f97a11"

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
		margin: 1px 0;
	}
	`, {
	  id: styleId
	})
 })();
