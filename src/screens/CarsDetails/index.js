import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCars, getCarsByImage } from "../../api/api";
import "./style.css";

// components imports
import Button from "../../components/Btn";
import Details from "../../components/Details";
import ImagesCars from "../../components/Image'Cars";

const CarsDetails = (props) => {
  const [details, setDetails] = useState([]);

  const history = useHistory();

  function getImage() {
    {
      details &&
        details.map((element, i) => {
          // console.log("car :", i, " ", car);
          return (
            <ImagesCars
              key={element.version}
              index={i}
              images={element.images}
            />
          );
        });
    }
  }

  useEffect(async () => {
    // const images =
    //   "https://images.carwiz.co.il/tr:w-1920/agencies/0a89ea0c4afd5e10d566e0c5f901a8952f04365b.jpeg?ik-sdk-version=react-1.0.10";

    const images = getImage();
    console.log("image:", images);
    // const details = await getCars();
    // setDetails(details);
    const cars = await getCarsByImage({ images });
    // console.log("details:", details);
    setDetails(cars);
  }, []);

  const handleSubmit = () => {
    history.push("/paymentdetails");
  };

  return (
    <div>
      <Button label="Buy" handleClick={handleSubmit} />
      {/* {details &&
        details.map((element, i) => {
          // console.log("car :", i, " ", car);
          return (
            <ImagesCars
              key={element.version}
              index={i}
              images={element.images}
            />
          );
        })} */}
    </div>
  );
};
export default CarsDetails;
