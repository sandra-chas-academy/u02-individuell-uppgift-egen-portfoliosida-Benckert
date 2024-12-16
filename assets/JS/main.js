const navigation = document.getElementById("navigation");
const navigationLinks = document.getElementById("navigationLinks");
const navigationToggle = document.getElementById("navigationToggle");

const headerLogo = document.getElementById("headerLogo");
const headerTitle = document.getElementById("headerTitle");
let headerTitleCount = 0;

headerLogo.addEventListener("click", () => {
  if (!document.body.classList.contains("index"))
    window.location.href = "index.html";
})

headerTitle.addEventListener("click", () => {
  let color;
  headerTitleCount++;

  switch (headerTitleCount) {
    case 1:
      color = "var(--color-white)";
      break;
    case 2:
      color = "var(--color-dark-cyan)";
      break;
    case 3:
      color = "var(--color-black)";
      break;
    case 4:
      color = "var(--color-midnight-green)";
      break;
  }

  headerTitle.style.color = color;

  if (headerTitleCount === 4)
    headerTitleCount = 0
});

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

// Fetch

async function fetchJSON(file) {
  const url = `assets/JSON/${file}.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // console.log(json.first.title);
    return json;

  } catch (error) {
    console.error(error.message);
  }
}

const work = await fetchJSON("work");
const education = await fetchJSON("education");

function setWork() {
  document.getElementById("firstWork").innerHTML = `
    <section class="about__flex">
      <h3 class="about__title">
        ${work.first.title}
      </h3>
      <p class="about__workload">
        ${work.first.workload}
      </p>
    </section>

    <section class="about__grid">
      <span class="about__company"><i class="fa-solid fa-fw fa-house"></i>
        &nbsp;${work.first.company}
      </span>
      <span class="about__date"><i class="fa-solid fa-fw fa-calendar"></i>
        &nbsp;${work.first.date}
      </span>
      <span class="about__location"><i class="fa-solid fa-fw fa-location-dot"></i>
        &nbsp;${work.first.location}
      </span>
    </section>`

  document.getElementById("secondWork").innerHTML = `
    <section class="about__flex">
      <h3 class="about__title">
        ${work.second.title}
      </h3>
      <p class="about__workload">
        ${work.second.workload}
      </p>
    </section>

    <section class="about__grid">
      <span class="about__company"><i class="fa-solid fa-fw fa-house"></i>
        &nbsp;${work.second.company}
      </span>
      <span class="about__date"><i class="fa-solid fa-fw fa-calendar"></i>
        &nbsp;${work.second.date}
      </span>
      <span class="about__location"><i class="fa-solid fa-fw fa-location-dot"></i>
        &nbsp;${work.second.location}
      </span>
    </section>`

  document.getElementById("thirdWork").innerHTML = `
    <section class="about__flex">
      <h3 class="about__title">
        ${work.third.title}
      </h3>
      <p class="about__workload">
        ${work.third.workload}
      </p>
    </section>

    <section class="about__grid">
      <span class="about__company"><i class="fa-solid fa-fw fa-house"></i>
        &nbsp;${work.third.company}
      </span>
      <span class="about__date"><i class="fa-solid fa-fw fa-calendar"></i>
        &nbsp;${work.third.date}
      </span>
      <span class="about__location"><i class="fa-solid fa-fw fa-location-dot"></i>
        &nbsp;${work.third.location}
      </span>
    </section>`
}

function setEducation() {
  document.getElementById("firstEducation").innerHTML = `
    <section class="about__flex">
      <h3 class="about__title">
        ${education.first.title}
      </h3>
      <p class="about__workload">
        ${education.first.workload}
      </p>
    </section>

    <section class="about__grid">
      <span class="about__company"><i class="fa-solid fa-fw fa-house"></i>
        &nbsp;${education.first.company}
      </span>
      <span class="about__date"><i class="fa-solid fa-fw fa-calendar"></i>
        &nbsp;${education.first.date}
      </span>
      <span class="about__location"><i class="fa-solid fa-fw fa-location-dot"></i>
        &nbsp;${education.first.location}
      </span>
    </section>`

  document.getElementById("secondEducation").innerHTML = `
    <section class="about__flex">
      <h3 class="about__title">
        ${education.second.title}
      </h3>
      <p class="about__workload">
        ${education.second.workload}
      </p>
    </section>

    <section class="about__grid">
      <span class="about__company"><i class="fa-solid fa-fw fa-house"></i>
        &nbsp;${education.second.company}
      </span>
      <span class="about__date"><i class="fa-solid fa-fw fa-calendar"></i>
        &nbsp;${education.second.date}
      </span>
      <span class="about__location"><i class="fa-solid fa-fw fa-location-dot"></i>
        &nbsp;${education.second.location}
      </span>
    </section>`

  document.getElementById("thirdEducation").innerHTML = `
    <section class="about__flex">
      <h3 class="about__title">
        ${education.third.title}
      </h3>
      <p class="about__workload">
        ${education.third.workload}
      </p>
    </section>

    <section class="about__grid">
      <span class="about__company"><i class="fa-solid fa-fw fa-house"></i>
        &nbsp;${education.third.company}
      </span>
      <span class="about__date"><i class="fa-solid fa-fw fa-calendar"></i>
        &nbsp;${education.third.date}
      </span>
      <span class="about__location"><i class="fa-solid fa-fw fa-location-dot"></i>
        &nbsp;${education.third.location}
      </span>
    </section>`
}

function loadAbout() {
  setWork();
  setEducation();
}

if (document.title === "Kristoffer Benckert - About")
  loadAbout();

toggleNavigationClass();
