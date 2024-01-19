const usernameField = document.getElementById("signin-username");
const passwordField = document.getElementById("signin-password");
const submitButton = document.getElementById("submit-login-button");
const signupButton = document.getElementById("signup-button");
const infoField = document.getElementById("info");
const genderField = document.getElementById("select-menu");
const profileImg = document.getElementById("profile-img");
// const root = document.querySelector(":root");
// const colorPicker = document.getElementById("color-picker");
let username;
let password;
let account;

function checkValidInput() {
  if (!(usernameField.value.length >= 3 && passwordField.value.length >= 3)) {
    infoField.innerText = `Try a longer password or username!`;
    infoField.style.opacity = 1;
  } else if (
    usernameField.value.includes(" ") ||
    passwordField.value.includes(" ")
  ) {
    infoField.innerText = `Spaces are not allowed!`;
    infoField.style.opacity = 1;
  } else if (signIn()) {
    infoField.innerText = `"${usernameField.value}" is already taken!`;
    infoField.style.opacity = 1;
  } else {
    return true;
  }
}

function isMale() {
  if (genderField.value == 1) {
    return false;
  } else {
    return true;
  }
}

function signIn() {
  username = usernameField.value;
  password = passwordField.value;
  for (i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
}

function clearForm() {
  usernameField.value = "";
  passwordField.value = "";
}

submitButton.addEventListener("click", () => {
  if (signIn()) {
    window.location.href = "home/home.html";
  } else {
    infoField.innerText = `Wrong password or username!`;
    infoField.style.opacity = 1;
  }
  clearForm();
});

signupButton.addEventListener("click", () => {
  if (checkValidInput()) {
    account = {
      username: usernameField.value,
      password: passwordField.value,
      gender: isMale() ? "male" : "female",
    };
    console.log(account.gender);
    database.push(account);
    signupButton.setAttribute("disabled", "true");
    infoField.style.opacity = 0;
  }
  clearForm();
});

// colorPicker.addEventListener("change", () => {
//   root.style.setProperty("--primary-color", colorPicker.value);
// });

genderField.addEventListener("change", () => {
  if (isMale()) {
    profileImg.setAttribute("src", "undraw_pic_profile_re_7g2h.svg");
  } else {
    profileImg.setAttribute("src", "undraw_female_avatar_efig.svg");
  }
});

let database = [
  {
    username: "jasper",
    password: "0404",
    gender: "male",
  },
];
