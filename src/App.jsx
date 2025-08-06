import { createElement } from "react"; // React without JSX
import React, { useState } from "react";
import { UserComponent, userKey } from "./UserComponent"; // named import for UserComponent
import Header from "./Header"; // default import for Header component
import { Additon } from "./Addition";
import ToDo from "./ToDO";
import ClickEvent from "./clickEvent";
import State from "./State";
import StateCounter from "./StateCounter"; // default import for StateCounter component
import HideAndShow from "./HideAndShow";
import MultipleConditions from "./MultipleCondition";
// core javascript
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {/* <h1>Count Value : {counter}</h1>
      <h2>App Component</h2>
      <p>This is the App component.</p>
      <h2>Sum : {sum()}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <Iphone />
      <UserComponent />
      <Header />
      <Additon />
      <h1> {userKey}</h1> */}
      {/* <ToDo />
      <ClickEvent /> */}
      {/* <State />
      <StateCounter /> */}
      {/* <HideAndShow /> */}
      {/* React Without JSX */}
      {/* <h1>Hello world</h1> */}
      {/* <div id="app">hello app</div> */}
      {/* <h1 className="heading">Hello world</h1> */}
      {/* React Without JSX */}
      <MultipleConditions />
    </div>
  );

  // React Without JSX
  // return createElement("div", { id: "app" }, "hello app");
  // return createElement("h1", { className: "heading" }, "Hello world");
}

// function Iphone() {
//   return (
//     <div>
//       <h1>Apple</h1>
//     </div>
//   );
// }

// function sum() {
//   return 10 + 30;
// }

export default App;
