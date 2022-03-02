import React, { Component, useState } from 'react';
//import {  useNavigate, useSearchParams } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';
import "./Home.css";
import "./Main.css";

import {FooterNav} from './nav/FooterNav';
import { HeaderNav } from './nav/HeaderNav';

function Main() {
  let [아이탬제목, 아이탬변경] = useState([
    "lip price",
    "lip price",
    "lip price"
  ]);
  let [아이탬, 아이탬보기] = useState(0);
  let posts = "item name";
  //const navigate = useNavigate(); 
  return (
    <div className="App">
      <HeaderNav/>

      
      <div className='event_center'>
      <img id="event1" className='main_event1' src={`assets/image/event1.png` }/>
      </div>


    <div className="fourth-nav">  
    <div className="bestitem">피부톤별 화장품 추천</div>

    <div class="bestitemlist">
          <div class="bestitemimagesample">


            <div class="prod_size">
            <NavLink to="/product">  <img id="eimage2" class="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem1.png` }/> </NavLink>
              
                <p>제로 벨벳 틴트</p>
                <p class="main_prod_gray"> #오리지널시리즈</p>
            </div>
            <div class="bestimage2">
            <NavLink to="/product1">  <img id="eimage2" class="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem2.png` }/> </NavLink>
          
                <p>밀크티 벨벳 틴트</p>
                <p class="main_prod_gray"> #홍차컬러 #밀크</p>
            </div>
            <div class="bestimage3">
            <NavLink to="/product2">  <img id="eimage2" class="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem3.png` }/> </NavLink>
             
                <p>블러 퍼지 틴트</p>
                <p class="main_prod_gray"> #무광 그라데이션</p>

            </div>
            
            </div>
      </div>
    </div>
    <div class="bestitem">봄이니까 설레는 신상 아이템</div>
    <div class="fifth-nav">
        <div class="newitemlist">
            <div class="newitemimagesample">
              
              <div class="bestimage1" class="prod_size" >
              <NavLink to="/product4"> <img id="eimage2" class="eimage3" src={process.env.PUBLIC_URL+`assets/image/newitem1.png` }/> </NavLink>
              
                  <p>쥬시 래스팅 여라</p>
                  <p class="main_prod_gray"> #여라 시리즈</p>
              </div>

              <div class="bestimage2" class="prod_size">
              <NavLink to="/product5"><img id="eimage2" class="eimage3" src={process.env.PUBLIC_URL+`assets/image/newitem2.png` }/> </NavLink>
                 
                  <p>제로 벨벳 틴트</p>
                  <p class="main_prod_gray"> #빈티지 필터</p>
              </div>
              <div class="bestimage3" class="prod_size">
              <NavLink to="/product6">  <img id="eimage2" class="eimage3" src={process.env.PUBLIC_URL+`assets/image/newitem3.png` }/> </NavLink>
               
                  <p>듀이풀 워터 틴트</p>
                  <p class="main_prod_gray"> #입술에 내린 단비</p>
              </div>
               <div class="bestimage4" class="prod_size">
               <NavLink to="/product7">  <img id="eimage2" class="eimage3" src={process.env.PUBLIC_URL+`assets/image/newitem4.png` }/> </NavLink>
                 
                  <p>쥬시 래스팅 베어</p>
                  <p class="main_prod_gray"> #베어쥬시</p>
              </div>
          </div>
        </div>         
      </div>
      
    <footer>
    <div class="sixth-nav">
        
        <FooterNav/>
      </div>
    </footer>


    </div>

  );
}

export default Main;