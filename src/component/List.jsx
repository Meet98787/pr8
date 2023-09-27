import React, { useState } from 'react'

function List() {
    const [number,setNumber] = useState([10,20,30,40,50,60]);
  return (
    <ul>
        {/* <li>hellow</li>   for worning */}
        {
            number && number.map((item)=>{
                return<li key={item}>{item}</li>;
            }
            )
        }
    </ul>
  )
}

export default List