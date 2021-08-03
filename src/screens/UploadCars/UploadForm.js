import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

//icons imports
import { AddIcon } from "../../icons/index";

const UploadForm = () => {
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const [preview, setPreview] = useState("");
  const [version, setVersion] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [currentmileage, setCurrentmileage] = useState("");
  const [hand, setHand] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [color, setColor] = useState("");
  const [originalownership, setOriginalownership] = useState("");
  const [nexttest, setNexttest] = useState("");
  const [annuallicensingfee, setAnnuallicensingfee] = useState("");
  const [isValidVersion, setIsValidVersion] = useState(false);
  const [isValidYear, setIsValidYear] = useState(false);
  const [isValidEngine, setIsValidEngine] = useState(false);
  const [isValidcurrentmileage, setIsValidCurrentmileage] = useState(false);
  const [isValidhand, setIsValidHand] = useState(false);
  const [isValidgearbox, setIsValidGearbox] = useState(false);
  const [isValidcolor, setIsValidColor] = useState(false);
  const [isValidoriginalownership, setIsValidOriginalownership] = useState(
    false
  );
  const [isValidnexttest, setIsValidNexttest] = useState(false);
  const [
    isValidannuallicensingfee,
    setIsValidHandAnnuallicensingfee,
  ] = useState(false);

  const types = ["image/png", "image/jpeg", "image/webp"];
  const history = useHistory();

  ////validation
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
      console.log(selected);
    } else {
      setFile(null);
      setError("Please select an image file(png or jpeg)");
    }
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isValidYear &&
      preview &&
      isValidVersion &&
      isValidEngine &&
      isValidcurrentmileage &&
      isValidhand &&
      isValidannuallicensingfee
    ) {
      console.log("Correct data");
      history.push("/Profile");
    }
  };

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
            className="input-form"
            onChange={validateYear}
          />

          <input
            type="text"
            placeholder="Engine"
            value={engine}
            className="input-form"
            onChange={validateEngine}
          />

          <input
            type="text"
            placeholder="Current mileage"
            value={currentmileage}
            className="input-form"
            onChange={validateCurrentmileage}
          />

          <input
            type="text"
            placeholder="Hand"
            value={hand}
            onChange={validateHand}
            className="input-form"
          />

          <input type="text" placeholder="Gearbox" className="input-form" />

          <input type="text" placeholder="Color" className="input-form" />

          <input
            type="text"
            placeholder=" Original ownership"
            className="input-form"
          />
          <input
            type="text"
            placeholder=" Annual licensing fee"
            value={annuallicensingfee}
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
