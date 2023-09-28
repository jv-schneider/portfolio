const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("the app is working");
});

app.post("/signin", (req, res) => {
  res.send("signing in");
});

app.listen(port, () => {
  console.log("the app is running on port " + port);
});
