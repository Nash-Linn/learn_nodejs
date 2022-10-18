const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
const bodyParser = require("koa-bodyparser");
const views = require("koa-views");

const app = new Koa();
const router = require("./routes");

app.use(static(path.join(__dirname, "public")));

//配置模板引擎
app.use(
  views(path.join(__dirname, "views"), {
    extension: "ejs",
  })
);
//获取post参数
app.use(bodyParser());

app.use(router.routes());
app.listen(3000);
