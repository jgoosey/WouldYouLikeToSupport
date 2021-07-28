window.onload=function() {

  document.getElementById("btn").addEventListener("click", getURL);

  function getURL() {
    browser.tabs.query({currentWindow: true, active: true}, function(tab){
      alert("Current URL: " + tab[0].url);
    });
  }

}