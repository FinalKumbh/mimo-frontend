import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({
  id,
  title,
  image,
  price,
  rating
}) {
  const [{
    basket
  }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "product"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product_info"
  }, /*#__PURE__*/React.createElement("p", null, title), /*#__PURE__*/React.createElement("p", {
    className: "product_price"
  }, /*#__PURE__*/React.createElement("small", null, "\uAC00\uACA9"), /*#__PURE__*/React.createElement("strong", null, price), /*#__PURE__*/React.createElement("small", null, "\uC6D0")), /*#__PURE__*/React.createElement("div", {
    className: "product_rating"
  }, Array(rating).fill().map(() => /*#__PURE__*/React.createElement("p", null, "\u2605")))), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  }), /*#__PURE__*/React.createElement("button", {
    onClick: addToBasket
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE30"));
}

export default Product;