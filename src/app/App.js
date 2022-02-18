import React, { Component } from 'react';
import {
  Route,
  Switch,
  useHistory
} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import Main from '../home/Main';
import Details from '../layout/details/Details';
import Simulate from '../layout/simulate/Simulate';
import ItemAdd from '../layout/item/ItemAdd';

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

import PublicRoute from '../common/PublicRoute.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

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
      <div className="app">
        <div className="app-top-box">
          <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
        </div>
        <div className="app-body">
          <Switch>
          <Route exact path="/" component={Home}></Route>           
            <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={Profile}  ></PrivateRoute>
            <PrivateRoute path="/main" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={Main}></PrivateRoute>
            <PrivateRoute path="/details" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={Details}></PrivateRoute>
            <PrivateRoute path="/simulate" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={Simulate}></PrivateRoute>
              <PrivateRoute path="/itemadd" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={ItemAdd}></PrivateRoute>
            <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
         
            <Route path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
            <Route component={NotFound}></Route>
          </Switch>
        </div>
        <Alert stack={{limit: 3}}             //얜 뭐지?
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
      </div>
    );
  }
}

export default App;
