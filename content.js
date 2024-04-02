document.addEventListener("mouseover", function(event) {
  if (event.target.tagName === "A") {
    checkLinkSafety(event.target.href, function(isSafe) {
      if (isSafe) {
        event.target.title = "This link is safe";
      } else {
        event.target.title = "This link is not safe";
      }
    });
  }
});

function checkLinkSafety(url, callback) {
  callback(true);
}
