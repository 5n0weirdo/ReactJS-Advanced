import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  return (
    <div>
      <h1>Window</h1>
    </div>
  );
};

export default UseEffectCleanup;
