import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

//imports from api
import { getCars, getCarsByImage } from "../../api/api";
import "./style.css";

// components imports
import Button from "../../components/Btn";
import Details from "../../components/Details";

const CarsDetails = () => {
  const [details, setDetails] = useState([]);
  const [cars, setCars] = useState([]);

  const history = useHistory();

  const getImage = async () => {
    const detailsofcars = await getCars();
    setDetails(detailsofcars);
    const imagesofcar = localStorage.getItem("ImageClicked");
    detailsofcars.forEach(async (element) => {
      if (element.images === imagesofcar) {
        console.log("imagematch:", element.images);
        const cars = await getCarsByImage({ images: element.images });
        setCars(cars);
      }
    });
  };

  useEffect(async () => {
    // const images =
    //   "https://images.carwiz.co.il/tr:w-1920/agencies/0a89ea0c4afd5e10d566e0c5f901a8952f04365b.jpeg?ik-sdk-version=react-1.0.10";

    getImage();
  }, []);

  const handleSubmit = () => {
    history.push("/paymentdetails");
  };

  return (
    <div>
      <Button label="Buy" handleClick={handleSubmit} />
      {cars &&
        cars.map((car, i) => {
          return <Details key={car.version} index={i} car={car} />;
        })}
    </div>
  );
};
export default CarsDetails;
