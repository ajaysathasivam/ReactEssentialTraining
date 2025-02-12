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
          <p>Wooden Table</p>
          <p>rating (35 customer reviews) </p>
          <p>$2,349.99</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            nobis deleniti quidem laboriosam labore ipsum ipsa odit maiores
            mollitia repellat.
          </p>
          <p>
            <div className="row align-items-center">
              <div className="col-2">Available:</div>
              <div className="col">in Stock</div>
            </div>
          </p>
          <div className="col">
            <hr className="w-100" />
            <div className="row align-items-center">
              <div className="col-2">Color:</div>
              <div className="col"><button className="rounded-circle border-0" style={{ backgroundColor: "red", width: "20px", height: "20px" }}></button></div>
            </div>

            <div className="d-flex align-items-center">
              <button className="btn">-</button>
              <span>1</span>
              <button className="btn">+</button></div>

          </div>
          <button className="btn">Add Cart</button>
        </div>

      </div>
    </Section>
  );
};

export default Poster;
