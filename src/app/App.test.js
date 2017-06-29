import React from "react";

import ReactDOM from "react-dom";

import Prism from "prismjs";

import App from "./App";

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
