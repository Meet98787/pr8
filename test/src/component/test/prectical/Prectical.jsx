import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../prectical/prectical.css'
import precticalproduct from './precticalproduct';


 
function Prectical() {
    const [products, setProducts] = useState(precticalproduct)
    const [product, setProduct] = useState(products);
    const handleSearch = (e)=>{
        const name = e.target.value
        const NewList = products.filter((item) => item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
        setProduct(NewList)
    }
    const handletype =(e)=>{
        const gender = e.target.value
    if (gender == 'both') {
        setProduct(products)
    } else {
      const NewList = products.filter((item) => {
        if (item.type == gender) {
          return item
        }
      })
      setProduct(NewList)
    }
    }
    const handleColor =(e)=>{
        const color = e.target.value
        const NewList = products.filter((item) => item.color.toLocaleLowerCase().includes(color.toLocaleLowerCase()))
        setProduct(NewList)
    }
    return (
        <>
            <div className="row ">
                
                <div className="sidebar col-2  text-center">
                    
                    <input type="text" className=' form-control mt-2' placeholder='Serch Product By Name....' onChange={handleSearch}/>
                    <br />
                    <input type="radio"  value="white"  name="type" onChange={handleColor}/>
                    <label htmlFor=""className='p-2' >White</label><br />
                    <input type="radio"  value="red" name="type" onChange={handleColor}/>
                    <label htmlFor="" className='p-2'>Red</label><br />
                    <input type="radio" value="green" name="type" onChange={handleColor}/>
                    <label htmlFor="" className='p-2'>Green</label>
                    <br />
                    <select name="" id="" className='form-select' onChange={handletype}>
                        <option value="both">Select Type</option>
                        <option value="men" >Men</option>
                        <option value="women">Women</option>
                    </select>
                </div>
                <div className="col-2"></div>
                <div className="col-10">
                    <div className='row'>
                    {product && product.length>0?product.map(product => {
                        return (
                            <div class="product-card col-3">
                                <div class="product-tumb">
                                    <img src={product.img} alt="" />
                                </div>
                                <div class="product-details">
                                    <span class="product-catagory">{product.type}</span>
                                    <h4><a href="">{product.name}</a></h4>
                                    <p>{product.color}</p>
                                </div>
                            </div>
                        )

                    }):<h1>Product not found...</h1>
                    }
                    </div>
                    </div>


            </div></>
    );
}

export default Prectical;
