// ==UserScript==
// @name        Stuff.co.nz Sign Up Remover
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://www.stuff.co.nz/*
// @grant       none
// @version     1.2.0
// @author      https://github.com/nick-ng
// @description Remove the sign up thing and hides the header unless you hover over it
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/stuff-co-nz.js
// @run-at      document-idle
// ==/UserScript==

// Can also do document.querySelector('.tp-modal button.tp-close').click()
(async () => {
	const ID = "a293b8c4-5b8c-4e59-9ee9-cece40547925";

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
  .stuff-box.stuff-web-header-bar.sticky.headerInview {
    opacity: 0;
  }

  .stuff-box.stuff-web-header-bar.sticky.headerInview:hover {
    opacity: 1;
  }
  `,
		{
			id: styleId,
		}
	);

	const selectorQueries = [".tp-modal", ".tp-backdrop.tp-active"];

	const deleteElements = () => {
		for (const q of selectorQueries) {
			const els = [...document.querySelectorAll(q)];

			while (els.length > 0) {
				const el = els.pop();
				el.remove();
			}
		}

		const openEls = document.querySelectorAll(".tp-modal-open");

		for (const el of openEls) {
			el.classList.remove("tp-modal-open");
		}
	};

  let deletedCount = 0;
	for (let n = 0; n < 100000; n++) {
		let count = 0;

		for (const q of selectorQueries) {
			const els = [...document.querySelectorAll(q)];

			if (els.length > 0) {
				count++;
			}
		}

		if (count < selectorQueries.length) {
			await new Promise((resolve) => {
				setTimeout(resolve, Math.max(100 + n * 50, 3000));
			});
		} else {
			deleteElements();
			deletedCount++
		}

    if (deletedCount > 0) {
      await new Promise((resolve) => {
        setTimeout(resolve, 3000)
      })
    }
	}
})();
