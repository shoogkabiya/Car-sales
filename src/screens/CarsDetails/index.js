import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./style.css";

// components imports
import Button from "../../components/Btn";

const CarsDetails = (props) => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/paymentdetails");
  };

  return (
    <div>
      <Button label="Buy" handleClick={handleSubmit} />
    </div>
  );
};
export default CarsDetails;
