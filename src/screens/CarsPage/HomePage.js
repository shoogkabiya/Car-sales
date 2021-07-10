import React, { useState } from "react";

//icons imports
import { AddIcon } from "../../icons/index";
const HomePage = () => {
  const [uploading, setUploading] = useState(false);
  // const [images, setImages] = useState([]);
  const handleClick = (e) => {
    console.log("upploading");
  };
  return (
    <div className="HomePage">
      <h1>HomePage</h1>
      <button type="file" onClick={handleClick}>
        <AddIcon className="Add-icon" />
      </button>
    </div>
  );
};

export default HomePage;
