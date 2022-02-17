import React, { Component, useEffect, useState } from 'react';
import {  Redirect } from "react-router-dom";
import { details } from '../../util/APIUtils';
import Alert from 'react-s-alert';

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
      
    </div>
    
  );
}


export default Simulate;