const express = require("express");

const router = express.Router();

//路由级别-响应前端的get请求
router.get("/", (req, res) => {
  //  res.send     可以返回片段和json数据
  //  res.json     只能返回json数据
  //  res.render   只能返回模板
  res.render("login", { isShow: false }); //找views文件夹下的login.ejs
});

router.post("/validate", (req, res) => {
  if (req.body.username === "nash" && req.body.password === "123456") {
    console.log("登录成功");

    res.redirect("/home");
  } else {
    console.log("登陆失败");
    res.render("login", { isShow: true });
  }
});

module.exports = router;
