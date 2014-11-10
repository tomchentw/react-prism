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

  render () {
    return this._render(this.props, this.state);
  },

  _render (props, state) {
    return <div className="container-fluid container--full-height">
      <div className="row row--full-height">
        <div className="col-xs-6">
          <h2>
            Demo of SelfUpdatedCode
            <br />
            <small>update every 5 seconds</small>
          </h2>
          <pre><SelfUpdatedCode /></pre>
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

bodyComponent = React.render(<Body />, document.getElementById("react-root"));
