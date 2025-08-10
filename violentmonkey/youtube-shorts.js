// ==UserScript==
// @name        YouTube Shorts Limiter
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match *://www.youtube.com/*
// @grant       none
// @version     1.4
// @author      https://github.com/nick-ng
// @description Limit the amount of time you spend watching YouTube Shorts
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/youtube-shorts.js
// @run-at      document-idle
// ==/UserScript==

(() => {
	if (self.navigation) {
		navigation.addEventListener("navigatesuccess", onUrlChange);
	} else {
		let u = location.href;
		new MutationObserver(
			() => u !== (u = location.href) && onUrlChange()
		).observe(document, { subtree: true, childList: true });
	}

	const STORE_KEY = "pux_youtube_shorts_limit";
	const LIMIT_MS = 1000 * 60 * 10; // 10 minutes
	const REDIRECT_URL = "https://youtu.be/raHVKhS-A94";

	let timeoutIds = [];

	function onUrlChange() {
		timeoutIds.forEach((id) => {
			clearTimeout(id);
		});

		timeoutIds = [];

		if (!location.pathname.startsWith("/shorts")) {
			return;
		}

		const existingStartTime = parseInt(
			localStorage.getItem(STORE_KEY) || 0,
			10
		);

		let elapsedTime = Date.now() - existingStartTime;
		if (elapsedTime > LIMIT_MS * 3) {
			elapsedTime = 0;
			localStorage.setItem(STORE_KEY, Date.now().toString());
		} else if (elapsedTime >= LIMIT_MS) {
			console.info("time is up");
			if (location.pathname.startsWith("/shorts")) {
				window.location = REDIRECT_URL;
				return;
			}
		}

		const remainingTime = LIMIT_MS - elapsedTime;
		console.info(`${remainingTime / 1000} seconds left`);
		for (let i = 0; i < remainingTime; i += 30000) {
			const j = i;
			timeoutIds.push(
				setTimeout(() => {
					console.info(`${j / 1000} seconds left`);

					if (j === 0) {
						const day = new Date().getDay();
						if (day === 0 || day === 6) {
							// if Sunday (0) or Saturday (6), redirect in LIMIT_MS
							timeoutIds.push(
								setTimeout(() => {
									console.info("double time up");
									window.location = REDIRECT_URL;
								}, LIMIT_MS)
							);
						} else {
							// if weekday, redirect immediately
							window.location = REDIRECT_URL;
						}
					}
				}, remainingTime - j)
			);
		}
	}

	onUrlChange();
})();
