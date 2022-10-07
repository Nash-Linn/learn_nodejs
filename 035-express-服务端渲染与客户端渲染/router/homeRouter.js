const express = require("express");

const router = express.Router();

//路由级别
router.get("/", (req, res) => {
  let list = ["1111", "2222", "3333"];
  let myhtml = "<b>我是加粗</b>";
  res.render("home", { list, myhtml });
});

module.exports = router;
