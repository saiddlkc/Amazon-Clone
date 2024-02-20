import { Route, Routes } from "react-router-dom";
import "./App.css";
import Ok from "./pages/Ok";

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

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Ok />} />
        </Routes>
      </Layout>
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
