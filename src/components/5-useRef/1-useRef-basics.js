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
        </div>
      </form>
    </div>
  );
};

export default UseRefBasics;
