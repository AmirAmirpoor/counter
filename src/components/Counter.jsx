import { useContext } from "react";
import { counterContext } from "../context/counter-context.jsx";

const Counter = () => {
  const { count, decrement, reset, increment } = useContext(counterContext);

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
