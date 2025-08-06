import React, { useState } from "react";

// State is a container to store data like a variable
// State is mutable and dynamic
// We have to import it, when we want to use it
// It re-render component automatically so data can be visible to UI

function StateCounter() {
  const [count, setCount] = useState(0);
  const [rCount, setRCount] = useState(100);

  let changeRCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>State in React JS</h1>
      <h1>{count}</h1>
      {/* <h1>{rCount}</h1> */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={changeRCount}>Decrement</button>
    </div>
  );
}

export default StateCounter;
//
