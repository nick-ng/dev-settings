// ==UserScript==
// @name        Sweet Duet 7 Simul Trainer
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @include     https://sanya.sweetduet.info/cube/7simul_trainer/
// @grant       none
// @version     1.0
// @author      https://github.com/nick-ng
// @description Hide memo until you hover
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/sweetduet-7-simul.js
// @run-at      document-idle
// ==/UserScript==

(() => {
	const headEl = [...document.getElementsByTagName("head")][0];
	const myStyleTag = document.createElement("style");
	myStyleTag.textContent = `#memo { border: 1px solid #888; border-radius: 16px; box-sizing: border-box; color: #888; background-color: #888; } #memo:hover { color: inherit; background-color: inherit; }`;
	headEl.appendChild(myStyleTag);
})();
