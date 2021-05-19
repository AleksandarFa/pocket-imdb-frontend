import React from "react";
import ReactDOM from "react-dom";

import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import App from "./containers/App";

import history from "./utils/history";
import store from "./store";
import "./translations";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
