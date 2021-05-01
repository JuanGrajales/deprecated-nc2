import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./redux/complex-setup";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux</h1>
      <p>Counter from redfux store {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <p>Welcome {isLogged ? "Juan" : ""}</p>
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
};

export default App;
