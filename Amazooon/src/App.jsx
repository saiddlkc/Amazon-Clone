import { Route, Routes } from "react-router-dom";
import "./App.css";

import Ok from "./pages/Ok";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Ok />
      <Footer />
    </>
  );
}

export default App;
