const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
const bodyParser = require("koa-bodyparser");
const views = require("koa-views");
const session = require("koa-session-minimal");

const app = new Koa();
const router = require("./routes");
const JWT = require("./util/JWT");

//数据库连接
require("./config/db.config");
app.use(static(path.join(__dirname, "public")));

//配置模板引擎
app.use(
  views(path.join(__dirname, "views"), {
    extension: "ejs",
  })
);

//token判断拦截
app.use(async (ctx, next) => {
  if (ctx.url.includes("login")) {
    await next();
    return;
  }

  const token = ctx.headers["authorization"]?.split(" ")[1];
  if (token) {
    const payload = JWT.verify(token);
    if (payload) {
      //重新计算过期时间
      const newToken = JWT.generate(
        {
          _id: payload.id,
          username: payload.username,
        },
        "10s"
      );
      ctx.set("Authorization", newToken);
      await next();
    } else {
      //设置401
      ctx.status = 401;
      ctx.body = {
        errCode: -1,
        errInfo: "token过期了",
      };
    }
  } else {
    await next();
  }
});

//获取post参数模块
app.use(bodyParser());

app.use(router.routes());
app.listen(3000);
