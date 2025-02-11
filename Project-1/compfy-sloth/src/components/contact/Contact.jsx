import React from "react";
import Section from "../layout/Section";
import "./Contact.scss";
import { secTitle, contactSectionData } from "../../utils/ContactContent";

const Contact = () => {
  return (
    <Section sectionName={"contact"}>
      {contactSectionData?.map((data) => (
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p className=" text-capitalize  h3  ">{data?.joinHeader}</p>
            <p className="lh-lg">{data?.joinBody}</p>
          </div>
          <div
            className="col-lg-6 
          align-items-center contact"
          >
            <div className="  w-100 d-flex">
              {data?.inputs?.map((obj, idx) => (
                <input
                  key={idx}
                  name={obj.name}
                  className="border w-75"
                  placeholder={obj.placeholder}
                />
              ))}
              <button className="btn btn-primary rounded-start ">
                {data?.button.btnText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </Section>
    // <Section sectionName={"contact"}>
    //   <p className=" text-capitalize  h3  ">{joinHeader}</p>
    //   <p className="lh-lg">{joinBody}</p>
    //   <div className="d-flex">
    //     {inputs?.map((obj, idx) => (
    //       <input key={idx} name={obj.name} placeholder={obj.placeholder} />
    //     ))}
    //     <button className={button.cls}>{button.btnText}</button>
    //   </div>
    // </Section>
  );
};

export default Contact;
