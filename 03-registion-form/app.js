const titel = document.getElementById("titel");
const nameField = document.getElementById("nameField");
const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");
const conPass = document.getElementById("conPass");

signupBtn.onclick = function () {
  titel.innerHTML = "Sign Up";
  nameField.style.display = "block";
  conPass.style.display = "block";
};
signinBtn.onclick = function () {
  titel.innerHTML = "Login";
  nameField.style.display = "none";
  conPass.style.display = "none";
};
