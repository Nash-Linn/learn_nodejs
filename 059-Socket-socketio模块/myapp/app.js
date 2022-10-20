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
var chatRouter = require("./routes/chat");
const JWT = require("./util/JWT");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev")); //开发时控制台记录日志
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));
//设置中间件--session过期校验
app.use((req, res, next) => {
  //排除login 相关的路由和接口
  if (req.url.includes("login")) {
    next();
    return;
  }

  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];

  if (token) {
    const payload = JWT.verify(token);
    if (payload) {
      console.log("payload", payload);
      //重新计算token过期时间
      const newToken = JWT.generate(
        {
          id: payload.id,
          username: payload.username,
        },
        "10h"
      );
      res.header("Authorization", newToken);
      next();
    } else {
      res.status(401).send({
        errCode: -1,
        errInfo: "token过期",
      });
    }
  } else {
    next();
  }
});

app.use("/", indexRouter);
app.use("/api", usersRouter);
app.use("/login", loginRouter);
app.use("/chat", chatRouter);

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
