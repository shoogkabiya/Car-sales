import React, { useEffect, useState } from "react";
import "./style.css";
import PayPal from "../../images/PayPal.png";
import Isracard from "../../images/Isracard.png";

const PriceOfCar = (props) => {
  const car = props.car;
  console.log("detailsofcar:", car);
  const [isChecked, setIsChecked] = useState(false);
  const [PayPalisChecked, setPayPalisChecked] = useState(false);
  const [Isracardischecked, setIsracardisChecked] = useState(false);

  ////PayPalIschecked
  const validatePaypal = () => {
    const checkedPayPal = document.getElementById("PayPal");
    console.log("checkedPayPal:", checkedPayPal);
    if (PayPalisChecked) {
      setPayPalisChecked(true);
    }
  };

  ////IsracardIschecked
  const validateIsracard = () => {
    const checkedIsracard = document.getElementById("Isracard");
    console.log("Isracardischecked:", Isracardischecked);
    if (Isracardischecked) {
      setIsracardisChecked(true);
    }
  };

  return (
    <div className="detailsofcar">
      <div className="price">
        <strong>
          <p>Price</p>
        </strong>
        <p>{car.price}</p>
      </div>
      <div className="imagesforbuy">
        <div className="choosePayPal">
          <label htmlFor="role-image">
            <input
              type="radio"
              name="role"
              id="PayPal"
              onClick={() => validatePaypal}
              onChange={() => setPayPalisChecked(!isChecked)}
            />
            <img width="60%" src={PayPal} />
          </label>
        </div>
        <div className="chooseIsracard">
          <label htmlFor="role-image">
            <input
              type="radio"
              name="role"
              id="Isracard"
              onClick={() => validateIsracard}
              onChange={() => setIsracardisChecked(!isChecked)}
            />
            <img width="60%" src={Isracard} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default PriceOfCar;
