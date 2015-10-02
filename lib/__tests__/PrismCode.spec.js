"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

var _mochaJsdom = require("mocha-jsdom");

var _mochaJsdom2 = _interopRequireDefault(_mochaJsdom);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require("react-addons-test-utils");

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _prismjs = require("prismjs");

var _prismjs2 = _interopRequireDefault(_prismjs);

var _PrismCode = require("../PrismCode");

var _PrismCode2 = _interopRequireDefault(_PrismCode);

describe("PrismCode", function () {
  (0, _mochaJsdom2["default"])();

  before(function () {
    global.Prism = _prismjs2["default"];
  });

  after(function () {
    delete global.Prism;
  });

  it("should render original code in the first run", function () {
    var prismCodeComponent = _reactAddonsTestUtils2["default"].renderIntoDocument(_react2["default"].createElement(
      _PrismCode2["default"],
      { className: "language-javascript" },
      "require(\"react/addons\").addons.TestUtils.renderIntoDocument(/* wtf ?*/);"
    ));
    var codeDOMNode = _reactDom2["default"].findDOMNode(prismCodeComponent);

    (0, _expect2["default"])(codeDOMNode.textContent).toEqual("require(\"react/addons\").addons.TestUtils.renderIntoDocument(/* wtf ?*/);");
  });

  it("should render hightlighted code in the second run", function () {
    var prismCodeComponent = _reactAddonsTestUtils2["default"].renderIntoDocument(_react2["default"].createElement(
      _PrismCode2["default"],
      { className: "language-javascript" },
      "var React, TestUtils;"
    ));

    var codeDOMNode = _reactDom2["default"].findDOMNode(prismCodeComponent);
    // FIXME: exact content here
    (0, _expect2["default"])(codeDOMNode.textContent).toNotEqual("require(\"react/addons\").addons.TestUtils.renderIntoDocument(/* wtf ?*/);");
  });
});