/*
Generic error logger.
*/
function onError(e) {
  console.error(e);
}

function getURL() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    alert("Current URL: " + tabs[0].url);
  });
}

document.getElementById("btn").addEventListener("click", getURL);