"use strict";

jest.dontMock("../PrismCode.js");
describe("PrismCode", function() {
  var React,
      TestUtils,
      PrismCode,
      prismCodeComponent,
      codeDOMNode;

  it("should render original code in the first run", function() {
    React = require("react/addons");
    TestUtils = React.addons.TestUtils;
    PrismCode = require("../PrismCode.js");
  
    prismCodeComponent = TestUtils.renderIntoDocument(
      <PrismCode className="language-javascript">
        require("react/addons").addons.TestUtils.renderIntoDocument(/* wtf ?*/);
      </PrismCode>
    );
    codeDOMNode = prismCodeComponent.getDOMNode();

    expect(codeDOMNode.textContent).toEqual("require(\"react/addons\").addons.TestUtils.renderIntoDocument(/* wtf ?*/);");
  });
});
