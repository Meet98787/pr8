import React, { useState, useEffect } from 'react';
import '../style.css'
import products from '../../project4/products';
import Product from '../../project4/Product';

function ProductSearch() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(999); 
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on the search term
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [searchTerm]);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className='container m-auto'>
      <div className='row text-center'>
        <input
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          className='text-center'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="product-list row">
        {displayedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

    </div>
  );


  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // const [currentPage, setCurrentPage] = useState(1);
  // const [productsPerPage] = useState(3); // Number of products per page
  // const [displayedProducts, setDisplayedProducts] = useState([]);
  // useEffect(() => {
  //   // Calculate the index range for the current page
  //   const startIndex = (currentPage - 1) * productsPerPage;
  //   const endIndex = startIndex + productsPerPage;

  //   // Get the products to display for the current page
  //   const productsToDisplay = products.slice(startIndex, endIndex);

  //   setDisplayedProducts(productsToDisplay);
  // }, [currentPage]);

  // return (
  //   <div className='text-center'>
  //     <input
  //       type="text"
  //       placeholder="Search by product name"
  //       value={searchTerm}
  //       onChange={handleSearch}
  //       className='text-center'
  //     />
  //     <div className="product-list">
  //       <div className="container">
  //         <div className="row justify-content-center">
  //           {filteredProducts.map((product) => (
  //             // <ProductCard key={product.name} product={product} />
  //             <Product key={product.name} product={product} />
  //           ))}
  //           {displayedProducts.map((product) => (
  //                   <Product key={product.name} product={product} />
  //               ))}
  //         </div>
  //       </div>
  //     </div>
  //     <div className="pagination">
  //                   <button
  //                       onClick={() => setCurrentPage(currentPage - 1)}
  //                       disabled={currentPage === 1}
  //                   >
  //                       Previous
  //                   </button>
  //                   <span>Page {currentPage}</span>
  //                   <button
  //                       onClick={() => setCurrentPage(currentPage + 1)}
  //                       disabled={currentPage === Math.ceil(products.length / productsPerPage)}
  //                   >
  //                       Next
  //                   </button>
  //               </div>
  //   </div>
  // );
}

export default ProductSearch;
