import React, { useState } from "react";
import sliderImg1 from "../asset/slider/sliderImg1.jpg";
import sliderImg2 from "../asset/slider/sliderImg2.jpg";
import sliderImg3 from "../asset/slider/sliderImg3.jpg";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io';
import '../styles/CustomSlider.css'

export default function CustomSlider() {
  const [imgArray, setImgArray] = useState([sliderImg1, sliderImg2, sliderImg3]);
  const [leftOffset, setLeftOffset] = useState(0);
  const [currentInd, setCurrentInd] = useState(0);
  const prevSlide = () => {
    setCurrentInd(currentInd === 0 ? imgArray.length - 1 : currentInd - 1);
    setLeftOffset(currentInd === 0 ? (imgArray.length - 1) * (-100) : leftOffset + 100)
  };
  const nextSlide = () => {
    setCurrentInd(currentInd === imgArray.length - 1 ? 0 : currentInd + 1);
    setLeftOffset(currentInd === imgArray.length - 1 ? 0 : leftOffset - 100);
  };
  return (
    <div className="sliderContainer">
      <IoMdArrowDropleftCircle className='slider-left-icon' onClick={() => prevSlide()}></IoMdArrowDropleftCircle>
      <IoMdArrowDroprightCircle className='slider-right-icon' onClick={() => nextSlide()}></IoMdArrowDroprightCircle>
      <div className="img-slider">
        <div className="img-slider-wrapper" style={{ left: `calc(${leftOffset}vw)` }}>{
          imgArray.map((single, index) => (
            <img src={single} key={index} className='slider-img' alt='slider-img' />
          ))
        }</div>
      </div>
    </div>
  );
}
