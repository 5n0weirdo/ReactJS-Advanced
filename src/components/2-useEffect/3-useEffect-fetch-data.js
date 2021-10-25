import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <h3>Github Users</h3>
    </div>
  );
};

export default UseEffectFetchData;
