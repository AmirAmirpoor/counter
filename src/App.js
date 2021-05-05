import { CounterContextProvider } from "./context/counter-context.jsx";
import Counter from "./components/Counter.jsx";

import "./App.css";

function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <h1>counter w/useContext + useReducer</h1>

        <Counter />
      </div>
    </CounterContextProvider>
  );
}

export default App;
