import { KAKAO_AUTH_URL } from "./OAuth";
import {  useNavigate, useSearchParams } from "react-router-dom";
const Kakao  = ()=>{

    const navigate = useNavigate();
    return ( 
        <div1>
          <div2>
          <img src={process.env.PUBLIC_URL+`assets/kakao_login.png`}/>
          </div2>  
            <button href={KAKAO_AUTH_URL}>
	    <span>카카오계정 로그인</span>
            </button >
        </div1>
    );
  };
  
  export default Kakao ;
  