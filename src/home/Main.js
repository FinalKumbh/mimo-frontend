import React, { Component, useState } from 'react';
//import {  useNavigate, useSearchParams } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';
import "./Home.css";

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
    <div className="third-nav">
          <div className="eventimagesample">
          <NavLink to="/event:1"><img id="eimage1" src={process.env.PUBLIC_URL+`assets/image/eventimage1.png` }/></NavLink>
          <NavLink to="/event:2"><img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/eventimage2.png` }/> </NavLink>
    

      </div>
    </div>

    <div className="fourth-nav">  
    <div className="bestitem">피부톤별 화장품 추천</div>

    <div class="bestitemlist">
          <div class="bestitemimagesample">


            <div class="bestimage1">
            <NavLink to="/itemapp">  <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem1.png` }/> </NavLink>
              
                <p>제로 벨벳 틴트</p>
                <p> #오리지널시리즈</p>
             <hr />
            </div>
            <div class="bestimage2">
            <NavLink to="/product1">  <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem2.png` }/> </NavLink>
          
                <p>밀크티 벨벳 틴트</p>
                <p> #홍차컬러 #밀크</p>
             <hr />
            </div>
            <div class="bestimage3">
            <NavLink to="/product2">  <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem3.png` }/> </NavLink>
             
                <p>블러 퍼지 틴트</p>
                <p> #무광 그라데이션</p>
             <hr />
            </div>
            
            </div>
      </div>
    </div>
    <div class="newitem">봄이니까 설레는 신상 아이템</div>
    <div class="fifth-nav">
        <div class="newitemlist">
            <div class="newitemimagesample">
              <div class="bestimage1">
              <NavLink to="/product4"> <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/newitem1.png` }/> </NavLink>
              
                  <p>쥬시 래스팅 여라</p>
                  <p> #여라 시리즈</p>
               <hr />
              </div>
              <div class="bestimage2">
              <NavLink to="/product5"><img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/newitem2.png` }/> </NavLink>
                 
                  <p>제로 벨벳 틴트</p>
                  <p> #빈티지 필터</p>
               <hr />
              </div>
              <div class="bestimage3">
              <NavLink to="/product6">  <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/newitem3.png` }/> </NavLink>
               
                  <p>듀이풀 워터 틴트</p>
                  <p> #입술에 내린 단비</p>
               <hr />
              </div>
               <div class="bestimage4">
               <NavLink to="/product7">  <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/newitem4.png` }/> </NavLink>
                 
                  <p>쥬시 래스팅 베어</p>
                  <p> #베어쥬시</p>
               <hr />
              </div>
          </div>
        </div>         
      </div>
      
    <footer>
    <div class="sixth-nav">
        <hr />
    <footer>
        <FooterNav/>
    </footer>
                
      </div>
    </footer>


    </div>

  );
}

export default Main;