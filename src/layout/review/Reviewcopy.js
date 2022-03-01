import React, { Component, useEffect, useState } from 'react';
import {  Redirect } from "react-router-dom";
import { details } from '../../util/APIUtils';
import Alert from 'react-s-alert';
import './review.css'

function Review2(props) {
  if(props.authenticated) {
    return <Redirect
        to={{
        pathname: "/main",
        state: { from: this.props.location }
    }}/>;            
  }
  return (
    <div className="review">
       <div className="review_title">
            리뷰
        </div>
        <img className="review_user1" src={process.env.PUBLIC_URL+`assets/image/kimJiyeon_1.png`  }/>
        <div className="review_user1_name">
            김미모
            2022.02.24
        </div>
        <img className="review_user1_prod" src={process.env.PUBLIC_URL+`assets/image/be86113361437c786ea6223586ba7cd1.jpeg`  }/>
        <div className="review_contents1">
        색상 다 너무 예쁘고 정말 입술에 편안하게 올라갑니다. 매트립 좋아하시는 분들은 좋아하실 거 같아요.
        </div>
        <img className="akar-iconsheart" src={process.env.PUBLIC_URL+`assets/image/akar-icons_heart.png`  }/>

        <div className="review_user1_count">218</div>
        <img className="review_user2" src={process.env.PUBLIC_URL+`assets/image/Instagram 1.png`  }/>
        <div  className="review_user2_name">
        엔코뷰티
        2022.02.10
        </div>
         <img className="review_user1_prod" src={process.env.PUBLIC_URL+`assets/image/3586ef9e95cc88e6a4e36d68094ca76a 1.png`  }/>

        <div className="review_contents2">
        3개나 샀어요ㅠㅠㅠ 너무예쁘고 진짜 가볍고 포근하게 올라가요 단점은 묻어남이 많다는거?! 그거말고는 지워질때도 색이 이쁘게지워져서 넘...
         </div>
         <img className="akar-iconsheart" src={process.env.PUBLIC_URL+`assets/image/akar-icons_heart.png`  }/>

         <div className="review_user1_count">323</div>

    </div> 
  );
}


export default Review2;