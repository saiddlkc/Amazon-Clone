import "./App.css";
import Ok from "./pages/Ok";
import Text from "./pages/Text";

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
          <Route path="/" element={<Ok />} />
          <Route path="/text" element={<Text />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
