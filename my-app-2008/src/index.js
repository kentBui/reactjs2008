import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import jwt from "jsonwebtoken";

// import store from "./counter_redux/redux/store";
import App from "./admin/App";
import { Provider } from "react-redux";
import store from "./admin/redux/store/store";
import { getToken } from "./admin/ultil/localStorageHandle";
import { getUser } from "./admin/ultil/localStorageHandle";

// dispatch everytime when browser reload
let token = getToken();
let username = getUser();
if (token) {
  let data = jwt.decode(token); // decode to get data
  console.log(data);
  // data.exp=> expriedIn timestamp
  let now = new Date().getTime() / 1000; // change to second
  // if(data.exp > now){
  // write dispatch here:
  // 1] success
  // 2] call request lai
  // 3] ....
  //}

  if (data.exp > now) {
    store.dispatch({
      // use store to dispatch all info you want
      type: "LOGIN_SUCCESS",
      payload: {
        token,
        username,
      },
    });
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
