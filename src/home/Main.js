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
    <div className="checkitem">깐부님께 가장 어울리는 립을 추천드릴께요</div>

    <div>
      <Link to="/simulate" className="app-title">시뮬레이션 해보기</Link>
    </div>

      <div className="list">
          <h3>
          <div className="lipicon">
              💄
              </div>
            {" "}
            {아이탬제목[0]}{" "}
            <span
              onClick={() => {
                아이탬보기(아이탬 + 1);
              }}
            >
             
            </span>
            {아이탬}
          </h3>
          <div className="checkimagesample">
          <p>{posts}</p>
          <hr />
          <img id="checkimage1" src={process.env.PUBLIC_URL+`assets/image/checkitem1.png` }/>
          <p>{posts}</p>
          <hr />
          <h3> 
          <img id="checkimage2" src={process.env.PUBLIC_URL+`assets/image/checkitem2.png` }/> 
          {아이탬제목[2]} </h3>
          <p>{posts}</p>
          <hr />
     
        </div>
      </div>
    </div>
    <div className="bestitem">인기 베스트 아이템</div>
    <div className="fifth-nav">
          <div className="bestimagesample">
        
       <img id="bestimage1" src={process.env.PUBLIC_URL+`assets/image/bestitem1.png` }/>
       <img id="bestimage2" src={process.env.PUBLIC_URL+`assets/image/bestitem2.png` }/> 
       <img id="bestimage3" src={process.env.PUBLIC_URL+`assets/image/bestitem3.png` }/> 
       <img id="bestimage4" src={process.env.PUBLIC_URL+`assets/image/checkitem2.png` }/>
       <img id="bestimage5" src={process.env.PUBLIC_URL+`assets/image/checkitem3.png` }/>
        </div>
      </div>

      <div className="sixth-nav">
          <div className="icon">
          <img id="homeicon" src={process.env.PUBLIC_URL+`assets/image/homeicon.png` }/>
          <img id="searchicon" src={process.env.PUBLIC_URL+`assets/image/searchicon.png`}/>
          <img id="cameraicon" src={process.env.PUBLIC_URL+`assets/image/cameraicon.png` }/>
          <img id="shareicon" src={process.env.PUBLIC_URL+`assets/image/shareicon.png`}/>
          <img id="loveicon" src={process.env.PUBLIC_URL+`assets/image/loveicon.png`}/>
          </div>
        </div>

        <div>
          <Link to="/itemadd" className="app-title">상품 등록</Link>
        </div>
    </div>
  );
}

export default Main;