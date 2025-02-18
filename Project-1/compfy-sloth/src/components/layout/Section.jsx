import React from "react";
import Layout from "./Layout";
const Section = ({ sectionName, children } ) => {
  return (
    <div className={`section-${sectionName}  `}  >
      <Layout>{children}</Layout>
    </div>
  );
};

export default Section;
