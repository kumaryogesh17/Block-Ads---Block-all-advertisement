const defaultUrl = [
  "*://*.doubleclick.net/*",
  "*://partner.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.google-analytics.com/*",
  "*://creative.ak.fbcdn.net/*",
  "*://*.adbrite.com/*",
  "*://*.exponential.com/*",
  "*://*.quantserve.com/*",
  "*://*.scorecardresearch.com/*",
  "*://*.zedo.com/*",
  
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true};
  },
  { urls: defaultUrl },
  ["blocking"]
);

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var tab = tabs[0];
  var url = new URL(tab.url);
 var domain = url.hostname;
  document.getElementById("demo").innerHTML = domain;
});



// setInterval(() => {
//   let skipButton = document.getElementsByClassName("ytp-ad-skip-button");
//   if(skipButton != undefined && skipButton.length>0){
//     console.log("Ad detected Successfully");
//     skipButton[0].click();
//   }
// },1000);

