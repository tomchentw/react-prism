import {default as React, PropTypes} from "react";
import {default as GitHubForkRibbon} from "react-github-fork-ribbon";

import {PrismCode} from "../../../../src/index";
import {default as SelfUpdatedCode} from "./SelfUpdatedCode";

export default class ReactRoot extends React.Component {

  static propTypes = {
    intervalSeconds: PropTypes.number.isRequired,
  }

  static defaultProps = {
    intervalSeconds: 2,
  }

  render () {
    const {props, state} = this;
    const {intervalSeconds} = props;

    return (
      <div className="container-fluid container--full-height">
        <GitHubForkRibbon
          position="right"
          color="black"
          href="https://github.com/tomchentw/react-prism">
          Fork me on GitHub
        </GitHubForkRibbon>
        <div className="row row--full-height">
          <div className="col-xs-6">
            <h2>
              Demo of SelfUpdatedCode
              <br />
              <small>update every {intervalSeconds} seconds</small>
            </h2>
            <pre><SelfUpdatedCode intervalMillis={intervalSeconds * 1000} /></pre>
          </div>
          <div className="col-xs-6">
            <h2>
              Usage of PrismCode
              <br />
              <small>by creating a component SelfUpdatedCode</small>
            </h2>
            <pre><PrismCode className="language-javascript">
              {require("!raw-loader!./SelfUpdatedCode")}
            </PrismCode></pre>
          </div>
        </div>
      </div>
    );
  }
}
