"use strict";

jest.dontMock("../PrismCode.js");
describe("PrismCode", function() {
  var React,
      TestUtils,
      PrismCode,
      prismCodeComponent,
      codeDOMNode;

  beforeEach(function () {
    React = require("react/addons");
    TestUtils = React.addons.TestUtils;
    PrismCode = require("../PrismCode.js");
  });

  it("should render original code in the first run", function() {
    prismCodeComponent = TestUtils.renderIntoDocument(
      <PrismCode className="language-javascript">
        require("react/addons").addons.TestUtils.renderIntoDocument(/* wtf ?*/);
      </PrismCode>
    );
    codeDOMNode = prismCodeComponent.getDOMNode();

    expect(codeDOMNode.textContent).toEqual("require(\"react/addons\").addons.TestUtils.renderIntoDocument(/* wtf ?*/);");
  });

  it("should render hightlighted code in the second run", function() {
    prismCodeComponent = TestUtils.renderIntoDocument(
      <PrismCode className="language-javascript">
        var React, TestUtils;
      </PrismCode>
    );

    codeDOMNode = prismCodeComponent.getDOMNode();
    // FIXME: exact content here
    expect(codeDOMNode.textContent).not.toEqual("require(\"react/addons\").addons.TestUtils.renderIntoDocument(/* wtf ?*/);");
  });
});
