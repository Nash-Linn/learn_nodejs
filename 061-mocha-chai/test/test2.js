const chai = require("chai");
const assert = chai.assert;
const sum = require("../sum");

describe("assert demo", () => {
  it("use assert lib", () => {
    let value = "hello";
    assert.typeOf(value, "string");
    assert.equal(value, "hello");
    assert.lengthOf(value, 5);
  });
});

describe("组测试1", () => {
  describe("测试1-1", () => {
    it("sum() 结果应该返回 0", () => {
      assert.equal(sum(), 0);
    });
    it("sum(1) 结果应该返回 1", () => {
      assert.equal(sum(1), 1);
    });
    it("sum(1,2) 结果应该返回 3", () => {
      assert.equal(sum(1, 2), 3);
    });
    it("sum(1,2,3) 结果应该返回 6", () => {
      assert.equal(sum(1, 2, 3), 6);
    });
  });
});
