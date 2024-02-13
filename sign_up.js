const passwordInput = document.getElementById("password_input");
const confirmPasswordInput = document.getElementById("confirm_password");
const togglePassword = document.getElementById("eye");
const hidePassword = document.getElementById("hide_eye");
const signUp = document.getElementById("sign_up_button");
const login = document.getElementById("footer_link");
const loader = document.getElementById("loader");

// Toggle password visibility
togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    hidePassword.style.display = "block";
    togglePassword.style.display = "none";
  } else {
    passwordInput.type = "password";
  }
});
hidePassword.addEventListener("click", () => {
  if (passwordInput.type === "text") {
    passwordInput.type = "password";
    hidePassword.style.display = "none";
    togglePassword.style.display = "block";
  } else {
    passwordInput.type = "text";
  }
});
