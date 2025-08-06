import { use, useState } from "react";

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
