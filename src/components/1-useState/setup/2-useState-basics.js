import React, { useState } from 'react';

//start with "use"
//component name uppercase
//must be in function/component body
//cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState("hello world "))
  // const value = useState(7)[0];
  // const handler = useState(9)[1];

  // console.log(value, handler);

  const [title, setTitle] = useState("Random Title")

  const handleClick = () => {
    if (title === "Random Title") {
      setTitle("Hello World")
    }
    else {
      setTitle("Random Title")
    }
  }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
