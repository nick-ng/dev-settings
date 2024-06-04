// ==UserScript==
// @name        Attempt counter - cstimer.net
// @namespace   Violentmonkey Scripts
// @match       https://cstimer.net/
// @grant       none
// @version     1.8
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
	const ID = "32bc11b3-3759-4192-8ae1-cae4a4043685"
	const BUTTON_ID = `${ID}-button`
	let md = getCurrentNumber();

	const targetEl = document.getElementById("stats")
	const myButton = document.createElement("button")
	targetEl.appendChild(myButton)
	myButton.setAttribute("id", BUTTON_ID)
	myButton.setAttribute("style", `
	position: absolute;
	left: 5px;
	top: 38px;
	width: 70px;
	border: solid 1px black;
	padding: 2px 0;
	font-size: 14pt;
	`)

	myButton.addEventListener("click", (event) => {
		if (event.shiftKey) {
			const newValue = prompt("Enter new value");

			md = getCurrentNumber() - newValue;
		} else {
			md = getCurrentNumber()
		}
	});

	window.setCount = (newValue = -12) => {
		md = getCurrentNumber() - newValue;
	};

	console.log("use setCount(newCount) to change counter.");

	setInterval(() => {
		const f = getCurrentNumber() - md;

		myButton.textContent = `${f}`;
	}, 500);
};

setTimeout(checkPlusFifteen, 2000);
