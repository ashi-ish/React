function Props({ user }) {
  // Props component to demonstrate the use of props in React
  // Props are used to pass data from one component to another
  // They are read-only and immutable
  // This component receives name, age, and email as props
  // It renders the received props in the UI
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Email: {user.email}</h1>
    </div>
  );
}

export default Props;
