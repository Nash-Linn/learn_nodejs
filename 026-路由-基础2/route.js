const fs = require("fs");

// function route(res, pathname) {
//   switch (pathname) {
//     case "/login":
//       res.writeHead(200, {
//         "Content-Type": "text/html;charset = utf8",
//       });
//       res.write(fs.readFileSync("./static/login.html"), "utf-8");
//       break;

//     case "/home":
//       res.writeHead(200, {
//         "Content-Type": "text/html;charset = utf8",
//       });
//       res.write(fs.readFileSync("./static/home.html"), "utf-8");
//       break;

//     default:
//       res.writeHead(404, {
//         "Content-Type": "text/html;charset = utf8",
//       });
//       res.write(fs.readFileSync("./static/404.html"), "utf-8");
//       break;
//   }
// }

function render(res, path, type = "text/html") {
  res.writeHead(200, {
    "Content-Type": `${type};charset = utf8`,
  });
  res.write(fs.readFileSync(path), "utf-8");
  res.end();
}

const route = {
  "/login": (res) => {
    render(res, "./static/login.html");
  },
  "/home": (res) => {
    render(res, "./static/home.html");
  },
  "/404": (res) => {
    res.writeHead(404, {
      "Content-Type": "text/html;charset = utf8",
    });
    res.write(fs.readFileSync("./static/404.html"), "utf-8");
    res.end();
  },
  "/favicon.ico": (res) => {
    render(res, "./static/start.ico", "image/x-icon");
  },
};

module.exports = route;

// exports.route = route;
