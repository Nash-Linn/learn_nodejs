var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  //读取前端的cookie值
  // console.log(" req.cookies", req.cookies);

  //设置前端的cookie值
  res.cookie("gender", "male");

  res.send("respond with a resource");
});

module.exports = router;
