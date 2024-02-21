import { Route, Routes, } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./layout/Layout";
import Cameras from "./pages/categorys/Cameras";
import Baby from "./pages/categorys/Baby";
import Bücher from "./pages/categorys/Bücher";
import Deals from "./pages/categorys/Deals";
import Fashion from "./pages/categorys/Fashion";
import Lebensmittel from "./pages/categorys/Lebensmittel";
import Spiele from "./pages/categorys/Spiele";

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
        <Route
          path="/cameras"
          element={
            <Layout>
              <Cameras />
            </Layout>
          }
        />
        <Route
          path="/baby"
          element={
            <Layout>
              <Baby />
            </Layout>
          }
        />
        <Route
          path="/bücher"
          element={
            <Layout>
              <Bücher />
            </Layout>
          }
        />
        <Route
          path="/deals"
          element={
            <Layout>
              <Deals />
            </Layout>
          }
        />
        <Route
          path="/fashion"
          element={
            <Layout>
              <Fashion />
            </Layout>
          }
        />
        <Route
          path="/lebensmittel"
          element={
            <Layout>
              <Lebensmittel />
            </Layout>
          }
        />
        <Route
          path="/spiele"
          element={
            <Layout>
              <Spiele />
            </Layout>
          }
        />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
      </Routes>
    </>
  );
}
export default App;
