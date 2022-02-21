import React, {Component, useEffect, useState} from 'react';
import "./Details.css";
import {Redirect} from "react-router-dom";
import {details} from '../../util/APIUtils';
import Alert from 'react-s-alert';
import {BUY} from '../../constants';

function Details(props) {
    if (props.authenticated) {
        return <Redirect
            to={{
                pathname: "/main",
                state: {
                    from: props.location
                }
            }}/>;
    }
    return (
        <div className="App">
              <div className="first-nav">
     
        
     <img id="mypage" src={process.env.PUBLIC_URL+`assets/image/mypage.png` }/>
     <img id="basket" src={process.env.PUBLIC_URL+`assets/image/shopping_basket.png`}/>
     </div>
   <div className="event">EVENT</div>

            <div className="logininfotxt">
                <p>
                    {props.currentUser.name}님, 오늘도 예쁜 하루 보내세요</p>
            </div>

            <div className="logininfosubtxt">
                <p>
                   아이탬 구매 항목
                </p>
            </div>
            <DetailsForm {...props}/>
        </div>

    );
}

function DetailsForm() {;
    return (
        <div> 
        <div className="skintypebutton">
           
            <p>롬앤</p>
            <p>롬앤 제로 벨벳 틴트 #오리지널시리즈</p>
            <p>무료배송</p>
            <hr/>   
        </div>
        <div class="graytextitem">롬앤 제로 벨벳 틴트 #오리지널시리즈</div> 
        <div class="graytextprice">8400원</div>
        <div class="itemprice"> </div>
            <p> 결제금액</p>
            <p>최종결제금액</p>
   <hr/>
 
 <a  className="buybutton" href={BUY}>  <img   src={process.env.PUBLIC_URL+`assets/image/buybutton.png`}  /></a>
 </div>
  
    );
}

export default Details;