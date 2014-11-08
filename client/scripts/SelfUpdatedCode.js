"use strict";
var React = require("react/addons"),
    PrismCode = require("../../src/PrismCode"),

    CODE_LIST = [
      {
        className: "language-javascript",
        codeBlock: require("raw-loader!prism/prism.js"),
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

  getInitialState () {
    return {
      _index: 0,
    };
  },

  componentWillMount () {
    setInterval(() => {
      this.setState({_index: (this.state._index + 1) % CODE_LIST_LENGTH});
    }, 5000);
  },

  render () {
    return this._render(this.props, this.state);
  },

  _render (props, state) {
    var {className, codeBlock} = CODE_LIST[state._index];
    return (
      <PrismCode className={className}>{codeBlock}</PrismCode>
    );
  }
});
