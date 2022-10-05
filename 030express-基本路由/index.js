const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/login", (req, res) => {
  res.send(`
  <html>
    <h1>login</h1>
  </html>
 `);
});

app.listen(3000, () => {
  console.log("server start");
});
