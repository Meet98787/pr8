import React, { useState } from 'react'
 
const FunctionDemo = () => {
    // const[count,setCount] = useState(0);
    var count = 0
    const[product,setProduct]=useState([{
        name:"Nokia",
        price:"100$"
    },{
        name:"samsung",
        price:"200$"
    }
])
function handle() {
    count += 1
    console.log(count)
}
  return (
    <div>
        <h1>Count :{count}</h1>
        <button onClick={() => handle()}>incriment</button>
        {/* <button onClick={() => setCount(count+1)}>incriment</button> */}

        <h1>Name: {product[0].name}</h1>
        <h1>Price: {product[0].price}</h1>
        {/* <h1>Name: {product[1].name}</h1>
        <h1>Price: {product[1].price}</h1> */}
    </div>
  )
}

export default FunctionDemo