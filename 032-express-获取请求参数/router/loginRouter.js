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
  res.send({ ok: 1 });
});

module.exports = router;
