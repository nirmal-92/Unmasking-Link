// Event listener for mouseover event on a specific element with ID "tooltiptext"
document.getElementById("tooltiptext").addEventListener("mouseover", function() {
  // Check if the event target is an anchor element
  const anchorElement = document.querySelector("#tooltiptext a");
  if (anchorElement) {
    // Call checkLinkSafety function to determine if the link is safe
    checkLinkSafety(anchorElement.href, function(isSafe) {
      // Set the title attribute of the anchor element based on link safety
      anchorElement.title = isSafe ? "✅ Safe Link" : "❌ Unsafe Link";
    });
  }
});

// Function to check the safety of a link
function checkLinkSafety(url, callback) {
  // For demonstration purposes, assume all links are safe
  callback(true);
}
