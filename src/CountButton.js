import React from 'react'
import { useState } from 'react';  // import useState

const CountButton = () => {
  // useState
  const [count, setCount] = useState(0);

  // increment count variable in a
  const incremnt = (a) => {
    setCount(count + a);
  };

  // increment count variable in b
  const decrement = (b) => {
    setCount(count - b);
  };

  // function call event in console
  function sayMyName(e) {
    console.log("This is event", e.target);
  }

  return (
    <div>
      <span>This is my count funtion</span>
      <p>Count is {count}</p>

      <button
        onClick={() => {
          decrement(5);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          incremnt(4);
        }}
      >
        +
      </button>

      {/* event we are handel view in console */}
      <button onClick={sayMyName}>Click here</button>
      
    </div>
  );
}

export default CountButton

