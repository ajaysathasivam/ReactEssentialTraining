import React, { useEffect, useState } from "react";
import Section from "../../components/layout/Section";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import ImageCart from "../../components/imagecard/ImageCart";
import { setCartValue } from "../../store/CartSlice/CartSlice";
import BreadCrums from "../../components/breadcrums/BreadCrums";
import { convertPrice } from "../../utils/FilterData";
import { Stars } from "../../components/Stars/Stars";
import PosterRow from "../../components/PosterRow/PosterRow";

const Poster = () => {
  const { id } = useParams();
  const [productLists, setProductLists] = useState();
  const [isloading, setloading] = useState(true);
  const currentPath = useLocation();
  const [defaultColor, setDefault] = useState(productLists?.colors);

  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [cartCount, setCount] = useState(1);
  const dispatch = useDispatch();
  const [poster,setPoseter] = useState(
    {
      id:'',
      url:""
    }
  )
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.course-api.com/react-store-single-product?id=" + id
        );
        const result = await response.json();
        setProductLists(result || {});
        setPoseter((pre)=>({...pre,"url":result.images[0].url}))
        setloading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.error("Fetch error:", error);
        }
      }
    };
    fetchData();
  }, []);
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
  const handleAddCart = (item, id) => {
    console.log(item, defaultColor, cartCount);
    const newItem = {
      ...item,
      selectedColo: defaultColor,
      cartItems: cartCount,
      subTotal: Number(cartCount) * (Number(item.price) / 100).toFixed(2),
    };
    dispatch(setCartValue(newItem));
    navigate(`/cart`);
  };
  const handleClick = (obj)=>{
    setPoseter((pre)=>({
      ...pre,
      ["id"]: obj.id,
      ['url']:obj.url
    }))
  }
  return (
    <>
      <BreadCrums current={`Product `} />
      <Section>
        {isloading ? (
          <div
            className="d-flex justify-content-center  align-item-center"
            style={{ height: "60vh" }}
          >
            <div className=" spinner-border m-5" role="status"></div>
          </div>
        ) : (
          <div className="row my-5 py-5 ">
            <div className="col-12">
              <Button
                className="primary bgprimary rounded border-0 my-4 lts text-capitalize"
                text={"back to product"}
                onClick={() => navigate("/products")}
              ></Button>
            </div>

            <>
              <div className="col-lg-6 h-100  ">
                <div className="row">

                <img src={poster.url} alt="" className="" height={"500px"}/>
                 
               
                {productLists?.images.map((image) => (
                      <div key={image.id} className={`col mt-4`} 
                      style={{
                        maxHeight:"75px",
                        }}
                        >
                      <img
                        src={image.url}
                        className={` w-100 h-100 rounded-1 object-fit-cover` }
                        style={{border:image.id === poster.id?'1px solid red':null}}
                        alt=""
                        onClick={()=>handleClick(image)}
                      />
                    </div>
                  ))}
                </div>
                
              </div>
              <div className="col-lg-6 ps-5">
                <p className="text-capitalize fw-bold fs-1 py-0  chead-color lts">
                  {productLists?.name}
                </p>
                <p>
                  <Stars rate={3} color={"text-warning"} /> (
                  {productLists?.reviews} customer reviews){" "}
                </p>
                <p className="lts  primary fs-5 fw-bold">
                  $ <span>{convertPrice(productLists?.price)}</span>
                </p>
                <p className="phead-color lh-md">{productLists?.description}</p>
                <p className="py-2">
                  <PosterRow
                    titleValue={"Available"}
                    description={
                      productLists?.stock > 0 ? "In Stock" : "No Stock"
                    }
                  />
                  <PosterRow
                    titleValue={"SKU"}
                    description={productLists?.id}
                  />
                  <PosterRow
                    titleValue={"Brand"}
                    description={productLists?.company}
                  />
                </p>
                <div className="col">
                  <hr className="w-100" />
                  <div className="row align-items-center">
                    <div className="col-2 h-100 ">
                      {" "}
                      <span className="fw-bold chead-color">Color:</span>{" "}
                    </div>
                    <div className="col d-flex px-5">
                      {productLists?.colors?.map((color, idx) => (
                        <button
                          key={idx}
                          className="rounded-circle border-0 mx-1"
                          style={{
                            backgroundColor: `${color}`,
                            width: "20px",
                            height: "20px",
                          }}
                          onClick={() => setDefault(color)}
                        >
                          {defaultColor == color ? (
                            <i className="bi bi-check text-light fw-bold w-100 h-100 d-flex justify-content-center align-items-center"></i>
                          ) : (
                            ""
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex align-items-center my-2">
                    <button
                      className="btn chead-color fw-bold fs-4 px-3"
                      onClick={() => handleInc("dec")}
                    >
                      -
                    </button>
                    <span className="chead-color fw-bold fs-1">
                      {cartCount}
                    </span>
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
                  // onClick={() => handleAddCart(productLists)}
                />
              </div>
            </>
          </div>
        )}
      </Section>
    </>
  );
};

export default Poster;
