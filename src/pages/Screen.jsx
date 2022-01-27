import {  useNavigate, useSearchParams } from "react-router-dom";

const Screen = ()=>{

  const navigate = useNavigate();

  
    return ( 
    <div>
      <button onClick={()=> {navigate("/naver");}}>
        Naver
      </button>
      <button onClick={()=> {navigate("/kakao");}}>
        Kakao
      </button>
      <button onClick={()=> {navigate("/google");}}>
        Google
      </button>
      <img src={process.env.PUBLIC_URL+`assets/image-1.png`}/>
    </div>
    );
  };
  
  export default Screen ;
  