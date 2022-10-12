var express = require("express");
const JWT = require("../util/JWT");
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

//测试 token 的 加密与验证过程

// var jwt = require("jsonwebtoken");
// var token = jwt.sign(
//   {
//     //数据
//     data: "nash",
//   },
//   "anykey", // 密钥
//   {
//     expiresIn: "10s",  //过期时间
//   }
// );

// console.log("token", token);

// var decoded = jwt.verify(token, "anykey");

// console.log("decoded", decoded);

// setTimeout(() => {
//   let decoded = jwt.verify(token, "anykey");
//   console.log("decoded", decoded);
// }, 11000);

// const token = JWT.generate({ name: "nash" }, "10s");
// console.log("token", token);

// setTimeout(() => {
//   let data_9s = JWT.verify(token);
//   console.log("data_9s", data_9s);
// }, 9000);

// setTimeout(() => {
//   let data_11s = JWT.verify(token);
//   console.log("data_11s", data_11s);
// }, 11000);

module.exports = router;
