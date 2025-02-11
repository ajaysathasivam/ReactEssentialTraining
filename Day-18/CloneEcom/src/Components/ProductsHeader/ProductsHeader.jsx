import React from "react";
import Button from "../Button/Button";

const ProductsHeader = ({onClick}) => {
  return (
    <>
      <div className="col-3">
        <p className="h4">Product grid</p>
      </div>
      <div className="col d-flex justify-content-end">
        <Button
          iconClassName={"bi-cloud-arrow-up-fill mx-1 fs-6"}
          btnClassName={"btn rounded bg-light fsw-2 mx-2 border"}
          text={"export"}
          
        />
        <Button
          iconClassName={"bi-plus mx-1 fs-6"}
          btnClassName={"btn rounded btn-primary fsw-2 "}
          text={"Create new"}
          onClick={onClick}
        />
      </div>
    </>
  );
};

export default ProductsHeader;
