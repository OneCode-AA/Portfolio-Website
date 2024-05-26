const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const icon = document.querySelector(".btn-icon");
const dots = document.querySelector(".ui-dots");

// to save the light mode by using the object "local storage".

// function to store the value true if the light mode is activated or false if not

function store(value) {
  localStorage.setItem("light-mode", value);
}

// function that indicates if the 'light-mode' property exists. it loads the page as it was left

function load() {
  const liteMode = localStorage.getItem("light-mode");

  // if the light-mode was never activated

  if (!liteMode) {
    store(false);
    icon.classList.add("fa-sun");
  } else if (liteMode == "true") {
    // if the light mode is activated
    body.classList.add("light-mode");
    icon.classList.add("fa-moon");
  } else if (liteMode == "false") {
    // if the light-mode exist but is disabled
    icon.classList.add("fa-sun");
  }
}

btn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  icon.classList.add("animated");

  if (body.classList.contains("light-mode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    dots.style.backgroundColor = "#000";
  } else {
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  }

  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
});
