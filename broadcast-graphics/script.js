const imageContainer = document.querySelector(".image-container");
const goldBar = document.querySelector(".gold-bar");
const blackBar = document.querySelector(".black-bar");
const bottomBar = document.querySelector(".bottom-bar");
const topBar = document.querySelector(".top-bar");

const mainBarText = document.querySelector(".main-bar-text");
const bottomBarText = document.querySelector(".bottom-bar-text");

// Adjust bar widths to fit text
function adjustBarWidth() {
  // Get width of main bar text and bottom bar text
  const mainBarTextWidth = mainBarText.offsetWidth;
  const bottomBarTextWidth = bottomBarText.offsetWidth;

  // Add margin left from main bar text
  const mainBarTextStyle = window.getComputedStyle(mainBarText);
  const mainBarTextMarginLeft = parseFloat(
    mainBarTextStyle.getPropertyValue("margin-left")
  );

  // Use the width of main or bottom bar text layer, whichever is larger
  const barWidth =
    Math.max(mainBarTextWidth, bottomBarTextWidth) + mainBarTextMarginLeft;

  // Set the width of bars
  blackBar.style.width = `${barWidth}px`;
  bottomBar.style.width = `${barWidth + 8}px`;
  goldBar.style.width = `${barWidth + 15}px`;
}

function runAnimationIn() {
  // Set clip-path to match the beginning of the animation
  goldBar.style.clipPath = "polygon(0 0, 0 100%, 0 100%, 0 0)";
  blackBar.style.clipPath = "polygon(0 0, 0 100%, 0 100%, 0 0)";

  // Re-run animations
  imageContainer.style.animation = "revealLeft 0.5s linear forwards";
  goldBar.style.animation = "slideIn 0.5s ease-in-out forwards 0.1s";
  blackBar.style.animation = "slideIn 0.5s ease-in-out forwards 0.2s";
  bottomBar.style.animation = " slideDownBottom 0.6s ease-in-out forwards 0.2s";
  topBar.style.animation = "slideUpTop 0.5s ease-in forwards 0.2s";
}

function runAnimationOut() {
  // Set clip-path to match the end of animation in
  goldBar.style.clipPath = "polygon(15px 0, 100% 0, 100% 100%, 0 100%)";
  blackBar.style.clipPath = "polygon(15px 0, 100% 0, 100% 100%, 0 100%)";

  // Re-run animations
  imageContainer.style.animation = "hideLeft 0.5s linear forwards";
  goldBar.style.animation = "slideOut 0.4s ease-in-out forwards 0.3s";
  blackBar.style.animation = "slideOut 0.4s ease-in-out forwards 0.2s";
  bottomBar.style.animation = " slideUpBottom 0.3s ease-in forwards";
  topBar.style.animation = "slideDownTop 0.3s ease-in forwards";
}

// keyboard shortcuts to toggle animation
let isGraphicVisible = true;
window.addEventListener("keydown", (e) => {
  e.preventDefault();

  // Toggle animation on spacebar press
  if (e.code === "Space") {
    if (isGraphicVisible) {
      runAnimationOut();
    } else {
      runAnimationIn();
    }
    isGraphicVisible = !isGraphicVisible;
  }
});

window.onload = adjustBarWidth;
