// Navigation ------------------------------------
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

// Slideshow ---------------------------------------
let currentImageIndex = 0;
const images = document.querySelectorAll(".slide");

function switchImage() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
}

setInterval(switchImage, 5000);

// Banner ------------------------------------------
const bannerContent = document.getElementById("bannerContent");
let messageHTML =
  '<span class="contact-message">Contact us at email@example.com - We\'re here to help!</span>';
let repeatedMessage = messageHTML.repeat(10); // Create a string with the message repeated 10 times

// Set the repeated messages as the content
bannerContent.innerHTML = repeatedMessage + repeatedMessage; // Duplicate for infinite scrolling

// Houdini Worklet
CSS.paintWorklet.addModule(
  "https://unpkg.com/parallelowow@0.1.5/parallelowow.js"
);
