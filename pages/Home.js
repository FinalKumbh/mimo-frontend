import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./Home.css";
import footer from "./footer";

function Home() {
  let [아이탬제목, 아이탬변경] = useState(["lip price", "lip price", "lip price", "lip price"]);
  let [아이탬, 아이탬보기] = useState(0);
  let posts = "item name";
  const navigate = useNavigate();
  return /*#__PURE__*/React.createElement("div", {
    className: "Home"
  }, /*#__PURE__*/React.createElement("div", {
    className: "first-nav"
  }, /*#__PURE__*/React.createElement("img", {
    className: "basket",
    src: process.env.PUBLIC_URL + `assets/MIMO.png`
  }), /*#__PURE__*/React.createElement("div", {
    className: "second-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "left",
    onClick: () => {
      navigate(-1);
    }
  }, "\u25C0"), /*#__PURE__*/React.createElement("button", {
    className: "right",
    onClick: () => {
      navigate(+1);
    }
  }, "\u25B6")), /*#__PURE__*/React.createElement(Link, {
    to: "/bag",
    className: "bag"
  }, /*#__PURE__*/React.createElement("img", {
    id: "basket",
    src: process.env.PUBLIC_URL + `assets/carticon.png`
  }))), /*#__PURE__*/React.createElement("div", {
    className: "third-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eventimagesample"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/detail:id",
    className: "detail1"
  }, /*#__PURE__*/React.createElement("img", {
    className: "eimage1",
    src: process.env.PUBLIC_URL + `assets/home_image1.png`
  })), /*#__PURE__*/React.createElement(Link, {
    to: "/detail:2",
    className: "detail2"
  }, /*#__PURE__*/React.createElement("img", {
    className: "eimage2",
    src: process.env.PUBLIC_URL + `assets/eventimage2.png`
  })))), /*#__PURE__*/React.createElement("div", {
    className: "fourth-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recommenditemtext"
  }, "\uD53C\uBD80\uD1A4\uBCC4 \uD654\uC7A5\uD488 \uCD94\uCC9C"), /*#__PURE__*/React.createElement("div", {
    className: "recommenditemimagesample"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recommenditemgimg1"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Link, {
    to: "/item:1"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    id: "checkimage1",
    src: process.env.PUBLIC_URL + `assets/recommenditem1.png`
  })), 아이탬제목[0], "  ")), /*#__PURE__*/React.createElement("p", null, posts)), /*#__PURE__*/React.createElement("div", {
    className: "recommenditemgimg2"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Link, {
    to: "/item:2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    id: "checkimage2",
    src: process.env.PUBLIC_URL + `assets/recommenditem2.png`
  })), 아이탬제목[1], "  ")), /*#__PURE__*/React.createElement("p", null, posts)), /*#__PURE__*/React.createElement("div", {
    className: "recommenditemgimg3"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Link, {
    to: "/item:3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    id: "checkimage3",
    src: process.env.PUBLIC_URL + `assets/recommenditem3.png`
  })), 아이탬제목[2], "  ")), /*#__PURE__*/React.createElement("p", null, posts)), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Link, {
    to: "/item:3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    id: "checkimage3",
    src: process.env.PUBLIC_URL + `assets/recommenditem3.png`
  })), 아이탬제목[3], "  ")), /*#__PURE__*/React.createElement("p", null, posts))), /*#__PURE__*/React.createElement("div", {
    className: "bestitemtext"
  }, "\uBD04\uC774\uB2C8\uAE4C \uC124\uB808\uC740 \uC2E0\uC0C1 \uC544\uC774\uD15C"), /*#__PURE__*/React.createElement("div", {
    className: "fifth-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bestimagesample"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Link, {
    to: "/item:4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    id: "bestimage1",
    src: process.env.PUBLIC_URL + `assets/newitem1.png`
  })), 아이탬제목[0], "  ")), /*#__PURE__*/React.createElement("p", null, posts), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Link, {
    to: "/item:5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    id: "bestimage2",
    src: process.env.PUBLIC_URL + `assets/newitem2.png`
  })), 아이탬제목[0], "  ")), /*#__PURE__*/React.createElement("p", null, posts), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Link, {
    to: "/item:6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    id: "bestimage3",
    src: process.env.PUBLIC_URL + `assets/newitem3.png`
  })), 아이탬제목[0], "  ")), /*#__PURE__*/React.createElement("p", null, posts), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Link, {
    to: "/item:7"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    id: "bestimage4",
    src: process.env.PUBLIC_URL + `assets/newitem4.png`
  })), 아이탬제목[0], "  ")), /*#__PURE__*/React.createElement("p", null, posts))), /*#__PURE__*/React.createElement("footer", null));
}

export default Home;