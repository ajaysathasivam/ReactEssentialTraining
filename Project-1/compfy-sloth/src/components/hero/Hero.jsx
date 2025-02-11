import React from "react";
import Button from "../button/Button";
import navigate from "../../utils/navigate";
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
          <h1 className=" text-capitalize ">{heading}</h1>
          <p className="lh-lg">{bodyContent}</p>
          <Button
            className="btn px-4 btn-primary"
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
