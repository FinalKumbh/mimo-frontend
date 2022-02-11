import React, { Component } from 'react';
import Header from './TestHeader';
import Body from './Body';
import Footer from './TestFooter';

class App extends Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "App"
    }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Body, null), /*#__PURE__*/React.createElement(Footer, null));
  }

}

export default App;