const Router = require("koa-router");
const router = new Router();

router.get("/user", (ctx, next) => {
  ctx.body = [111, 222, 333];
});

router.post("/user", (ctx, next) => {
  ctx.body = {
    ok: 1,
    info: "add user success",
  };
});

router.put("/user/:id", (ctx, next) => {
  console.log("ctx.params", ctx.params);
  ctx.body = {
    ok: 1,
    info: "put user success",
  };
});

router.delete("/user/:id", (ctx, next) => {
  ctx.body = {
    ok: 1,
    info: "delete user success",
  };
});

module.exports = router;
