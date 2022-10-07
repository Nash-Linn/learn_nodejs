const express = require("express");

const app = express();
const LoginRouter = require("./router/loginRouter");
const HomeRouter = require("./router/homeRouter");

//配置模板引擎
app.set("views", "./views");
app.set("view engine", "ejs");

//配置静态资源

app.use(express.static("public")); //  http://localhost:3000/home.html
// app.use(express.static("static"));
app.use("/static", express.static("static")); //  http://localhost:3000/static/favicon.ico

//配置解析post参数的中间件-不用下载第三方，内置
app.use(express.urlencoded({ extended: false })); //post参数

//
app.use(express.json()); //post参数 - {name:"",age:100}

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
