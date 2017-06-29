/* eslint-disable import/no-webpack-loader-syntax */
import React from "react";

import ReactDOM from "react-dom";

import rawPrismJs from "!raw-loader!prismjs";

import rawSelfUpdatedCode from "!raw-loader!./app/SelfUpdatedCode";

import rawPrismText from "!raw-loader!./app/SelfUpdatedCode/prism.text";

import rawMarkupText from "!raw-loader!./app/SelfUpdatedCode/markup.text";

import App from "./app/App";

import "./index.css";

ReactDOM.render(
  <App
    intervalSeconds={2}
    rawSelfUpdatedCode={rawSelfUpdatedCode}
    rawPrismJs={rawPrismJs}
    rawPrismText={rawPrismText}
    rawMarkupText={rawMarkupText}
  />,
  document.getElementById(`root`),
);
