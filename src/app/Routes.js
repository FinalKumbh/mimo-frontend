import React, { Component ,useState} from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import Main from '../home/Main';
import Details from '../layout/details/Details';
 
import Review from '../layout/review/Review';
import Cart from '../layout/cart/Cart';

import Modelhome from '../layout/modeling/components/Modelhome';
import Upload from '../layout/modeling/components/Upload';
import PrivateRoute from '../common/PrivateRoute';
import ItemApp from '../layout/item/ItemApp';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';

import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';

import Alert from 'react-s-alert';

 
export default function Routes() {
  const [Routes, setRoutes] = useState([]);
const props =   {
  authenticated: false,
  currentUser: null,
  loading: false
}

const transprops = {
  authenticated : this.state.authenticated,
  currentUser : this.state.currentUser,
  loading : this.state.loading
}

setRoutes(transprops);


  return (
    <Router >
      <Switch> 
      <Route component={NotFound}></Route>
        <Route exact path="/" component={(props)=> <Home {...props} authenticated={this.state.authenticated} currentUser={this.state.currentUser} ww/>}></Route>  
        <Route path="/login" render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
        <Route path="/signup" render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
        <Route component={NotFound}></Route>
    
        <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
        component={Profile}  ></PrivateRoute>
       <PrivateRoute path="/main" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
        component={Main}></PrivateRoute>
        <PrivateRoute path="/details" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Details}></PrivateRoute>
        <PrivateRoute path="/review" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Review}></PrivateRoute>          
        <Route path="/itemapp" component={ItemApp}></Route>
        <PrivateRoute path="/cart" authenticated={this.state.authenticated} currentUser={this.state.currentUser}  component={Cart}></PrivateRoute>
        <PrivateRoute path="/review" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Review}></PrivateRoute>
        <PrivateRoute path="/modelhome" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Modelhome}></PrivateRoute>
        <PrivateRoute path="/Upload" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Upload}></PrivateRoute>
        
    
      </Switch>
    </Router>
  )
 }
