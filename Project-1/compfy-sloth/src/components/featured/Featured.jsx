import React, { useEffect, useMemo, useState } from "react";
import Section from "../layout/Section";
import "./Featured.scss";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../store/productsSlice/ProductsSlice";
import { useNavigate } from "react-router-dom";
import HoverSearch from "../hoverSearch/HoverSearch";
import Button from "../button/Button";

const Featured = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const hover = ()=>{
    setIsHover(0)
  }
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.course-api.com/react-store-products",
          {
            signal: controller.signal,
          }
        );
        const result = await response.json();
        const limited = await result.slice(1,4)
        setData(limited)
        dispatch(setValue(result))
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.error("Fetch error:", error);
        }
      }
    };

    fetchData();

    // Cleanup to abort the request
    return () => controller.abort();
  }, []);

  return (
    <Section sectionName={"featured"}>
      <div className="row">
        <div className="col-12 text-center pb-5">
          <p className="h2 chead  fw-bold featured-title">Featured Products</p>
        </div>
        {data?.map((product,idx,) => (
          <div className=" col-md-6 col-lg-4  ">
            
          <Card className={"featured-card"}>
            <div className="col ">
              <div className="position-relative" style={{ height: "225px" }}>
              <i  
                  className="bi bi-search position-absolute featured-image opacity-0  primary fw-bold d-flex align-items-center justify-content-center  w-100 h-100 display-6"
                  onClick={() => navigate(`/poster/${product.id}`)}
                  
                ></i>
                <img
                  src={product.image}
                  className="w-100 h-100 object-fit-cover rounded "
                  alt=""
                  
                />
              </div>
              <div className="d-flex justify-content-between my-2">
                <p className="chead text-capitalize">{product.name}</p>
                <p className="chead primary">
                  $<span className="ms-1">{product.price}</span>
                </p>
              </div>
            </div>
          </Card>
        </div>

          
        ))}

        <div className="col-12 text-center py-5">
          <Button
            className="btn bgprimary py-6 "
            text={"All Products"}
            onClick={() => navigate("/products")}
          ></Button>
        </div>
      </div>
    </Section>
  );
};

export default Featured;
