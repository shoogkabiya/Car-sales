import React, { useEffect, useState } from "react";
import "./style.css";
import PayPal from "../../images/PayPal.png";
import Isracard from "../../images/Isracard.png";

const PriceOfCar = (props) => {
  const car = props.car;
  console.log("detailsofcar:", car);
  const [isChecked, setIsChecked] = useState(false);
  const PayPalisChecked = props.PayPalisChecked;
  const setPayPalisChecked = props.setPayPalisChecked;
  const setIsracardisChecked = props.setIsracardisChecked;
  const Isracardischecked = props.Isracardischecked;

  ////PayPalIschecked
  const validatePaypal = () => {
    const checkedPayPal = document.getElementById("PayPal");
    console.log("checkedPayPal:", checkedPayPal);
    if (checkedPayPal) {
      setPayPalisChecked(true);
    }
  };

  ////IsracardIschecked
  const validateIsracard = () => {
    const checkedIsracard = document.getElementById("Isracard");
    console.log("Isracardischecked:", checkedIsracard);
    if (checkedIsracard) {
      setIsracardisChecked(true);
    }
  };

  ////Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (PayPalisChecked) {
      return PayPalisChecked;
    } else if (Isracardischecked) {
      return Isracardischecked;
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
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="choosePayPal">
            <input
              type="radio"
              name="role"
              id="PayPal"
              onClick={() => validatePaypal()}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label>
              <img width="60%" id="PayPal" src={PayPal} />
            </label>
          </div>

          <div className="chooseIsracard">
            <input
              type="radio"
              name="role"
              id="Isracard"
              onClick={() => validateIsracard()}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label>
              <img width="60%" id="Isracard" src={Isracard} />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PriceOfCar;
