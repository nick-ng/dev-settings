// ==UserScript==
// @name        Stuff.co.nz Sign Up Remover
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://www.stuff.co.nz/*
// @grant       none
// @version     1.0.0
// @author      https://github.com/nick-ng
// @description Remove the sign up thing
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/stuff-co-nz.js
// @run-at      document-idle
// ==/UserScript==

// Can also do document.querySelector('.tp-modal button.tp-close').click()
(async () => {
  const selectorQueries = [
    ".tp-modal",
    ".tp-backdrop.tp-active",
  ]

  const main = () => {

    for (const q of selectorQueries) {
      const els = [...document.querySelectorAll(q)]

      while (els.length > 0) {
        const el = els.pop()
        el.remove()
      }
    }

    const openEls = document.querySelectorAll(".tp-modal-open")

    for (const el of openEls) {
      el.classList.remove("tp-modal-open")
    }
  }

  for (let n = 0; n < 100000; n++) {
    let count = 0;

    for (const q of selectorQueries) {
      const els = [...document.querySelectorAll(q)]

      if (els.length > 0) {
        count++
      }
    }


    if (count < selectorQueries.length) {
      await new Promise((resolve) => {
        setTimeout(resolve, 100)
      })
    } else {
      main()
      break;
    }
  }
})();
