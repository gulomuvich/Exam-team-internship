import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./page/Products";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Navbar />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<div><h1>Categories</h1></div>} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;