// Main JS-file, import here
const navigationToggle = document.getElementById("navigationToggle");
const navigation = document.getElementById("navigation");

navigationToggle.addEventListener("click", () => {
  navigation.classList.toggle("hidden");
  updateToggleIcon();
});

function updateToggleIcon() {
  navigationToggle.classList.toggle("fa-bars");
  navigationToggle.classList.toggle("fa-xmark");
}
