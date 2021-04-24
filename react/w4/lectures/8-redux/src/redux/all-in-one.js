import { createStore, combineReducers } from "redux";

// actions
// every action you create must have a corresponding case in the switch statement of a reducer
export const increment = (num = 1) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// reducers
export const counterReducer = (state = 0, action) => {
  console.log("do I get here?", action);
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state + 1;
    default:
      return state;
  }
};

export const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

// combine reducers
export const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
