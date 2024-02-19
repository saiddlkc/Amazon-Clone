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
      <div
        style={{
          position: "absolute",
          top: "0",
          padding: "250px 0 0 0",
          zIndex: "1",
          margin: "30px",
        }}
      >
        <Products />
        <Angebot />
        <Banner />
        <Category />
      </div>
    </div>
  );
};

export default HomePage;
