import React, { useEffect, useState } from "react";
import ProductsHeader from "../../../Components/ProductsHeader/ProductsHeader";
import ProductsRibben from "../../../Components/ProdutsRibben/ProductsRibben";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import Button from "../../../Components/Button/Button";
import { useLoaderData, useNavigate } from "react-router-dom";
import { deleteFetch } from "../../../ApiCalls/FetchData";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const initialData = useSelector((state)=>state.products.value)
  
  const [data, setData] = useState(initialData); 
  const navigate =useNavigate()
  const handlePage = (size) => {
    alert(size);
  };
  const handleDelete = async (id) => {
    await deleteFetch(id); 
    setData(data.filter(product => product.id !== id)); 
  };
  const handleEdit =(idx)=>{
    const queryPara = new URLSearchParams(idx).toString();
    navigate(`/add?${queryPara}`)
  }

  return (
    <div>
      <div className="row px-1 py-3 bg-light bg-danger">
        <ProductsHeader onClick={()=>navigate("/add")}/>
      </div>
      <div className="row px-1 py-3 bg-emphasis">
        <ProductsRibben />
      </div>
      <div className="row  py-3 bg-emphasis flex-wrap ">
        {data?.map((product) => (
          <div className="col-3 my-2">
            <ProductCard
              key={product.id}
              image={product.pictureUrl}
              title={product.title}
              discription={product.description}
              category={product.category}
              price={product.price}
              className={"fs-6 text-truncate "}
            >
              <div className="d-flex">
                <Button
                  text="delete"
                  btnClassName={"btn border mx-1"}
                  iconClassName={"bi-x text-danger"}
                  onClick={()=>handleDelete(product.id)}
                />
                <Button
                  text="edit"
                  btnClassName={"btn border mx-1"}
                  iconClassName={"bi-pencil text-success "}
                  onClick={()=>handleEdit(product.id)}
                />
              </div>
            </ProductCard>
          </div>
        ))}
      </div>
      <div className="row px-1 py-3 bg-emphasis">
        <div className="col-12 d-flex justify-content-end">
          <Button
            btnClassName="btn border m-1"
            text={"<<prev"}
            onClick={() => handlePage(0)}
          />
          {data?.map((_, idx) => {
            const inc = 5;
            const i = 0;
            if (idx === inc) {
              return (
                <Button
                  btnClassName="btn border m-1"
                  text={idx - 4}
                  onClick={() => handlePage(0)}
                />
              );
            }
          })}

          <Button
            btnClassName="btn border m-1  "
            text={"last>>"}
            onClick={() => handlePage(-1)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
