import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Persy",
    age: 18,
    message: "Random message",
  });

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button>Random Message</button>
    </>
  );
};

export default UseStateObject;
