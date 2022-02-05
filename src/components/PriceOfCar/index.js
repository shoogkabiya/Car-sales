import React from "react";

const PriceOfCar = (props) => {
  const car = props.car;
  console.log("detailsofcar:", car);

  return (
    <div className="detailsofcar">
      <p>{car.price}</p>
    </div>
  );
};

export default PriceOfCar;
