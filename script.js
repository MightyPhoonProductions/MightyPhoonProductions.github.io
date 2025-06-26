// Theme toggle logic
document.getElementById("toggle-theme").addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("light");
    body.classList.toggle("dark");
  });
  
  // Animate fade-in sections after page load
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
      el.classList.add("visible");
    });
  });
  