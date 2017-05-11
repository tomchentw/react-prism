/* global Prism */

import {
  default as React,
  PureComponent,
} from "react";

import {
  PropTypes,
} from 'prop-types';

export default class PrismCode extends PureComponent {
  static propTypes = {
    async: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
    component: PropTypes.node,
  };

  componentDidMount() {
    this._hightlight();
  }

  componentDidUpdate() {
    this._hightlight();
  }

  _hightlight() {
    Prism.highlightElement(this._domNode, this.props.async);
  }

  render() {
    const {
      className,
      children,
      component,
    } = this.props;
    
    const Wrapper = component ? component : `code`;
    return (
      <Wrapper
        ref={domeNode => this._domNode = domeNode}
        className={className}
      >
        {children}
      </Wrapper>
    );
  }
}
