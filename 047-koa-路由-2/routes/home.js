const Router = require("koa-router");
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = `
  <h1>
    home
  </h1>
  `;
});

module.exports = router;
