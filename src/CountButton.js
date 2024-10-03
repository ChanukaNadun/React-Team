import React from 'react'
import { useState } from 'react';

const CountButton = () => {
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
      <span>This is my count funtion</span>
      <p>Count is {count}</p>
      
      <button onClick={decrement}>-</button>
      <button onClick={incremnt}>+</button>
    </div>
  )
}

export default CountButton
