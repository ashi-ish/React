function College({ name }) {
  return (
    <div>
      <h1>College</h1>
      <ul>
        {name.map((college, index) => (
          <li key={index}>{college}</li>
        ))}
      </ul>
    </div>
  );
}

export default College;
