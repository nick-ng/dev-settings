// ==UserScript==
// @name        Attempt counter - cstimer.net
// @namespace   Violentmonkey Scripts
// @match       https://cstimer.net/
// @grant       none
// @version     1.6
// @author      https://github.com/nick-ng
// @description 9/01/2022, 8:44:06 am
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/cstimer-net.js
// @run-at      document-idle
// ==/UserScript==
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

	const ed = document.querySelector(`div#stats tbody tr`);

	ed.addEventListener("click", (event) => {
		if (event.shiftKey) {
			const newValue = prompt("Enter new value");

			md = getCurrentNumber() - newValue;
		} else {
			md = 0
		}
	});

	window.setCount = (newValue = -12) => {
		md = getCurrentNumber() - newValue;
	};

	console.log("use setCount(newCount) to change counter.");

	setInterval(() => {
		const f = getCurrentNumber() - md;

		const ee = document.querySelector(`div#stats tbody th`);

		ee.textContent = `${f}`;
	}, 500);
};

setTimeout(checkPlusFifteen, 2000);
