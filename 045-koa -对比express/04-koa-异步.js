const Koa = require("Koa");
const app = new Koa();

app.use(async (ctx, next) => {
  console.log("11111");

  await next();

  console.log("444444");
  ctx.body = "hello word";
});

app.use(async (ctx, next) => {
  console.log("222222");

  await delay(1000);

  console.log("3333");
});

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

app.listen(3000);
