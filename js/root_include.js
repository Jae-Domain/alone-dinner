document.addEventListener("DOMContentLoaded", function() {
  // Load navbar
  fetch("partials/navbar.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("navbar-placeholder").innerHTML = html;
    });

  // Load footer
  fetch("partials/footer.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("footer-placeholder").innerHTML = html;
    });
});
