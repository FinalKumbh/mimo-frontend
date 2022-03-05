import React from 'react'
import {NavLink, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom' 
import { REVIEW , HOME , MYPAGE, CAMERA} from '../../constants';
import { FooterNav } from '../../home/nav/FooterNav';


export  function Profilebody() {
  return (
    <div>

      <div className="keep">
          <img className="keepimg" src={process.env.PUBLIC_URL + `assets/image/shopping_basket.png`} />
                 <p>장바구니</p>
      </div>
       <hr />

       <div className="like">
        <img id="likeimg" src={process.env.PUBLIC_URL + `assets/image/like.png`} />
        
        <p>좋아요</p>
        </div>
        <div className='been' stype="height:300px;">
          
        </div>
        <footer>
        <div class="sixth-nav">
        
        <FooterNav/>
      </div>
        </footer>
                         

    </div>
    

    
  )
}





