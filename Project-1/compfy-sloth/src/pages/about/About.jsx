import React from "react";
import Layout from "../../components/layout/Layout";
import "./About.scss";
import { aboutBody, aboutHeader, aboutImage } from "../../utils/AboutContent";
import BreadCrums from "../../components/breadcrums/BreadCrums";
import { useLocation } from "react-router-dom";
const About = () => {
  const currentPath = useLocation()
  console.log(currentPath)
  return (
    <>
      <BreadCrums current={currentPath.pathname} />
      <Layout>
        <div className="row  my-5 py-5 ">
          <div className="col-lg-6 p-2" style={{ height: "500px" }}>
            <img
              src={aboutImage}
              alt=""
              className="w-100 h-100 object-fit-cover rounded"
            />
          </div>
          <div className="col ps-5">
            <h2 className=" text-capitalize  about-heading fw-bold chead ">
              {aboutHeader}
            </h2>

            <p className=" phead-color mt-5 lh-lg text-justify">{aboutBody}</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
