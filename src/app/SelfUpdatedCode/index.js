import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  PrismCode,
} from "../../lib";

const CODE_LIST_LENGTH = 3;

export default class SelfUpdatedCode extends Component {

  static propTypes = {
    intervalSeconds: PropTypes.number.isRequired,
    rawPrismJs: PropTypes.string.isRequired,
    rawPrismText: PropTypes.string.isRequired,
    rawMarkupText: PropTypes.string.isRequired,
  };

  state = {
    _index: 0,
    _intervalId: null,
  };

  componentDidMount() {
    this._setInterval();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.intervalSeconds !== this.props.intervalSeconds) {
      this._clearInterval();
      this.setState({ _intervalId: null });
    }
  }

  componentDidUpdate() {
    this._setInterval();
  }

  componentWillUnmount() {
    this._clearInterval();
  }

  _setInterval() {
    if (this.state._intervalId !== null) {
      return;
    }
    const _intervalId = setInterval(() => {
      this.setState({ _index: (this.state._index + 1) % CODE_LIST_LENGTH });
    }, this.props.intervalSeconds * 1000);
    this.setState({ _intervalId });
  }

  _clearInterval() {
    clearInterval(this.state._intervalId);
  }

  render() {
    const CODE_LIST = [
      {
        className: `language-javascript`,
        codeBlock: this.props.rawPrismJs,
      },
      {
        className: `language-css`,
        codeBlock: this.props.rawPrismText,
      },
      {
        className: `language-markup`,
        codeBlock: this.props.rawMarkupText,
      },
    ];

    const { className, codeBlock } = CODE_LIST[this.state._index];

    return (
      <PrismCode className={className}>{codeBlock}</PrismCode>
    );
  }
}
