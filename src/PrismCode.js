import {default as React, PropTypes, addons} from "react/addons";
/* global Prism */

var PrismCode = React.createClass({
  mixins: [addons.PureRenderMixin],

  propTypes: {
    async: PropTypes.bool,
  },

  getDefaultProps () {
    return {
      async: true,
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
    const {props, state} = this;
    return (
      <code ref="code" className={props.className}>{props.children}</code>
    );
  },
});

export default PrismCode;
