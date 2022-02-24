import React, { Component, useEffect } from 'react';
import './Profile.css';
import {Profilebody} from "./Profilebody";



class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                    <div class="third-nav" >
                        <div className='profileimg'>
                            <div className="profile-avatar">
                        
                                { 
                                    this.props.currentUser.imageUrl ? (
                                        <img className="profilemain" src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                    ) : (
                                        <div className="text-avatar">
                                            <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                        </div>
                                    )
                                }
                            </div>    
                        </div>    
                    </div>
                        <div className="profile-body">
                           <p className="profile-name">{this.props.currentUser.name}</p>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                            <Profilebody/>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Profile