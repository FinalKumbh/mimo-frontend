import React, { Component, useState } from 'react';
//import {  useNavigate, useSearchParams } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';
import "./Home.css";

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
      <div className="first-nav">
        <div className="second-nav">
      ◀
        <div className="header">MIMO</div>
  
   
        ▶
        </div>
      <img id="mypage" src={process.env.PUBLIC_URL+`assets/image/mypage.png` }/>
      <img id="basket" src={process.env.PUBLIC_URL+`assets/image/shopping_basket.png`}/>
      </div>
    <div className="event">EVENT</div>
    <div className="third-nav">
          <div className="eventimagesample">
    <img id="eimage1" src={process.env.PUBLIC_URL+`assets/image/eventimage1.png` }/>
    <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/eventimage2.png` }/> 
    

      </div>
    </div>

    <div className="fourth-nav">  
    <div className="bestitem">피부톤별 화장품 추천</div>

    <div class="bestitemlist">
          <div class="bestitemimagesample">


            <div class="bestimage1">
            <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem1.png` }/> 
              
                <p>제로 벨벳 틴트</p>
                <p> #오리지널시리즈</p>
             <hr />
            </div>
            <div class="bestimage2">
            <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem2.png` }/> 
          
                <p>밀크티 벨벳 틴트</p>
                <p> #홍차컬러 #밀크</p>
             <hr />
            </div>
            <div class="bestimage3">
            <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem3.png` }/> 
             
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
              <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/newitem1.png` }/> 
              
                  <p>쥬시 래스팅 여라</p>
                  <p> #여라 시리즈</p>
               <hr />
              </div>
              <div class="bestimage2">
              <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/newitem2.png` }/> 
                 
                  <p>제로 벨벳 틴트</p>
                  <p> #빈티지 필터</p>
               <hr />
              </div>
              <div class="bestimage3">
              <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/newitem3.png` }/> 
               
                  <p>듀이풀 워터 틴트</p>
                  <p> #입술에 내린 단비</p>
               <hr />
              </div>
               <div class="bestimage4">
               <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/newitem4.png` }/> 
                 
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
        <div class="icon">
        <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/home.png` }/> 
        <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/review.png` }/> 
        <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/camera.png` }/> 
        <img id="eimage2" src={process.env.PUBLIC_URL+`assets/image/mypage.png` }/> 

        
        </div>
      </div>
    </footer>


    </div>

  );
}

export default Main;