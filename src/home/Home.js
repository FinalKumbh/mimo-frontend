import React, { Component,usetState } from 'react';
import './Home.css';
import './Login.css';
import mimoMain from '../img/mimo_main.png';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../constants';
import { login } from '../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../img/fb-logo.png';
import googleLogo from '../img/google-logo.png';
import githubLogo from '../img/github-logo.png';
import Alert from 'react-s-alert';




function Home(props){
    function componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        // OAuth2 로그인에 오류가 발생하면 오류와 함께 /login 페이지로 리디렉션됩니다.
        // 여기서는 오류를 표시한 다음 위치에서 오류 쿼리 매개 변수를 제거합니다.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }
    if(props.authenticated) {
        return <Redirect
            to={{
            pathname: "/home2",
            state: { from: props.location }
        }}/>;            
    }
    return(
        <div className="home-container">
            <div className="container">
                <img src={mimoMain} alt="mimoMain" />
            </div>
            <div className="login-container">
                <div className="login-content">
                    <SocialLogin />
                    <div className="or-separator">
                    </div>
                </div>
            </div>
        </div>
    )
}

function SocialLogin(){
	return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Log in with Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
                <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                    <img src={githubLogo} alt="Github" /> Log in with Github</a>
            </div>
        );
}

export default Home;