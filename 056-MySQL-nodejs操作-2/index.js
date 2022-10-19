const express = require("express");
const mysql2 = require("mysql2");
const app = express();

app.get("/test", async (req, res) => {
  //创建连接池，进行操作
  const config = getDBConfig();
  const promisePool = mysql2.createPool(config).promise();

  //获取请求参数
  console.log("req.query", req.query);

  let classId = req.query.classId ? req.query.classId : "%%";
  let score = req.query.score ? req.query.score : 0;

  let users = await promisePool.query(
    `select * from student where class_id like ?  and score > ? `,
    [classId, score]
  );
  res.send({
    ok: 1,
    users: users[0],
  });
});

app.listen(3000);

function getDBConfig() {
  return {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "nash_test",
    connectionLimit: 1,
  };
}
