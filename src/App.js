import "./App.css";
import axios, { Axios } from 'axios'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import  React , { useEffect, useReducer } from "react";

import AppHeader from "./common/AppHeader";

import Home from "./pages/Home";

import Profile from "./user/profile/Profile";

import NotFound from "./common/NotFound";

import LoadingIndicator from "./common/LoadingIndicator";

import Bag from "./pages/Bag";
import Screen from "./pages/Screen";
import Naver from "./pages/Naver";
import Google from "./pages/Google";

import Mypage from "./pages/Mypage";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Share from "./pages/Share";
import Camera from "./pages/Camera";
import Search from "./pages/Search";
import Like from "./pages/Like";

import Header from "./pages/Header";
import Pre from "./pages/Prescreen";
 
import Customer from "./pages/Customer";
 


import TestApp from  "./pages/TestApp";





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
 
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL ||"";


  return (
  
    <BrowserRouter>
    <div className="App">
 

      <Routes>
        <Route path="/pre" element={<Pre />} />
        <Route path="/testapp" element={<TestApp />} />
        <Route path="/screen" element={<Screen />} />
        <Route path="/naver" element={<Naver />} />
        <Route path="/google" element={<Google />} />
        <Route path = "/home" element={<Home/>}/>

        <Route path="/mypage" element={<Mypage />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route paty="/bag" element={<Bag/>}/>
        <Route path="/detail/:id" element={<Detail />} />
        <Route paty="/search" element={<Search/>}/>
        <Route paty="/camera" element={<Camera/>}/>
        <Route paty="/like" element={<Like/>}/>
        <Route paty="/share" element={<Share/>}/>
        <Route path="/customer" element={<Customer/>}/>
      

      </Routes>
      
    </div>
 
    </BrowserRouter>
    
  );
}

export default App;