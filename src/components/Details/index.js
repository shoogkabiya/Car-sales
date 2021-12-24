import React from "react";
import "./style.css";

const Details = (props) => {
  const details = props;
  console.log("details:", details);

  return (
    <div>
      <h1>{details.detail.version}</h1>
    </div>
  );
};

export default Details;
