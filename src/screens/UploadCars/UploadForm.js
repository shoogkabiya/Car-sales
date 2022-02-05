import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

//icons imports
import { AddIcon } from "../../icons/index";

//
import { addCars } from "../../api/api";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [images, setImages] = useState(null);
  const [version, setVersion] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [current_mileage, setCurrentmileage] = useState("");
  const [hand, setHand] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [color, setColor] = useState("");
  const [original_ownership, setOriginalownership] = useState("");
  const [next_test, setNexttest] = useState("");
  const [annual_licensing_fee, setAnnuallicensingfee] = useState("");
  const [price, setPrice] = useState("");
  const [isValidPrice, setIsValidPrice] = useState(false);
  const [isValidVersion, setIsValidVersion] = useState(false);
  const [isValidYear, setIsValidYear] = useState(false);
  const [isValidEngine, setIsValidEngine] = useState(false);
  const [isValidCurrentmileage, setIsValidCurrentmileage] = useState(false);
  const [isValidHand, setIsValidHand] = useState(false);
  const [isValidGearbox, setIsValidGearbox] = useState(false);
  const [isValidColor, setIsValidColor] = useState(false);
  const [isValidOriginalownership, setIsValidOriginalownership] = useState(
    false
  );
  const [isValidNexttest, setIsValidNexttest] = useState(false);
  const [
    isValidAnnuallicensingfee,
    setIsValidHandAnnuallicensingfee,
  ] = useState(false);
  ////
  const types = ["image/png", "image/jpeg", "image/webp"];

  const history = useHistory();

  ////validation
  const validateVersion = (event) => {
    const patternversion = /[a-ת_]/gi;
    setVersion(event.target.value);
    if (patternversion.test(event.target.value)) {
      console.log("version:", "version");
      setIsValidVersion(true);
    } else {
      setIsValidVersion(false);
    }
  };

  ////
  const validateYear = (event) => {
    const patternyear = /^\d{4}$/i;
    setYear(event.target.value);
    if (patternyear.test(event.target.value)) {
      console.log("year:", "year");
      setIsValidYear(true);
    } else {
      setIsValidYear(false);
    }
  };

  ////
  const validateEngine = (event) => {
    const patternengine = /[a-ת_\d]/gi;
    setEngine(event.target.value);
    if (patternengine.test(event.target.value)) {
      console.log("engine:", "engine");
      setIsValidEngine(true);
    } else {
      setIsValidEngine(false);
    }
  };

  ////
  const validateCurrentmileage = (event) => {
    const patterncurrentmileage = /[,\d]/gi;
    setCurrentmileage(event.target.value);
    if (patterncurrentmileage.test(event.target.value)) {
      console.log("currentmileage:", "currentmileage");
      setIsValidCurrentmileage(true);
    } else {
      setIsValidCurrentmileage(false);
    }
  };

  ////
  const validateHand = (event) => {
    const patternhand = /^\d$/gi;
    setHand(event.target.value);
    if (patternhand.test(event.target.value)) {
      console.log("hand:", "hand");
      setIsValidHand(true);
    } else {
      setIsValidHand(false);
    }
  };

  ////
  const validateGearbox = (event) => {
    const patterngearbox = /[א-ת]/gi;
    setGearbox(event.target.value);
    if (patterngearbox.test(event.target.value)) {
      console.log("gearbox:", "gearbox");
      setIsValidGearbox(true);
    } else {
      setIsValidGearbox(false);
    }
  };

  ////
  const validateColor = (event) => {
    const patterncolor = /[א-ת]/gi;
    setColor(event.target.value);
    if (patterncolor.test(event.target.value)) {
      console.log("color:", "color");
      setIsValidColor(true);
    } else {
      setIsValidColor(false);
    }
  };

  ////
  const validateOriginalownership = (event) => {
    const patternoriginalownership = /[א-ת]/gi;
    setOriginalownership(event.target.value);
    if (patternoriginalownership.test(event.target.value)) {
      console.log("originalownership:", "originalownership");
      setIsValidOriginalownership(true);
    } else {
      setIsValidOriginalownership(false);
    }
  };

  ////
  const validateNexttest = (event) => {
    const patternnexttest = /[א-ת\d]/gi;
    setNexttest(event.target.value);
    if (patternnexttest.test(event.target.value)) {
      console.log("nexttest:", "nexttest");
      setIsValidNexttest(true);
    } else {
      setIsValidNexttest(false);
    }
  };

  ////
  const validateAnnuallicensingfee = (event) => {
    const patternannuallicensingfee = /[,\d]/gi;
    setAnnuallicensingfee(event.target.value);
    if (patternannuallicensingfee.test(event.target.value)) {
      console.log("annuallicensingfee:", "annuallicensingfee");
      setIsValidHandAnnuallicensingfee(true);
    } else {
      setIsValidHandAnnuallicensingfee(false);
    }
  };

  ////
  const validatePrice = (event) => {
    const patternprice = /[,\d]/gi;
    setPrice(event.target.value);
    if (patternprice.test(event.target.value)) {
      console.log("price:", "price");
      setIsValidPrice(true);
    } else {
      setIsValidPrice(false);
    }
  };

  ////
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      console.log("typeof:", typeof selected);
    } else {
      setFile(null);
      setError("Please select an image file(png or jpeg)");
    }
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      console.log("reader:", reader);
      reader.onloadend = () => {
        setImages(reader.result);
      };
      reader.readAsDataURL(file);
      console.log("file:", file.name);
    } else {
      setImages(null);
    }
  }, [file]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      images &&
      isValidVersion &&
      isValidYear &&
      isValidEngine &&
      isValidCurrentmileage &&
      isValidHand &&
      isValidGearbox &&
      isValidColor &&
      isValidOriginalownership &&
      isValidNexttest &&
      isValidAnnuallicensingfee &&
      isValidPrice
    ) {
      console.log("Correct data");

      localStorage.setItem("ImagesUpload", images);

      addCars({
        version: version,
        year: year,
        engine: engine,
        current_mileage: current_mileage,
        hand: hand,
        gearbox: gearbox,
        color: color,
        original_ownership: original_ownership,
        next_test: next_test,
        annual_licensing_fee: annual_licensing_fee,
        images: images,
        price: price,
      });

      history.push("/Cars");
    }
  };
  ////
  console.log("preview:", images);
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {images ? (
        <img src={images} width="150" height="100" />
      ) : (
        "no picture uppload"
      )}

      <label>
        <input
          type="file"
          onChange={changeHandler}
          multiple
          style={{ display: "none" }}
          accept="image/*"
        />
        <AddIcon className="Add-icon"></AddIcon>
      </label>

      <div className="error">
        {error && <div className="errormessage">{error}</div>}
        {file && <div style={{ display: "none" }}>{file.name}</div>}
        <div className="UploadForm">
          <p className="Vehicledetails">Vehicle details</p>
          <input
            type="text"
            placeholder="version"
            value={version}
            onChange={validateVersion}
            className="input-form"
          />

          <input
            type="number"
            placeholder="year"
            value={year}
            onChange={validateYear}
            className="input-form"
          />

          <input
            type="text"
            placeholder="engine"
            value={engine}
            onChange={validateEngine}
            className="input-form"
          />

          <input
            type="text"
            placeholder="current_mileage"
            value={current_mileage}
            onChange={validateCurrentmileage}
            className="input-form"
          />

          <input
            type="number"
            placeholder="hand"
            value={hand}
            onChange={validateHand}
            className="input-form"
          />

          <input
            type="text"
            placeholder="gearbox"
            value={gearbox}
            onChange={validateGearbox}
            className="input-form"
          />

          <input
            type="text"
            placeholder="color"
            value={color}
            onChange={validateColor}
            className="input-form"
          />

          <input
            type="text"
            value={original_ownership}
            placeholder="original_ownership"
            onChange={validateOriginalownership}
            className="input-form"
          />

          <input
            type="text"
            placeholder="next_test"
            value={next_test}
            onChange={validateNexttest}
            className="input-form"
          />

          <input
            type="text"
            placeholder=" annual_licensing_fee"
            value={annual_licensing_fee}
            onChange={validateAnnuallicensingfee}
            className="input-form"
          />

          <input
            type="text"
            placeholder="price"
            value={price}
            onChange={validatePrice}
            className="input-form"
          />

          <button className="AddCar" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
export default UploadForm;
