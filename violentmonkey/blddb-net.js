// ==UserScript==
// @name        B L D D B
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @include     https://blddb.net/corner.html
// @include     https://blddb.net/edge.html
// @grant       none
// @version     1.0
// @author      https://github.com/nick-ng
// @description Hide memo until you hover
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/blddb-net.js
// @run-at      document-idle
// ==/UserScript==

(() => {
	const ID = "9ab0171a-e427-4448-9d1b-f34e95a2e887";
	const ELEMENT_CLASS = `pux-${ID}`;

	let inputEl = document.getElementById("cornerinput");

  if (!inputEl) {
    inputEl = document.getElementById("edgeinput");
  }

  if (!inputEl) {
    console.warn("couldn't find input element")
    return
  }

	inputEl.addEventListener("input", (event) => {
		const elements = [...document.querySelectorAll(`.${ELEMENT_CLASS}`)];
		for (let i = 0; i < elements.length; i++) {
			elements[i].remove();
		}

		if (event.currentTarget.value.length === 3) {
      let counter = 0
			const addMoveCount = () => {
				const tbodyEl = document.querySelector("#table tbody");
				if (!tbodyEl && counter++ < 100) {
					setTimeout(() => {
						addMoveCount();
					}, 100);

					return;
				}

				const tds = [...tbodyEl.querySelectorAll("td:nth-child(2)")];
				for (let i = 0; i < tds.length; i++) {
					const tdEl = tds[i];
					const algorithm = tdEl.textContent.split(" ").filter((a) => a);
					let moveCount = 1;
					for (let j = 1; j < algorithm.length; j++) {
						if (
							["U", "D"].includes(algorithm[j - 1][0]) &&
							["U", "D"].includes(algorithm[j][0])
						) {
							// you can do the moves at the same time
						} else {
							moveCount = moveCount + 1;
						}
					}
					const moveCountEl = document.createElement("span");
					moveCountEl.classList.add(ELEMENT_CLASS);
					moveCountEl.innerHTML = `&nbsp;(${moveCount})`;
					tdEl.appendChild(moveCountEl);
				}
			};

			addMoveCount();
		}
	});
})();
