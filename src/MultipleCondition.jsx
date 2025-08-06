import React, { useState } from "react";

// MultipleConditions component to demonstrate multiple conditions in React
// It uses useState to manage the count state
// The component renders a heading that changes based on the count value
// The button increments the count when clicked
// The component is exported for use in other parts of the application

function MultipleConditions() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Multiple Conditions in React JS</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Change Phone</button>
      {count === 0 ? (
        <h1>Count is Zero</h1>
      ) : count === 1 ? (
        <h1>Count is One</h1>
      ) : count === 2 ? (
        <h1>Count is Two</h1>
      ) : count === 3 ? (
        <h1>Count is Three</h1>
      ) : count === 4 ? (
        <h1>Count is Four</h1>
      ) : (
        <h1>Other Condition</h1>
      )}
    </div>
  );
}

export default MultipleConditions;
