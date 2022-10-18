const Router = require("koa-router");
const router = new Router();

router.get("/", async (ctx, next) => {
  //设置cookie
  // ctx.cookies.set("name", "nash");
  //获取cookie
  // console.log(ctx.cookies.get("name"));

  await ctx.render("home", { username: "nash" }); //自动找views/home.ejs
});

router.get("/list", async (ctx) => {
  ctx.body = {
    data: [
      {
        _id: 1,
        username: "admin1",
        age: 11,
      },
      {
        _id: 2,
        username: "admin2",
        age: 22,
      },
    ],
  };
});

module.exports = router;
