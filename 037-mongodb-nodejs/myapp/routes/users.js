var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/user/add", (req, res) => {
  console.log("req.body", req.body);

  //插入数据库
  //1.创建一个模型（user），————对应数据库的集合（users）
  //user.create  user.find  user.delect user.update

  res.send({
    ok: 1,
  });
});

module.exports = router;
