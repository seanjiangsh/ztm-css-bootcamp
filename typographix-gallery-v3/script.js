// Allow for selection of image to trigger modal view
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.title = "Click to Enlarge";
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector("img").src;
    // Create the modal div
    const modal = document.createElement("div");
    modal.classList.add("modal");
    // Create the img element
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.alt = "Enlarged Abstract Image";
    // Append the img element to the modal div
    modal.appendChild(imgElement);
    // Add the modal to the body
    document.body.appendChild(modal);
    setTimeout(() => {
      imgElement.classList.add("reveal");
    }, 10);
    // Remove the modal when it's clicked
    modal.addEventListener("click", () => {
      imgElement.classList.remove("reveal");
      setTimeout(() => {
        modal.remove();
      }, 300);
    });
  });
});

// Function to check if page is scrolled and adjust the logo size
function checkScroll() {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  let scrollPosition = window.scrollY;

  // Add/remove 'scrolled' class based on scroll position
  if (scrollPosition > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Calculate new font size based on scroll position
  let newSize = 3 - scrollPosition * 0.03; // Decrease by 0.03 rem for every 1px scrolled

  // Clamping the font size between 1.5rem and 3rem
  newSize = Math.max(1.5, newSize);
  newSize = Math.min(3, newSize);

  logo.style.fontSize = newSize + "rem";
}

// Event listener for scroll event
window.addEventListener("scroll", checkScroll);

// Hide the grid and show the loading cube in 5s
const grid = document.querySelector(".grid");
grid.style.display = "none";
const footer = document.querySelector("footer");
footer.style.position = "fixed";
footer.style.bottom = "0";

const loadingCube = document.querySelector(".sk-cube-grid");
loadingCube.style.display = "block";

setTimeout(() => {
  grid.style.display = "grid";
  footer.style.position = "relative";
  footer.style.bottom = "auto";
  loadingCube.style.display = "none";
}, 5000);
