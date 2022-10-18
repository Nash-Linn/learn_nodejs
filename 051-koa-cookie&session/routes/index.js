const Router = require("koa-router");

const listRouter = require("./list.js");
const userRouter = require("./user.js");
const homeRouter = require("./home.js");
const loginRouter = require("./login.js");

const router = new Router();

//所有路由统一增加一个前缀
// router.prefix("/api");

//注册路由级组件
router.use("/user", userRouter.routes(), userRouter.allowedMethods());
router.use("/list", listRouter.routes(), listRouter.allowedMethods());
router.use("/home", homeRouter.routes(), homeRouter.allowedMethods());
router.use("/login", loginRouter.routes(), loginRouter.allowedMethods());

//路由重定向
router.redirect("/", "/login");

module.exports = router;
