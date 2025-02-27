import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import "../hero/Hero.scss";
import Section from "../layout/Section";
// import useWindowDimensions from "../../utils/windowDimension"
const Hero = ({ heading, bodyContent }) => {
  const navigate = useNavigate();
  // const {width} = useWindowDimensions();
  return (
    <Section>
      <section className="hero-section" style={{height:"100vh"}}>
        <div className="row h-100">
          <div className=" col-lg-7 mt-0 mt-lg-5">
            <p className=" text-capitalize chead fw-bold lh-1 w-75 display-4 mt-5 ">
              {heading}
            </p>
            <p className="lh-lg  me-5 py-4">{bodyContent}</p>
            <Button
              className="btn  primary bgprimary text-uppercase"
              text="shop now"
              onClick={() => navigate("/products")}
            />
          </div>
         <div className="col  h-100  d-none d-lg-block ">
            <div className="img-piller h-100 ">
              <img
                src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"
                className="ps-5 w-100 h-100 rounded"
                alt=""
              />
              <div className="h-100">
              <img
              src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg"
              className="w-50  position-absolute object-fit-cover rounded"
              style={{ left: "-25px", bottom:"0%" }}
              alt=""
            />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Hero;
