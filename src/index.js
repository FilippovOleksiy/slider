import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./app/store";
import { SET_USERS_LIST } from "./app/actions";
import App from "./App";
import "./index.css";

import AppData from './common/appData';

store.dispatch({
  type: SET_USERS_LIST,
  payload: AppData.usersList,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
