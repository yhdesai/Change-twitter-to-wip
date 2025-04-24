chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    let url = new URL(details.url);
    if (url.hostname.endsWith("x.com")) {
      return { redirectUrl: "https://wip.co" };
    }
  },
  { urls: ["*://*.x.com/*"] },
  ["blocking"]
);
