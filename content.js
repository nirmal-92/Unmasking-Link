<<<<<<< HEAD
// Add event listener to all links
const links = document.querySelectorAll('a');
const toggleBox = document.getElementById('toggle-box');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Show the toggle box
    toggleBox.classList.toggle('show');
  });
});
=======
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

// Add event listener to all links
const links = document.querySelectorAll('.global-tooltip-link');
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    const tooltip = document.getElementById('global-tooltip');
    const tooltipText = tooltip.querySelector('.tooltiptext');

    // Update the tooltip text
    if (link.href.startsWith('https')) {
      tooltipText.textContent = 'This is a safe link';
    } else {
      tooltipText.innerHTML = 'This Link is insecure<br>Unmasking Link<br>Suspicious score';
    }

    // Position the tooltip
    const linkRect = link.getBoundingClientRect();
    tooltip.style.top = linkRect.bottom + 'px';
    tooltip.style.left = linkRect.left + 'px';

    // Show the tooltip
    tooltip.classList.add('show');

    // Hide the tooltip after a delay
    setTimeout(() => {
      tooltip.classList.remove('show');
    }, 3000); // Adjust the delay as needed
  });
});
>>>>>>> 05ff1c0c7453d2ad3fe70de3c9b7e39ce0865d66
