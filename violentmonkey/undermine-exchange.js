// ==UserScript==
// @name        Let you know when new price data is available
// @namespace   Violentmonkey Scripts
// @match       https://undermine.exchange/*
// @grant       none
// @version     1.0
// @author      https://github.com/nick-ng
// @description 9/01/2022, 8:44:06 am
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/undermine-exchange.js
// @run-at      document-start
// ==/UserScript==
(() => {
	const timeEls = document.querySelectorAll(".delta-timestamp")

	for (const el of timeEls) {
		if (el.textContent.toLowerCase().includes("away")) {
			const minutes = parseInt(el.textContent, 10)

			if (minutes) {
				setTimeout(
					() => {el.setAttribute("style", "color:red")}, (1000 * 60 * minutes) + 30000
				)
				return
			}
		}
	}
})()
