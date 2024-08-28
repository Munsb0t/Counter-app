import React, { useState } from 'react'
import "./style.css"


const Counter = () => {

  const [counter, setCounter]=useState(0);

  function Inc()
  {
    setCounter(counter+1);

    console.log("hi");
  }

  function Dec()
  {
    setCounter(counter-1);
  }

  return (
    <>
      
        <div className="head">
            <h1 className='number'>{counter} ♥</h1>
        </div>

        <div className="btn">
            <button onClick={Inc} className="inc">+</button>
            <button onClick={Dec}className="dec">-</button>

        </div>

    </>
  )
}

export default Counter
