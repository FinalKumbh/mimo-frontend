import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

function AppHeader(props){
    return(
        <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">MIMO</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/profile">Profile</NavLink>
                                            <NavLink to="/cart">CartIMG</NavLink>
                                        </li>
                                        <li>
                                            <a onClick={props.onLogout}>Logout</a>
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                        <li>
                                        </li>
                                        <li>
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