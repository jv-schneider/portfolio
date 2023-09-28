const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const database = {
  users: [
    {
      name: "jasper",
      password: "0404",
      entries: 0,
    },
    {
      name: "luise",
      password: "0409",
      entries: 0,
    },
  ],
};

app.get("/", (req, res) => {
  res.json(database.users);
});

app.post("/signin", (req, res) => {
  if (
    req.body.name === database.users[1].name &&
    req.body.password === database.users[1].password
  ) {
    res.json("succes");
  } else {
    res.status(400).json("something went wrong");
  }
  res.json("signing in");
});

app.post("/signup", (req, res) => {
  database.users.push({
    name: req.body.name,
    password: req.body.password,
    entries: 0,
  });
  res.json("user '" + req.body.name + "' created");
});

app.listen(port, () => {
  console.log("the app is running on port " + port);
});
