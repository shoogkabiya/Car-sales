import React from "react";
import "./style.css";

const ImagesCars = (props) => {
  console.log("propsofimages:", props);
  return (
    <div className="images">
      <img width="60%" src={props.images} />
    </div>
  );
};

export default ImagesCars;
