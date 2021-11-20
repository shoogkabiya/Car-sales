import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
// screens imports
import CarsDetails from "../../screens/CarsDetails";

const ImagesCars = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/carsdetails");
    console.log("detailsofcars:", props.car);
  };

  console.log("propsofimages:", props);

  return (
    <div className="images">
      <img width="60%" src={props.images} onClick={handleClick} />
    </div>
  );
};

export default ImagesCars;
