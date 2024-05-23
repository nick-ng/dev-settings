// ==UserScript==
// @name        Bato.to adjustments (mobile)
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://bato.to/chapter/*
// @grant       none
// @version     1.1
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
		margin: 0 0 2px;
	}

	div#viewer div.item span.page-num {
		left: 0;
		top: 100%;
		color: #00000000;
		background-color: #888888;
		height: 2px;
		border-right: 1px solid white;
	}

	`, {
	  id: styleId
	})

	setTimeout(() => {
		const pageNumberEls = [...document.querySelectorAll('span.page-num')]

		for (let i = 0; i < pageNumberEls.length; i++) {
			const [currentPageString, totalPagesString] = pageNumberEls[i].textContent.split("/")

			const percentage = parseInt(currentPageString, 10) / parseInt(totalPagesString, 10) * 100;

			pageNumberEls[i].setAttribute('style', `width: ${percentage}%`)
		}
	}, 100)
 })();
