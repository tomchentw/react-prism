"use strict";
var React = require("react/addons"),
    PrismCode = require("../../src/PrismCode"),

    CODE_LIST = [
      {
        className: "language-javascript",
        codeBlock: require("raw-loader!prismjs/prism.js"),
      },
      {
        className: "language-css",
        codeBlock: require("raw-loader!../texts/prism.text"),
      },
      {
        className: "language-markup",
        codeBlock: require("raw-loader!../texts/markup.text"),
      }
    ],
    CODE_LIST_LENGTH = CODE_LIST.length;

module.exports = React.createClass({
  displayName: "SelfUpdatedCode",

  propTypes: {
    intervalMillis: React.PropTypes.number.isRequired
  },

  getInitialState () {
    return {
      _index: 0,
      _intervalId: null,
    };
  },

  componentWillMount () {
    this._setInterval();
  },

  componentWillReceiveProps (nextProps) {
    if (nextProps.intervalMillis !== this.props.intervalMillis) {
      this._clearInterval();
      this.setState({ _intervalId: null });
    }
  },

  componentDidUpdate () {
    this._setInterval();
  },

  componentWillUnmount () {
    this._clearInterval();
  },

  render () {
    return this._render(this.props, this.state);
  },

  _setInterval () {
    if (this.state._intervalId !== null) {
      return;
    }
    var _intervalId = setInterval(() => {
      this.setState({_index: (this.state._index + 1) % CODE_LIST_LENGTH});
    }, this.props.intervalMillis);
    this.setState({ _intervalId });
  },

  _clearInterval () {
    clearInterval(this.state._intervalId);
  },

  _render (props, state) {
    var {className, codeBlock} = CODE_LIST[state._index];
    return (
      <PrismCode className={className}>{codeBlock}</PrismCode>
    );
  }
});
