import "./App.css";
import Login from "./components/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Registration from "./components/Registration";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./layout/Layout";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
