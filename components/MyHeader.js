const MyHeader = ({
  headText,
  leftChild,
  rightChild
}) => {
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "head_btn_left"
  }, leftChild), /*#__PURE__*/React.createElement("div", {
    className: "head_text"
  }, headText), /*#__PURE__*/React.createElement("div", {
    className: "head_btn_right"
  }, rightChild));
};

export default MyHeader;