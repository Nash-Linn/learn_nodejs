// MVC  C层 获取参数和发送数据

const UserService = require("../services/UserService");

const UserController = {
  addUser: async (req, res) => {
    const { username, password, age } = req.body;
    await UserService.addUser(username, password, age);
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
};

module.exports = UserController;
