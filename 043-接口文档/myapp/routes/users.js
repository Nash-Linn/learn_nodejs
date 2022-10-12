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
/**
 *
 * @api {post} /api/user 添加用户
 * @apiName addUser
 * @apiGroup usergroup
 * @apiVersion 1.0.0
 *
 *
 * @apiParam  {String} username 用户名
 * @apiParam  {String} password 密码
 * @apiParam  {Number} age 年龄
 * @apiParam  {File} avatar 头像
 *
 * @apiSuccess (200) {Number} ok 表示是否成功
 *
 * @apiParamExample  {multipart/form-data} Request-Example:
 * {
 *     username : "name",
 *     username : "username",
 *     age : 99,
 *     avatar : File
 * }
 *
 *
 * @apiSuccessExample {type} Success-Response:
 * {
 *     ok:1
 * }
 *
 *
 */
router.post("/user", upload.single("avatar"), UserController.addUser);

//响应前端put请求 --更新用户数据
//动态路由，获取id
router.put("/user/:id", UserController.updateUser);

/**
 *
 * @api {delete} /api/user/:id 删除用户
 * @apiName deleteUser
 * @apiGroup usergroup
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess (200) {Number} ok 表示是否成功
 *
 * @apiSuccessExample {type} Success-Response:
 * {
 *     ok:1
 * }
 *
 *
 */
//响应前端delete请求--删除用户
router.delete("/user/:id", UserController.deleteUser);

//响应前端get请求--获取用户列表
router.get("/user/list", UserController.getUser);

//登录校验

router.post("/login", UserController.login);

router.get("/logout", UserController.logout);

module.exports = router;
