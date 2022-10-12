const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/list", (ctx, next) => {
  ctx.body = [111, 222, 333];
});

router.post("/list", (ctx, next) => {
  ctx.body = {
    ok: 1,
    info: "add list success",
  };
});

router.put("/list/:id", (ctx, next) => {
  console.log("ctx.params", ctx.params);
  ctx.body = {
    ok: 1,
    info: "put list success",
  };
});

app.use(router.routes());
// 如果使用访问方法不对 会返回 Method Not Allowed  比如get用成了post
app.use(router.allowedMethods());
app.listen(3000);
