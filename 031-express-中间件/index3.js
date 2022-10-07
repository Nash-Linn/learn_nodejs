const express = require("express");

const app = express();
const LoginRouter = require("./router3/loginRouter");
const HomeRouter = require("./router3/homeRouter");

app.use("/login", LoginRouter);

//应用级别中间件
app.use((req, res, next) => {
  console.log("验证token");
  next();
});

app.use("/home", HomeRouter);

//错误要写后面
app.use((req, res) => {
  res.status(404).send("丢了");
});

app.listen(3000, () => {
  console.log("server start");
});
