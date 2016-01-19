import {
  default as expect,
} from "expect";

import {
  default as React,
} from "react";

import {
  default as ReactDOM,
} from "react-dom";

import {
  default as Prism,
} from "prismjs";

import {
  default as PrismCode,
} from "../PrismCode";

describe(`PrismCode`, function describe() {
  before(function before() {
    global.Prism = Prism;
  });

  after(function after() {
    delete global.Prism;
  });

  let dom;

  beforeEach(function beforeEach() {
    dom = document.createElement(`div`);
  });

  afterEach(function afterEach() {
    ReactDOM.unmountComponentAtNode(dom);
  });

  it(`should render original code in the first run`, function it() {
    ReactDOM.render((
      <PrismCode className="language-javascript">
        require("react/addons").addons.TestUtils.renderIntoDocument(/* wtf ?*/);
      </PrismCode>
    ), dom);

    expect(dom.textContent).toEqual(
      `require("react/addons").addons.TestUtils.renderIntoDocument(/* wtf ?*/);`
    );
  });

  it(`should render hightlighted code in the second run`, function it() {
    ReactDOM.render((
      <PrismCode className="language-javascript">
        var React, TestUtils;
      </PrismCode>
    ), dom);

    // FIXME: exact content here
    expect(dom.textContent).toNotEqual(
      `require("react/addons").addons.TestUtils.renderIntoDocument(/* wtf ?*/);`
    );
  });
});
