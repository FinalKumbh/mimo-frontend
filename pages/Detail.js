import { useParams } from "react-router-dom";
import React from 'react';

const Detail = () => {
  const {
    id
  } = useParams();
  console.log(id);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "detail"), /*#__PURE__*/React.createElement("p", null, "\uC774\uACF3\uC740  detail \uC785\uB2C8\uB2E4."));
};

export default Detail;