import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

function AppHeader(props){
    return(
        <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                    { props.authenticated ? (
                                <Link to="/main" className="app-title">MIMO</Link>
                                ): (
                                <Link to="/" className="app-title">MIMO</Link>
                                )}
                        
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/profile">Profile</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/cart">CartIMG</NavLink>
                                        </li>
                                        <li>
                                            <a onClick={props.onLogout}>Logout</a>
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                        <li>
                                            <NavLink to="/login">Login</NavLink>
                                            
                                        </li>
                                        <li>
                                            <NavLink to="/signup">SignUp</NavLink>
                                        </li>
                                    </ul>
                                )}
                        </nav>
                    </div>
                </div>
            </header>
    )
}

 

export default AppHeader;