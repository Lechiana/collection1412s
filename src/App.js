import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Collection from "./page/Collection/Collection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Collection" element={<Collection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
