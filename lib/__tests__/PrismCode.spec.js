"use strict";

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prismjs = require("prismjs");

var _prismjs2 = _interopRequireDefault(_prismjs);

var _PrismCode = require("../PrismCode");

var _PrismCode2 = _interopRequireDefault(_PrismCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("PrismCode", function describePrismCode() {
  before(function before() {
    global.Prism = _prismjs2.default;
  });

  after(function after() {
    delete global.Prism;
  });

  var dom = undefined;

  beforeEach(function beforeEach() {
    dom = document.createElement("div");
  });

  afterEach(function afterEach() {
    _reactDom2.default.unmountComponentAtNode(dom);
  });

  it("should render original code in the first run", function it() {
    _reactDom2.default.render(_react2.default.createElement(
      _PrismCode2.default,
      { className: "language-javascript" },
      "require(\"react/addons\").addons.TestUtils.renderIntoDocument(/* wtf ?*/);"
    ), dom);

    (0, _expect2.default)(dom.textContent).toEqual("require(\"react/addons\").addons.TestUtils.renderIntoDocument(/* wtf ?*/);");
  });

  it("should render hightlighted code in the second run", function it() {
    _reactDom2.default.render(_react2.default.createElement(
      _PrismCode2.default,
      { className: "language-javascript" },
      "var React, TestUtils;"
    ), dom);

    // FIXME: exact content here
    (0, _expect2.default)(dom.textContent).toNotEqual("require(\"react/addons\").addons.TestUtils.renderIntoDocument(/* wtf ?*/);");
  });
}); /* eslint-disable prefer-arrow-callback */