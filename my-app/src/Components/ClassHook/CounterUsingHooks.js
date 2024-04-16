import React, { useState } from "react";

export default function CounterUsingHooks() {
  let [count, setCount] = useState(10);
  const increment = () => {
    // count = count + 10;
    setCount((x) => {
      x + 10;
    });
  }

  return (
    <div>
      <div>Counter Using Hooks</div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment by 10</button>
    </div>
  );
}
