const http = require("http");

const Router = {};

function use(obj) {
  Object.assign(Router, obj);
}

function start() {
  http
    .createServer((req, res) => {
      const myURL = new URL(req.url, "http://127.0.0.1");
      console.log(myURL.pathname);

      // route(res, myURL.pathname);   //函数情况
      // res.end();

      try {
        Router[myURL.pathname](req, res); //对象情况
      } catch (error) {
        Router["/404"](req, res);
      }
    })
    .listen(3000, () => {
      console.log("server start");
    });
}

exports.start = start;
exports.use = use;
