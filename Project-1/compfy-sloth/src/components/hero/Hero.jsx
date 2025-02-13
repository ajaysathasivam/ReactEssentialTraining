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
        <div className="col-lg-6 position-relative ">
           
           
        </div>
      </div>
    </section>
    </Section>
  );
};

export default Hero;
