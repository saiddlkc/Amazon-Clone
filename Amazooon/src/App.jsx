import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";

import HomePage from "./pages/home/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./layout/Layout";
import Ok from "./pages/Ok";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/nav" element={<Layout />}></Route>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/RegistrationPage" element={<RegistrationPage />}></Route>
        <Route path="/Game" element={<GamePage />}></Route>
      </Routes>
    </>
  );
}
export default App;
