import React from 'react'
import {NavLink, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom' 
import { REVIEW , HOME , MYPAGE, CAMERA} from '../../constants';
 


export  function FooterNav() {
  return (
    <div>
                     
            <div className="icon" >
               <NavLink to="/main">  <img id="eimage2" className='nav_icon' src={process.env.PUBLIC_URL+`assets/image/home2.png`}  /></NavLink>
               <NavLink to="/review"> <img id="eimage2" className='nav_icon' src={process.env.PUBLIC_URL+`assets/image/review2.png`}  /></NavLink>
               <NavLink to="/camera"> <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/camera.png`}  /></NavLink>
               <NavLink to="/profile"> <img id="eimage2" className='nav_icon' src={process.env.PUBLIC_URL+`assets/image/store2.png`}  /></NavLink>

               <NavLink to="/review2"> <img id="eimage2" className='nav_icon' src={process.env.PUBLIC_URL+`assets/image/mypage2.png`}  /></NavLink>

            </div>

    </div>
    

    
  )
}





