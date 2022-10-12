const Router = require("koa-router");

const userRouter = require("./routes/user.js");
const listRouter = require("./routes/list.js");

const router = new Router();

//注册路由级组件
router.use("/user", userRouter.routes(), userRouter.allowedMethods());
router.use("/list", listRouter.routes(), listRouter.allowedMethods());

module.exports = router;
