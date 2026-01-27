import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
   const products=[
    {id:1,name:"Laptop",price:"$10000",description:"HP Victus uses AMD 7"},
    {id:2,name:"Mouse",price:"$1000",description:"Mouse has Light"},
    {id:3,name:"Mobile",price:"$50000",description:"Phone is Galaxy F41"},
    {id:4,name:"Keyboard",price:"$30000",description:"Keyboard has Backlight"}
  ];
  const {id}=useParams()
  const product=products.find((p)=>p.id===Number(id))
  return (
    <div>
      <h3>ProductDetails</h3>
      <h4>{product.name}</h4>
      <h4>{product.price}</h4>
      <h5>{product.description}</h5>
    </div>
  )
}

export default ProductDetails