import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Persy",
    age: 18,
    message: "Hello World",
  });

  const [name, setName] = useState(person.name);
  const [age, setAge] = useState(person.age);
  const [message, setMessage] = useState(person.message);

  const changeMessage = () => {
    setMessage("Code is fun");
  };

  const changeName = () => {
    setName("Gresh");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
      <button className="btn" onClick={changeName}>
        Change Name
      </button>
    </>
  );
};

export default UseStateObject;
