import {  useNavigate, useSearchParams } from "react-router-dom";
import "./Screen.css";


const Screen = ()=>{

  const navigate = useNavigate();

  
    return ( 
    <div1>
      <div2>
      <img id="screen" src={process.env.PUBLIC_URL+`assets/image-1.png`}/>
      </div2>
     
      <button type="naver" onClick={()=> {navigate("/naver");}}>
        Naver
      </button>
      <button type="kakao" onClick={()=> {navigate("/kakao");}}>
        Kakao
      </button>
      <button type="google" onClick={()=> {navigate("/google");}}>
        Google
      </button>
    </div1>
    );
  };
  
  export default Screen ;
  