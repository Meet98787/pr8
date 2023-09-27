import React from 'react'
import { useState } from 'react'

const Timewatch = () => {
  const [count,setCount] = useState(0);
  const [active,setActive] =useState(false);
  if(active === true){
    setTimeout(()=>{
      setCount(count + 1);
    },1000);

  };
  const handleStart = () => {
    setActive(true);
  };
  const handleStop = () => {
    setActive(false);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
    <div className="text-center">
    <button onClick={handleStart} className='start'>Start</button>
    <button onClick={handleStop} className='stop'>Stop</button>
    <button onClick={handleReset} className='reset'>Reset</button>
    <h1 className='text-center'>{count}</h1>
    
    </div>
    </>
  )
}

export default Timewatch