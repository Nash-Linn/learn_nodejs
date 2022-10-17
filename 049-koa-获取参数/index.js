const Koa = require("koa");
const static = require("koa-static");
const path = require("path");

const bodyParser = require("koa-bodyparser");

const app = new Koa();
const router = require("./routes");

app.use(static(path.join(__dirname, "public")));

//获取post参数
app.use(bodyParser());

app.use(router.routes());
app.listen(3000);
