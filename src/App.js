import React from "react";
//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Leagues from "./pages/Leagues";
import PhotoGallery from "./pages/PhotoGallery";
import Classifieds from "./pages/Classifieds";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import JoinCtg from "./pages/JoinCtg";
import Login from "./pages/Login";
//componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Leagues" element={<Leagues />} />
          <Route path="/PhotoGallery" element={<PhotoGallery />} />
          <Route path="/Classifieds" element={<Classifieds />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/JoinCtg" element={<JoinCtg />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
