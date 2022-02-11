import React, { useState } from "react";
import "./Bag.css";

function App() {
  let [아이탬제목, 아이탬변경] = useState(["product", "product", "product"]);
  let [아이탬, 아이탬보기] = useState(0);
  let posts = "item";
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("div", {
    className: "black-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, "\uC7A5\uBC14\uAD6C\uB2C8")), /*#__PURE__*/React.createElement("h4", null, "screen png"), /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, /*#__PURE__*/React.createElement("h3", null, " ", 아이탬제목[0], " ", /*#__PURE__*/React.createElement("span", {
    onClick: () => {
      아이탬보기(아이탬 + 1);
    }
  }, "\uD83D\uDC84"), 아이탬), /*#__PURE__*/React.createElement("p", null, posts), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h3", null, " ", 아이탬제목[1], " "), /*#__PURE__*/React.createElement("p", null, posts), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h3", null, " ", 아이탬제목[2], " "), /*#__PURE__*/React.createElement("p", null, posts), /*#__PURE__*/React.createElement("hr", null)));
}

export default App;