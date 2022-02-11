import { Link } from "react-router-dom";

const RouterTest = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "HOME"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    to: `/detail`
  }, "DETAIL"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    to: `/new`
  }, "NEW"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Link, {
    to: `/edit`
  }, "EDIT"));
};

export default RouterTest;