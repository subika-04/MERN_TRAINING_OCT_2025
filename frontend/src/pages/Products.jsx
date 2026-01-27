import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const products=[
    {id:1,name:"Laptop",price:"$10000"},
    {id:2,name:"Mouse",price:"$1000"},
    {id:3,name:"Mobile",price:"$50000"},
    {id:4,name:"Keyboard",price:"$30000"}
  ];
  return (
    <div className='products'>
      {products.map((product)=>(
        <div key={product.id} className='product'>
        <h4>{product.name}</h4>
        <h5>{product.price}</h5><br></br>
        <button><Link to={`/products/${product.id}`}>View Details</Link></button>
        </div>
      ))}
    </div>
  )
}

export default Products