import React, { useState, useEffect } from "react";
import CarsDetails from "../../screens/CarsDetails";
import "./style.css";

const ImagesCars = (props) => {
  const [imageClick, setImageClick] = useState(false);

  const handleClick = async () => {
    setImageClick(true);
  };

  return (
    <div className="images">
      <img width="60%" src={props.images} onClick={handleClick} />
      {imageClick ? <CarsDetails image={props.images} /> : ""}
    </div>
  );
};

export default ImagesCars;
