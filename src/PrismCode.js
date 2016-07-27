/* global Prism */

import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  default as ReactComponentWithPureRenderMixin,
} from "react-addons-pure-render-mixin";

export default class PrismCode extends Component {
  static propTypes = {
    async: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
  };

  componentDidMount() {
    this._hightlight();
  }

  shouldComponentUpdate = ReactComponentWithPureRenderMixin.shouldComponentUpdate;

  componentDidUpdate() {
    this._hightlight();
  }

  _hightlight() {
    Prism.highlightElement(this.refs.code, this.props.async);
  }

  render() {
    const {
      className,
      children,
    } = this.props;

    return (
      <code
        ref="code"
        className={className}
      >
        {children}
      </code>
    );
  }
}
