import React from 'react'
import {NavLink, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom' 
import { REVIEW , HOME , MYPAGE, CAMERA} from '../../constants';

export  function Header() {
  return (
    <div>
                     
    <hr />
    <div className="first-nav">
          <NavLink to="/cart"><img id="basket" src={process.env.PUBLIC_URL+`assets/image/shopping_basket.png`}/></NavLink>
     </div>
  

    </div>
    

    
  )
}
export default Header 