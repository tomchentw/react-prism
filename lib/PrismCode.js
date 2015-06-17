"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactAddons = require("react/addons");

var _reactAddons2 = _interopRequireDefault(_reactAddons);

/* global Prism */

var PrismCode = _reactAddons2["default"].createClass({
  displayName: "PrismCode",

  mixins: [_reactAddons.addons.PureRenderMixin],

  propTypes: {
    async: _reactAddons.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      async: true
    };
  },

  componentDidMount: function componentDidMount() {
    this._hightlight();
  },

  componentDidUpdate: function componentDidUpdate() {
    this._hightlight();
  },

  _hightlight: function _hightlight() {
    Prism.highlightElement(this.refs.code.getDOMNode(), this.props.async);
  },

  render: function render() {
    var props = this.props;
    var state = this.state;

    return _reactAddons2["default"].createElement(
      "code",
      { ref: "code", className: props.className },
      props.children
    );
  }
});

exports["default"] = PrismCode;
module.exports = exports["default"];