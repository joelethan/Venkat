import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import rootSaga from "./state/config/saga";
import configureStore from "./state/config/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const store = configureStore();
store.runSaga(rootSaga);

const rootNode = document.getElementById("root");

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>,
  rootNode
);
