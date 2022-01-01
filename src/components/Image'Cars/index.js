import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

const ImagesCars = (props) => {
  const [imageClick, setImageClick] = useState(false);
  const history = useHistory();

  const handleClick = async () => {
    setImageClick(true);
    history.push("/carsdetails");
  };

  return (
    <div className="images">
      <img width="60%" src={props.images} onClick={handleClick} />
    </div>
  );
};

export default ImagesCars;
