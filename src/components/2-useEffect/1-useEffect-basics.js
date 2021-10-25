import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const countHandler = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    if (value > 0) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("Hello");
  });
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={countHandler}>
        Click Me
      </button>
    </div>
  );
};

export default UseEffectBasics;
