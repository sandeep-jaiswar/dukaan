import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import CustomSlider from "../../components/CustomSlider";
import Header from "../../components/Header";
import UserDetailsOnHeader from "../../components/UserDetailsOnHeader";

import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <UserDetailsOnHeader />
      <div className="">
        <Header />
        <CustomNavbar />
        <CustomSlider />
      </div>
    </div>
  );
};

export default Home;
