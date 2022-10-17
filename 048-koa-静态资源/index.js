const Koa = require("koa");
const static = require("koa-static");
const path = require("path");

const app = new Koa();
const router = require("./routes");

app.use(static(path.join(__dirname, "public")));

app.use(router.routes());
app.listen(3000);
