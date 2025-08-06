function Props({ name, age, email }) {
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
