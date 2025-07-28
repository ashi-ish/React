function ClickEvent() {
  function handleClick(event) {
    alert("Button clicked!", event);
  }

  const fruit = (name) => {
    alert(name);
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => fruit("Apple")}>Show Fruit</button>
    </>
  );
}

export default ClickEvent;
