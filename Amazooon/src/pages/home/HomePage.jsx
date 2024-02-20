import React from "react";
import Slider from "./Slider";
import Banner from "./Banner";
import Angebot from "./Angebot";
import Category from "./Category";
import Products from "./Products";

const HomePage = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div>
        <Products />
        <Angebot />
        {/* <Banner /> */}
        {/* <Category /> */}
      </div>
    </div>
  );
};

export default HomePage;
