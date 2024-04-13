  document.getElementById("tooltip").addEventListener("mouseover", function() {
  const anchorElement = document.querySelector("#tooltiptext a");
  if (anchorElement) {
    checkLinkSafety(anchorElement.href, function(isSafe) {
      anchorElement.title = isSafe ? "✅ Safe Link" : "❌ Unsafe Link";
    });
  }
});

function checkLinkSafety(url, callback) {
  const isSafe = url.startsWith("https://");
  callback(isSafe);
}