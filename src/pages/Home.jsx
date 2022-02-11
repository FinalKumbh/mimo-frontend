import React, { useState } from "react";
import {  Link, useNavigate, useSearchParams } from "react-router-dom";
import "./Home.css";

import footer from "./footer";


 
function Home() {
 
  let [아이탬제목, 아이탬변경] = useState([
    "lip price",
    "lip price",
    "lip price",
    "lip price",
  ]);
  let [아이탬, 아이탬보기] = useState(0);
  let posts = "item name";
  const navigate = useNavigate(); 
  return (

    <div className="Home">
    
      <div className="first-nav">
      <img className="basket" src={process.env.PUBLIC_URL+`assets/MIMO.png`}/>  
        <div className="second-nav">
       
      <button className="left" onClick={()=> {navigate(-1);}}>
      ◀
      </button>
     
  
   
      <button className="right" onClick={()=> {navigate(+1);}}>
        ▶
      </button>
        </div>
 
      <Link to='/bag' className="bag">
      <img id="basket" src={process.env.PUBLIC_URL+`assets/carticon.png`}/>
      </Link>
      </div>
    
    <div className="third-nav">
          <div className="eventimagesample">
    <Link to='/detail:id' className="detail1">
  
    <img className="eimage1" src={process.env.PUBLIC_URL+`assets/home_image1.png` }/>
    </Link>
    <Link to='/detail:2' className="detail2">
    <img className="eimage2" src={process.env.PUBLIC_URL+`assets/eventimage2.png` }/> 
    </Link>
      </div>
    </div>

    <div className="fourth-nav">  
    <div className="recommenditemtext">피부톤별 화장품 추천</div>
          <div className="recommenditemimagesample">


          <div className="recommenditemgimg1">
          <h3> 
          <Link to="/item:1">
          <div>
          <img id="checkimage1" src={process.env.PUBLIC_URL+`assets/recommenditem1.png` }/>
           </div>
          {아이탬제목[0]}  </Link>
          </h3>
          <p>{posts}</p>
          </div>

          <div className="recommenditemgimg2">
          <h3> 
          <Link to="/item:2">
            <div>
          <img id="checkimage2" src={process.env.PUBLIC_URL+`assets/recommenditem2.png` }/> 
          </div>
         {아이탬제목[1]}  </Link></h3>
          <p>{posts}</p>
          </div>

          <div className="recommenditemgimg3">
          <h3> 
          <Link to="/item:3">
            <div>
          <img id="checkimage3" src={process.env.PUBLIC_URL+`assets/recommenditem3.png` }/> 
          </div>
         {아이탬제목[2]}  </Link></h3>
          <p>{posts}</p>
          </div>

          
          <h3> 
          <Link to="/item:3">
            <div>
          <img id="checkimage3" src={process.env.PUBLIC_URL+`assets/recommenditem3.png` }/> 
          </div>
         {아이탬제목[3]}  </Link></h3>
          <p>{posts}</p>      
 
      </div>
    </div>

    
    <div className="bestitemtext">봄이니까 설레은 신상 아이템</div>
    <div className="fifth-nav">
          <div className="bestimagesample">


          <h3> 
          <Link to="/item:4">
          <div>
       <img id="bestimage1" src={process.env.PUBLIC_URL+`assets/newitem1.png` }/>
       </div>
          {아이탬제목[0]}  </Link>
          </h3>
          <p>{posts}</p>
         

          
          <h3> 
          <Link to="/item:5">
          <div>
       <img id="bestimage2" src={process.env.PUBLIC_URL+`assets/newitem2.png` }/> 
       </div>
          {아이탬제목[0]}  </Link>
          </h3>
          <p>{posts}</p>
           

          <h3> 
          <Link to="/item:6">
          <div>
       <img id="bestimage3" src={process.env.PUBLIC_URL+`assets/newitem3.png` }/> 
       </div>
          {아이탬제목[0]}  </Link>
          </h3>
          <p>{posts}</p>
      
          <h3> 
          <Link to="/item:7">
          <div>
       <img id="bestimage4" src={process.env.PUBLIC_URL+`assets/newitem4.png` }/>
       </div>
          {아이탬제목[0]}  </Link>
          </h3>
          <p>{posts}</p>

        </div>
      </div>

  <footer/>
    </div>
  );
}

export default Home;
