const Router = require("koa-router");
const router = new Router();

// router.get("/user", (ctx, next) => {
//   ctx.body = [111, 222, 333];
// });

// router.post("/user", (ctx, next) => {
//   ctx.body = {
//     ok: 1,
//     info: "add user success",
//   };
// });

// router.put("/user/:id", (ctx, next) => {
//   console.log("ctx.params", ctx.params);
//   ctx.body = {
//     ok: 1,
//     info: "put user success",
//   };
// });

// router.delete("/user/:id", (ctx, next) => {
//   ctx.body = {
//     ok: 1,
//     info: "delete user success",
//   };
// });

router.get("/", (ctx, next) => {
  //获取前端传来的参数
  console.log(" query", ctx.query);
  ctx.body = ctx.query;
});

router.post("/", (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = {
    ok: 1,
    info: "add user success",
  };
});

router.put("/:id", (ctx, next) => {
  console.log("ctx.params", ctx.params);
  ctx.body = {
    ok: 1,
    info: "put user success",
  };
});

router.delete("/:id", (ctx, next) => {
  ctx.body = {
    ok: 1,
    info: "delete user success",
  };
});

module.exports = router;
