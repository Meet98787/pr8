import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../style.css'

function ProductSearch(props) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredProducts = props.products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='text-center'>
      <input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={handleSearch}
        className='text-center'
      />
      <div className="product-list">
      <div className="container">
            <div className="row justify-content-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
  </div>
  </div>
      </div>
    </div>
  );
}

export default ProductSearch;
