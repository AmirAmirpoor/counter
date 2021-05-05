import { useState, createContext } from "react";

export const counterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <counterContext.Provider value={{ count, decrement, reset, increment }}>
      {children}
    </counterContext.Provider>
  );
};
