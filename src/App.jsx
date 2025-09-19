import { createElement } from "react"; // React without JSX
import React, { useState } from "react";
import { UserComponent } from "./UserComponent"; // named import for UserComponent
import Header from "./Header"; // default import for Header component
import { Additon } from "./Addition";
import ToDo from "./ToDO";
import ClickEvent from "./clickEvent";
import State from "./State";
import StateCounter from "./StateCounter"; // default import for StateCounter component
import HideAndShow from "./HideAndShow";
import MultipleConditions from "./MultipleCondition";
import Props from "./Props";
import User from "./User";
import Wrapper from "./Wrapper";
// core javascript
function App() {
  // let userObject = {
  //   name: "Ashish Parulekar",
  //   age: 26,
  //   email: "ashish@example.com",
  // };
  const [value, setValue] = useState("");
  return (
    <div>
      {/* <h1>Count Value : {counter}</h1>
      <h2>App Component</h2>
      <p>This is the App component.</p>
      <h2>Sum : {sum()}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <Iphone />
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
      {/* <MultipleConditions /> */}
      {/* <Props name="John Doe" age={30} email="john.doe@example.com" /> */}
      {/* <UserComponent /> */}
      {/* <Props user={userObject} /> */}
      {/* <UserComponent /> */}
      {/* <User name="Ashish" />
      <User /> */}
      {/* <Wrapper color="orange">
        <h1>Wrapper Component</h1>
      </Wrapper>

      <Wrapper>
        <h1>Wrapper Component 1</h1>
      </Wrapper> */}
      <div>
        <h1>Get Input Field Value</h1>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter something" />
        <h2>{value}</h2>
        <button onClick={() => setValue("")}>Clear</button>
      </div>
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
