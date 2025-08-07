// ==UserScript==
// @name        B L D D B adjustments
// @namespace   Violentmonkey Scripts
// @include     https://blddb.net/corner.html
// @include     https://blddb.net/corner.html?*
// @include     https://blddb.net/edge.html
// @include     https://blddb.net/edge.html?*
// @grant       none
// @version     1.1
// @author      https://bld.pux.one
// @description Show move count of commutators and add a query parameter to search for a letter pair
// @downloadURL https://bld.pux.one/blddb-violentmonkey.js
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
		console.warn("couldn't find input element");
		return;
	}

	const addMoveCount = (counter = 0) => {
		const tbodyEl = document.querySelector("#table tbody");
		if (!tbodyEl && counter < 100) {
			setTimeout(() => {
				addMoveCount(counter + 1);
			}, 100);

			return;
		}

		const elements = [...document.querySelectorAll(`.${ELEMENT_CLASS}`)];
		for (let i = 0; i < elements.length; i++) {
			elements[i].remove();
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

	inputEl.addEventListener("input", (event) => {
		if (event.currentTarget.value.length === 3) {
			addMoveCount(0);
		}
	});

	setTimeout(() => {
		const params = new URLSearchParams(document.location.search);
		const letterPair = params.get("letter-pair");
		if (letterPair) {
			inputEl.value = letterPair;
			window.algSearch();
			setTimeout(() => {
				addMoveCount(0);
			}, 50);
		}
	}, 100);
})();
