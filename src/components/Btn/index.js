import React from "react";
import "./style.css";

const Button = ({ label, handleClick }) => {
  return (
    <button className="common-design" onClick={handleClick}>
      {label}
    </button>
  );
};
export default Button;
