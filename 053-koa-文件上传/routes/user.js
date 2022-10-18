const Router = require("koa-router");
const JWT = require("../util/JWT");
const router = new Router();

const multer = require("@koa/multer");
const upload = multer({ dest: "public/upload" });
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

router.post("/login", (ctx) => {
  // console.log(ctx.request.body);
  const { username, password } = ctx.request.body;
  console.log("username", username);
  console.log("password", password);
  if (username === "admin" && password == "admin") {
    //设置header
    //设置token
    const token = JWT.generate(
      {
        id: "1111",
        username: "admin",
      },
      "10s"
    );
    ctx.set("Authorization", token);
    ctx.body = {
      ok: 1,
    };
  } else {
    ctx.body = {
      ok: 0,
    };
  }
});

//文件上传
router.post("/upload", upload.single("avatar"), (ctx) => {
  console.log("ctx.request.body", ctx.request.body);
  const { username, password } = ctx.request.body;
  ctx.body = { ok: 1 };
});
module.exports = router;
