var express = require("express");
const UserModel = require("../model/UserModel");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/user/add", (req, res) => {
  console.log("req.body", req.body);

  //插入数据库
  //1.创建一个模型（user,限制file类型），————对应数据库的集合（users）
  //user.create  user.find  user.delect user.update

  const { username, password, age } = req.body;
  UserModel.create({
    username,
    password,
    age,
  }).then((data) => {
    console.log("data", data);
    res.send({
      ok: 1,
    });
  });
});

//动态路由，获取id
router.post("/user/update/:id", (req, res) => {
  const { username, password, age } = req.body;
  //第一项是匹配的字段  第二项是要更新的内容
  UserModel.updateOne(
    { _id: req.params.id },
    {
      username,
      password,
      age,
    }
  )
    .then((data) => {
      console.log("data", data);
      res.send({
        ok: 1,
      });
    })
    .catch((err) => {
      console.log("err", err);
      res.send({
        ok: 0,
      });
    });
});

module.exports = router;
