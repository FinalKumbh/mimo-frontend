import "./App.css";
import axios, { Axios } from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bag from "./pages/Bag";
import Screen from "./pages/Screen";
import Naver from "./pages/Naver";
import Google from "./pages/Google";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Share from "./pages/Share";
import Camera from "./pages/Camera";
import Search from "./pages/Search";
import Like from "./pages/Like";
import { useEffect, useReducer } from "react";
import Header from "./pages/Header";
import Pre from "./pages/Prescreen";
import Customer from "./pages/Customer";
import TestApp from "./pages/TestApp";

const reducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case 'INIT':
      {
        return action.data;
      }

    case 'CREATE':
      {
        const newItem = { ...action.data
        };
        newState = [newItem, ...state];
        break;
      }

    case 'REMOVE':
      {
        newState = state.filter(it => it.id !== action.targetId);
        break;
      }

    case "EDIT":
      {
        newState = state.map(it => it.id == action.data.id ? { ...action.data
        } : it);
        break;
      }

    default:
      return state;
  }

  return newState;
};

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/pre",
    element: /*#__PURE__*/React.createElement(Pre, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/testapp",
    element: /*#__PURE__*/React.createElement(TestApp, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/screen",
    element: /*#__PURE__*/React.createElement(Screen, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/naver",
    element: /*#__PURE__*/React.createElement(Naver, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/google",
    element: /*#__PURE__*/React.createElement(Google, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/home",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/mypage",
    element: /*#__PURE__*/React.createElement(Mypage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/new",
    element: /*#__PURE__*/React.createElement(New, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/edit",
    element: /*#__PURE__*/React.createElement(Edit, null)
  }), /*#__PURE__*/React.createElement(Route, {
    paty: "/bag",
    element: /*#__PURE__*/React.createElement(Bag, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/detail/:id",
    element: /*#__PURE__*/React.createElement(Detail, null)
  }), /*#__PURE__*/React.createElement(Route, {
    paty: "/search",
    element: /*#__PURE__*/React.createElement(Search, null)
  }), /*#__PURE__*/React.createElement(Route, {
    paty: "/camera",
    element: /*#__PURE__*/React.createElement(Camera, null)
  }), /*#__PURE__*/React.createElement(Route, {
    paty: "/like",
    element: /*#__PURE__*/React.createElement(Like, null)
  }), /*#__PURE__*/React.createElement(Route, {
    paty: "/share",
    element: /*#__PURE__*/React.createElement(Share, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/customer",
    element: /*#__PURE__*/React.createElement(Customer, null)
  }))));
}

export default App;