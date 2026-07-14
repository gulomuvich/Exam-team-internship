import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Routes } from "express";

function App() {
  return (
    <div style={{ display: "flex" }}>
    
        <Header />

      <div className="layout">
        <Navbar />
        <main className="content">
          <Routes>
          
          </Routes>
        </main>
      </div>
      
    </div>
  );
}

export default App;