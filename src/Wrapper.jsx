function Wrapper({children, color = "green"}) {
  return (
    <div style={{ color: color, border: "2px solid blue", padding: "10px" }}>
      {children}
    </div>
  );
}

export default Wrapper;