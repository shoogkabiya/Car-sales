import React from "react";
import "./style.css";
const PageCars = (props) => {
  return (
    <div className="Profile">
      <img src={props.preview} />
      {console.log(props.preview)}
    </div>
  );
};
export default PageCars;
