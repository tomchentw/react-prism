import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  default as shouldPureComponentUpdate,
} from "react-pure-render/function"

/* global Prism */

export default class PrismCode extends Component {
  static propTypes = {
    async: PropTypes.bool,
  }

  componentDidMount () {
    this._hightlight();
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  componentDidUpdate () {
    this._hightlight();
  }

  _hightlight () {
    Prism.highlightElement(this.refs.code, this.props.async);
  }

  render () {
    return (
      <code
        ref="code"
        className={this.props.className}
      >
        {this.props.children}
      </code>
    );
  }
}
