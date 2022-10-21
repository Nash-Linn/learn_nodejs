const sum = require("../sum");

//断言 模块
const assert = require("assert");

// assert.strictEqual(sum(), 0);
// assert.strictEqual(sum(1), 1);
// assert.strictEqual(sum(1, 2), 3);
// assert.strictEqual(sum(1, 2, 3), 6);

//使用 mocha
//describe 一组测试
//it  一个测试

describe("大的组测试1", () => {
  describe("小的组测试1-1", () => {
    it("sum() 结果应该返回 0", () => {
      assert.strictEqual(sum(), 10);
    });
    it("sum(1) 结果应该返回 1", () => {
      assert.strictEqual(sum(1), 1);
    });
    it("sum(1,2) 结果应该返回 3", () => {
      assert.strictEqual(sum(1, 2), 3);
    });
    it("sum(1,2,3) 结果应该返回 6", () => {
      assert.strictEqual(sum(1, 2, 3), 6);
    });
  });
  describe("小的组测试1-2", () => {});
});

describe("大的组测试2", () => {
  describe("小的组测试2-1", () => {});
  describe("小的组测试2-2", () => {});
});
