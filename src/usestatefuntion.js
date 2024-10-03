import React from 'react'
import { useState } from 'react';

const Usestatefuntion = () => {
  const [count,setCount] =useState(0);
    // let count =0;
    const incremnt =()=>{
        // count +=1
        setCount(count+1)
    }
     const decrement =()=>{
        // count -=1
        setCount(count-1)
     }
  return (
    <div>
      <span>The counter</span>
      <p>The count is {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={incremnt}>+</button>
    </div>
  )
}

export default Usestatefuntion
