import React, { useState } from "react";

// State is a container to store data like a variable
// State is mutable and dynamic
// We have to import it, when we want to use it
// It re-render component automatically so data can be visible to UI

function State() {
  const [phone, setPhone] = useState("Iphone");

  let changePhone = () => {
    setPhone("Samsung");
  };
  return (
    <div>
      <h1>State in React JS</h1>
      <h1>{phone}</h1>
      <button onClick={changePhone}>Change Phone</button>
    </div>
  );
}

export default State;
