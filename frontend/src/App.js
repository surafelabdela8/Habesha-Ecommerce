import React from 'react';
// import data from './data'
// import Products from './components/Products';
import {BrowserRouter,Route,  Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'


function App() {
  return (


 <BrowserRouter>
 <div className="grid-container">
        <header className="row">
            <div>
                <a href="/" className="brand">Habesha</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signinl">Signin</a>
            </div>

        </header>
        <main>
   
          <Routes>
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
