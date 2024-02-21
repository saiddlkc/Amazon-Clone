import React from "react";
import Slider from "./Slider";
import Pro from "./context/Productss";

const HomePage = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div>
        <Pro />
      </div>
    </div>
  );
};

export default HomePage;
