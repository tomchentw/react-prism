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
    Prism.highlightElement(this.refs.code.getDOMNode(), this.props.async, this._on_hightlighted);
  },

  render:function () {
    return this._render(this.props, this.state);
  },

  _on_hightlighted:function (__html) {
    this.setState({_hightlighted: {__html:__html}});
  },

  _render:function (props, $__0) {var _hightlighted=$__0._hightlighted;
    return React.createElement("code", {ref: "code", className: props.className, dangerouslySetInnerHTML: _hightlighted}, 
      _hightlighted ? null : props.children
    );
  }
});
