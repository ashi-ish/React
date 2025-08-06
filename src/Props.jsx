function Props({ name, age, email }) {
  // Props component to demonstrate the use of props in React
  // Props are used to pass data from one component to another
  // They are read-only and immutable
  // This component receives name, age, and email as props
  // It renders the received props in the UI
  return (
    <div>
      <h1>Props in React JS</h1>
      <h2>Props are read only</h2>
      <h2>Props are immutable</h2>
      <h2>Props are used to pass data from one component to another</h2>
      <h2>Props can be used with state and functional components</h2>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Email: {email}</h1>
    </div>
  );
}

export default Props;
