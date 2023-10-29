// ==UserScript==
// @name        Attempt counter - cstimer.net
// @namespace   Violentmonkey Scripts
// @match       https://cstimer.net/
// @grant       none
// @version     1.1
// @author      https://github.com/nick-ng
// @description 9/01/2022, 8:44:06 am
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/cstimer-net.js
// @run-at      document-idle
// ==/UserScript==
const checkPlusFifteen = () => {
	const a = [...document.querySelectorAll("div#stats tbody tr")];
	const b = a.map((aa) => {
		const d = aa.getAttribute("data");
		return d ? parseInt(d, 10) : -1;
	});
	const md = Math.max(...b);

	setInterval(() => {
		const a2 = [...document.querySelectorAll("div#stats tbody tr")];
		const b2 = a2.map((aa) => {
			const d2 = aa.getAttribute("data");
			return d2 ? parseInt(d2, 10) : -1;
		});
		const md2 = Math.max(...b2);
		const f = Math.max(md2 - md, 0);

		const ee = document.querySelector(`div#stats tbody th`);
		ee.textContent = `${f}`;
	}, 500);
};

setTimeout(checkPlusFifteen, 2000);
