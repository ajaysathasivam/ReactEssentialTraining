import React from "react";
import { Link } from "react-router-dom";
import Section from "../layout/Section";
import "./Header.scss";
import { useSelector } from "react-redux";

const Header = ({cartItem}) => {
  // console.log(localStorage.getItem("cart"))
  // const cartItem = useSelector((state)=>state.cart.items)
  // console.log(cartItem)
  return (
    <Section sectionName={"header"}>
        <nav className="navbar  navbar-expand-lg ">
          <div className="container-fluid justify-content-between">
            <Link to="/">
              <img src="/src/assets/logo.svg" alt="" className="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link to="/" className="mx-2 nav-link underline ">
                  Home
                </Link>
                <Link to="/about" className=" mx-2 underline  nav-link">
                  About
                </Link>
                <Link to="/products" className=" mx-2  underline nav-link">
                  Products
                </Link>
              </div>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link to="/cart" className="nav-link cart  fs-4">
                  Cart
                  <i class="bi bi-cart-fill mx-2 position-relative">
                    <span
                      className="position-absolute bgprimary text-light text-center rounded-circle "
                      style={{
                        width: "20px",
                        height: "20px",
                        fontSize: "13px",
                        top: "-10px",
                      }}
                    >{cartItem}</span>
                  </i>
                </Link>
                <Link to="/cart" className="nav-link login fs-4">
                  Login<i class="bi bi-person-plus-fill mx-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
    </Section>
  );
};

export default Header;
