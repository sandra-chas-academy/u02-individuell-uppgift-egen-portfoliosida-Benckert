// Main JS-file, import here
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  updateToggleIcon();
});

function updateToggleIcon() {
  navToggle.classList.toggle("fa-bars");
  navToggle.classList.toggle("fa-xmark");
}
