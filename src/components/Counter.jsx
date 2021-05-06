import { useSelector, useDispatch } from "react-redux";
import { decrement, reset, increment } from "../store/actions/counterReducer";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>COUNT: {count}</h2>

      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
};

export default Counter;
