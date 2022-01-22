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
  const [cars, setCars] = useState([]);

  const history = useHistory();

  const getImage = async () => {
    const detailsofcars = await getCars();
    setDetails(detailsofcars);
    console.log("details:", detailsofcars);
    console.log("detailsimages:", detailsofcars.images);
    return detailsofcars[3].images;
    // {
    //   detailsofcars &&
    //     detailsofcars.forEach((element, i) => {
    //       console.log("car :", i, " ", element.images);
    //       return element.images;
    //     });
    // }
  };

  useEffect(async () => {
    // const images =
    //   "https://images.carwiz.co.il/tr:w-1920/agencies/0a89ea0c4afd5e10d566e0c5f901a8952f04365b.jpeg?ik-sdk-version=react-1.0.10";

    const images = await getImage();
    console.log("image:", images);
    // const details = await getCars();
    // setDetails(details);

    const cars = await getCarsByImage({ images: images });
    // console.log("details:", details);
    setCars(cars);
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
          <
        })} */}
      {cars &&
        cars.map((car, i) => {
          return <Details key={car.images} index={i} car={car} />;
        })}
    </div>
  );
};
export default CarsDetails;
