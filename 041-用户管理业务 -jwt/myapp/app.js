var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//引入session
var session = require("express-session");
var MongoStore = require("connect-mongo");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/login");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev")); //开发时控制台记录日志
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//使用注册express-session中间件
app.use(
  session({
    //session名字
    name: "system-token",
    //密钥
    secret: "mySystemSecret",
    cookie: {
      //过期时间
      maxAge: 1000 * 60 * 60,
      secure: false, //为true时候表示只有https协议才能访问cookie
    },

    resave: "true", //重新设置session后,会自动重新计算过期时间
    //为true 一开始就会给一个无效cookie
    saveUninitialized: true,

    rolling: true, //为true表示超时前刷新，cookie会重新计时；
    //为false表示在超时前刷新多少次，都是按照第一次刷新开始计时
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/sys_session",
      ttl: 1000 * 60 * 10,
    }),
  })
);

//设置中间件--session过期校验
app.use((req, res, next) => {
  //排除login 相关的路由和接口
  if (req.url.includes("login")) {
    next();
    return;
  }
  if (req.session.user) {
    //在过期时间内访问过接口 过期时间重新计算
    //重新设置session
    req.session.date = Date.now();
    next();
  } else {
    //是接口,返回 错误码
    //不是接口,就重定向
    req.url.includes("api")
      ? res.status(401).send({ ok: 0, code: 401 })
      : res.redirect("/login");
  }
});

app.use("/", indexRouter);
app.use("/api", usersRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
