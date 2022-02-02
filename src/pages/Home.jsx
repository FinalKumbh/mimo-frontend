import React, { useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import "./Home.css";

function App() {
  let [아이탬제목, 아이탬변경] = useState([
    "lip price",
    "lip price",
    "lip price"
  ]);
  let [아이탬, 아이탬보기] = useState(0);
  let posts = "item name";
  const navigate = useNavigate(); 
  return (
    <div className="App">
      <div className="first-nav">
        <div className="second-nav">
      <button className="left" onClick={()=> {navigate(-1);}}>
      ◀
      </button>
        <div className="header">MIMO</div>
  
   
      <button className="right" onClick={()=> {navigate(+1);}}>
        ▶
      </button>
        </div>
        <button1 type="mypage" onClick={()=> {navigate("/mypage");}}>
      <img id="mypage" src={process.env.PUBLIC_URL+`assets/mypage.png` }/>
      </button1>
      <button2 type="bag" onClick={()=>{navigate("/bag")}}>
      <img id="basket" src={process.env.PUBLIC_URL+`assets/shopping_basket.png`}/>
      </button2>
      </div>
    <div className="event">EVENT</div>
    <div className="third-nav">
          <div className="eventimagesample">
    <button3 type="detail" onClick={()=> {navigate("/detail:id");}}>
    <img id="eimage1" src={process.env.PUBLIC_URL+`assets/eventimage1.png` }/>
    </button3>
    <button4 type="detail" onClick={()=> {navigate("/detail:id");}}>
    <img id="eimage2" src={process.env.PUBLIC_URL+`assets/eventimage2.png` }/> 
    </button4>
      </div>
    </div>

    <div className="fourth-nav">  
    <div className="checkitem">깐부님께 가장 어울리는 립을 추천드릴께요</div>

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
          <h3> 
            <button5 type="new" onClick={()=> {navigate("/new");}}>
          <img id="checkimage1" src={process.env.PUBLIC_URL+`assets/checkitem1.png` }/>
          {아이탬제목[1]} </button5></h3>
          <p>{posts}</p>
          <hr />
          <h3> 
          <img id="checkimage2" src={process.env.PUBLIC_URL+`assets/checkitem2.png` }/> 
          {아이탬제목[2]} </h3>
          <p>{posts}</p>
          <hr />
     
        </div>
      </div>
    </div>
    <div className="bestitem">인기 베스트 아이템</div>
    <div className="fifth-nav">
          <div className="bestimagesample">
        
       <img id="bestimage1" src={process.env.PUBLIC_URL+`assets/bestitem1.png` }/>
       <img id="bestimage2" src={process.env.PUBLIC_URL+`assets/bestitem2.png` }/> 
       <img id="bestimage3" src={process.env.PUBLIC_URL+`assets/bestitem3.png` }/> 
       <img id="bestimage4" src={process.env.PUBLIC_URL+`assets/checkitem2.png` }/>
       <img id="bestimage5" src={process.env.PUBLIC_URL+`assets/checkitem3.png` }/>
        </div>
      </div>

      <div className="sixth-nav">
          <div className="icon">
          <button6  type="screen" onClick={()=> {navigate("/");}}>
          <img id="homeicon" src={process.env.PUBLIC_URL+`assets/homeicon.png` }/>
          </button6> 
          <button7  type="search" onClick={()=> {navigate("/search");}}>  
          <img id="searchicon" src={process.env.PUBLIC_URL+`assets/searchicon.png`}/>
          </button7>
          <button8  type="camera" onClick={()=> {navigate("/camera");}}>
          <img id="cameraicon" src={process.env.PUBLIC_URL+`assets/cameraicon.png` }/>
          </button8>
          <button9  type="share" onClick={()=> {navigate("/share");}}>
          <img id="shareicon" src={process.env.PUBLIC_URL+`assets/shareicon.png`}/>
          </button9>
          <button10  type="like" onClick={()=> {navigate("/like");}}>
          <img id="loveicon" src={process.env.PUBLIC_URL+`assets/loveicon.png`}/>
          </button10>
          </div>
        </div>
    </div>
  );
}

export default App;
