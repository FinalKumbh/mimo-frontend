import { useNavigate, useSearchParams } from "react-router-dom";
import React from 'react';

const Edit = () => {
  const navigate = useNavigate();
  const [SearchParams, setSearchParams] = useSearchParams();
  const id = SearchParams.get("id");
  console.log("id: ", id);
  const lips = SearchParams.get("lips");
  console.log("lips: ", lips);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Edit"), /*#__PURE__*/React.createElement("p", null, "\uC774\uACF3\uC740 Edit \uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearchParams({
      who: "user"
    })
  }, "\uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      navigate("/home");
    }
  }, "HOME"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      navigate(-1);
    }
  }, "\u25C0"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      navigate(+1);
    }
  }, "\u25B6"));
};

export default Edit;