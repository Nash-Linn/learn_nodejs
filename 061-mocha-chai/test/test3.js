const chai = require("chai");
chai.should();

describe("chai.should", () => {
  it("use assert lib", () => {
    let value = "hello";

    // value.should.exist.and.equal("hello").and.have.length(5).and.be.a("string");

    value.should.be.a("string");
    value.should.equal("hello");
    value.should.not.equal("hello1");
    value.should.have.length(5);
  });
});
