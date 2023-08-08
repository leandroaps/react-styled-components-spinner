import { useState } from "react";

import "./App.css";
import { Spinner } from "./components/spinner";

function App() {
  const [count, setCount] = useState(0);

  if (count > 0) {
    return <Spinner />;
  }

  return (
    <>
      <h1>Spinner with Vite and Styled Components</h1>
      <Spinner />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
