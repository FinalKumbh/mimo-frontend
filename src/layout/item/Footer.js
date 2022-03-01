import React from 'react'
import {NavLink, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom' 
import { REVIEW , HOME , MYPAGE, CAMERA} from '../../constants';
 


export  function  Footer() {
  return (
    <div>
                     
            <div className="icon">
              <NavLink to="/main">  <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/home.png`}  /></NavLink>

               <NavLink to="/review"> <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/review.png`}  /></NavLink>
               <NavLink to="/camera"> <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/camera.png`}  /></NavLink>
               <NavLink to="/profile"> <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/mypage.png`}  /></NavLink>


            </div>

    </div>
    

    
  )
}







export default Footer