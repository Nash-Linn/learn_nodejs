const Router = require("koa-router");
const router = new Router();

router.get("/", async (ctx, next) => {
  //render 是一个异步操作 需要 await
  await ctx.render("home", { username: "nash" }); //自动找views/home.ejs
});

module.exports = router;
