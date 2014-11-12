"use strict";
require("../styles/index.scss");
require("prism/themes/prism.css");

var React = require("react/addons"),
    {update} = React.addons,
    PrismCode = require("../../src/PrismCode"),

    SelfUpdatedCode = require("./SelfUpdatedCode"),
    Body,
    bodyComponent;

Body = React.createClass({
  displayName: "Body",

  propTypes: {
    intervalSeconds: React.PropTypes.number.isRequired
  },

  render () {
    return this._render(this.props, this.state);
  },

  _render ({intervalSeconds}, state) {
    return <div className="container-fluid container--full-height">
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
    </div>;
  }
});

bodyComponent = React.render(<Body intervalSeconds={2} />, document.getElementById("react-root"));
