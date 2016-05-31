import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  PrismCode,
} from "react-prism";

import {
  default as RAW_PRISM_JS,
} from "raw-loader!prismjs/prism.js"; // eslint-disable-line import/no-unresolved

import {
  default as RAW_PRISM_TEXT,
} from "raw-loader!../texts/prism.text"; // eslint-disable-line import/no-unresolved

import {
  default as RAW_MARKUP_TEXT,
} from "raw-loader!../texts/markup.text"; // eslint-disable-line import/no-unresolved

const CODE_LIST = [
  {
    className: `language-javascript`,
    codeBlock: RAW_PRISM_JS,
  },
  {
    className: `language-css`,
    codeBlock: RAW_PRISM_TEXT,
  },
  {
    className: `language-markup`,
    codeBlock: RAW_MARKUP_TEXT,
  },
];

const CODE_LIST_LENGTH = CODE_LIST.length;

export default class SelfUpdatedCode extends Component {

  static propTypes = {
    intervalMillis: PropTypes.number.isRequired,
  };

  state = {
    _index: 0,
    _intervalId: null,
  };

  componentDidMount() {
    this._setInterval();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.intervalMillis !== this.props.intervalMillis) {
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
    }, this.props.intervalMillis);
    this.setState({ _intervalId });
  }

  _clearInterval() {
    clearInterval(this.state._intervalId);
  }

  render() {
    const { state } = this;
    const { className, codeBlock } = CODE_LIST[state._index];
    return (
      <PrismCode className={className}>{codeBlock}</PrismCode>
    );
  }
}
