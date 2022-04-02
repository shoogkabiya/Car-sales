import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PriceOfCar from "../../components/PriceOfCar";
import "./style.css";

//imports from api
import { getCars, getCarsByImage } from "../../api/api";

function PaymentDetails() {
  const [PayPalisChecked, setPayPalisChecked] = useState(false);
  const [Isracardischecked, setIsracardisChecked] = useState(false);
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

  ////Submit
  const handleSubmit = (e) => {
    if (Isracardischecked) {
      history.push("/carddetails");
    } else if (PayPalisChecked) {
      history.push("/PayPalDetails");
    }
  };

  return (
    <div>
      <h1>buy a car</h1>
      {cars &&
        cars.map((car, i) => {
          return (
            <PriceOfCar
              key={car.version}
              index={i}
              car={car}
              Isracardischecked={Isracardischecked}
              PayPalisChecked={PayPalisChecked}
              setPayPalisChecked={setPayPalisChecked}
              setIsracardisChecked={setIsracardisChecked}
            />
          );
        })}
      <button
        className="button-Purchase"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </div>
  );
}
export default PaymentDetails;
