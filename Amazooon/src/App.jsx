import "./App.css";

import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

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
    </>
  );
}

export default App;
