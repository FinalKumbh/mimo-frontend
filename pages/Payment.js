import React, { useEffect, useState } from 'react';
import './Payment.css';
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import CurrecnyFormat from 'react-currency-format';
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{
    basket,
    user
  }, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: "/payments/create?total=" + getBasketTotal(basket) * 100
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);
  console.log('client 비밀은 다음과 같아요', clientSecret);

  const handleSubmit = async event => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({
      paymentIntent
    }) => {
      // paymentIntent = payment 확인 및 정보
      db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      });
      setSucceeded(true);
      setError(null);
      setProcessing(false); // 딜레이가 생겻을때 버튼이 비활성화 된다. 하지만 너무 빨리 넘어가서 확인이 불가능

      dispatch({
        type: 'EMPTY_BASKET'
      });
      history.replace('/orders');
    });
  };

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "payment"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_container"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/checkout"
  }, /*#__PURE__*/React.createElement("h1", null, "\uC7A5\uBC14\uAD6C\uB2C8 \uB2E4\uC2DC \uC124\uC815\uD558\uAE30 (", basket?.length, " items )")), /*#__PURE__*/React.createElement("div", {
    className: "payment_section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_title"
  }, /*#__PURE__*/React.createElement("h3", null, " \uBC30\uB2EC \uBC1B\uC744 \uACF3 ")), /*#__PURE__*/React.createElement("div", {
    className: "payment_address"
  }, /*#__PURE__*/React.createElement("p", null, user?.email), /*#__PURE__*/React.createElement("p", null, "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC"), /*#__PURE__*/React.createElement("p", null, "\uB9C8\uD3EC\uAD6C \uD569\uC815\uB3D9"))), /*#__PURE__*/React.createElement("div", {
    className: "payment_section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_title"
  }, /*#__PURE__*/React.createElement("h3", null, " \uB9AC\uBDF0 \uC640 \uBC30\uB2EC ")), /*#__PURE__*/React.createElement("div", {
    className: "payment_items"
  }, basket.map(item => /*#__PURE__*/React.createElement(CheckoutProduct, {
    id: item.id,
    title: item.title,
    image: item.image,
    price: item.price,
    rating: item.rating
  })))), /*#__PURE__*/React.createElement("div", {
    className: "payment_section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_title"
  }, /*#__PURE__*/React.createElement("h3", null, "\uACB0\uC81C \uBC29\uBC95")), /*#__PURE__*/React.createElement("div", {
    className: "payment_details"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(CardElement, {
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("div", {
    className: "payment_priceContainer"
  }, /*#__PURE__*/React.createElement(CurrecnyFormat, {
    renderText: value => /*#__PURE__*/React.createElement("h3", null, " \uCD1D\uC561 : ", value, " \uC6D0"),
    decimalScale: 2,
    value: getBasketTotal(basket),
    displayType: "text",
    thousandSeparator: true,
    prefix: "₩"
  }), /*#__PURE__*/React.createElement("button", {
    disabled: processing || disabled || succeeded
  }, /*#__PURE__*/React.createElement("span", null, processing ? /*#__PURE__*/React.createElement("p", null, "\uCC98\uB9AC\uC911") : "구매하기"))), error && /*#__PURE__*/React.createElement("div", null, error))))));
}

export default Payment;