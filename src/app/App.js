import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
  useHistory
} from 'react-router-dom';
import { useMediaQuery } from "react-responsive"
import Media from 'react-media';


import AppHeader from '../common/AppHeader';
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import Main from '../home/Main';
import Details from '../layout/details/Details';
import Simulate from '../layout/simulate/Simulate';
import ItemAdd from '../layout/item/ItemAdd';
import Review from '../layout/review/Review';
import Cart from '../layout/cart/Cart';
import Product from '../layout/item/product';
import Webcam_picture from '../layout/modeling/camera';
import Modelhome from '../layout/modeling/modelhome';
import Upload from '../layout/modeling/upload';
import history from '../layout/modeling/history';

import Product1 from '../layout/item/product1';
import Product2 from '../layout/item/product2';
import Product3 from '../layout/item/product3';
import Product4 from '../layout/item/product4';
import Product5 from '../layout/item/product5';
import Product6 from '../layout/item/product6';
import Product7 from '../layout/item/product7';
import Product8 from '../layout/item/product8';







import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';


import Review2 from '../layout/review/Review copy';


import PublicRoute from '../common/PublicRoute.js'

class App extends Component {

 

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }
    const MEDIA_QUERIES = {
      mobile: '(max-width:800px',
    }

    const Mobilemode = (props, context) => (
      <div id="middle" className='styles.middleback'>
        
      </div>
    )
    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  

  loadCurrentlyLoggedInUser() {
    getCurrentUser()                //현재 사용자 정보 받는 곳인가?
    .then(response => {
      this.setState({               //현재 사용자 응답받고, 인증 true, loading은 뭐지?
        currentUser: response,
        authenticated: true,
        loading: false
      });
      console.log("!!!!",this.state );
    }).catch((error) => {
      this.setState({
        authenticated: false,
        loading: false
      });  
    });    
  }

  handleLogout() {                            //로그아웃. 
    localStorage.removeItem(ACCESS_TOKEN);    //access token, 인증, 현재 사용자 없앰
    this.setState({
      authenticated: false,                   
      currentUser: null 
    });
    Alert.success("You're safely logged out!");
  //   this.props.history.replace({
  //     pathname: this.props.location.pathname,
  //     state: {}
  // });

  }


  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {

    if(this.state.loading) {
      return <LoadingIndicator />
      
    }

    return (                              //각 api uri에 보낼 파라미터들
      <div className="app" >
        <div className='center_app'>
            <div className="app-top-box">
            <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
          </div>
          <div className="app-body">
              <Switch> 
            <Route exact path="/" component={(props)=> <Home {...props} authenticated={this.state.authenticated} currentUser={this.state.currentUser} ww/>}></Route>           
              <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Profile}  ></PrivateRoute>

              <PrivateRoute path="/modelhome" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Modelhome}></PrivateRoute>


              <PrivateRoute path="/main" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Main}></PrivateRoute>

                
                <PrivateRoute path="/details" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Details}></PrivateRoute>
          
              <PrivateRoute path="/simulate" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Simulate}></PrivateRoute>
              <PrivateRoute path="/review" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Review}></PrivateRoute>

              <PrivateRoute path="/review2" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Review2}></PrivateRoute>
                <PrivateRoute path="/itemadd" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={ItemAdd}></PrivateRoute>
                <PrivateRoute path="/product" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Product}></PrivateRoute>
                  <PrivateRoute path="/cart" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Cart}></PrivateRoute>

                <PrivateRoute path="/product1" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Product1}></PrivateRoute>

                <PrivateRoute path="/product2" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Product2}></PrivateRoute>

                <PrivateRoute path="/product3" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Product3}></PrivateRoute>

                <PrivateRoute path="/product4" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Product4}></PrivateRoute>

                <PrivateRoute path="/product5" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Product5}></PrivateRoute>

              <PrivateRoute path="/product6" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Product6}></PrivateRoute>

              <PrivateRoute path="/product7" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Product7}></PrivateRoute>

              <PrivateRoute path="/product8" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Product8}></PrivateRoute>



                
              <Route path="/login"
                render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
          
              <Route path="/signup"
                render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
              <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
              <Route component={NotFound}></Route>

              {/* <PrivateRoute path="/modelhome" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Modelhome}></PrivateRoute> */}

              <PrivateRoute path="/upload" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Upload}></PrivateRoute>
              <PrivateRoute path="/webcam" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Webcam_picture}></PrivateRoute>


              </Switch>
          </div>
        </div>  
        <Alert stack={{limit: 3}}             //얜 뭐지?
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
      </div>
    );
  }
}

export default App;
