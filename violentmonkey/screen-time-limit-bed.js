// ==UserScript==
// @name        Screen Time Limit - Bed
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://imgur.com/*
// @match       https://*.imgur.com/*
// @grant       none
// @version     1.1
// @author      https://github.com/nick-ng
// @description Block some sites at bed time
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/screen-time-limit-bed.js
// @run-at      document-idle
// ==/UserScript==

setTimeout(() => {
	const now = new Date()
	const hours = now.getHours

	// between 9 am and 11 pm
	if (hours > 9 && hours < 23) {
		// do nothing
		return;
	}

	const bodyEl = document.querySelector("body");

	if (!bodyEl) {
		return;
	}

	const fullScreenHiderEl = document.createElement("div")
	const styleAttr = `;${["position: absolute", "left: 0", "right: 0", "top: 0", "bottom: 0", "background-color: #000", "color:rgb(0, 185, 77)", "display: flex", "justify-content: center", "align-items: center", "font-size: 72pt", "z-index: 99999"].join(";")};`
	fullScreenHiderEl.setAttribute("style", styleAttr)
	if (hours >= 5) {
		fullScreenHiderEl.textContent = "Get out of bed"
	} else {
		fullScreenHiderEl.textContent = "Go to sleep"
	}

	bodyEl.append(fullScreenHiderEl);
})
