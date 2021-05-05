import { useContext } from "react";
import { counterContext } from "../context/counter-context.jsx";

const Counter = () => {
  const { count, dispatch } = useContext(counterContext);

  return (
    <div>
      <h2>COUNT: {count}</h2>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
    </div>
  );
};

export default Counter;
