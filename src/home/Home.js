import React, { Component,usetState, useEffect } from 'react';
import './Home.css';
import mimoMain from '../img/mimo_main.png';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../constants';
import { login } from '../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../img/fb-logo.png';
import googleLogo from '../img/google-logo.png';
import githubLogo from '../img/github-logo.png';
import Alert from 'react-s-alert';




function Home(props){

    useEffect(()=>{

        if (props.authenticated){
            props.history.push('/main')
        }
    },[])
    return(
        <div className="home-container">
            <div className="container">
                <img src={mimoMain} alt="mimoMain" />
            </div>
            
        </div>
    )
}



export default Home;