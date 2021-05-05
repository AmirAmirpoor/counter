import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <div>
      <h2>COUNT: {count}</h2>

      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;
