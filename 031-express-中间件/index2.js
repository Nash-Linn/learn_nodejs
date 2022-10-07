const express = require("express");

const app = express();
const IndexRouter = require("./router2/indexRouter");

//应用级别中间件
app.use((req, res, next) => {
  console.log("验证token");
  next();
});

// app.use("/", IndexRouter);

//   /api/home
app.use("/api", IndexRouter);

app.listen(3000, () => {
  console.log("server start");
});
