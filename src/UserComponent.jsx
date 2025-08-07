import Props from "./Props";

export function UserComponent() {
  let userObject = {
    name: "John Doe",
    age: 26,
    email: "john.doe@example.com",
  };
  return (
    <div>
      {/* <Props
        name={userObject.name}
        age={userObject.age}
        email={userObject.email}
      /> */}
      <Props user={userObject} />
    </div>
  );
}

export default UserComponent;
