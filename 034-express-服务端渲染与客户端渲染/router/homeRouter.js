const express = require("express");

const router = express.Router();

//路由级别
router.get("/", (req, res) => {
  res.send("home");
});

router.get("/list", (req, res) => {
  res.send(["1111", "2222", "3333"]);
});

router.get("/swiper", (req, res) => {
  res.send("home/swiper");
});

router.get("/sider", (req, res) => {
  res.send("home/sider");
});

module.exports = router;
