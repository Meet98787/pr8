import React from 'react';
  function Product({ product }) {
    return (
        <div className="col-4">
        <div className="card">
        <img src={product.img} alt=""/>
                    <h1>{product.name}</h1>
                    <h2>{product.price}</h2>
        </div>
        </div>
    );
  }
  export default Product