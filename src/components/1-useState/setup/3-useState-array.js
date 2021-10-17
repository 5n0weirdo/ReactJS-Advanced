import React from 'react';
import { useState } from 'react/cjs/react.development';
import { data } from '../../../data';


const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const clickHandler = () => {
    setPeople([])
  }

  return (
    <>
      {
        people.map((person) => {
          const { id, name } = person
          return (<div key={id} className="item">
            <h4>{name}</h4>
          </div>
          )
        })
      }
      <button className="btn" onClick={clickHandler}>
        Clear Items
      </button>
    </>
  )


};

export default UseStateArray;
