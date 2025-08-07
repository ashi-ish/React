import College from "./College";
import Props from "./Props";
import Student from "./Student";
import { useState } from "react";

export function UserComponent() {
  let userObject = {
    name: "John Doe",
    age: 26,
    email: "john.doe@example.com",
  };

  let userObject1 = {
    name: "John Doe",
    age: 26,
    email: "john.doe@example.com",
  };

  let collegeNames = [
    "Harvard University",
    "Stanford University",
    "Massachusetts Institute of Technology (MIT)",
    "California Institute of Technology (Caltech)",
    "University of Oxford",
  ];

  const [student, setStudent] = useState();

  return (
    <div>
      {/* <Props
        name={userObject.name}
        age={userObject.age}
        email={userObject.email}
      /> */}
      <button onClick={() => setStudent("John Cena")}>Set Student</button>
      {student && <Student name={student} />}

      <College name={collegeNames} />
      <Props user={userObject} />
      <Props user={userObject1} />
    </div>
  );
}

export default UserComponent;
