document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // highlight active page
      const links = document.querySelectorAll(".nav-links a");
      const currentUrl = window.location.pathname;
      links.forEach(link => {
        if (link.getAttribute("href") === currentUrl.split("/").pop()) {
          link.classList.add("active");
        }
      });
    });
  
  // load shared footer
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      const footerContainer = document.getElementById("footer");
      if (footerContainer) footerContainer.innerHTML = data;

      // update footer year dynamically
      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    });
});
