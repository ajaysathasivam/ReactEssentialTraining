import React from "react";
import Layout from "../../components/layout/Layout";
import "./About.scss";
import { aboutBody, aboutHeader, aboutImage } from "../../utils/AboutContent";
import BreadCrums from "../../components/breadcrums/BreadCrums";
import { useLocation } from "react-router-dom";
// import useWindowDimensions from "../../utils/windowDimension"
const About = () => {
  const currentPath = useLocation()
//  const {width} = useWindowDimensions()

  return (
    <>
      <BreadCrums current={currentPath.pathname} />
      <Layout>
        <div className="row   py-5 ">
          <div className={`col-lg-6 p-2 mb  mb-5 my-lg-0 me-5`} style={{ height: "500px" }}>
              <img
              src={aboutImage}
              alt=""
              className="w-100 h-100 object-fit-cover rounded"
            />
          </div>
          <div className="col ">
            <h2 className=" text-capitalize  about-heading fw-bold chead ">
              {aboutHeader}
            </h2>

            <p className=" phead-color mt-4  lh-lg text-justify">{aboutBody}</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
