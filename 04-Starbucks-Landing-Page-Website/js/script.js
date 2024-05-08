var btn = document.getElementById("btn");

function toggleBtn() {
  btn.classList.toggle("activeBtn");
  document.body.classList.toggle("darkMode");
}

function imgSlidr(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircelColor(color) {
  const circel = document.querySelector(".circel");
  circel.style.background = color;
}
