import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data));
  })
  
  return (
    <div className='products'>
      {products.map((product)=>(
        <div key={product.id} className='product'>
        <h4>{product.title}</h4>
        <h5>{product.price}</h5>
        <h5>{product.category}</h5><br></br>
        <button><Link to={`/products/${product.id}`}>View Details</Link></button>
        </div>
      ))}
    </div>
  )
}

export default Products