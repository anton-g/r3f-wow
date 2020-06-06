import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// require("./bendModifier");
require("./helixCurve");

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
