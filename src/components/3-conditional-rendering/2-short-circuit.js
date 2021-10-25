import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");

  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <div>
      {/* <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1> */}
      <h1>{text || "Ersy"}</h1>
      <button className="btn">Toggle error</button>
      {text && <h1>Hello.</h1>}
    </div>
  );
};

export default ShortCircuit;
