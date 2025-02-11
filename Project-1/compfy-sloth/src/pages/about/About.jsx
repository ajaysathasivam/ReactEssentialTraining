import React from "react";
import Layout from "../../components/layout/Layout";
import "./About.scss";
import { aboutBody,aboutHeader,aboutImage } from "../../utils/AboutContent";
import BreadCrums from "../../components/breadcrums/BreadCrums";
const About = () => {
  return (
    <>
    <BreadCrums current={"about"}/>
    <Layout>
      <div className="row  my-5 ">
        <div className="col-lg-6 p-2" style={{height:"500px"}}>
          <img src={aboutImage} alt="" className="w-100 h-100 object-fit-cover rounded" />
        </div>
        <div className="col px-5">
          <h1 className=" text-capitalize py-4 about-heading ">{aboutHeader}</h1>

          <p className="lh-lg">{aboutBody }</p>
        </div>
      </div>
    </Layout>
    </>
  );
};

export default About;
