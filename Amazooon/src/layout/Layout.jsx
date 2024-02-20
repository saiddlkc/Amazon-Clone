import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../pages/home/HomePage";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default Layout;
