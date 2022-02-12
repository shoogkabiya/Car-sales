import React, { useEffect, useState } from "react";

// in this screen we will insert all the details of card
const CardDetails = () => {
  //Credit card number
  const [creditcardnumber, setCreditCard] = useState("");
  const [isValidCard, setIsValidCard] = useState(false);

  //cvv
  const [Cvv, setCvv] = useState("");
  const [isValidCvv, setIsValidCvv] = useState(false);

  ////validation
  const validateCard = (event) => {
    const patternCard = /[\d| ]{16,22}/gi;
    setCreditCard(event.test.value);
    if (patternCard.test(event.test.value)) {
      console.log("Credit Card Number:", "CreditCard");
      setIsValidCard(true);
    } else {
      setIsValidCard(false);
    }
  };

  ////validation
  const validateCvv = (event) => {
    const patternCvv = /\d{3,4}/gi;
    setCvv(event.test.value);
    if (patternCvv.test(event.test.value)) {
      console.log("Cvv of the card:", "Cvv");
      setIsValidCvv(true);
    } else {
      setIsValidCvv(false);
    }
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidCard && isValidCvv) {
      console.log("The deal was approved");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="detailsofcard">
        <input
          type="text"
          placeholder="Credit Card Number"
          value={creditcardnumber}
          onChange={validateCard}
          className="input-form"
        />
        <input
          type="text"
          placeholder="CVV"
          value={Cvv}
          onChange={validateCvv}
          className="input-form"
        />

        <button type="submit"> Approve</button>
      </div>
    </form>
  );
};

export default CardDetails;
