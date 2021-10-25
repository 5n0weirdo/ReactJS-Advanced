import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  const handleError = () => {
    setIsError(!isError);
  };

  return (
    <div>
      <h1>{text || "Ersy"}</h1>
      <button className="btn" onClick={handleError}>
        Toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>There is an error.</p> : <h1>There is no error</h1>}
    </div>
  );
};

export default ShortCircuit;
