import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../../constants';
import { Redirect } from 'react-router-dom'

function OAuth2RedirectHandler(props){
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
     
        const token = getUrlParameter('token');
        const error = getUrlParameter('error');

        if(token) {
            localStorage.setItem(ACCESS_TOKEN, token);


            /* 여기에 app.js this.state.authenticated 값을 넣는 방법을 찾아서 작성하면 의도하신대로 detail접근가능;
             * this.useState({      
             *     authenticated: true
             * });
             */

            return <Redirect to={{
                pathname: "/details",
                state: { from: props.location }
            }}/>; 
        } else {
            return <Redirect to={{
                pathname: "/login",
                state: { 
                    from: props.location,
                    error: error 
                }
            }}/>; 
        }
}

export default OAuth2RedirectHandler;