import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BreadCrums.scss";
import Layout from "../layout/Layout";
const BreadCrums = ({ current,className }) => {
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location)
  return (
    <div className={`py-4  d-flex align-items-center bread-crum ${className}`}>
      <Layout>
        <div className="d-flex fw-bold">
          {" "}
          <p className="fs-2 fw-bold bread-root lts " onClick={() => navigate("/")}>Home</p>
          {/* <p className="fs-2 mx-2">/</p> */}
          <p className="fs-2 fw-bold bread-child text-capitalize lts" >{current}</p>
          {/* <p className="fs-2 mx-2">/</p> */}
        </div>
      </Layout>
    </div>
  );
};

export default BreadCrums;
