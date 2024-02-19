import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/HomePage";


import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./layout/Layout";
import Ok from "./pages/Ok";


function App() {
  return (
    <>
      <div className="App">
        <HomePage />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/nav" element={<Layout />}></Route>
          <Route path="/" element={<LoginPage />}></Route>
          <Route
            path="/RegistrationPage"
            element={<RegistrationPage />}
          ></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
