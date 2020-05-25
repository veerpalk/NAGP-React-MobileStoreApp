import React, { useState, useMemo } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn'
import Dashboard from './components/dashboard/Dashboard';
import './App.css'
import MobileDetails from './components/mobiles/MobileDetails';
import CartList from './components/cart/CartList';
import OrderList from './components/order/OrderList';
import { AuthContext } from './components/auth/AuthContext';
import OrderPopUp from './components/order/OrderPopUp';


function App() {

  const [user, setUser] = useState('')
  const value = useMemo(()=>({user,setUser}),[user,setUser])

  return (
    <AuthContext.Provider value={value}>
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Switch>
      <Route exact path = '/'  component = {Dashboard}/>
      <Route path = '/mobile/:id' component = {MobileDetails} />
      <Route path= '/signin' component = {SignIn} />
      <Route exact path= '/cart' component = {CartList} />
      <Route exact path= '/orders' component = {OrderList} />
      <Route exact path= '/orderPopUp' component = {OrderPopUp} />
    </Switch>
    </div>
    </BrowserRouter>
    </AuthContext.Provider>
  );
  
}

export default App;
