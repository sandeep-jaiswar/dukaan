import React from "react";
import "../styles/CustomNavbar.css";

const CustomNavbar = () => {
  const moveScroll = (val) => {
    window.scrollTo(0, val);
  }
  return (
    <div className='customNavbar'>
      <div className="link">Link</div>
      <div className="link" onClick={() => moveScroll(680)}>Home</div>
      <div className="link" onClick={() => moveScroll(1340)}>Clothes</div>
      <div className="link" onClick={() => moveScroll(1960)}>Electronics</div>
      <div className="link" onClick={() => moveScroll(2600)}>Shoes</div>
      <div className="link" onClick={() => moveScroll(3230)}>Mobiles</div>
    </div>
  );
};

export default CustomNavbar;
