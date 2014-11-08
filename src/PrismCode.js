"use strict";
var React = require("react/addons"),
    {update} = React.addons;

module.exports = React.createClass({
  displayName: "PrismCode",

  getInitialState () {
    return {
      _hightlighted: null
    };
  },

  componentDidMount () {
    Prism.highlightElement(this.refs.code.getDOMNode(), true, this._on_hightlighted);
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
