import React from "react";
import "./style.css";

const Details = (props) => {
  const details = props.element;
  console.log("details:", details);

  return (
    <div>
      <h1>{details.version}</h1>
    </div>
  );
};

export default Details;
