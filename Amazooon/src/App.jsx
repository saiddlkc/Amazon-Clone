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
import { CartProvider } from "./pages/home/context/CartContext";
import PageNotFound from "./pages/PageNotFound";
import AllCategories from "./pages/categorys/AllCategories";
import Suchleiste from "./pages/SuchSeite";
import Suchen from "./pages/SuchSeite";
import Möbel from "./pages/categorys/Möbel";
import Sport from "./pages/categorys/Sport";
import Kosmetik from "./pages/categorys/Kosmetik";
import OrderPage from "./pages/OrderPage";
import SuccesPage from "./pages/SuccesPage";

function App() {
  return (
    <>
      <CartProvider>
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
            path="/search"
            element={
              <Layout>
                <Suchleiste />
              </Layout>
            }
          />
          <Route path="/search/:searchTerm" Component={<Suchen />} />
          <Route
            path="/allcategories"
            element={
              <Layout>
                <AllCategories />
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
            path="/Möbel"
            element={
              <Layout>
                <Möbel />
              </Layout>
            }
          />
          <Route
            path="/Sport"
            element={
              <Layout>
                <Sport />
              </Layout>
            }
          />
          <Route
            path="/Kosmetik"
            element={
              <Layout>
                <Kosmetik />
              </Layout>
            }
          />
          <Route
            path="/succes"
            element={
              <Layout>
                <SuccesPage />
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
          <Route path="/Order" element={<OrderPage />} />
          <Route
            path="/:category/:id"
            element={
              <Layout>
                <ProductProvider>
                  <ProductDetails />
                </ProductProvider>
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
      </CartProvider>
    </>
  );
}
export default App;
