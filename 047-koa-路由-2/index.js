const Koa = require("koa");

const app = new Koa();

const router = require("./routes");

//再注册应用级组件

app.use(router.routes());
app.listen(3000);
