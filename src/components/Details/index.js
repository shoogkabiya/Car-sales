import React from "react";
import "./style.css";

const Details = (props) => {
  const car = props.car;
  console.log("detailsofcar:", car);

  return (
    <div className="detailsofcar">
      <p>{car.version}</p>
      <p>{car.year}</p>
      <p>{car.engine}</p>
      <p>{car.current_mileage}</p>
      <p>{car.hand}</p>
      <p>{car.gearbox}</p>
      <p>{car.color}</p>
      <p>{car.original_ownership}</p>
      <p>{car.next_test}</p>
      <p>{car.annual_licensing_fee}</p>
      <img width="40%" src={car.images} className="carimage" />
    </div>
  );
};

export default Details;
