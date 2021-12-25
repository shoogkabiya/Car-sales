import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCars } from "../../api/api";
import "./style.css";

// components imports
import Button from "../../components/Btn";

const CarsDetails = (props) => {
  const [details, setDetails] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    const details = await getCars();
    // console.log("details:", details);
    setDetails(details);
  }, []);

  const handleSubmit = () => {
    history.push("/paymentdetails");
  };

  return (
    <div>
      <Button label="Buy" handleClick={handleSubmit} />
      {details.forEach((element) => {
        if (props.image === element.images) {
          console.log("props.image:", props.image);
          console.log("element.images:", element.images);
        }
      })}
    </div>
  );
};
export default CarsDetails;
