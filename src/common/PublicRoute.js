import React, { Component } from "react";

import {Route, Redirect} from "react-router-dom";
import isAdmin from "./isAdmin";

const PublicRoute = ({component : Component, authenticated, ...rest}) => {
    return(
        <Route 
        {...rest}
        render={(props) => 
        isAdmin()&& authenticated ? <Redirect to = "/" />:<Component {...props} />
        }
        />
    );
};

export default PublicRoute;

 