// Counter.js
import React, { useReducer } from "react";
import { initialState, counterReducer } from "./reducer";

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
