import React from 'react';
import './Subtotal.css';
import CurrecnyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const navigate = useNavigate();
  const [{
    basket
  }, dispatch] = useStateValue();
  return /*#__PURE__*/React.createElement("div", {
    className: "subtotal"
  }, /*#__PURE__*/React.createElement(CurrecnyFormat, {
    renderText: value => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "\uCD1D\uC561 ( ", basket?.length, " items): ", /*#__PURE__*/React.createElement("strong", null, " ", value, " \uC6D0 ")), /*#__PURE__*/React.createElement("small", {
      className: "subtotal_gift"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox"
    }), "\uCCB4\uD06C\uBC15\uC2A4\uC785\uB2C8\uB2E4.")),
    decimalScale: 2,
    value: getBasketTotal(basket),
    displayType: "text",
    thousandSeparator: true,
    prefix: "₩"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: e => navigate.push('/payment')
  }, " \uACB0\uC81C\uD558\uAE30 "));
}

export default Subtotal;