import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";

import HomePage from "./pages/home/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./layout/Layout";
import Ok from "./pages/Ok";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        ></Route>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/RegistrationPage" element={<RegistrationPage />}></Route>
      </Routes>
    </>
  );
}
export default App;
