import React from "react";
import Banner from "./Banner";
import Home from "./Home";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Categories from "./Categories";

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
        <Categories />
      </div>
    </div>
  );
};

export default HomePage;
