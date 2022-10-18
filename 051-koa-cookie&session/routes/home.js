const Router = require("koa-router");
const router = new Router();

router.get("/", async (ctx, next) => {
  //设置cookie
  // ctx.cookies.set("name", "nash");
  //获取cookie
  // console.log(ctx.cookies.get("name"));

  await ctx.render("home", { username: "nash" }); //自动找views/home.ejs
});

module.exports = router;
