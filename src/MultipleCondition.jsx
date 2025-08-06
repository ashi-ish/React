import React, { useState } from "react";

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
