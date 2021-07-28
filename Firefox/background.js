/*
chrome.scripting.executeScript({
  file: 'dashboard.js'
});
*/

browser.browserAction.onClicked.addListener(function(tab) {
    alert(tab.url);
}); 