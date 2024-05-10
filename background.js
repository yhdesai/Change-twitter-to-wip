chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    let url = new URL(details.url);
    if (url.hostname.endsWith("twitter.com")) {
      return { redirectUrl: "https://wip.co" };
    }
  },
  { urls: ["*://*.twitter.com/*"] },
  ["blocking"]
);
