// Nav
document.addEventListener("click", function (e) {
  const nav = document.querySelector("nav ul");
  //   const span = document.querySelectorAll(".menu-toggle span");
  if (e.target.classList.contains("input")) {
    nav.classList.toggle("menuSlide");
    // span.classList.toggle("menuSlide");
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
