// ==UserScript==
// @name        YouTube Shorts Limiter
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match *://www.youtube.com/*
// @grant       none
// @version     1.1
// @author      https://github.com/nick-ng
// @description Limit the amount of time you spend watching YouTube Shorts
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/youtube-shorts.js
// @run-at      document-idle
// ==/UserScript==

if (self.navigation) {
	navigation.addEventListener("navigatesuccess", onUrlChange);
} else {
	let u = location.href;
	new MutationObserver(
		() => u !== (u = location.href) && onUrlChange()
	).observe(document, { subtree: true, childList: true });
}

const STORE_KEY = "pux_youtube_shorts_limit";
const LIMT_MS = 1000 * 60 * 10; // 10 minutes

const existingStartTime = parseInt(localStorage.getItem(STORE_KEY) || 0, 10);
let timeoutIds = [];

function onUrlChange() {
	timeoutIds.forEach((id) => {
		clearTimeout(id);
	});
	timeoutIds = [];

	if (!location.pathname.startsWith("/shorts")) {
		return;
	}

	let elapsedTime = Date.now() - existingStartTime;
	if (elapsedTime > LIMT_MS * 3) {
		elapsedTime = 0;
		localStorage.setItem(STORE_KEY, existingStartTime.toString());
	}

	const remainingTime = LIMT_MS - elapsedTime;
	console.log(`${remainingTime / 1000} seconds left`);
	timeoutIds.push(
		setTimeout(() => {
			console.log("time is up");
			if (location.pathname.startsWith("/shorts")) {
				window.location = "https://github.com/nick-ng/dev-settings#readme";
			}
		}, remainingTime)
	);

	for (let i = 0; i > remainingTime; i += 30000) {
		const message = `${i / 1000} seconds left`;
		timeoutIds.push(
			setTimeout(() => {
				console.log(message);
			}, remainingTime - i)
		);
	}
}

onUrlChange();
