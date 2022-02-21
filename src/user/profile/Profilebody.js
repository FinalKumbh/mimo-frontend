import React from 'react'
import {NavLink, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom' 
import { REVIEW , MAIN , MYPAGE, CAMERA} from '../../constants';
 


export  function Profilebody() {
  return (
    <div>

      <div className="keep">
          <img className="keepimg" src={process.env.PUBLIC_URL + `assets/image/keep.png`} />
                 <p>스크랩북</p>
      </div>
       <hr />

       <div className="like">
        <img id="likeimg" src={process.env.PUBLIC_URL + `assets/image/like.png`} />
        
        <p>좋아요</p>
        </div>
        <div className='been' stype="height:300px;">
          
        </div>
        <footer>
                            <div className="sixth-nav">
                                <hr />
                                <div className="icon">
                                <a className="eimage2" href={MAIN}>  <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/home.png`}  /></a>
                                <a className="eimage2" href={REVIEW}>  <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/review.png`}  /></a>
                                <a className="eimage2" href={CAMERA}>  <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/camera.png`}  /></a>
                                <a className="eimage2" href={MYPAGE}>  <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/mypage.png`}  /></a>

                                </div>
                            </div>
                        </footer>
                         

    </div>
    

    
  )
}





