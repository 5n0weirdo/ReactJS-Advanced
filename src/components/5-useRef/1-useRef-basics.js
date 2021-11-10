import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  return (
    <div>
      <form action="" className="form">
        <div>
          <input type="text" />
          <button type="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UseRefBasics;
