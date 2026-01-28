import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
  const [product,setProduct]=useState([])
const {id}=useParams()
   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => setProduct(data));
   },[id])
 
  return (
    <div>
      <h3>ProductDetails</h3>
      <h4>Title:{product.title}</h4>
      <h4>Price:{product.price}</h4>
      <h4>Category:{product.category}</h4>
      <h4>Description:{product.description}</h4>
    </div>
  )
}

export default ProductDetails