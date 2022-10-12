const express = require("express");
const app = express();

app.use(async (req, res, next) => {
  console.log("11111");

  await next();

  console.log("44444");
  res.send("hello word");
});

app.use(async (req, res, next) => {
  console.log("222222");

  //异步
  await delay(2000);
  console.log("333333");
});

//  返回  1 2 4 3  无法返回 1 2 3 4

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

app.listen(3000);
