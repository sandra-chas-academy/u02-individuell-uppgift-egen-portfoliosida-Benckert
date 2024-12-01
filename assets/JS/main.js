// Main JS-file, import here
const navToggle = document.getElementById("navigationToggle");
const navLinks = document.getElementById("navigationLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  updateToggleIcon();
});

function updateToggleIcon() {
  navToggle.classList.toggle("fa-bars");
  navToggle.classList.toggle("fa-xmark");
}
