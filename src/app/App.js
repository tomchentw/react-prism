import {
  default as React,
  Component,
} from "react";

import {
  PropTypes,
} from 'prop-types';

import {
  default as GitHubForkRibbon,
} from "react-github-fork-ribbon";

import {
  PrismCode,
} from "../lib";

import {
  default as SelfUpdatedCode,
} from "./SelfUpdatedCode";

export default class App extends Component {

  static propTypes = {
    intervalSeconds: PropTypes.number.isRequired,
    rawSelfUpdatedCode: PropTypes.string.isRequired,
    rawPrismJs: PropTypes.string.isRequired,
    rawPrismText: PropTypes.string.isRequired,
    rawMarkupText: PropTypes.string.isRequired,
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
            <pre>
              <SelfUpdatedCode {...this.props} />
            </pre>
          </div>
          <div className="col-xs-6">
            <h2>
              Usage of PrismCode
              <br />
              <small>by creating a component SelfUpdatedCode</small>
            </h2>
            <pre>
              <PrismCode className="language-javascript">
                {this.props.rawSelfUpdatedCode}
              </PrismCode>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
