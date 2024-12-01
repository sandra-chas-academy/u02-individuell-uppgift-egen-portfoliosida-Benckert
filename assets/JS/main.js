// Main JS-file, import here
const navigation = document.getElementById("navigation");
const navigationLinks = document.getElementById("navigationLinks");
const navigationToggle = document.getElementById("navigationToggle");

navigationToggle.addEventListener("click", toggleNavigation);
window.addEventListener("resize", toggleNavigationClass);

navigationLinks.addEventListener("click", (e) => {
  if (e.target.classList.contains("current"))
    toggleNavigation();
});

function toggleNavigation() {
  navigation.classList.toggle("hidden");
  updateToggleIcon();
}

function updateToggleIcon() {
  navigationToggle.classList.toggle("fa-bars");
  navigationToggle.classList.toggle("fa-xmark");
}

function toggleNavigationClass() {
  if (window.innerWidth >= 1125) {
    navigation.classList.remove("navigation--mobile");
    navigation.classList.remove("hidden");
    navigationToggle.style.display = "none";
  }
  else {
    navigation.classList.add("navigation--mobile");
    navigation.classList.add("hidden");
    navigationToggle.style.display = "inline-block";
  }
}
