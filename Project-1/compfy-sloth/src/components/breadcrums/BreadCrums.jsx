import React from "react";
import { useNavigate } from "react-router-dom";
import "./BreadCrums.scss";
import Layout from "../layout/Layout";
const BreadCrums = ({ current }) => {
  const navigate = useNavigate();
  return (
    <div className="py-4  d-flex align-items-center bread-crum">
      <Layout>
        <div className="d-flex fw-bold">
          {" "}
          <p className="fs-2 fw-bold bread-root" onClick={() => navigate("/")}>Home</p>
          <p className="fs-2 mx-2">/</p>
          <p className="fs-2 fw-bold bread-child">{current}</p>
        </div>
      </Layout>
    </div>
  );
};

export default BreadCrums;
