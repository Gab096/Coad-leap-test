import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";
import { Router } from "react-router-dom";
import App from "./routes/routes";
import history from "./routes/history";

ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
