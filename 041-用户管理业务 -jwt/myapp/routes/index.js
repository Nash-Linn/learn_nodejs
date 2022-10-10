var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  //判断req.session.user
  // if (req.session.user) {
  //   res.render("index", { title: "Express" });
  // } else {
  //   res.redirect("/login");
  // }
  // 应该使用中间件 不然每个接口都要判断
  res.render("index", { title: "Express" });
});

module.exports = router;
