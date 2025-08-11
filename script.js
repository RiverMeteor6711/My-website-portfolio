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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
  console.log(entry)
  if (entry.isIntersecting) {
    entry.target.classList.add('show');}
  else {
    entry.target.classList.remove('show');}
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements. forEach((el) => observer.observe(el));

// Overlay for all popups
const popupTriggers = document.querySelectorAll('.popup-hover');
const pageOverlay = document.getElementById('pageOverlay');

if (pageOverlay && popupTriggers.length > 0) {
  popupTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
      pageOverlay.classList.add('active');
    });
    trigger.addEventListener('mouseleave', () => {
      pageOverlay.classList.remove('active');
    });
  });
}