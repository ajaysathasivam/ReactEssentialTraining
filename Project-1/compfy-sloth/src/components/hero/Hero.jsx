import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import "../hero/Hero.scss";
import Section from "../layout/Section";

const Hero = ({ heading, bodyContent }) => {
  const navigate = useNavigate();

  return (
    <Section>
      <section className="hero-section">
        <div className="row align-items-center">
          <div className=" col-lg-6">
            <p className=" text-capitalize chead fw-bold lh-1 w-75 display-4 ">{heading}</p>
            <p className="lh-lg fs-5 py-4">{bodyContent}</p>
            <Button
              className="btn  primary bgprimary text-uppercase"
              text="shop now"
              onClick={() => navigate("/products")}
            />
          </div>
          <div className="col-lg-6  ">
            <div className="position-relative">
              <img src="src/assets/extra-product-1.jpeg" className="w-100" alt="" />
              <img src="src/assets/extra-product-2.jpeg" className="w-50 position-absolute top-0 left-0" alt="" />
            </div>
            <div>image 2 </div>

          </div>
        </div>
      </section>
    </Section>
  );
};

export default Hero;
