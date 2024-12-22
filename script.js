function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add this to your existing JavaScript
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Profile section animation
    lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/3c2f9b78-a321-47d3-9ab0-f3f00a6f0da7/9ZW10AqQrD.json' // Coding developer animation
    });

    // About section animation
    lottie.loadAnimation({
        container: document.getElementById('about-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/cf28bdf7-3a56-4f3e-a8d9-e56625c206b5/72IgXkP6q9.json' // Different developer animation
    });

    // LinkedIn icon animation
    lottie.loadAnimation({
        container: document.getElementById('linkedin-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/14daa51d-0d2e-4e2e-89f5-ed0a37d6b86e/JHtGBQcpGj.json' // LinkedIn icon animation
    });
});