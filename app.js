const usernameField = document.getElementById("signin-username");
const passwordField = document.getElementById("signin-password");
const submitButton = document.getElementById("submit-login-button");
const signupButton = document.getElementById("signup-button");
let username;
let password;
let account;

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

function createAccount() {
  if (!signIn()) {
    account = {
      username: usernameField.value,
      password: passwordField.value,
    };
    database.push(account);
  } else {
    alert(usernameField.value + " is already taken");
  }
}

submitButton.addEventListener("click", () => {
  if (signIn()) {
    alert("You are now online!");
  } else {
    alert("wrong username or password!");
  }
});
signupButton.addEventListener("click", createAccount);

let database = [
  {
    username: "Tim",
    password: "passwort123",
  },
  {
    username: "Bob",
    password: "geheimnis",
  },
  {
    username: "Lisa",
    password: "hallo567",
  },
];
