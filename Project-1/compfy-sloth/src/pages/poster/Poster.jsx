import React, { useEffect, useState } from "react";
import Section from "../../components/layout/Section";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../components/button/Button";
import ImageCart from "../../components/imagecard/ImageCart";

const Poster = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.products.value);
  const product = data.filter((obj) => obj.id === id);
  const [productView, setProductView] = useState(product);
  const [image, setImage] = useState(product[0].image);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const handleInc = (type) => {
    switch (type) {
      case "inc":
        setCount((pre) => pre + 1);
        break;
      case "dec":
        if (count == 1) {
          setCount((pre) => (pre == 0 ? 1 : 1));
        } else {
          setCount((pre) => pre - 1);
        }
        break;
      default:
        setCount(1);
    }
  };
  const handleAddCart = (item,id)=>{
   localStorage.setItem("cart",count)
   const cartItem = item
   localStorage.setItem("cartItems",JSON.stringify(cartItem))
   navigate(`/cart/${id}`)
  }
  return (
    <Section>
      <div className="row">
        <div className="col-12">
          <Button
            className="primary bgprimary rounded border-0 my-4"
            text={"back to product"}
            onClick={() => navigate("/products")}
          ></Button>
        </div>
        {productView?.map((item) => (
          <>
            <div className="col-lg-6 h-100  ">
              <div className="row">
                <div className="col-12 ">
                  <img
                    src={image}
                    height={"500px"}
                    className="w-100  rounded-1"
                    alt=""
                  />
                </div>
                <div className="col-12">
                  <div className="row h-100 mt-2">
                    <ImageCart image={item.image} state={setImage} />
                    <ImageCart
                      image={"/src/assets/extra-product-1.jpeg"}
                      state={setImage}
                    />
                    <ImageCart
                      image={"/src/assets/extra-product-2.jpeg"}
                      state={setImage}
                    />
                    <ImageCart
                      image={"/src/assets/extra-product-3.jpeg"}
                      state={setImage}
                    />
                    <ImageCart
                      image={"/src/assets/extra-product-4.jpeg"}
                      state={setImage}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-5">
              <p className="text-capitalize fw-bold fs-1 py-0  chead-color lts">
                {item?.name}
              </p>
              <p>rating (35 customer reviews) </p>
              <p className="lts  primary fs-5 fw-bold">
                $ <span>{(item?.price / 100).toFixed(2)}</span>
              </p>
              <p className="phead-color lh-md">{item?.description}</p>
              <p className="py-2">
                <div className="row align-items-center my-2">
                  <div className="col-2">
                    <span className="fw-bold chead-color ">Available:</span>
                  </div>
                  <div className="col">
                    <span className="phead-color px-5">in Stock</span>
                  </div>
                </div>
                <div className="row align-items-center my-2">
                  <div className="col-2">
                    <span className="fw-bold chead-color ">SKU:</span>
                  </div>
                  <div className="col">
                    <span className="phead-color px-5 text-capitalize">
                      {id}
                    </span>
                  </div>
                </div>
                <div className="row align-items-center my-2">
                  <div className="col-2">
                    <span className="fw-bold chead-color ">Brand:</span>
                  </div>
                  <div className="col">
                    <span className="phead-color px-5 text-capitalize">
                      {item?.company}
                    </span>
                  </div>
                </div>
              </p>
              <div className="col">
                <hr className="w-100" />
                <div className="row align-items-center">
                  <div className="col-2 h-100 ">
                    {" "}
                    <span className="fw-bold chead-color">Color:</span>{" "}
                  </div>
                  <div className="col d-flex px-5">
                    <button
                      className="rounded-circle border-0"
                      style={{
                        backgroundColor: `${item?.color}`,
                        width: "20px",
                        height: "20px",
                      }}
                    ></button>
                  </div>
                </div>

                <div className="d-flex align-items-center my-2">
                  <button
                    className="btn chead-color fw-bold fs-4 px-3"
                    onClick={() => handleInc("dec")}
                  >
                    -
                  </button>
                  <span className="chead-color fw-bold fs-1">{count}</span>
                  <button
                    className="btn chead-color fw-bold fs-4 px-3"
                    onClick={() => handleInc("inc")}
                  >
                    +
                  </button>
                </div>
              </div>
              <Button
                className={"bgprimary rounded border-0"}
                text={"Add cart"}
                onClick={()=>handleAddCart(item,item.id)}
              />
            </div>
          </>
        ))}
      </div>
    </Section>
  );
};

export default Poster;
