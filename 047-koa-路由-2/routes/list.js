const Router = require("koa-router");
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

router.delete("/list/:id", (ctx, next) => {
  ctx.body = {
    ok: 1,
    info: "delete list success",
  };
});

module.exports = router;
