import React, { Component, useEffect, useState } from 'react';
import {  Redirect } from "react-router-dom";

import Alert from 'react-s-alert';
import {CAMERAIMAGE, PROD} from "../../constants";
function Simulate(props) {
  if(props.authenticated) {
    return <Redirect
        to={{
        pathname: "/main",
        state: { from: this.props.location }
    }}/>;            
  }
  return (
    <div className="App">
      <div className="logininfotxt">
        <p> {props.currentUser.name}님 사진 찍고 가실게여~</p>
      </div> 

      <div className="logininfosubtxt">
        사진띄우는 곳
      </div>

      <div className="skintypesection1"> 
        <p> 사진 선택</p>
        <p> 저장?</p>
        <p> 립 제품 보기</p>
      </div>
      <a className="camera_image" href={CAMERAIMAGE}>  <img src={process.env.PUBLIC_URL+`assets/image/camera_image.png`}  /></a>
      <a className="camera_prod1" href={PROD}>  <img src={process.env.PUBLIC_URL+`assets/image/camera_prod1.png`}  /></a>
      <a className="camera_prod2" href={PROD}>  <img src={process.env.PUBLIC_URL+`assets/image/camera_prod2.png`}  /></a>
      <a className="camera_prod3" href={PROD}>  <img src={process.env.PUBLIC_URL+`assets/image/camera_prod3.png`}  /></a>
      <span className="camera_prod1_text">제로 벨벳 틴트</span>

      <span className="camera_prod2_text">밀크티 벨벳 틴트</span>

      <span className="camera_prod3_text">블러 퍼지 틴트</span>
    </div>
    
  );
}


export default Simulate;