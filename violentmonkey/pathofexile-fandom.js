// ==UserScript==
// @name        Redirect to www.poewiki.net instead
// @namespace   Violentmonkey Scripts
// @include     https://pathofexile.fandom.com/wiki/*
// @include     http://pathofexile.fandom.com/wiki/*
// @grant       none
// @version     1.0
// @author      https://github.com/nick-ng
// @description 9/01/2022, 8:44:06 am
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/pathofexile-fandom.js
// @run-at      document-start
// ==/UserScript==
setTimeout(() => {
	const [_, ...route] = location.href.split("/wiki/");

	const newRoute = route.join("/wiki/");

	const newHref = `https://www.poewiki.net/wiki/${newRoute}`;

	console.info(`Redirecting to ${newHref}`);

	window.location = newHref;
}, 0);
