import { Route, Routes } from "react-router-dom";
import "./App.css";
import Ok from "./pages/Ok";
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
