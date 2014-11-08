"use strict";

jest.dontMock("../index.js");
describe("index", function() {
  it("should export components", function() {
    var index = require("../index");

    expect(index).toBeDefined();
    expect(index.PrismCode).toBeDefined();
  });
});
