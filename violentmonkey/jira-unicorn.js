// ==UserScript==
// @name        Jira Unicorn
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://*.atlassian.net/jira/*
// @grant       none
// @version     1.0.2
// @author      https://github.com/nick-ng
// @description Makes a unicorn
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/jira-unicorn.js
// @run-at      document-idle
// ==/UserScript==

(() => {
	const ID = "14a1642b-555d-4df8-8ca2-1ed8e579eaa4";

	for (let i = 0; i < 10; i++) {
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
    @keyframes unicornkeyframe {
      0% {
        margin-right: 0;
      }

      100% {
        margin-right: calc(100vw + 64pt);
      }
    }

    .nick-animate-unicorn {
      animation: unicornkeyframe 5s linear;
    }
  `,
		{ id: getNextElementId() }
	);

	const temp0 = [
		...document.querySelectorAll(
			'div[data-test-id="ref-spotlight-target-status-spotlight"] button'
		),
	];

	temp0.forEach((buttonEl) => {
		buttonEl.addEventListener("click", () => {
			setTimeout(attachUnicornHandler, 300);
		});
	});

	function attachUnicornHandler() {
		const temp = [
			...document.querySelectorAll(
				'div[data-test-id="issue-field-status.ui.status-view.transition"]'
			),
		];

		temp.forEach((el) => {
			const parentEl = el.parentElement;

			if (!parentEl.textContent.toLowerCase().includes("done")) {
				return;
			}

			parentEl.addEventListener("click", () => {
				const body = document.querySelector("body");

				const animationAreaEl = makeElement("div", body, "", {
					style: [
						"position: absolute;",
						"bottom: 50vh;",
						"left: -64pt;",
						"z-index: 9001;",
						"width: calc(100vw + 128pt);",
						"text-align: right;",
					].join(";"),
					id: getNextElementId(),
				});

				const unicornEl = makeElement("span", animationAreaEl, "🦄", {
					style: ["font-size: 64pt;"].join(";"),
					id: getNextElementId(),
				});

				unicornEl.classList.add("nick-animate-unicorn");

				setTimeout(() => {
					animationAreaEl.remove();
					unicornEl.remove();
				}, 10000);
			});
		});
	}
})();
