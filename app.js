const usernameField = document.getElementById("signin-username");
const passwordField = document.getElementById("signin-password");
const submitButton = document.getElementById("submit-login-button");
const signupButton = document.getElementById("signup-button");
const infoField = document.getElementById("info");
const genderField = document.getElementById("select-menu");
const profileImg = document.getElementById("profile-img");
let username;
let password;
let account;

function notValid() {
  if (!(usernameField.value.length >= 3 && passwordField.value.length >= 3)) {
    return 1;
  } else if (
    usernameField.value.indexOf(" ") !== -1 &&
    passwordField.value.indexOf(" ") !== -1
  ) {
    return 2;
  } else {
    return 0;
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

function createAccount() {
  if (!signIn() && !notValid()) {
    account = {
      username: usernameField.value,
      password: passwordField.value,
    };
    database.push(account);
    signupButton.setAttribute("disabled", "true");
    infoField.style.opacity = 0;
  } else if (notValid() == 1) {
    infoField.innerText = `Try a longer password or username!`;
    infoField.style.opacity = 1;
  } else if (notValid() == 2) {
    infoField.innerText = `Spaces are not allowed!`;
    infoField.style.opacity = 1;
  } else {
    infoField.innerText = `Username: ${usernameField.value} is already taken!`;
    infoField.style.opacity = 1;
  }
  clearForm();
}

submitButton.addEventListener("click", () => {
  if (signIn()) {
    window.location.href = "https://youtube.com";
  } else {
    infoField.innerText = `Wrong password or username!`;
    infoField.style.opacity = 1;
  }
  clearForm();
});

genderField.addEventListener("change", () => {
  if (genderField.value == 1) {
    profileImg.setAttribute("src", "undraw_female_avatar_efig.svg");
  } else {
    profileImg.setAttribute("src", "undraw_pic_profile_re_7g2h.svg");
  }
});

signupButton.addEventListener("click", createAccount);

let database = [
  {
    username: "jasper",
    password: "0404",
    male: true,
  },
];
