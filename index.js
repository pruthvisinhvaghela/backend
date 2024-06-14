const express = require("express");
require("dotenv").config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`your app is running on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/hello", (req, res) => {
  res.send("<h2>hello pruthvi</h2>");
});
