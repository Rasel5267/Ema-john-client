import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import ProductDetail from './components/ProductDetail/ProductDetail';
import NotFound from './components/NotFound/NotFound';
import Checkout from './components/Checkout/Checkout';
import { auth } from './components/Login/firebase.config';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders';

const promise = loadStripe('pk_test_51Hr9YiKAFI4LzsmtmjaFDZlrfpjeN57etyoxSEehsw9V6Chm97CzrmVVmTu7u5475NeCfW1mMP7idSBAqpCtw9gx00ILS92UJ0');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/admin">
          <Header />
          <Inventory />
        </Route>
        <Route path="/product/:productKey">
          <Header />
          <ProductDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
