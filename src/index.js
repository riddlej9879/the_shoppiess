import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { movieReducer } from "./reducer/reducer";
import { NomineeState } from "./reducer/NomineeState";

const store = createStore(movieReducer, applyMiddleware(thunk));
const store1 = createStore(NomineeState);

ReactDOM.render(
  <Provider store={store1}>
    <Provider store={store}>
      <App />
    </Provider>
  </Provider>,
  document.getElementById("root")
);
