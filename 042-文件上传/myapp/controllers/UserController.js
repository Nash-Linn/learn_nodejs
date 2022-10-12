// MVC  C层 获取参数和发送数据

const UserService = require("../services/UserService");
const JWT = require("../util/JWT");

const UserController = {
  addUser: async (req, res) => {
    const avatar = req.file
      ? `/uploadfiles/${req.file.filename}`
      : "/images/default.png";
    const { username, password, age } = req.body;
    await UserService.addUser(username, password, age, avatar);
    res.send({
      ok: 1,
    });
  },
  updateUser: async (req, res) => {
    const { username, password, age } = req.body;
    await UserService.updateUser(req.params.id, username, password, age);
    res.send({
      ok: 1,
    });
  },
  deleteUser: async (req, res) => {
    await UserService.deleteUser(req.params.id);
    res.send({
      ok: 1,
    });
  },
  getUser: async (req, res) => {
    const { page, limit } = req.query;
    let response = await UserService.getUser(page, limit);
    res.send(response);
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    let data = await UserService.login(username, password);
    if (data.length == 0) {
      res.send({ ok: 0 });
    } else {
      //设置token
      const token = JWT.generate(
        {
          id: data[0]._id,
          username: data[0].username,
        },
        "1h"
      );
      res.header("Authorization", token);
      res.send({ ok: 1 });
    }
  },
  logout: (req, res) => {
    req.session.destroy(() => {
      res.send({ ok: 1 });
    });
  },
};

module.exports = UserController;
