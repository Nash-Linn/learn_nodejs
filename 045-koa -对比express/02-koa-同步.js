const Koa = require("Koa");
const app = new Koa();

app.use((ctx, next) => {
  console.log("11111");

  next();

  console.log("33333");
  ctx.body = "hello word";
});

app.use((ctx, next) => {
  console.log("222222");
});

app.listen(3000);
