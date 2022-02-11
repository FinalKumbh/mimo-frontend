import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./DB";

function Header() {
  const [{
    basket,
    user
  }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("img", {
    className: "header_logo",
    src: "https://pngimg.com/uploads/amazon/amazon_PNG11.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: "header_search"
  }, /*#__PURE__*/React.createElement("input", {
    className: "header_searchInput",
    type: "text"
  })), /*#__PURE__*/React.createElement("div", {
    className: "header_nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header_option"
  }, /*#__PURE__*/React.createElement("span", {
    className: "header_optionLineOne"
  }, !user ? '게스트' : user.email, " "), /*#__PURE__*/React.createElement(Link, {
    to: !user && '/login',
    className: "homelogin"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: handleAuthentication,
    className: "header_optionLineTwo"
  }, user ? '로그아웃' : '로그인'))), /*#__PURE__*/React.createElement("div", {
    className: "header_option"
  }, /*#__PURE__*/React.createElement("span", {
    className: "header_optionLineOne"
  }, "\uB3CC\uC544\uAC00\uAE30"), /*#__PURE__*/React.createElement(Link, {
    to: "/orders",
    className: "orderlist"
  }, /*#__PURE__*/React.createElement("span", {
    className: "header_optionLineTwo"
  }, "\uC8FC\uBB38\uB0B4\uC5ED"))), /*#__PURE__*/React.createElement("div", {
    className: "header_option"
  }, /*#__PURE__*/React.createElement("span", {
    className: "header_optionLineOne"
  }, "\uBC18\uAC00\uC6CC\uC694"), /*#__PURE__*/React.createElement("span", {
    className: "header_optionLineTwo"
  }, "\uAD6C\uB3C5\uACFC\uC88B\uC544\uC694")), /*#__PURE__*/React.createElement(Link, {
    to: "/checkout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header_optionBasket"
  }, /*#__PURE__*/React.createElement("span", {
    className: "header_optionLineTwoheader_basketCount"
  }, basket?.length)))));
}

export default Header;