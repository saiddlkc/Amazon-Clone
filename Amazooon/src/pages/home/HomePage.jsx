import React from "react";
import Slider from "../home/slider/Slider";
import Pro from "./context/Productss";
import Angebot from "./Angebot";
import Banner from "./Banner";
import Category from "./Category";

const HomePage = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div>
        <Pro />
        <Angebot />
        <Banner />
      </div>
      <div>
        <Category />
      </div>
    </div>
  );
};

export default HomePage;
