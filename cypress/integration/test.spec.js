/// <reference types="cypress" />

describe("test case", () => {
  it("should expect foo", () => {
    expect("foo").to.be.foo;
  });

  it("should assert foo", () => {
    assert.isFoo("foo");
  });
});
