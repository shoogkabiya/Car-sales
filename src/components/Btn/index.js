import React from "react";
import "./style.css";

const Button = ({ label, handleClick }) => {
  return (
    <button className="btn-container" onClick={handleClick}>
      {label}
    </button>
  );
};
export default Button;
