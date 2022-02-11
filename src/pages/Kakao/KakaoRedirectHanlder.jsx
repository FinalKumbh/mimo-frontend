import React, { useEffect } from "react";
import axios from 'axios';

const KakaoRedirectHandler = () => {
  useEffect(()=> {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); 
    let grant_type = "authorization_code";
    let client_id = "c65ef05a10b8080f80969bfb56d13033";
    axios.post(`https://kauth.kakao.com/oauth/token?
    grant_type=${grant_type}
    &client_id=${client_id}
    &redirect_uri=http://localhost:3000/oauth/callback/kakao
    &code=${code}`
    , {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then((res) => {
          console.log(res)
           
      })
      }, [])

      return <div>LOGIC</div>;
    };
    
    export default KakaoRedirectHandler;
