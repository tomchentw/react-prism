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
  default as App,
} from "./App";

describe(`App`, () => {
  beforeAll(() => {
    global.Prism = Prism;
  });

  afterAll(() => {
    delete global.Prism;
  });


  it(`renders without crashing`, () => {
    const div = document.createElement(`div`);
    ReactDOM.render(<App />, div);
  });
});
