import {default as React, PropTypes} from "react";
import {default as PrismCode} from "react-prism/PrismCode";

import {default as SelfUpdatedCode} from "./components/SelfUpdatedCode";

class ReactRoot extends React.Component {

  static get propTypes () {
    return {
      intervalSeconds: PropTypes.number.isRequired,
    };
  }

  render () {
    const {props, state} = this;
    const {intervalSeconds} = props;

    return (
      <div className="container-fluid container--full-height">
        <div className="github-fork-ribbon-wrapper right">
          <div className="github-fork-ribbon" style={{backgroundColor: "#333"}}>
            <a href="https://github.com/tomchentw/react-prism">Fork me on GitHub</a>
          </div>
        </div>
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
              {require("!raw-loader!./components/SelfUpdatedCode")}
            </PrismCode></pre>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactRoot;
