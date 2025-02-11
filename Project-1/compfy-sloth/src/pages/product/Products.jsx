import React from "react";
import BreadCrums from "../../components/breadcrums/BreadCrums";
import Layout from "../../components/layout/Layout";

const Products = () => {
  return (
    <>
      <BreadCrums current={"products"}/>
      <Layout>
        <div>Products</div>
      </Layout>
    </>
  );
};

export default Products;
