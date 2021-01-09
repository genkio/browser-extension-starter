import { browser } from "webextension-polyfill-ts";

browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab?.url?.includes("http")) {
    await browser.tabs.executeScript(tabId, { file: "./inject.bundle.js" });
    await browser.tabs.executeScript(tabId, { file: "./foreground.bundle.js" });
  }
});
