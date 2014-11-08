"use strict";
var React = require("react/addons"),
    $__0=  React.addons,update=$__0.update;

module.exports = React.createClass({
  displayName: "PrismCode",

  propTypes: {
    async: React.PropTypes.bool
  },

  getDefaultProps:function () {
    return {
      async: true
    };
  },

  getInitialState:function () {
    return {
      _hightlighted: null
    };
  },

  componentDidMount:function () {
    // https://github.com/LeaVerou/prism/issues/392
    var $__0=  this,_hightlight_element=$__0._hightlight_element;
    if (this.props.async) {
      setTimeout(_hightlight_element);
    } else {
      _hightlight_element();
    }
  },

  render:function () {
    return this._render(this.props, this.state);
  },

  _hightlight_element:function () {
    // https://github.com/LeaVerou/prism/issues/392
    Prism.highlightElement(this.refs.code.getDOMNode(), this.props.async, this._on_hightlighted);
  },

  _on_hightlighted:function (__html) {
    this.setState({_hightlighted: {__html:__html}});
  },

  _render:function (props, $__0) {var _hightlighted=$__0._hightlighted;
    var newProps = {
      ref: "code",
      className: props.className,
    }, $__1=  props,children=$__1.children;

    if (_hightlighted) {
      newProps.dangerouslySetInnerHTML = _hightlighted;
      children = null;
    }
    return React.createElement("code", React.__spread({},  newProps), children);
  }
});
