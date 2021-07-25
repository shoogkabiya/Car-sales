import React, { useState, useEffect } from "react";

//icons imports
import { AddIcon } from "../../icons/index";

const UploadForm = () => {
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const [preview, setPreview] = useState("");
  const types = ["image/png", "image/jpeg", "image/webp"];

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

  return (
    <form>
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
          <input type="text" placeholder="Version" />
          {/* <br />
          <br /> */}
          <input type="text" placeholder="year" />
          {/* <br />
          <br /> */}
          <input type="text" placeholder="Engine" />
          {/* <br />
          <br /> */}
          <input type="text" placeholder="Current mileage" />
          {/* <br />
          <br /> */}
          <input type="text" placeholder="Hand" />
          {/* <br />
          <br /> */}
          <input type="text" placeholder="Gearbox" />
          {/* <br />
          <br /> */}
          <input type="text" placeholder="Color" />
          {/* <br />
          <br /> */}
          <input type="text" placeholder=" Original ownership" />
          {/* <br />
          <br /> */}
          <button className="AddCar" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
export default UploadForm;
