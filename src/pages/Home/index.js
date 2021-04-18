import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomNavbar from "../../components/CustomNavbar";
import CustomSlider from "../../components/CustomSlider";
import Header from "../../components/Header";
import PageCard from "../../components/PageCard";
import UserDetailsOnHeader from "../../components/UserDetailsOnHeader";

import "./index.css";

const Home = () => {
  const [electronicsProductsArr,setElectronicsProductsArr]=useState([]);
  const [clothesProductsArr,setClothesProductsArr]=useState([]);
  const [shoesProductsArr,setShoesProductsArr]=useState([]);
  const [mobileProductsArr,setMobileProductsArr]=useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(res=>{
      setElectronicsProductsArr(res.data);
      setClothesProductsArr(res.data);
      setShoesProductsArr(res.data);
      setMobileProductsArr(res.data);
    })
  },[]);
  return (
    <div className="home">
      <UserDetailsOnHeader />
      <div className="">
        <Header />
        <CustomNavbar />
        <div className='nav-pages'> 
          <div className='navpage1'>
            <CustomSlider />
          </div>
          <div className='navpage2'>
            <PageCard state={{title:'',arr : electronicsProductsArr}} />
          </div>
          <div className='navpage3'>
            <PageCard state={{title:'Clothes',arr : clothesProductsArr}} />
          </div>
          <div className='navpage4'>
            <PageCard state={{title:'Electronics',arr : electronicsProductsArr}} />
          </div>
          <div className='navpage5'>
            <PageCard state={{title:'Shoes',arr : shoesProductsArr}} />
          </div>
          <div className='navpage6'>
            <PageCard state={{title:'Mobile',arr : mobileProductsArr}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
