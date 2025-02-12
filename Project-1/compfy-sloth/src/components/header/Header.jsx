import React from "react";
import { Link } from "react-router-dom";
import Section from "../layout/Section";
import "./Header.scss"

const Header = () => {
  return (
    <Section sectionName={"header"}>
      <header>
        <nav className="navbar  navbar-expand-lg bg-body-tertiary">
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
                <Link to="/" className="mx-2 nav-link ">
                  Home
                </Link>
                <Link to="/about" className=" mx-2  nav-link">
                  About
                </Link>
                <Link to="/products" className=" mx-2 nav-link">
                  Products
                </Link>
              </div>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link to="/cart" className="nav-link cart fs-5">
                  Cart<i class="bi bi-cart-fill mx-2"></i>
                </Link>
                <Link to="/cart" className="nav-link login fs-5">
                  Login<i class="bi bi-person-plus-fill mx-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </Section>
  );
};

export default Header;
