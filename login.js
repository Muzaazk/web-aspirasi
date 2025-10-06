let username = document.getElementById("username");
let password = document.getElementById("password");
let adminLogin = document.getElementById("adminLogin");
let loginBtn = document.getElementById("loginBtn");
let valueAdminLogin = false;

adminLogin.addEventListener("change", function () {
  if (adminLogin.checked) {
    valueAdminLogin = true;
  } else {
    valueAdminLogin = false;
  }
});

localStorage.setItem("userAdmin", "admin");
localStorage.setItem("passAdmin", "admin.123");
localStorage.setItem("userUser", "user");
localStorage.setItem("passUser", "user.123");
let userAdmin = localStorage.getItem("userAdmin");
let passAdmin = localStorage.getItem("passAdmin");
let userUser = localStorage.getItem("userUser");
let passUser = localStorage.getItem("passUser");

loginBtn.addEventListener("click", function () {
  if (
    username.value === userAdmin &&
    password.value === passAdmin &&
    valueAdminLogin === true
  ) {
    window.location.href = "admin.html";
  } else if (
    username.value === userUser &&
    password.value === passUser &&
    valueAdminLogin === false
  ) {
    window.location.href = "home.html";
  } else {
    alert("Username atau Password salah!");
    valueAdminLogin = false;
  }
});

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const eyeOpen = document.getElementById("eyeOpen");
const eyeClosed = document.getElementById("eyeClosed");

togglePassword.addEventListener("click", function () {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  eyeOpen.style.display = isHidden ? "inline" : "none";
  eyeClosed.style.display = isHidden ? "none" : "inline";
});
