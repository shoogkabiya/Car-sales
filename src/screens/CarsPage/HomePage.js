import React, { useRef, useState } from "react";

//icons imports
import { AddIcon } from "../../icons/index";
const HomePage = () => {
  const inputRef = useRef();
  const [File, setFile] = useState();
  // const [uploading, setUploading] = useState(false);
  // const [images, setImages] = useState([]);

  const handleClick = (e) => {
    // setUploading(true);
    // console.log(uploading);
    const { current } = inputRef;
    (current || { click: () => {} }).click();
  };

  return (
    <div className="HomePage">
      <h1>HomePage</h1>
      <input
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
        id="select-file"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
      />

      <button onClick={handleClick}>
        <AddIcon className="Add-icon">
          <input type="file" />
        </AddIcon>
      </button>
      <img src={File} />
    </div>
  );
};

export default HomePage;
