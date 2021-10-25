import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  useEffect(() => {});
  return (
    <div>
      <button className="btn">Click</button>
    </div>
  );
};

export default UseEffectBasics;
