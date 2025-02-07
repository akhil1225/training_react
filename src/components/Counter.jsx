import React from 'react'
import "./Counter.css";
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1);
    }

    function reset(){
        setCount(0);
    }
    
  return (
    <div>
        <h1 className='count-head'>{count}</h1>
        <button className='btn' onClick={increment}>Increment</button>
        <button className="btn" onClick={reset}>Reset</button>
        <button className='btn' onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter