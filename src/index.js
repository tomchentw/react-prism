import {
  default as React,
} from "react";

import {
  default as ReactDOM,
} from "react-dom";

import {
  default as rawPrismJs,
} from "raw!prismjs";

import {
  default as rawSelfUpdatedCode,
} from "!raw!./app/SelfUpdatedCode";

import {
  default as rawPrismText,
} from "raw!./app/SelfUpdatedCode/prism.text";

import {
  default as rawMarkupText,
} from "raw!./app/SelfUpdatedCode/markup.text";

import {
  default as App,
} from "./app/App";

import "./index.css";

ReactDOM.render(
  <App
    intervalSeconds={2}
    rawSelfUpdatedCode={rawSelfUpdatedCode}
    rawPrismJs={rawPrismJs}
    rawPrismText={rawPrismText}
    rawMarkupText={rawMarkupText}
  />,
  document.getElementById(`root`)
);
