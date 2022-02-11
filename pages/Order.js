import React from 'react';
import './Order.css';
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import moment from "moment";

function Order({
  order
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "order"
  }, /*#__PURE__*/React.createElement("h2", null, " \uC8FC\uBB38 "), /*#__PURE__*/React.createElement("p", null, moment.unix(order.data.created).format()), /*#__PURE__*/React.createElement("p", {
    className: "order_id"
  }, /*#__PURE__*/React.createElement("small", null, order.id)), order.data.basket?.map(item => /*#__PURE__*/React.createElement(CheckoutProduct, {
    id: item.id,
    title: item.title,
    image: item.image,
    price: item.price,
    rating: item.rating,
    hideButton: true
  })), /*#__PURE__*/React.createElement(CurrencyFormat, {
    renderText: value => /*#__PURE__*/React.createElement("h3", {
      className: "order_total"
    }, "\uC8FC\uBB38 \uCD1D\uC561 : ", value),
    decimalScale: 2,
    value: order.data.amount / 100,
    displayType: "text",
    thousandSeparator: true,
    prefix: "₩"
  }));
}

export default Order;