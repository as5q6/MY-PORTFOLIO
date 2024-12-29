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

function openArticle(articleId) {
  const modal = document.getElementById('article-modal');
  const contentContainer = document.getElementById('modal-content-container');
  
  // Load article content based on articleId
  if (articleId === 'software-architecture') {
    contentContainer.innerHTML = `
      <h1>Understanding Software Architecture Patterns</h1>
      
      <section class="article-section">
        <h2>What is Software Architecture?</h2>
        <p>Software architecture refers to the fundamental structures of a software system and the discipline of creating such structures and systems. Each structure comprises software elements, relations among them, and properties of both elements and relations.</p>
      </section>

      <section class="article-section">
        <h2>Common Architecture Patterns</h2>
        
        <h3>1. Layered (N-tier) Architecture</h3>
        <dotlottie-player 
          src="https://lottie.host/2a32e31f-5443-4cc7-8154-4a1e87d052cc/BlBFcHhweY.json" 
          background="transparent" 
          speed="1" 
          style="width: 200px; height: 200px" 
          loop 
          autoplay>
        </dotlottie-player>
        <p>The most common architecture pattern, known for its simplicity and separation of concerns. Components are organized in horizontal layers, each serving a specific role.</p>

        <h3>2. Microservices Architecture</h3>
        <dotlottie-player 
          src="https://lottie.host/c517fac7-4171-4ad0-81f8-01e1bbeb8859/UrdbSILFk8.lottie" 
          background="transparent" 
          speed="1" 
          style="width: 200px; height: 200px" 
          loop 
          autoplay>
        </dotlottie-player>
        <p>A collection of small, autonomous services where each service is self-contained and implements a single business capability.</p>

        <!-- Add more architecture patterns as needed -->
      </section>
    `;
  }
  
  modal.style.display = 'block';
}

function closeArticle() {
  const modal = document.getElementById('article-modal');
  modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('article-modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}