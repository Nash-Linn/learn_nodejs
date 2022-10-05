const http = require("http");

const route = require("./route");
http
  .createServer((req, res) => {
    const myURL = new URL(req.url, "http://127.0.0.1");
    console.log(myURL.pathname);

    // route(res, myURL.pathname);   //函数情况

    route[myURL.pathname](res); //对象情况

    res.end();
  })
  .listen(3000, () => {
    console.log("server start");
  });
