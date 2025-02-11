import React, { useState } from "react";
import Filter from "../../../Components/Filter/Filter";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const initData = useSelector((state) => state.products.value);
  console.log(initData);
  const [product, setProduct] = useState(initData);

  return (
    <div>
      <div className="row" style={{ maxHeight: "100vh" }}>
        <div className="col-2 h-100">
        <Filter />
        </div>
        <div className="col h-100">
          <div className="row ">
          {product?.map((product) => (
            <div className="col-4 ">
              <ProductCard
                title={product.title}
                image={product.pictureUrl}
                discription={product.description}
                price={product.price}
              />
            </div>  
          ))}
          </div>
        </div>
      </div>
      {/* <div className="row d-flex" style={{maxHeight:"100vh"}}>
        <div className="col-3 h-100">

        </div>
        <div className="row">
           
        </div>
      </div> */}
    </div>
  );
};

export default Categories;
