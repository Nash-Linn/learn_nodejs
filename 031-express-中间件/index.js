const express = require("express");

const app = express();

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
  next();
};

const fun3 = (req, res) => {
  res.send("返回内容");
};

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

//在这之后的接口都会进行fun1这个验证函数
app.use(fun1);

// app.use("/home",fun1);  表示只有home 需要验证

app.get("/home", [fun1, fun2, fun3], (req, res) => {
  //还能继续跟函数
  res.send("函数");
});

app.listen(3000, () => {
  console.log("server start");
});
