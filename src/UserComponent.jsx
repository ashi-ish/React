import Props from "./Props";

export function UserComponent() {
  let userObject = {
    name: "Ashish Parulekar",
    age: 26,
    email: "ashish@example.com",
  };
  return (
    <div>
      <h1>User Component</h1>
      <p>This is the User component.</p>
      <Props user={userObject} />
    </div>
  );
}

export default UserComponent;
