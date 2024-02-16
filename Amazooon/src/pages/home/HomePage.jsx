import React from "react";
import Banner from "./Banner";
import Home from "./Home";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Category from "./Categories";
import Cameras from "./Cameras";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div>
        <Home />
      </div>
      <div>
        <Sidebar />
        <Main />
      </div>
      <div>
        <Category />
      </div>
      <Cameras />
    </div>
  );
};

export default HomePage;
