/*
chrome.scripting.executeScript({
  file: 'dashboard.js'
});
*/

chrome.browserAction.onClicked.addListener(function(tab) {
    alert(tab.url);
}); 