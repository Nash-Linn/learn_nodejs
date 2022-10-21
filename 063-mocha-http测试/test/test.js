//断言 模块
const assert = require("assert");
const axios = require("axios");

// describe("测试接口", () => {
//   it("返回html代码片段测试", async () => {
//     //axios
//     let res = await axios.get("http://localhost:3000/");
//     assert.strictEqual(res.data, `<h1>hello</h1>`);
//   });
// });

//supertest
const supertest = require("supertest");
const app = require("../app");
describe("测试接口", () => {
  let server;
  it("返回html代码片段测试", async () => {
    await supertest(server)
      .get("/")
      .expect("Content-Type", /text\/html/)
      .expect(200, `<h1>hello</h1>`);
  });

  //钩子函数
  before(() => {
    server = app.listen(3000);
  });

  after(() => {
    server.close();
  });

  beforeEach(() => {
    console.log("每个开始前");
  });
  afterEach(() => {
    console.log("每个开始后");
  });
});
