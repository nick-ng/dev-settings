// ==UserScript==
// @name        Redirect to warcraft.wiki.gg instead
// @namespace   Violentmonkey Scripts
// @include     https://wowpedia.fandom.com/wiki/*
// @include     http://wowpedia.fandom.com/wiki/*
// @include     https://wowwiki-archive.fandom.com/wiki/*
// @include     http://wowwiki-archive.fandom.com/wiki/*
// @grant       none
// @version     1.2
// @author      https://github.com/nick-ng
// @description 9/01/2022, 8:44:06 am
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/wowpedia-fandom.js
// @run-at      document-start
// ==/UserScript==
setTimeout(() => {
	const [_, ...route] = location.href.split("/wiki/");

	const newRoute = route.join("/wiki/");

	const newHref = `https://warcraft.wiki.gg/wiki/${newRoute}`;

	console.info(`Redirecting to ${newHref}`);

	window.location = newHref;
}, 0);
