import React, { useState } from "react";
import "./counterUsingHooks.css";
export default function CounterUsingHooks() {
  let [count, setCount] = useState(100);
  const increment = () => {
    setCount((x) => x + 10);
  };
  const decrement = () => {
    setCount((x) => x - 10);
  };
  const reset = () => {
    setCount(100);
  };

  return (
    <div>
      <h3>Counter Using Hooks in Functional Component</h3>
      <h1>{count}</h1>
      <div className="flex">
        <button onClick={increment} className="green">
          Increment by 10
        </button>
        <button onClick={decrement} className="green">
          Decrement by 10
        </button>
        <button onClick={reset} className="red">
          Reset
        </button>
      </div>
    </div>
  );
}
