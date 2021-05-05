import { createContext, useReducer } from "react";

export const counterContext = createContext();

const counterReducer = (state, action) => {
  switch (action.type) {
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    case "INCREMENT":
      return state + 1;
    default:
      return 0;
  }
};

export const CounterContextProvider = ({ children }) => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <counterContext.Provider value={{ count, dispatch }}>
      {children}
    </counterContext.Provider>
  );
};
