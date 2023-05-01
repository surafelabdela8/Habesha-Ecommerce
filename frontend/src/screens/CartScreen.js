import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const CartScreen = (props) => {
    const { id } = useParams();
    const productId = id;
    const location = useLocation();
    const Qty = new URLSearchParams(location.search).get("qty") ?? 1;
  return (
    <div>
        <h1>cart screen </h1>
<p>Add to cart :product id: {productId} Qty: {Qty}</p>
    </div>
  )
}

export default CartScreen