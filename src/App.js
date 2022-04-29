import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/pages/Home/Home";
import Layout from "./components/layout/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
