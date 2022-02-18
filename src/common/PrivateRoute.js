import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";
  
  
const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
      {...rest}     //rest 객체 안에 있는 모든 것들을 설정해주겠다는 의미. rest 객체에 뭐가 있지?
      render={props =>
        authenticated ? (
          <Component {...rest} {...props} />
          ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
);
  
export default PrivateRoute