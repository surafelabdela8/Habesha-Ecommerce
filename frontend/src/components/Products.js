import React from 'react'

import Rating from './Rating';

export default function products(props) {
    const {product}=props;
  return (
  
    <div  key={product._id} className="card">
        <a href={`/Products/${product._id}`}>
           {/* images 680px by 860px  */}
            <img  className="medium"  src={product.image} alt={product.name}/>
       
        </a>
        <div className="card-body">
            <a href={`/Products/${product._id}`}><h2>{product.name}</h2></a>
           <Rating rating={product.rating} numReviews={product.numReviews}/>
            <div className="price">
         ${product.price}
            </div>
        </div>
   
    
        </div> 



  )
}
