import React from "react";
import Carousel from "./carousel" 
import Cards from "./cards"
// import { createBrowserRouter } from "react-router-dom";
import "./main.css";
import Footer from "./footer";


function Main() {
  return (
    <div className="landing-page">

      
      <Carousel />
      <Cards />
      <Footer />
      
      
      
      
    </div>
  );
}

export default Main;



