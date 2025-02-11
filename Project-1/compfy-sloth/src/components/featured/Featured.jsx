import React from "react";
import Section from "../layout/Section";
import "./Featured.scss";
import Card from "../card/Card";

const Featured = () => {
  return (
    <Section sectionName={"featured"}>
      <div className="row">
        <div className="col-12 text-center pb-5">
          <p className="h2 featured-title">Featured Products</p>
        </div>
        <div className=" col-md-6 col-lg-4 ">
          <Card className={"featured-card"} >
            <div className="col">
              <div className=" ">
                <img
                  src="https://www.course-api.com/images/store/product-7.jpeg"
                  className="w-100 h-100 object-fit-fill"
                  alt=""
                />
              </div>
              <div className="d-flex justify-content-between px-3 bg-danger">
                <p>title</p>
                <p>price</p>
              </div>
            </div>
          </Card>
          
        </div>
        <div className="col-md-6 col-lg-4 ">
          <Card className={"featured-card"} >
            <div className="col">
              <div className=" ">
                <img
                  src="https://www.course-api.com/images/store/product-7.jpeg"
                  className="w-100 h-100 object-fit-fill"
                  alt=""
                />
              </div>
              <div className="d-flex justify-content-between px-3 bg-danger">
                <p>title</p>
                <p>price</p>
              </div>
            </div>
          </Card>
          
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className={"featured-card"} >
            <div className="col">
              <div className=" ">
                <img
                  src="https://www.course-api.com/images/store/product-7.jpeg"
                  className="w-100 h-100 object-fit-fill"
                  alt=""
                />
              </div>
              <div className="d-flex justify-content-between px-3 bg-danger">
                <p>title</p>
                <p>price</p>
              </div>
            </div>
          </Card>
          
        </div>
        <div className="col-12 text-center py-5">
         <button className="btn">button</button>
        </div>
      </div>
    </Section>
  );
};

export default Featured;
