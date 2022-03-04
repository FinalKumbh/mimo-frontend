import React, { Component, useState } from 'react';
//import {  useNavigate, useSearchParams } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';
import "./Home.css";
import "./Main.css";

import {FooterNav} from './nav/FooterNav';


function Main() {
 
  return (
    <div className="App">

          <div>
          <img id="event1" className='main_event1' src={`assets/image/event1.png` }/>
        
    

      </div>


    <div className="fourth-nav">  
    <div className="bestitem">피부톤별 화장품 추천</div>

    <div className="bestitemlist">
          <div className="bestitemimagesample">


            <div className="prod_size">
              
            <NavLink to="/itemapp">  <img id="eimage2" className="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem1.png` }/> </NavLink>
              
                <p>제로 벨벳 틴트</p>
                <p className="main_prod_gray"> #오리지널시리즈</p>
            </div>
            <div className="bestimage2">
            <NavLink to="/product1">  <img id="eimage2" className="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem2.png` }/> </NavLink>
          
                <p>밀크티 벨벳 틴트</p>
                <p className="main_prod_gray"> #홍차컬러 #밀크</p>
            </div>
            <div className="bestimage3">
            <NavLink to="/product2">  <img id="eimage2" className="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem3.png` }/> </NavLink>
             
                <p>블러 퍼지 틴트</p>
                <p className="main_prod_gray"> #무광 그라데이션</p>

            </div>
            
            </div>
      </div>
    </div>
    <div className="bestitem">봄이니까 설레는 신상 아이템</div>
    <div className="fifth-nav">
        <div className="newitemlist">
            <div className="newitemimagesample">
              
              <div className="bestimage1"  >
              <NavLink to="/product4"> <img id="eimage2" className="eimage3" src={process.env.PUBLIC_URL+`assets/image/newitem1.png` }/> </NavLink>
              
                  <p>쥬시 래스팅 여라</p>
                  <p className="main_prod_gray"> #여라 시리즈</p>
              </div>

              <div className="bestimage2">
              <NavLink to="/product5"><img id="eimage2" className="eimage3" src={process.env.PUBLIC_URL+`assets/image/newitem2.png` }/> </NavLink>
                 
                  <p>제로 벨벳 틴트</p>
                  <p className="main_prod_gray"> #빈티지 필터</p>
              </div>
              <div className="bestimage3">
              <NavLink to="/product6">  <img id="eimage2" className="eimage3" src={process.env.PUBLIC_URL+`assets/image/newitem3.png` }/> </NavLink>
               
                  <p>듀이풀 워터 틴트</p>
                  <p className="main_prod_gray"> #입술에 내린 단비</p>
              </div>
               <div className="bestimage4" >
               <NavLink to="/product7">  <img id="eimage2" className="eimage3" src={process.env.PUBLIC_URL+`assets/image/newitem4.png` }/> </NavLink>
                 
                  <p>쥬시 래스팅 베어</p>
                  <p className="main_prod_gray"> #베어쥬시</p>
              </div>
          </div>
        </div>         
      </div>
      
    <footer>
    <div className="sixth-nav">
        
    <footer>
        <FooterNav/>
    </footer>
                
      </div>
    </footer>


    </div>

  );
}

export default Main;