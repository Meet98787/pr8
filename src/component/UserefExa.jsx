import React from 'react'
import { useRef } from 'react'

const UserefExa = () => {
    const name = useRef();
    function show() {
        console.log(name.current.className)
        console.log(name.current.value)
        name.current.style.margin = "10px";

    }
  return (
    <div>
        <input type="text" ref={name}  className='hello'/>
        <button onClick={show}>chack</button>
    </div>
  )
}

export default UserefExa