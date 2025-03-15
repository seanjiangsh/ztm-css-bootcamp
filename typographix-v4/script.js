const themeSwitcher = document.getElementById("theme-switcher");

// Update Theme Icon
function updateThemeIcon(isDarkMode) {
  themeSwitcher.children[0].textContent = isDarkMode
    ? "Dark Mode"
    : "Light Mode";

  themeSwitcher.children[1].classList.replace(
    isDarkMode ? "fa-sun" : "fa-moon",
    isDarkMode ? "fa-moon" : "fa-sun"
  );
}

// Determine if Dark Mode is preferred
function preferredDarkMode() {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  return darkModeMediaQuery.matches;
}

// Set the theme based on the preferred mode
function setThemeBasedOnPreferredMode() {
  const isDarkMode = preferredDarkMode();
  document.documentElement.setAttribute(
    "data-theme",
    isDarkMode ? "dark" : "light"
  );
  updateThemeIcon(isDarkMode);
}

// Switch Theme
function switchTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme === "dark");
}

// Event Listener
themeSwitcher.addEventListener("click", switchTheme);

// Check Local Storage For Theme
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme === "dark");
  } else {
    setThemeBasedOnPreferredMode();
  }
}

// Listen for changes in the OS theme preference
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", setThemeBasedOnPreferredMode);

// Initialize Theme
initializeTheme();

// ----------------------------------------------------------------

// Navigation
const nav = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
}

function hideMenu() {
  nav.classList.remove("active");
  menuIcon.classList.remove("active");
}
