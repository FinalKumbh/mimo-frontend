import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signIn = e => {
    e.preventDefault(); //파베 로그인 시스템 적용...

    auth.signInWithEmailAndPassword(email, password).then(auth => {
      history.push('/');
    }).catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(auth => {
      if (auth) {
        history.push('/');
      }
    }).catch(error => alert(error.message));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "login"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("img", {
    className: "login_logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: "login_container"
  }, /*#__PURE__*/React.createElement("h1", null, "\uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("h5", null, "\uC774\uBA54\uC77C "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("h5", null, " \uBE44\uBC00\uBC88\uD638 "), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "login_signInButton",
    onClick: signIn
  }, "\uB85C\uADF8\uC778")), /*#__PURE__*/React.createElement("p", null, "\uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC2DC\uBA74 \uAC1C\uC778\uC815\uBCF4 \uC0AC\uC6A9\uC5D0 \uB300\uD574 \uC5B4\uCA4C\uAD6C\uC800\uCA4C\uAD6C"), /*#__PURE__*/React.createElement("button", {
    onClick: register,
    className: "login_registerButton"
  }, "\uD68C\uC6D0\uAC00\uC785\uD558\uAE30")));
}

export default Login;