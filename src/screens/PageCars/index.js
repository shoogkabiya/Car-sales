import React, { useEffect, useState } from "react";

//imports from api
import { getCars } from "../../api/api";

// components imports
import ImagesCars from "../../components/Image'Cars";
import "./style.css";

function PageCars() {
  const [cars, setCars] = useState([]);

  useEffect(async () => {
    const cars = await getCars();
    setCars(cars);
  }, []);

  return (
    <div className="arrayofimages">
      {cars &&
        cars.map((car, i) => {
          // console.log("car :", i, " ", car);
          return (
            <ImagesCars
              key={car.version}
              index={i}
              images={car.images}
              car={car}
            />
          );
        })}
    </div>
  );
}

export default PageCars;
