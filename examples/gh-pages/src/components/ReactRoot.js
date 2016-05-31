import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  default as GitHubForkRibbon,
} from "react-github-fork-ribbon";

import {
  PrismCode,
} from "react-prism";

import {
  default as SelfUpdatedCode,
} from "./SelfUpdatedCode";

import {
  default as RAW_SELF_UPDATED_CODE,
} from "!raw-loader!./SelfUpdatedCode"; // eslint-disable-line import/no-unresolved

export default class ReactRoot extends Component {

  static propTypes = {
    intervalSeconds: PropTypes.number.isRequired,
  };

  static defaultProps = {
    intervalSeconds: 2,
  };

  render() {
    return (
      <div className="container-fluid container--full-height">
        <GitHubForkRibbon
          position="right"
          color="black"
          href="https://github.com/tomchentw/react-prism"
        >
          Fork me on GitHub
        </GitHubForkRibbon>
        <div className="row row--full-height">
          <div className="col-xs-6">
            <h2>
              Demo of SelfUpdatedCode
              <br />
              <small>update every {this.props.intervalSeconds} seconds</small>
            </h2>
            <pre><SelfUpdatedCode intervalMillis={this.props.intervalSeconds * 1000} /></pre>
          </div>
          <div className="col-xs-6">
            <h2>
              Usage of PrismCode
              <br />
              <small>by creating a component SelfUpdatedCode</small>
            </h2>
            <pre><PrismCode className="language-javascript">
              {RAW_SELF_UPDATED_CODE}
            </PrismCode></pre>
          </div>
        </div>
      </div>
    );
  }
}
