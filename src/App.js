import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Escolaridade from "./components/Escolaridade";
import SobreMim from "./components/Perfil";
import Perfil from "./components/Perfil";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Escolaridade />
      <SobreMim />
      <Footer />
      <Perfil />
    </div>
  );
}