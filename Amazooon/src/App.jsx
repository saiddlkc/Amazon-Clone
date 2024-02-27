import { Route, Routes } from "react-router-dom";
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
import { ProductProvider } from "./pages/home/context/ProductContext";
import ProductDetails from "./pages/home/context/ProductDetails";
import KorbPage from "./pages/KorbPage";
import WkTest from "./components/wktest";
import { CartProvider } from "./pages/home/context/CartContext";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <CartProvider>
        <ProductProvider>
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
              path="/Cameras"
              element={
                <Layout>
                  <Cameras />
                </Layout>
              }
            />
            <Route
              path="/Baby"
              element={
                <Layout>
                  <Baby />
                </Layout>
              }
            />
            <Route
              path="/Bücher"
              element={
                <Layout>
                  <Bücher />
                </Layout>
              }
            />
            <Route
              path="/Deals"
              element={
                <Layout>
                  <Deals />
                </Layout>
              }
            />
            <Route
              path="/Fashion"
              element={
                <Layout>
                  <Fashion />
                </Layout>
              }
            />
            <Route
              path="/Lebensmittel"
              element={
                <Layout>
                  <Lebensmittel />
                </Layout>
              }
            />
            <Route
              path="/Spiele"
              element={
                <Layout>
                  <Spiele />
                </Layout>
              }
            />

            <Route
              path="wk"
              element={
                <Layout>
                  <KorbPage />
                </Layout>
              }
            />

            <Route
              path="/:category/:id"
              element={
                <Layout>
                  <ProductDetails />
                </Layout>
              }
            />

            <Route path="/Login" element={<LoginPage />} />
            <Route path="/RegistrationPage" element={<RegistrationPage />} />
            <Route
              path="*"
              element={
                <Layout>
                  <PageNotFound />
                </Layout>
              }
            />
          </Routes>
        </ProductProvider>
      </CartProvider>
    </>
  );
}
export default App;
