function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Event listener for the toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
