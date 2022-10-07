const express = require("express");

const router = express.Router();

//路由级别-响应前端的get请求
router.get("/", (req, res) => {
  console.log(req.query);
  res.send("login-get");
});

//路由级别-响应前端的post请求
router.post("/", (req, res) => {
  console.log(req.body); //必须配置好中间件

  const { username, password } = req.body;
  if (username == "nash" && password == "123456") {
    res.send({ ok: 1 });
  } else {
    res.send({ ok: 0 });
  }
});

module.exports = router;
