import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Registration from "./components/Registration";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./layout/Layout";
import Ok from "./pages/Ok";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route
            path="/RegistrationPage"
            element={<RegistrationPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Layout />

    </>
  );
}
export default App;
