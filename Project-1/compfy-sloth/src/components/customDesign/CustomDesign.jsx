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
      <div className="row">
        <div className="col-12 ">
          {customDesignDiscription?.map((obj) => (
            <div className="row d-flex justify-content-between py-5">
              <div className="col-lg-6">
                <p className="h4">{obj.heading}</p>
              </div>
              <div className="col-lg-6">
                <p>{obj.discription}</p>
              </div>
            </div>
          ))}
        </div>
        {customDesignContent?.map((card, idx) => (
          <div className="col  " key={idx}>
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
              <p className="custome-design my-3 h5">
                {card.customDesignHeading}
              </p>
              <p>{card.customDesignBody}</p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CustomDesign;
