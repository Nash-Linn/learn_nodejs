const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("11111");

  next();

  console.log("33333");
  res.send("hello word");
});

app.use((req, res, next) => {
  console.log("222222");
});

app.listen(3000);
