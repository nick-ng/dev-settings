// ==UserScript==
// @name        Screen Time Restrictor
// @namespace   https://github.com/nick-ng/dev-settings/violentmonkey
// @match       https://www.youtube.com/*
// @match       https://www.reddit.com/*
// @match       https://old.reddit.com/*
// @match       https://www.twitch.tv/*
// @match       https://www.wowhead.com/*
// @match       https://www.icy-veins.com/*
// @match       https://www.mmo-champion.com/*
// @grant       none
// @version     1.3
// @author      https://github.com/nick-ng
// @description Navigates you away from a page after some time and only lets you back after another amount of time.
// @downloadURL https://raw.githubusercontent.com/nick-ng/dev-settings/master/violentmonkey/screen-time-restrictor.js
// @run-at      document-idle
// ==/UserScript==

(() => {
  const ID = "4e55fbb7-b720-4de9-b85d-f8e6af0f377c";
  const RESTRICT_START_TIMESTAMP_STORE = `${ID}-start-timestamp`;
  const RESTRICT_END_TIMESTAMP_STORE = `${ID}-end-timestamp`;

  const extraMinutes =
    (Date.now() - 1676925246579) / (1000 * 60 * 60 * 24 * 60);
  const TIME_ON_PAGE_MINUTES = 5 + Math.max(0, 5 - extraMinutes);
  const COOLDOWN_MINUTES = 30 + extraMinutes;
  console.log("TIME_ON_PAGE_MINUTES", TIME_ON_PAGE_MINUTES);
  console.log("COOLDOWN_MINUTES", COOLDOWN_MINUTES);

  const TIME_ON_PAGE_MS = Math.floor(TIME_ON_PAGE_MINUTES * 60 * 1000);
  const COOLDOWN_MS = Math.ceil(COOLDOWN_MINUTES * 60 * 1000);

  const getNewTimestamps = () => ({
    start: Date.now() + TIME_ON_PAGE_MS,
    end: Date.now() + TIME_ON_PAGE_MS + COOLDOWN_MS,
  });

  const startTimestampRaw = localStorage.getItem(
    RESTRICT_START_TIMESTAMP_STORE
  );
  const restrictStartTimestamp =
    typeof startTimestampRaw === "string"
      ? parseInt(startTimestampRaw, 10)
      : getNewTimestamps().start;

  const endTimestampRaw = localStorage.getItem(RESTRICT_END_TIMESTAMP_STORE);
  const restrictEndTimestamp =
    typeof endTimestampRaw === "string"
      ? parseInt(endTimestampRaw, 10)
      : getNewTimestamps().end;

  if (
    typeof startTimestampRaw !== "string" ||
    typeof endTimestampRaw !== "string"
  ) {
    localStorage.setItem(
      RESTRICT_START_TIMESTAMP_STORE,
      getNewTimestamps().start
    );

    localStorage.setItem(RESTRICT_END_TIMESTAMP_STORE, getNewTimestamps().end);
  }

  // After the cooldown
  if (Date.now() > restrictEndTimestamp) {
    localStorage.setItem(
      RESTRICT_START_TIMESTAMP_STORE,
      getNewTimestamps().start
    );

    localStorage.setItem(RESTRICT_END_TIMESTAMP_STORE, getNewTimestamps().end);

    setTimeout(() => {
      location.assign("https://developer.mozilla.org");
    }, TIME_ON_PAGE_MS);

    return;
  }

  // Before the start time
  if (Date.now() < restrictStartTimestamp) {
    const remainingMS = restrictStartTimestamp - Date.now();

    setTimeout(() => {
      location.assign("https://developer.mozilla.org");
    }, remainingMS);

    return;
  }

  location.assign("https://developer.mozilla.org");
})();
