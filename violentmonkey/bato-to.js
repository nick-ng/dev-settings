// ==UserScript==
// @name        Bato.to adjustments
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://bato.to/chapter/*
// @grant       none
// @version     1.5
// @author      https://github.com/nick-ng
// @description Add a space between pages
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/bato-to.js
// @run-at      document-idle
// ==/UserScript==

(() => {
	const ID = "974ff67b-ec7e-4d51-a876-55999370463b";

	const elements = ["style"];

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

	const styleId = `${ID}-style`;
	const headEl = document.getElementsByTagName("head")[0];

	makeElement(
		"style",
		headEl,
		`
	div#viewer div.item span.page-num {
		left: 0;
		top: 100%;
		background-color: #888888;
		border-right: 1px solid white;
	}

	div#viewer div.item span.page-num {
		white-space: nowrap;
		font-size: 12px;
		color: white;
		height: 20px;
		padding-left: 5px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	div#viewer div.item {
		margin: 0 0 20px;
	}

	#iframe_PostList {
		display: none;
	}
	`,
		{
			id: styleId,
		}
	);

	setTimeout(() => {
		const pageNumberEls = [...document.querySelectorAll("span.page-num")];

		for (let i = 0; i < pageNumberEls.length; i++) {
			const [currentPageString, totalPagesString] =
				pageNumberEls[i].textContent.split("/");

			const percentage =
				(parseInt(currentPageString, 10) / parseInt(totalPagesString, 10)) *
				100;

			pageNumberEls[i].setAttribute("style", `width: ${percentage}%`);
		}

		const pageImgEls = [...document.querySelectorAll(".page-img")];

		for (let i = 0; i < pageImgEls.length; i++) {
			if (pageImgEls[i]) {
				pageImgEls[i].parentNode.replaceChild(
					pageImgEls[i].cloneNode(),
					pageImgEls[i]
				);
				pageImgEls[i].remove();
			}
		}
	}, 100);
})();
