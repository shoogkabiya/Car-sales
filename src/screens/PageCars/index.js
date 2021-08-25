import React from "react";
import "./style.css";

const PageCars = (props) => {
  const Images = props.ImagesArray;
  // const Array = [];
  console.log(Images);
  // function addImage() {
  //   Array.push(Images);
  // }
  // addImage();
  return <div>{props.ImagesArray}</div>;
};
export default PageCars;
