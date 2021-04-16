import React from "react";
import { ImSearch, ImCart } from "react-icons/im";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLogoWithTitle">
        <img
          src="https://image1.jdomni.in/storeLogo/16042021/30/6A/3C/5213E6672086F93A9D225275EE_1618557902957.png?output-format=webp"
          className="headerLogo"
          alt="header logo"
        />
      </div>
      <div className="headerSearchBar">
        <input type="text" placeholder="search" />
        <button type="button" className="searchBtn">
          <ImSearch />
          <span>search</span>
        </button>
      </div>
      <div className="HeaderCart">
        <button type="button" className="searchBtn">
          <ImCart />
          <span>Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
