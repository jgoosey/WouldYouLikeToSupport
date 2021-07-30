/*
Generic error logger.
*/
function onError(e) {
  console.error(e);
}

function getURL() {
  console.log("in function");
  browser.tabs.query({currentWindow: true, active: true}, function(tabs){
    alert("Current URL: " + tabs[0].url);
  });
  console.log("out function");
}

document.getElementById("btn").addEventListener("click", getURL);