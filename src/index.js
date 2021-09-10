/** @format */

// import {render} from "react-dom";
// import App from "./views/App";

// render(<App />,document.getElementById("root"));

// import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import { Provider } from "react-redux";
import stories from "./store/index";
import { ThemeProvider } from "react-bootstrap";

import "./assets/styles/index.scss";

const store = stories;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider dir="rtl">
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
