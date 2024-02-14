import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Login />
      </Router>
    </>
  );
}

export default App;
