document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 1025;
  const cooldownElements = new WeakMap();

  // Function to create and observe IntersectionObservers
  function createObserver(selector, observerOptions, inClass, outClass = null) {
    const items = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        const now = Date.now();
        const lastToggle = cooldownElements.get(element) || 0;

        // Skip if in cooldown period (500ms)
        if (now - lastToggle < 500) return;

        if (entry.isIntersecting) {
          element.classList.add(inClass);
          if (outClass) element.classList.remove(outClass);
        } else if (outClass) {
          element.classList.remove(inClass);
          element.classList.add(outClass);
        }

        cooldownElements.set(element, now);
      });
    }, observerOptions);

    items.forEach((item) => {
      observer.observe(item);
    });
  }

  // Create observers for different sections
  createObserver(
    "#about .phrase",
    { root: null, threshold: isMobile ? 0.5 : 1 },
    "active"
  );
  createObserver(
    "#gallery .image-box",
    { root: null, threshold: 0.3 },
    "active"
  );
  createObserver(
    "#blog .featured-article, #blog .article",
    { root: null, threshold: 0.5 },
    "fadeInUp",
    "fadeOutUp"
  );
  createObserver(
    "#contact > div",
    { root: null, threshold: 0.5 },
    "fadeInUp",
    "fadeOutUp"
  );
});

// Navigation ----------------------------------------
const nav = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");
const listItems = document.querySelectorAll("nav ul li a");

function toggleMenu() {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
  listItems.forEach((listItem) => {
    listItem.classList.toggle("active");
  });
}

function hideMenu() {
  nav.classList.remove("active");
  menuIcon.classList.remove("active");
  listItems.forEach((listItem) => {
    listItem.classList.remove("active");
  });
}

// Form Submission ---------------------------------
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Reset form
  this.reset();

  // Show toast notification
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 10000);
});
