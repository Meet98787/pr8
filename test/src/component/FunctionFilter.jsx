import React, { useState } from 'react'
import './style.css'

const FunctionFilter = () => {
    const [product, setProduct] = useState([{
        name: "Nokia",
        price: "100$",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-1gO0Hwa_Bx3Y0xuu1vLaaIa_JIlaELdXpw&usqp=CAU"
    }, {
        name: "samsung",
        price: "200$",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dVM7i3S2KKMX1jB1OsVFwMr03OSOG2JuPA&usqp=CAU"
    }, {
        name: "Vivo",
        price: "200$",
        img:"https://cdn1.smartprix.com/rx-ieBu50dsl-w1200-h1200/eBu50dsl.jpg"
    },
    {
        name: "Apple",
        price: "899$",
        img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
    },
    {
        name: "LG",
        price: "400$",
        img:"https://i.gadgets360cdn.com/products/large/lg-wing-1-800x800-1600148741.jpg"
    },
    {
        name: "Mi",
        price: "999$",
        img:"https://cdn1.smartprix.com/rx-ijqsTjZRe-w1200-h1200/jqsTjZRe.jpg"
    }
    ])
    const newArr = product.map(getFull);
    function getFull(item) {
        return (
            <div className="col-4">
                <div className="card">
                    <img src={item.img} alt=""/>
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row justify-content-center">

            {newArr}
            </div>
        </div>
    )
}

export default FunctionFilter