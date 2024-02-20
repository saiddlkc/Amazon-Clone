import "./App.css";
import Ok from "./pages/Ok";

import Login from "./components/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Registration from "./components/Registration";
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
    </>
  );
}
export default App;
