import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import { heroBody, heroHeader } from "../../utils/HeroContent";
import BreadCrums from "../../components/breadcrums/BreadCrums";
import Featured from "../../components/featured/Featured";
import CustomDesign from "../../components/customDesign/CustomDesign";
import Contact from "../../components/contact/Contact";
const Home = () => {
  return (
    <>
      <Hero heading={heroHeader} bodyContent={heroBody} />
      <Featured />
      <CustomDesign />
      <Contact />
    </>
  );
};

export default Home;
