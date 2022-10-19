const express = require("express");
const mysql2 = require("mysql2");
const app = express();

app.get("/test", async (req, res) => {
  //创建连接池，进行操作
  const config = getDBConfig();
  const promisePool = mysql2.createPool(config).promise();

  let users = await promisePool.query(
    `insert into student (name,score,gender,class_id) values (?,?,?,?)`,
    ["haha", 100, 1, 1]
  );
  res.send({
    ok: 1,
    users,
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
