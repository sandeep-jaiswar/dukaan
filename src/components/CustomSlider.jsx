import React, { useState } from "react";
// import  sliderImg1 from "../asset/slider/sliderImg1.jpg";

export default function CustomSlider() {
  const [imgArray, setImgArray] = useState([]);
  const [currentInd, setCurrentInd] = useState(0);
  const prevSlide = () => {
    setCurrentInd(currentInd === 0 ? imgArray.length - 1 : currentInd - 1);
  };
  const nextSlide = () => {
    setCurrentInd(currentInd === imgArray.length - 1 ? 0 : currentInd + 1);
  };
  return (
    <div className="sliderContainer">
      <div className="current-slide">{[currentInd]}</div>
    </div>
  );
}
