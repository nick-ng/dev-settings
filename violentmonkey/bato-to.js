// ==UserScript==
// @name        Bato.to adjustments
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://bato.to/chapter/*
// @grant       none
// @version     1.1
// @author      https://github.com/nick-ng
// @description Add a space between pages
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/bato-to.js
// @run-at      document-idle
// ==/UserScript==

(() => {
	const ID = "974ff67b-ec7e-4d51-a876-55999370463b"
	const className = `a${ID}`

	const elements = ["style"]

	for (let i = 0; i < elements.length; i++) {
	  const tempOldElement = document.getElementById(`${ID}-${elements[i]}`);
	  if (tempOldElement) {
		 tempOldElement.remove();
	  }
	}

	const elementsWithClass = [...document.querySelectorAll(`.${className}`)]

	for (let i = 0; i < elementsWithClass.length; i++) {
		if (elementsWithClass[i]) {
			elementsWithClass[i].remove()
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
		margin: 0 0 1.7rem;
	}

	div#viewer div.item span.page-num {
		left: 0;
		top: 100%;
		white-space: nowrap;
		font-size: 1rem;
		color: white;
		background-color: #888888;
		height: 1.7rem;
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
