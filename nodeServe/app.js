//引入express
const express = require("express");
//监听的端口
const port = 8800;
const app = express();
//引入os
const os = require("os");
//获取本机ipv4地址
function getIPv4() {
  //同一接口可能有不止一个IP4v地址，所以用数组存
  let ipv4s = [];
  //获取网络接口列表对象
  let interfaces = os.networkInterfaces();
  Object.keys(interfaces).forEach(function (key) {
    interfaces[key].forEach(function (item) {
      //跳过IPv6 和 '127.0.0.1'
      if ("IPv4" !== item.family || item.internal !== false) return;
      ipv4s.push({
        key: key,
        address: item.address,
      }); //可用的ipv4s加入数组
      // console.log(key + '--' + item.address);
    });
  });
  return ipv4s;
}
let ipv4 = getIPv4();
//设置静态文件路径
app.use(express.static("./dist"));
//监听端口
app.listen(port, (err) => {
  if (err) {
    console.log("err", err);
  } else {
    console.log("Listening at http://localhost:" + port);
    for (let item of ipv4) {
      console.log("or at");
      console.log(item.key + "  http://" + item.address + ":" + port);
    }
  }
});
