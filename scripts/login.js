function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// This function is unchanged
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// This function is unchanged
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

function login() {
  var username = document.getElementById("login-page-username").value;
  var password = document.getElementById("login-page-password").value;
  var users = JSON.parse(localStorage.getItem("users") || "[]");

  // Check if the user exists and the password matches (case-insensitive for username, case-sensitive for password)
  if (
    users.some(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password === password
    )
  ) {
    setCookie("loggedIn", "true", 1);
    window.location.href = "welcome.html"; // Redirect to a new page upon successful login
  } else {
    alert("Invalid username or password.");
  }

  // Clear input fields
  document.getElementById("login-page-username").value = "";
  document.getElementById("login-page-password").value = "";
}

function register() {
  var username = document.getElementById("register-page-username").value;
  var password = document.getElementById("register-page-password").value;
  var users = JSON.parse(localStorage.getItem("users") || "[]");

  if (
    users.some((user) => user.username.toLowerCase() === username.toLowerCase())
  ) {
    alert("Username already taken.");
    return;
  }

  // Password validation code
  var hasUpperCase = /[A-Z]/.test(password);
  var hasSpecialChar = /[!@#$%^&*]/.test(password);
  var hasNumber = /[0-9]/.test(password); // Changed from \d to [0-9] for simplicity
  var isLongEnough = password.length >= 6;

  if (!hasUpperCase || !hasSpecialChar || !hasNumber || !isLongEnough) {
    alert("Password does not meet the criteria.");
    return;
  }

  // Store user information in local storage
  users.push({ username: username, password: password });
  localStorage.setItem("users", JSON.stringify(users));

  // Set a cookie indicating successful registration
  setCookie("registered", "true", 1);

  // Clear input fields after successful registration
  document.getElementById("register-page-username").value = "";
  document.getElementById("register-page-password").value = "";

  alert("Registration successful. You can now log in.");
  showLogin();
}
function showRegister() {
  document.getElementById("login-page-form").style.display = "none";
  document.getElementById("register-page-form").style.display = "block";

  document.getElementById("login-page-username").value = "";
  document.getElementById("login-page-password").value = "";
}

function showLogin() {
  document.getElementById("register-page-form").style.display = "none";
  document.getElementById("login-page-form").style.display = "block";

  document.getElementById("register-page-username").value = "";
  document.getElementById("register-page-password").value = "";
}

// New function: Display the list of users
function displayUsers() {
  var userList = document.getElementById("user-list");
  userList.innerHTML = ""; // Clear the list
  var users = JSON.parse(localStorage.getItem("users") || "[]");

  users.forEach(function (user, index) {
    var listItem = document.createElement("li");
    listItem.textContent = user.username;
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      removeUser(index);
    };
    listItem.appendChild(removeButton);
    userList.appendChild(listItem);
  });
}

// New function: Remove a user from the list
function removeUser(index) {
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  users.splice(index, 1); // Remove the user
  localStorage.setItem("users", JSON.stringify(users)); // Update the local storage
  displayUsers(); // Update the list display
}

// Check if the user is already logged in
window.onload = function () {
  if (getCookie("loggedIn")) {
    window.location.href = "welcome.html";
  } else {
    // New code: Display users if not logged in
    displayUsers();
  }
};
