function render(res, data, type = "application/json") {
  res.writeHead(200, {
    "Content-Type": `${type};charset = utf8`,
  });
  res.write(data);
  res.end();
}

const apiRouter = {
  "/api/login": (req, res) => {
    const myURL = new URL(req.url, "http://127.0.0.1");

    if (
      myURL.searchParams.get("username") == "nash" &&
      myURL.searchParams.get("password") == "123123"
    ) {
      render(res, `{"ok":1}`);
    } else {
      render(res, `{"ok":0}`);
    }
  },
  "/api/loginpost": (req, res) => {
    //获取参数
    let post = "";
    req.on("data", (chunk) => {
      post += chunk;
    });

    req.on("end", () => {
      post = JSON.parse(post);
      if (post.username === "nash" && post.password === "123123") {
        render(res, `{"ok":1}`);
      } else {
        render(res, `{"ok":0}`);
      }
    });
  },
};

module.exports = apiRouter;
