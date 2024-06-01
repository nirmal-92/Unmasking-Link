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
