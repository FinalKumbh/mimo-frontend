import "./App.css";
import axios from 'axios'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Bag from "./pages/Bag";
import Screen from "./pages/Screen";
import Naver from "./pages/Naver";
import Google from "./pages/Google";
import Kakao from "./pages/Kakao";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";
import { useReducer } from "react";

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
        
        <Route path="/" element={<Screen />} />
        <Route path="/naver" element={<Naver />} />
        <Route path="/kakao" element={<Kakao />} />
        <Route path="/google" element={<Google />} />
        <Route path="/home" element={<Home />} />
       
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
        <Route paty="/bag" element={<Bag/>}/>
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      
    </div>
 
    </BrowserRouter>
    
  );
}

export default App;