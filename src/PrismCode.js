"use strict";
var React = require("react/addons"),
    {update} = React.addons;

module.exports = React.createClass({
  displayName: "PrismCode",

  propTypes: {
    async: React.PropTypes.bool
  },

  getDefaultProps () {
    return {
      async: true
    };
  },

  getInitialState () {
    return {
      _hightlighted: null
    };
  },

  componentDidMount () {
    // https://github.com/LeaVerou/prism/issues/392
    var {_hightlight_element} = this;
    if (this.props.async) {
      setTimeout(_hightlight_element);
    } else {
      _hightlight_element();
    }
  },

  render () {
    return this._render(this.props, this.state);
  },

  _hightlight_element () {
    // https://github.com/LeaVerou/prism/issues/392
    Prism.highlightElement(this.refs.code.getDOMNode(), this.props.async, this._on_hightlighted);
  },

  _on_hightlighted (__html) {
    this.setState({_hightlighted: {__html}});
  },

  _render (props, {_hightlighted}) {
    var newProps = {
      ref: "code",
      className: props.className,
    }, {children} = props;

    if (_hightlighted) {
      newProps.dangerouslySetInnerHTML = _hightlighted;
      children = null;
    }
    return <code {...newProps}>{children}</code>;
  }
});
