import React from "react";
import Search from "../Search/Search";
import Button from "../Button/Button";

const ProductsRibben = () => {
  return (
    <>
      <div className="col-2">
        <Search className="border-0" placeholder="search"/>
      </div>
      <div className="col d-flex justify-content-end ">
        <Button
          iconClassName={" bi-chevron-compact-down mx-1 fs-6"}
          btnClassName={"btn rounded  fsw-2 mx-2 border"}
          text={"catogoried"}
        />
        <Button
          iconClassName={"bi-arrow-down-up mx-2 fs-6"}
          btnClassName={"btn rounded border fsw-2 "}
          text={"Last Added"}
        />
      </div>
    </>
  );
};

export default ProductsRibben;
