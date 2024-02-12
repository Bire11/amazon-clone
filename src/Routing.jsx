import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Landing from './Pages/Landing/Landing';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Auth from './Pages/Auth/Signup';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';



const Routing = () => {
  const stripePromise = loadStripe('pk_test_51OhdidK003wF6MLMSLu14MZgy1A2AuTz1df2Id4xrJGSHPM5YR8P6ukMUr4aO8g7P0LGg7Kwj52r5WpGiLGzK2uh00WrdImjkW');
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Landing/>}/>
        <Route path='/auth' element= {<Auth/>}/>
        <Route 
        path='/payments' 
        element= {
          <ProtectedRoute 
          msg = {'you must log in to pay'}
          redirect={'/payments'}>
          <Elements stripe={stripePromise}>
             <Payment/>
            </Elements>
          </ProtectedRoute> 
        }
        /> 
        <Route path='/orders' element= {
         <ProtectedRoute 
         msg = {'you must log in to access your orders'}
         redirect={'/orders'}>

         <Orders/>
         
         </ProtectedRoute>
       }/>
        <Route path='/category/:categoryName' element= {<Results/>}/>
        <Route path='/products/:productId' element= {<ProductDetail/>}/>
        <Route path='/cart' element= {<Cart/>}/>
      </Routes>

    </Router>
  )
}

export default Routing