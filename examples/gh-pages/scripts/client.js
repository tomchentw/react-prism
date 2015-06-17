import {default as React} from "react";

import {default as ReactRoot} from "./ReactRoot";

require("../styles/index.scss");

React.render(<ReactRoot intervalSeconds={2} />, document.getElementById("react-container"));
