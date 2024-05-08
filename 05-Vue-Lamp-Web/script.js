var btn = document.getElementById("btn");
const light = document.querySelector(".light");

function toggleBtn() {
  btn.classList.toggle("active");
  light.classList.toggle("on");
}
