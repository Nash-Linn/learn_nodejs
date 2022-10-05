function render(res, data, type = "application/json") {
  res.writeHead(200, {
    "Content-Type": `${type};charset = utf8`,
  });
  res.write(data);
  res.end();
}

const apiRouter = {
  "/api/login": (res) => {
    render(res, `{ok:1}`);
  },
};

module.exports = apiRouter;
