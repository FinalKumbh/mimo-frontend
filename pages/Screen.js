import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./Screen.css";
import React from 'react';

const Screen = () => {
  const navigate = useNavigate();
  return /*#__PURE__*/React.createElement("div", {
    className: "Screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "signtext"
  }, /*#__PURE__*/React.createElement("p", null, "\uAC00\uC785\uC744 \uC9C4\uD589\uD560 \uACBD\uC6B0, \uC774\uC6A9\uC57D\uAD00\uACFC \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uC5D0 \uB300\uD574 \uB3D9\uC758\uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uB429\uB2C8\uB2E4")), /*#__PURE__*/React.createElement("div2", {
    className: "Screenline"
  }, /*#__PURE__*/React.createElement("img", {
    className: "Logo",
    src: process.env.PUBLIC_URL + `assets/Logo.png`
  })), /*#__PURE__*/React.createElement("div", {
    className: "loginscope"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/naver",
    className: "naver"
  }, /*#__PURE__*/React.createElement("img", {
    id: "naverbutton",
    src: process.env.PUBLIC_URL + `assets/naver_login.png`
  })), /*#__PURE__*/React.createElement(Link, {
    to: "/Kakao",
    className: "kakao"
  }, /*#__PURE__*/React.createElement("img", {
    id: "Kakaobutton",
    src: process.env.PUBLIC_URL + `assets/Kakao_login.png`
  })), /*#__PURE__*/React.createElement(Link, {
    to: "/google",
    className: "google"
  }, /*#__PURE__*/React.createElement("img", {
    id: "googlebutton",
    src: process.env.PUBLIC_URL + `assets/google_login.png`
  }))));
};

export default Screen;