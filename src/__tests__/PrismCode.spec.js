import {
  default as expect,
} from "expect";

import {
  default as jsdom,
} from "mocha-jsdom";

import {
  default as React,
} from "react";

import {
  default as ReactDOM,
} from "react-dom";

import {
  default as TestUtils,
} from "react-addons-test-utils";

import {
  default as Prism,
} from "prismjs";

import {
  default as PrismCode,
} from "../PrismCode";

describe("PrismCode", () => {
  jsdom();

  before(() => {
    global.Prism = Prism;
  });

  after(() => {
    delete global.Prism;
  });

  it("should render original code in the first run", () => {
    const prismCodeComponent = TestUtils.renderIntoDocument(
      <PrismCode className="language-javascript">
        require("react/addons").addons.TestUtils.renderIntoDocument(/* wtf ?*/);
      </PrismCode>
    );
    const codeDOMNode = ReactDOM.findDOMNode(prismCodeComponent);

    expect(codeDOMNode.textContent).toEqual("require(\"react/addons\").addons.TestUtils.renderIntoDocument(/* wtf ?*/);");
  });

  it("should render hightlighted code in the second run", () => {
    const prismCodeComponent = TestUtils.renderIntoDocument(
      <PrismCode className="language-javascript">
        var React, TestUtils;
      </PrismCode>
    );

    const codeDOMNode = ReactDOM.findDOMNode(prismCodeComponent);
    // FIXME: exact content here
    expect(codeDOMNode.textContent).toNotEqual("require(\"react/addons\").addons.TestUtils.renderIntoDocument(/* wtf ?*/);");
  });
});
