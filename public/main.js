// Nav
const menuToggle = document.querySelector(".menuToggle input");
const nav = document.querySelector("nav ul");
document.addEventListener("click", function (e) {
  const span = document.querySelectorAll(".menuToggle span");
  if (e.target.classList.contains("input")) {
    nav.classList.toggle("menuSlide");
    span.classList.toggle("menuSlide");
  }
});

// Slider
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
