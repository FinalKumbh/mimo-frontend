import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./Screen.css";
import React from 'react';

const Screen = ()=>{

  const navigate = useNavigate();

  
    return ( 
      <div className="Screen">
            <div className="signtext">  
      <p>가입을 진행할 경우, 이용약관과 개인정보 수집 및 이용에 
        대해 동의한 것으로 간주됩니다</p>
        </div>
      <div2 className="Screenline">
      <img  className="Logo" src={process.env.PUBLIC_URL+`assets/Logo.png`}/>
      </div2>
 
      <div className="loginscope">
      <Link to='/naver' className="naver">
      <img id="naverbutton" src={process.env.PUBLIC_URL+`assets/naver_login.png` }/>
      </Link>
      <Link to='/Kakao' className="kakao">
      <img id="Kakaobutton" src={process.env.PUBLIC_URL+`assets/Kakao_login.png` }/>
      </Link>
      <Link to='/google' className="google"> 
      <img id="googlebutton" src={process.env.PUBLIC_URL+`assets/google_login.png` }/>
      </Link>
      </div>
    
      </div>
   
    );
  };
  
  export default Screen ;
  