import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
//icons imports
import { AddIcon } from "../../icons/index";

const UploadForm = () => {
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const [preview, setPreview] = useState("");
  const types = ["image/png", "image/jpeg", "image/webp"];
  const history = useHistory();

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
    history.push("/Profile");
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

          <input type="text" placeholder="Version" className="input-form" />

          <input type="text" placeholder="year" className="input-form" />

          <input type="text" placeholder="Engine" className="input-form" />

          <input
            type="text"
            placeholder="Current mileage"
            className="input-form"
          />

          <input type="text" placeholder="Hand" className="input-form" />

          <input type="text" placeholder="Gearbox" className="input-form" />

          <input type="text" placeholder="Color" className="input-form" />

          <input
            type="text"
            placeholder=" Original ownership"
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
