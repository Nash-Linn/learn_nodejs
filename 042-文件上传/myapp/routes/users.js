const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "public/uploadFiles/" }); //上传的文件存储位置
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//响应前端post请求--增加用户
// upload.single 接收单文件
router.post("/user", upload.single("avatar"), UserController.addUser);

//响应前端put请求 --更新用户数据
//动态路由，获取id
router.put("/user/:id", UserController.updateUser);

//响应前端delete请求--删除用户
router.delete("/user/:id", UserController.deleteUser);

//响应前端get请求--获取用户列表
router.get("/user/list", UserController.getUser);

//登录校验

router.post("/login", UserController.login);

router.get("/logout", UserController.logout);

module.exports = router;
