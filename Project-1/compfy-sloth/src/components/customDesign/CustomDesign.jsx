import React from "react";
import Section from "../layout/Section";
import "./customDesign.scss";
import {
  customDesignIcon,
  customDesignContent,
  customDesignDiscription,
} from "../../utils/CustomDesignContent";
import Card from "../card/Card";
const CustomDesign = () => {
  const { stroke, fill, strokeWidth, viewBox, height, width, xmlns, path } =
    customDesignIcon;
  return (
    <Section sectionName={"custom"}>
      <div className="row custom-row ">
        <div className="col-12 ">
          {customDesignDiscription?.map((obj,idx) => (
            <div className=" row d-flex  justify-content-between mb-4" key={idx}>
              <h3 className=" text-wrap   fw-bold text-capitalize custom-card-heading " style={{maxWidth:"300px"}}>
                {obj.heading}
              </h3>
              <p className="col-12 col-lg-6 custom-card-body lh-lg">
                {obj.discription}
              </p>
            </div>
          ))}
        </div>
        {customDesignContent?.map((card, idx) => (
          <div className="col-12 col-lg-4   " key={idx}>
            <Card className={"custom-card"}>
              <span className="fs-1 rounded-circle d-block  mx-auto   custom-design-icon">
                <svg
                  stroke={stroke}
                  fill={fill}
                  strokeWidth={strokeWidth}
                  viewBox={viewBox}
                  height={height}
                  width={width}
                  xmlns={xmlns}
                >
                  <path d={card.customDesignIcon.path.d} />
                </svg>
              </span>
              <p className="custome-design my-4 h3 custom-card-heading text-capitalize">
                {card.customDesignHeading}
              </p>
              <p className="lh-lg custom-card-body">{card.customDesignBody}</p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CustomDesign;
