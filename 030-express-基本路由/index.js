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

const fun1 = (req, res, next) => {
  //验证token
  console.log("验证token");
  let isValid = true;
  if (isValid) {
    res.data = "哈哈哈";
    next();
  } else {
    res.send("err");
  }
};

const fun2 = (req, res, next) => {
  console.log("查询数据库");
  console.log("res", res);
  next();
};

const fun3 = (req, res) => {
  res.send("返回内容");
};

app.get("/home", [fun2, fun3], (req, res) => {
  //还能继续跟函数
  res.send("函数");
});

app.listen(3000, () => {
  console.log("server start");
});
