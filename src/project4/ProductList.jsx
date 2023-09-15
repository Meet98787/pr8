// import React, { useState, useEffect } from 'react';
// import Product from './Product';
// import products from './products';
// import ProductSearch from '../component/test/ProductSearch';


// function ProductList() {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [productsPerPage] = useState(3); // Number of products per page
//     const [displayedProducts, setDisplayedProducts] = useState([]);

//     useEffect(() => {
//         // Calculate the index range for the current page
//         const startIndex = (currentPage - 1) * productsPerPage;
//         const endIndex = startIndex + productsPerPage;

//         // Get the products to display for the current page
//         const productsToDisplay = products.slice(startIndex, endIndex);

//         setDisplayedProducts(productsToDisplay);
//     }, [currentPage]);

//     return (
//         <div className='container'>
//                 <ProductSearch products = {products}/>
//             <div className="product-list  row">
//                 {displayedProducts.map((product) => (
//                     <Product key={product.id} product={product} />
//                 ))}
//             </div>
//                 <div className="pagination">
//                     <button
//                         onClick={() => setCurrentPage(currentPage - 1)}
//                         disabled={currentPage === 1}
//                     >
//                         Previous
//                     </button>
//                     <span>Page {currentPage}</span>
//                     <button
//                         onClick={() => setCurrentPage(currentPage + 1)}
//                         disabled={currentPage === Math.ceil(products.length / productsPerPage)}
//                     >
//                         Next
//                     </button>
//                 </div>
//         </div>
//     );
// }

// export default ProductList;
