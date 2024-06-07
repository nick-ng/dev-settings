// ==UserScript==
// @name        Attempt counter - cstimer.net
// @namespace   Violentmonkey Scripts
// @match       https://cstimer.net/
// @grant       none
// @version     1.9
// @author      https://github.com/nick-ng
// @description 9/01/2022, 8:44:06 am
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/cstimer-net.js
// @run-at      document-idle
// ==/UserScript==
(() => {
	const ID = "32bc11b3-3759-4192-8ae1-cae4a4043685";
	const BUTTON_ID = `${ID}-button`;

	const DNF_HISTORY_LIMIT = 50;

	const makeElement = (tag, parent, text, attributes) => {
		if (attributes?.id) {
			const el = document.getElementById(attributes.id);

			if (el) {
				el.remove();
			}
		}

		let parentEl = parent;
		if (!parent) {
			parentEl = documenet.querySelector("body");
		} else if (typeof parent === "string") {
			parentEl = document.getElementById(parent);
		}

		const tempElement = document.createElement(tag);
		if (text) {
			tempElement.textContent = text;
		}
		if (parentEl) {
			parentEl.appendChild(tempElement);
		}
		if (attributes) {
			Object.entries(attributes).forEach(([key, value]) => {
				tempElement.setAttribute(key, value);
			});
		}
		return tempElement;
	};

	const getCurrentNumber = () => {
		const a = [...document.querySelectorAll("div#stats tbody tr")];
		const b = a.map((aa) => {
			const d = aa.getAttribute("data");
			return d ? parseInt(d, 10) : -1;
		});

		return Math.max(...b);
	};

	const checkPlusFifteen = () => {
		let md = getCurrentNumber();

		const myButton = makeElement("button", "stats", "0", {
			style: `
			position: absolute;
			left: 5px;
			top: 38px;
			width: 70px;
			border: solid 1px black;
			padding: 2px 0;
			font-size: 14pt;
			`,
			id: BUTTON_ID,
		});

		myButton.addEventListener("click", (event) => {
			if (event.shiftKey) {
				const newValue = prompt("Enter new value");

				md = getCurrentNumber() - newValue;
			} else {
				md = getCurrentNumber();
			}

			myButton.textContent = `${getCurrentNumber() - md}`;
		});

		window.setCount = (newValue = -12) => {
			md = getCurrentNumber() - newValue;
		};

		const solveCountIntervalId = `$${ID}-solve-count-interval`;
		if (window[solveCountIntervalId]) {
			clearInterval(window[solveCountIntervalId]);
		}

		window[solveCountIntervalId] = setInterval(() => {
			myButton.textContent = `${getCurrentNumber() - md}`;
		}, 777);
	};

	setTimeout(checkPlusFifteen, 2000);
	checkPlusFifteen();
	console.log("use setCount(newCount) to change counter.");

	const checkDNFRate = () => {
		const statsTable = document.querySelector("#stats .stattl table");

		const statsRows = [...statsTable.querySelectorAll("tr")];
		let counter = 0;
		let dnf = 0;
		let attempts = 0;
		for (let i = 0; i < statsRows.length; i++) {
			if (statsRows[i]?.children) {
				const cellsContents = [...statsRows[i].children].map(
					(el) => el.textContent
				);

				if (cellsContents.length === 1) {
					continue;
				}

				const [solveNumberString, time, _ao5, _ao12] = cellsContents;

				const solveNumber = parseInt(solveNumberString, 10);

				if (isNaN(solveNumber)) {
					continue;
				}

				counter++;
				if (counter >= DNF_HISTORY_LIMIT) {
					break;
				}

				attempts++;
				if (time.toUpperCase() === "DNF") {
					dnf++;
				}
			}
		}

		const successes = attempts - dnf;
		const successPercent = (successes / attempts) * 100;

		makeElement(
			"div",
			"stats",
			`${successes}/${attempts} (${successPercent.toFixed(0)}%)`,
			{
				style: `
			position: absolute;
			left: 15px;
			top: 162px;
			background-color: white;
			padding: 1px 2px;
			border: solid 1px black;
			font-size: 12pt;
			`,
				id: `${ID}-success-rate`,
			}
		);
	};

	const dnfIntervalId = `${ID}-dnf-interval`;
	if (window[dnfIntervalId]) {
		clearInterval(window[dnfIntervalId]);
	}

	window[dnfIntervalId] = setInterval(() => {
		checkDNFRate();
	}, 778);

	checkDNFRate();
})();
