const fs = require("fs");
const assert = require("assert");

// 对异步检测有误
// describe("异步测试", () => {
//   it("异步读取文件", () => {
//     fs.readFile("./1.txt", "utf-8", (err, data) => {
//       if (err) {
//       } else {
//         assert.strictEqual(data, "hello1");
//       }
//     });
//   });
// });

// 添加 done
describe("异步测试", () => {
  it("异步读取文件", (done) => {
    fs.readFile("./1.txt", "utf-8", (err, data) => {
      if (err) {
        done(err);
      } else {
        assert.strictEqual(data, "hello");
        done();
      }
    });
  });
});

// promise方案
const fsp = fs.promises;
describe("异步测试1", () => {
  it("异步读取文件1", async () => {
    let data = await fsp.readFile("./1.txt", "utf-8");
    assert.strictEqual(data, "hello");
  });
});
