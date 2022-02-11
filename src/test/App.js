import "./App.css";
import customAxios from './customAxios';
import axios, { Axios } from 'axios'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Bag from "./pages/Bag";
import Screen from "./pages/Screen";
import Naver from "./pages/Naver";
import Google from "./pages/Google";
 

import React, { useState, useEffect, useReducer } from 'react';

import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
 
import New from "./pages/New";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Share from "./pages/Share";
import Camera from "./pages/Camera";
import Search from "./pages/Search";
import Like from "./pages/Like";

import Header from "./pages/test/Header";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
 

const reducer = (state, action)=>{
  let newState = [];
  switch(action.type){
    case 'INIT':{
      return action.data;
    }
    case 'CREATE':{
      const newItem = {
        ...action.data
      };
      newState = [newItem, ...state];
      break;
    }
    case 'REMOVE':{
      newState = state.filter((it)=>it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id == action.data.id ? {...action.data} : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
}

function App(){
  const [data,dispatch] = useReducer(reducer, []);
  const [ip, setIp] = useState('');
  
  const [ testStr, setTestStr ] = useState(''); // test
 
  function callback(data) {
    setIp(data);

    setTestStr(data);
  }
 
//  useEffect(
//   () => {
     
//     customAxios('/ip', callback);
//   }, []
// );

useEffect(
  () => {
    axios({
        url: '/home',
        method: 'GET'
    }).then((res) => {
        callback(res.data);
    })
  }, []
);

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL ||"";


  return (
    <BrowserRouter>
    <div className="App">
    <header className="App-header">
        이 기기의 IP주소는 {ip}입니다.
        {testStr}
      </header>
      <li>
  
 </li>
      <Routes>
    
        <Route path="/" element={<Orders />} />
        <Header/>  
        <Route path="/screen" element={<Screen />} />
        <Route path="/naver" element={<Naver />} />
        <Route path="/google" element={<Google />} />

        <Route path="/home" element={<Home />} />
        <Header/>
        <Orders />
        <Route path="/mypage" element={<Mypage />} />
<Header/>       
        
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route paty="/bag" element={<Bag/>}/>
        <Header/>
        <Checkout />
        
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search/>}/>
        <Route path="/camera" element={<Camera/>}/>
        <Route path="/like" element={<Like/>}/>
        <Route path="/share" element={<Share/>}/>

 
       
         
      </Routes>
      
    </div>
 
    </BrowserRouter>
    
  );
}

export default App;