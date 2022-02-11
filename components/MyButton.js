const MyButton = ({
  text,
  type,
  onClick
}) => {
  const btnType = [`naver`, `kakao`].includes(type) ? type : `default`;
  return /*#__PURE__*/React.createElement("button", {
    className: ["MyButton", `MyButton_${type}`].join(" "),
    onClick: onClick
  }, text);
};

MyButton.defaultProps = {
  type: "default"
};
export default MyButton;