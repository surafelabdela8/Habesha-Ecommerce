import React, { useEffect,  } from 'react'

import Products from '../components/Products';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productActions';



const HomeScreen = () => {
  const dispatch=useDispatch()
  const productList=useSelector(state=>state.productList)
  const{loading,error,products}=productList;


// const [products,setProducts]=useState([])
// const [loading,setLoading]=useState(false)
// const [error,setError]=useState(false)


useEffect(()=>{
  dispatch(listProduct()) //listproduct is an action that is found in the action folder so we are dispatching or sending the action to the store


},[dispatch]);


  return (
    <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className="row center">
                    {products.map((product) => (
                        <Products key={product._id} product={product}></Products>
                    ))}

                </div>
            )}
        </div>
  )
}

export default HomeScreen