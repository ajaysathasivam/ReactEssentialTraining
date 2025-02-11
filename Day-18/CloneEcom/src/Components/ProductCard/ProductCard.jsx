import React from "react";
const ProductCard = ({
  image,
  title,
  price,
  name,
  discription,
  category,
  className,
  children,
}) => {
  return (
    <div className="px-2 py-1 border ">
      <div className="row ">
        <img
          src={image}
          alt={name}
          className="object-fit-fill"
          style={{ maxHeight: "150px" }}
        />
      </div>
      <div className="row">
        <p className={className}>
          <span className="fw-bold ">Tittle:</span>
          <span className="">{title}</span>
        </p>
        <p className={className}>
          <span className="fw-bold ">discription:</span>
          <span className="fw-italic">{discription}</span>
        </p>
        <p className={className}>
          <span className="fw-bold ">category:</span> {category}
        </p>
        <p className={className}>
          <span className="fw-bold ">Price:</span>${price}
        </p>
        {children}
      </div>
    </div>
  );
};

export default ProductCard;
