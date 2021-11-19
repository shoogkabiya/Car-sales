import React, { useEffect, useState } from "react";
import { getCars } from "../../api/api";
import ImagesCars from "../../components/Image'Cars";
import "./style.css";

function PageCars(props) {
  const [cars, setCars] = useState([]);

  useEffect(async () => {
    const cars = await getCars();

    setCars(cars);
  }, []);

  return (
    <div>
      {cars &&
        cars.map((car, i) => {
          console.log("car :", i, " ", car);
          return <ImagesCars key={car.version} index={i} images={car.images} />;
        })}
    </div>
  );
}

export default PageCars;
