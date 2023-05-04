import React from 'react';
// import data from './data'
// import Products from './components/Products';
import {BrowserRouter,Link,Route,  Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen';
import Newproduct from './pages/Newproduct';
import { useSelector } from 'react-redux';


function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  return (


 <BrowserRouter>
 <div className="grid-container">
        <header className="row">
            <div>
                <Link to="/" className="brand">Habesha</Link>
            </div>
            <div>
                <Link to="/cart">Cart
                {cartItems.length > 0 && (
                <span className='badge'>{cartItems.length}</span>
              )}
                </Link>
                <Link to="/signinl">Signin</Link>
            </div>

        </header>
        <main>
   
          <Routes>
          <Route path='newproduct' element={<Newproduct/>}></Route>
          <Route path="/cart/:id?" Component={CartScreen}></Route>
          <Route path="/Products/:id" element={<ProductScreen></ProductScreen>}></Route>
           <Route path="/" element={<HomeScreen></HomeScreen>} ></Route>
          </Routes>
  
   

    </main>

        <footer className="row center">
All right reserved
        </footer>
    </div>

   

    </BrowserRouter>
 
  )
}
  

export default App;
