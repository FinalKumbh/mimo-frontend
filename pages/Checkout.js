import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{
    basket,
    user
  }, dispatch] = useStateValue();
  return /*#__PURE__*/React.createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "checkout_left"
  }, /*#__PURE__*/React.createElement("img", {
    className: "checkout_ad",
    src: "https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "checkout_title"
  }, "  ", user?.email, " \uB2D8\uC758 \uC7A5\uBC14\uAD6C\uB2C8 "), basket.map(item => /*#__PURE__*/React.createElement(CheckoutProduct, {
    id: item.id,
    title: item.title,
    image: item.image,
    price: item.price,
    rating: item.rating
  })))), /*#__PURE__*/React.createElement("div", {
    className: "checkout_right"
  }, /*#__PURE__*/React.createElement(Subtotal, null)));
}

export default Checkout;