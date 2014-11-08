"use strict";
var React = require("react/addons"),
    {update} = React.addons;

module.exports = React.createClass({
  displayName: "PrismCode",

  mixins: [React.addons.PureRenderMixin],

  propTypes: {
    async: React.PropTypes.bool
  },

  getDefaultProps () {
    return {
      async: true
    };
  },

  componentDidMount () {
    this._hightlight();
  },

  componentDidUpdate () {
    this._hightlight();
  },

  _hightlight () {
    Prism.highlightElement(this.refs.code.getDOMNode(), this.props.async);
  },

  render () {
    return this._render(this.props, this.state);
  },

  _render (props, state) {
    return <code ref="code" className={props.className}>{props.children}</code>;
  }
});
