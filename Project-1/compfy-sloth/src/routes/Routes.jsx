import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Products from "../pages/product/Products";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import BreadCrums from "../components/breadcrums/BreadCrums";
const RoutesCom = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default RoutesCom;
