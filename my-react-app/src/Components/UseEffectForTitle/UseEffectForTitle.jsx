import React, { useEffect, useState } from "react";

export default function UseEffectForTitle() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("Component is mounted");
  }, []);

  useEffect(() => {
    document.title = `TitleCount: ${count}`;
  }, [count]);

  //!///////////////*! */
  const increment = () => {
    setCount((x) => x + 1);
  };
  const decrement = () => {
    setCount((x) => x - 1);
  };
  const reset = () => {
    setCount(100);
  };

  return (
    <div>
      <h3>Counter Using Hooks and Using Effect in Functional Component</h3>
      <h1>{count}</h1>
      <div className="flex">
        <button onClick={increment} className="green">
          Increment by 1
        </button>
        <button onClick={decrement} className="green">
          Decrement by 1
        </button>
        <button onClick={reset} className="red">
          Reset
        </button>
      </div>
    </div>
  );
}
