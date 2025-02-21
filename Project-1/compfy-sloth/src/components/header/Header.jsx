import React from "react";
import { Link } from "react-router-dom";
import Section from "../layout/Section";
import "./Header.scss";
import { useSelector } from "react-redux";

const Header = ({ cartItem }) => {
  // console.log(localStorage.getItem("cart"))
  // const cartItem = useSelector((state)=>state.cart.items)
  // console.log(cartItem)
  return (
    <Section sectionName={"header"}>
      <nav className="navbar  navbar-expand-lg  position-relative">
       

        <div className="container-fluid">
          <Link to="/">
            <img src="/src/assets/logo.svg" alt="" className="logo" />
          </Link>
          <button
            className="d-lg-none border-0 bg-light phead-color"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start "
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <Link to="/">
                <img src="/src/assets/logo.svg" alt="" className="logo" />
              </Link>
              <button
                type="button"
                className="btn-close  text-warning"
                data-bs-dismiss="offcanvas"
                aria-label="Close"

              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <Link to="/" className="my-2 mx-2 nav-link underline ">
                  Home
                </Link>
                <Link to="/about" className=" my-2 mx-2 underline  nav-link">
                  About
                </Link>
                <Link to="/products" className=" my-2 mx-2  underline nav-link">
                  Products
                </Link>
              </ul>
              <ul className="navbar-nav justify-content-sm-around  justify-content-lg-end flex-grow-1 pe-3 flex-row  ">
                <Link to="/cart" className="nav-link cart  fs-4">
                  Cart
                  <i className="bi bi-cart-fill mx-2 position-relative">
                    <span
                      className="position-absolute bgprimary text-light text-center rounded-circle "
                      style={{
                        width: "20px",
                        height: "20px",
                        fontSize: "13px",
                        top: "-10px",
                      }}
                    >
                      {cartItem}
                    </span>
                  </i>
                </Link>
                <Link to="/cart" className="nav-link login fs-4">
                  Login<i className="bi bi-person-plus-fill mx-2"></i>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
};

export default Header;




 {/* <div className="container-fluid justify-content-between  "   >
            <Link to="/">
              <img src="/src/assets/logo.svg" alt="" className="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end justify-content-end "
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
              <div className="navbar-nav ">
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
          </div> */}