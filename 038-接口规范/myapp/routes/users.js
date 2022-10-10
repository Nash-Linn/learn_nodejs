var express = require("express");
const UserModel = require("../model/UserModel");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//响应前端post请求
router.post("/user", (req, res) => {
  console.log("req.body", req.body);
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

//响应前端put请求
//动态路由，获取id
router.put("/user/:id", (req, res) => {
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

//响应前端delete请求
router.delete("/user/:id", (req, res) => {
  UserModel.deleteOne({
    _id: req.params.id,
  }).then((data) => {
    console.log(" data", data);
    res.send({
      ok: 1,
    });
  });
});

router.get("/user/list", async (req, res) => {
  console.log("req.query", req.query);
  const { page, limit } = req.query;
  // UserModel.find({}, { password: 0 })
  //   .sort({ age: 1 })
  //   .skip((page - 1) * limit)
  //   .limit(limit)
  //   .then((data) => {
  //     res.send(data);
  //   });

  let data = await UserModel.find({}, { password: 0 })
    .sort({ age: 1 })
    .skip((page - 1) * limit)
    .limit(limit);
  let total = await UserModel.find({}, { password: 0 })
    .sort({ age: 1 })
    .count();
  res.send({
    data,
    total,
  });
});

module.exports = router;
