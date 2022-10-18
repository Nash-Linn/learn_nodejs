const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
const bodyParser = require("koa-bodyparser");
const views = require("koa-views");
const session = require("koa-session-minimal");

const app = new Koa();
const router = require("./routes");

app.use(static(path.join(__dirname, "public")));

//配置模板引擎
app.use(
  views(path.join(__dirname, "views"), {
    extension: "ejs",
  })
);
//session 配置
app.use(
  session({
    key: "tokenTest",
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

//session 判断拦截
app.use(async (ctx, next) => {
  if (ctx.url.includes("login")) {
    await next();
    return;
  }
  if (ctx.session.user) {
    //每次操作如果有session 就更新时间
    ctx.session.data = Date.now();
    await next();
  } else {
    ctx.redirect("/login");
  }
});

//获取post参数模块
app.use(bodyParser());

app.use(router.routes());
app.listen(3000);
