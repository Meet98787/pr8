import React, { useState } from 'react'
import './style.css'

const FunctionFilter = () => {
    const [product, setProduct] = useState([{
        name: "Nokia",
        price: "100$"
    }, {
        name: "samsung",
        price: "200$"
    }, {
        name: "Vivo",
        price: "200$"
    },
    {
        name: "Apple",
        price: "899$"
    },
    {
        name: "LG",
        price: "400$"
    },
    {
        name: "Mi",
        price: "999$"
    }
    ])
    const newArr = product.map(getFull);
    function getFull(item) {
        return (
            <div className="col-4">
                <div className="card">
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                </div>
            </div>
        )
    }
    return (
        <div className="container row">

            {newArr}
        </div>
    )
}

export default FunctionFilter