/* global Prism */

import {
  default as React,
  PureComponent,
  PropTypes,
} from "react";

export default class PrismCode extends PureComponent {
  static propTypes = {
    async: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
  };

  componentDidMount() {
    this._hightlight();
  }

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
