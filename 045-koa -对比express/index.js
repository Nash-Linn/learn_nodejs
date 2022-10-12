const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  // ctx.response.body = `
  // <h1>
  //  hello world
  // </h1>
  // `;

  //简写
  ctx.body = `
  <h1>
   hello world
  </h1>
  `;
});

app.listen(3000);
