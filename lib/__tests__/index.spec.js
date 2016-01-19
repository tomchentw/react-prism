"use strict";

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("index", function () {
  it("should export components", function () {
    (0, _expect2.default)(_index.PrismCode).toExist();
  });
});