import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <button className="btn" onClick={handleToggle}>
        Show/Hide
      </button>
    </div>
  );
};

export default ShowHide;
