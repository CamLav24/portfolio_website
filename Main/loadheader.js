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
});
