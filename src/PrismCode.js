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
    Prism.highlightElement(this.refs.code.getDOMNode(), this.props.async, this._on_hightlighted);
  },

  render () {
    return this._render(this.props, this.state);
  },

  _on_hightlighted (__html) {
    this.setState({_hightlighted: {__html}});
  },

  _render (props, {_hightlighted}) {
    return <code ref="code" className={props.className} dangerouslySetInnerHTML={_hightlighted}>
      {_hightlighted ? null : props.children}
    </code>;
  }
});
