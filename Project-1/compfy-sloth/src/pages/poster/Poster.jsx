import React from "react";
import Section from "../../components/layout/Section";

const Poster = () => {
  return (
    <Section>
      <div className="row">
        <div className="col-12">
          <button className="btn">back to product</button>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12">image</div>
            <div className="col-12">image, image ....</div>
          </div>
        </div>
        <div className="col-lg-6">
          <p>titlte</p>
          <p>rating </p>
          <p>price</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            nobis deleniti quidem laboriosam labore ipsum ipsa odit maiores
            mollitia repellat.
          </p>
          <p>
            <ul>
              <li>available</li>
              <li>skd</li>
              <li>brand</li>
            </ul>
          </p>
        </div>
        <div className="col-lg-6">
            <hr />
            incre + decre
        </div>
      </div>
    </Section>
  );
};

export default Poster;
