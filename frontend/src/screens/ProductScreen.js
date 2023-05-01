import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { detailsProduct } from '../actions/productActions'


const ProductScreen = (props) => {
//   const {id}=useParams()
// const product=data.products.find((product)=>(product._id)===id)
 const dispatch=useDispatch()
 const { id } = useParams();
 const productId = id;
 const [Qty,setQty]=useState(1)

const productDetails=useSelector((state)=>state.productDetails)
const {loading,error,product}=productDetails

useEffect(()=>{
dispatch(detailsProduct(productId))
},[dispatch, productId])

const addToCartHandler = () => {
  window.location.href = `/cart/${productId}?qty=${Qty}`;

};
  return (

    <div>
    {loading ? (
        <LoadingBox></LoadingBox>
    ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
    ) : (
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
  {
                                        product.countInStock > 0 && (
                                            <>
                                                <li>
                                                    <div className="row">
                                                        <div> Qty</div>
                                                        <div> <select value={Qty} onChange={e => setQty(e.target.value)}
                                                        >
                                                            {[...Array(product.countInStock).keys()].map(
                                                                (x) => (
                                                                    <option key={x + 1} value={x + 1}>
                                                                        {x + 1}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={addToCartHandler}
                                                        className="primary block"
                                                    >
                                                        Add to Cart</button>
                                                </li>
                                            </>

                                        )
                                    }
</ul>
      </div>

      </div>
      </div>
    )}
</div>
    
    
  )
}

export default ProductScreen