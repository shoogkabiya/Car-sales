import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

//icons imports
import { AddIcon } from "../../icons/index";
// import PageCars from "../PageCars";
//
import { addCars } from "../../api/api";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);
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
  const [imagesArray, setImagesArray] = useState([]);
  const history = useHistory();
  ////
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
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      console.log("file:", file.name);
      // <PageCars image={file} />;
    } else {
      setPreview(null);
    }
  }, [file]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      preview &&
      isValidVersion &&
      isValidYear &&
      isValidEngine &&
      isValidCurrentmileage &&
      isValidHand &&
      isValidGearbox &&
      isValidColor &&
      isValidOriginalownership &&
      isValidNexttest &&
      isValidAnnuallicensingfee
    ) {
      console.log("Correct data");

      addCars({
        preview,
        version,
        year,
        engine,
        current_mileage,
        hand,
        gearbox,
        color,
        original_ownership,
        next_test,
        annual_licensing_fee,
      });
      history.push("/Cars");
      // imagesArray.push(preview);
      // setImagesArray(imagesArray);
      // console.log("ImagesArray:", imagesArray);
    }
  };
  ////
  console.log("preview:", preview);
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {preview ? (
        <img src={preview} width="150" height="100" />
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
            placeholder="Version"
            value={version}
            onChange={validateVersion}
            className="input-form"
          />

          <input
            type="text"
            placeholder="year"
            value={year}
            onChange={validateYear}
            className="input-form"
          />

          <input
            type="text"
            placeholder="Engine"
            value={engine}
            onChange={validateEngine}
            className="input-form"
          />

          <input
            type="text"
            placeholder="Current mileage"
            value={current_mileage}
            onChange={validateCurrentmileage}
            className="input-form"
          />

          <input
            type="text"
            placeholder="Hand"
            value={hand}
            onChange={validateHand}
            className="input-form"
          />

          <input
            type="text"
            placeholder="Gearbox"
            value={gearbox}
            onChange={validateGearbox}
            className="input-form"
          />

          <input
            type="text"
            placeholder="Color"
            value={color}
            onChange={validateColor}
            className="input-form"
          />

          <input
            type="text"
            value={original_ownership}
            placeholder="Original ownership"
            onChange={validateOriginalownership}
            className="input-form"
          />

          <input
            type="text"
            placeholder="Next Test"
            value={next_test}
            onChange={validateNexttest}
            className="input-form"
          />

          <input
            type="text"
            placeholder=" Annual licensing fee"
            value={annual_licensing_fee}
            onChange={validateAnnuallicensingfee}
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
