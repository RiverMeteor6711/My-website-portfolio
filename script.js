// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all GitHub buttons
    const githubButtons = document.querySelectorAll('.js-github-btn');
    
    // Add click handler to each button
    githubButtons.forEach(button => {
      button.addEventListener('click', handleGithubButtonClick);
    });
  });
  
  /**
   * Handles clicks on GitHub buttons
   * @param {Event} event - The click event
   */
  function handleGithubButtonClick(event) {
    // Prevent default behavior (in case it's in a form)
    event.preventDefault();
    
    // Get the URL from data attribute
    const githubUrl = this.getAttribute('data-url');
    
    // Verify we have a URL
    if (!githubUrl) {
      console.error('No GitHub URL specified for this button');
      return;
    }
    
    // Open in new tab with security attributes
    window.open(githubUrl, '_blank', 'noopener,noreferrer');}


    



function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}