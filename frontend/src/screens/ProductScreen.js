import React from 'react'
import data from '../data'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'


const ProductScreen = () => {
  const {id}=useParams()
const product=data.products.find((product)=>(product._id)===id)


if (!product) 
{
  return <div>product not found</div>
}
  return (
    <div>
    <Link to={'/'}>Back to result</Link>
  
      <div className='row top '>
      <div className='col-2'>
        <img  className="large"   src={product.image} alt={product.name}/>
      </div>
      <div className='col-1'>
        <ul>
          <li>
            <h2>{product.name}</h2>
          </li>
          <li>
        
           <Rating rating={product.rating} numReviews={product.numReviews}/>
         
          </li>
          <li>
     Price: ${product.price}
     </li>
     <li>
    Description:<p>{product.description}</p>
     </li>

        </ul>
      </div>
      <div className='col-1'></div>
      <div className='card card-body cardSize'>
<ul>
  <li>
    <div className='row'>
      <div>Price:</div>
      <div className='price'>${product.price}</div>

    </div>
  </li>
  <li>
    <div className='row'>
      <div>Status:</div>
      <div >{product.countInStock>0 ? <span className='success'> IN stock</span>:
      <span className='danger'>Unavailable</span>
      }</div>

    </div>
  </li>
  <li>
    <button className='primary block '>Add to Cart</button>
  </li>
</ul>
      </div>

      </div>
      </div>
    
  )
}

export default ProductScreen