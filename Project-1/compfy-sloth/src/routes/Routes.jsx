import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Products from "../pages/product/Products";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import BreadCrums from "../components/breadcrums/BreadCrums";
import Cart from "../pages/cart/Cart";
import Poster from "../pages/poster/Poster";
const RoutesCom = () => {
  // const numberOfItems = JSON.parse(localStorage.getItem('cart')).length
  return (
    <>
      <BrowserRouter>
        <Header cartItem={2} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/poster/:id" element={<Poster />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default RoutesCom;
