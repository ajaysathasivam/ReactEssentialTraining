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
          {customDesignDiscription?.map((obj) => (
            <div className="row d-flex justify-content-between py-5 py-lg-5">
              <div className="col-lg-6 pe-5">
                <p className="h2 text-capitalize custom-card-heading">{obj.heading}</p>
              </div>
              <div className="col-lg-6">
                <p className="custom-card-body lh-lg">{obj.discription}</p>
              </div>
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
