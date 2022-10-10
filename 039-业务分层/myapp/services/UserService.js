// MVC  M层 对数据库进行操作

const UserModel = require("../model/UserModel");

const UserService = {
  addUser: (username, password, age) => {
    return UserModel.create({
      username,
      password,
      age,
    });
  },
  updateUser: (id, username, password, age) => {
    return UserModel.updateOne(
      { _id: id },
      {
        username,
        password,
        age,
      }
    );
  },
  deleteUser: (id) => {
    return UserModel.deleteOne({
      _id: id,
    });
  },
  getUser: async (page, limit) => {
    let data = await UserModel.find({}, { password: 0 })
      .sort({ age: 1 })
      .skip((page - 1) * limit)
      .limit(limit);
    let total = await UserModel.find({}, { password: 0 })
      .sort({ age: 1 })
      .count();

    return { data, total };
  },
};

module.exports = UserService;
