import React from 'react'
import {NavLink, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom' 
import { REVIEW , HOME , MYPAGE, CAMERA} from '../../constants';
 


export  function  Footer() {
  return (
    <div>
                     
        <hr />
            <div className="icon">
              <NavLink to="/main">  <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/home2.png`}  /></NavLink>

               <NavLink to="/review"> <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/review2.png`}  /></NavLink>
               <NavLink to="/Upload"> <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/camera.png`}  /></NavLink>
               <NavLink to="/profile"> <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/mypage2.png`}  /></NavLink>


            </div>

    </div>
    

    
  )
}







export default Footer