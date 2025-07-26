import React, { useState } from "react";
import Header from "./Header";

// core javascript
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Count Value : {counter}</h1>
      <h2>App Component</h2>
      <p>This is the App component.</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default App;
