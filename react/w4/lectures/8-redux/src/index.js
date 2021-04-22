import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { myStore } from "./redux/all-in-one";
import { Provider } from "react-redux";

// REDUX LECTURE
import { createStore } from "redux";
// action
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state + 1;
    default:
      return state;
  }
};

// store
let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

// dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(decrement());
// REDUX LECTURE

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
