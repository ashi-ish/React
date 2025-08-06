import { use, useState } from "react";

// HideAndShow component to demonstrate toggling visibility
// It uses useState to manage the display state
// The component renders a heading that can be toggled between visible and hidden
// The button toggles the display state when clicked
// The component is exported for use in other parts of the application
// This is a simple example of conditional rendering in React
// It showcases how to use state to control the visibility of elements in a React component
// The component can be used to demonstrate basic React concepts like state management and event handling
// It can be useful for learning about React's useState hook and how to handle user interactions
// This component can be part of a larger application where toggling visibility is required

function HideAndShow() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h1>Toggle in ReactJS</h1>

      {display ? <h1>Hide and Show</h1> : <h1>Hidden</h1>}

      <button onClick={() => setDisplay(!display)}> Toggle</button>
    </div>
  );
}

export default HideAndShow;
