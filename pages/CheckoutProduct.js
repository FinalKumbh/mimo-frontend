import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  hideButton
}) {
  const [{
    basket
  }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "checkoutProduct"
  }, /*#__PURE__*/React.createElement("img", {
    className: "checkoutProduct_image",
    src: image
  }), /*#__PURE__*/React.createElement("div", {
    className: "checkoutProduct_info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "checkoutProduct_title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "checkoutProduct_price"
  }, /*#__PURE__*/React.createElement("small", null, "\u20A9("), /*#__PURE__*/React.createElement("strong", null, price)), /*#__PURE__*/React.createElement("div", {
    className: "checkoutProduct_rating"
  }, Array(rating).fill().map((_, i) => /*#__PURE__*/React.createElement("p", null, "\u2605"))), !hideButton && /*#__PURE__*/React.createElement("button", {
    onClick: removeFromBasket
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uC5D0\uC11C \uC81C\uAC70\uD558\uAE30")));
}

export default CheckoutProduct;