const chai = require("chai");
const expect = chai.expect;

describe("chai.should", () => {
  it("use assert lib", () => {
    let value = "hello";
    let number = 3;

    expect(number).to.be.at.most(5);
    expect(number).to.be.at.least(3);
    expect(number).to.within(1, 5);

    expect(value).to.exist;
    expect(value).to.equal("hello");
    expect(value).to.not.equal("你好");
    expect(value).to.have.length(5);
  });
});
