document.addEventListener("mouseover", function(event) {
  if (event.target.tagName === "A") {
    checkLinkSafety(event.target.href, function(isSafe) {
      if (isSafe) {
        event.target.title = "✅";
      } else {
        event.target.title = "❌";
      }
    });
  }
});

function checkLinkSafety(url, callback) {
  callback(true);
}
