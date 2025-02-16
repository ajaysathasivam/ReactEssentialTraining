import React, { useEffect, useState } from "react";
import Section from "../../components/layout/Section";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss"
import BreadCrums from "../../components/breadcrums/BreadCrums";
import { setCartValue, setClerCart } from "../../store/CartSlice/CartSlice";

const Cart = () => {
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const data = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()
  const [subTotal, setSubTotal] = useState(5);
  const navigate = useNavigate();
  const shippingFee = 5.8;
  const [total, setTotal] = useState(subTotal + shippingFee);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);
  const handleSubToal = (type, subtotal, items) => {
    switch (type) {
      case "dec":
        items = items - 1;
        sub = subtotal * items;
        setSubTotal(sub);
        setTotal(sub * shippingFee);
        alert(0);
        break;
      case "inc":
        break;
      default:
    }
  };
  const handleSubTotal = (type, id) => {
    setCartItem((prevCart) =>
      prevCart?.map((obj) => {
        if (obj.id === id) {
          let newCartItems =
            type === "dec" ? obj.cartItems - 1 : obj.cartItems + 1;
          newCartItems = Math.max(newCartItems, 1); // Prevent going below 1

          let newSubTotal = (newCartItems * (Number(obj.price) / 100)).toFixed(
            2
          );

          return {
            ...obj,
            cartItems: newCartItems,
            subTotal: Number(newSubTotal),
          };
        }
        return obj;
      })
    );
  };

  // Update total dynamically whenever cartItem changes
  useEffect(() => {
    const newSubTotal = cartItem.reduce((acc, item) => acc + item.subTotal, 0);
    setSubTotal(newSubTotal);
    setTotal(newSubTotal + shippingFee);
  }, [cartItem]);

  const handleDel = (id) => {
    const filteredCart = cartItem.filter((obj) => obj.id != id);
    setCartItem(filteredCart);
  };
  return (
    <>
      <BreadCrums current={"Cart"} />

      <Section>
        {cartItem.length > 0 ?
          <div className="row">

            {cartItem?.map((obj, idx) => (
              <div className="col-12  my-2 d-flex align-items-center justify-content-between">
                {console.log(obj[0])}
                <div className="d-flex w-25    align-items-center ">
                  <img
                    src={obj.image}
                    width={"100px"}
                    height={"75px"}
                    className="object-fit-cover rounded "
                    alt=""
                  />
                  <div className="px-4 pe-0 ">
                    <p
                      className="chead-color m-0 lts fw-bold  text-capitalize"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {obj?.name}
                    </p>
                    <span
                      className="d-inline-flex align-items-center phead-color lts "
                      style={{ fontSize: "0.8rem" }}
                    >
                      Color:
                      <p
                        className="rounded m-0 ms-2 "
                        style={{
                          width: "15px",
                          height: "15px",
                          backgroundColor: obj?.selectedColo[0],
                        }}
                      ></p>
                    </span>{" "}
                  </div>
                </div>

                <div className="d-flex  align-items-center cart-price d-none">
                  <span className="primary lts">
                    ${(obj.price / 100).toFixed(2)}
                  </span>
                </div>
                <div className="d-flex  align-items-center">
                  <button
                    className="  bg-light mx-1  border-0 fw-bold"
                    onClick={() => handleSubTotal("dec", obj.id)}
                  >
                    -
                  </button>
                  <span className="chead-color fs-5">{obj.cartItems}</span>
                  <button
                    className=" bg-light  mx-1 border-0 fw-bold"
                    onClick={() => handleSubTotal("inc", obj.id)}
                  >
                    +
                  </button>
                </div>
                <div className="d-flex align-items-center cart-sub d-none">
                  <span className="primary">${(obj.subTotal / 100).toFixed(2)} </span>
                </div>
                <div>
                  <i className="bi bi-trash p-1  text-light bg-danger" onClick={() => handleDel(obj.id)}></i>
                </div>
              </div>
            ))}


            <div className="col d-flex py-5 align-items-center justify-content-between">
              <button
                className="btn btn-primary text-capitalize lts"
                onClick={() => navigate("/products")}
              >
                continue shoping
              </button>
              <button className="btn btn-dark text-capitalize lts" onClick={() => {
                setCartItem([]), dispatch(setClerCart())
              }}>
                clear shoping cart
              </button>
            </div>
            <hr />
            {/* contant */}
            <div className="col-12 d-flex justify-content-end">
              <div className="col-12 col-lg-4 text-capitalize   border px-5 py-4">
                <div className="row">
                  <div className="col-8 chead-color py-2 fw-normal">subtotal:</div>
                  <div className="col-4"> ${(subTotal / 100).toFixed(2)}</div>
                </div>
                <div className="row">
                  <div className="col-8 phead-color">Shipping fee:</div>
                  <div className="col"> ${shippingFee}</div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center ">
                  <div className="col-8 fs-3 fw-bold chead-color">Order Total:</div>
                  <div className="col">${(total / 100).toFixed(2)}</div>
                </div>
              </div>
            </div>
            <div className="col-12  d-flex justify-content-end my-4">
              <button className=" col-12  col-lg-4 btn my-2 lts btn-primary">
                login
              </button>
            </div>

          </div>
          : <div className="row justify-content-center text-capitalize" style={{ height: "50vh" }}>
            <div className="col-6 d-flex flex-column align-items-center justiy-content-center">
              <p className="text-center fw-bold fs-4">Cart is empty</p>
              <button className="w-100 btn border primar bgprimary"
                onClick={() => navigate("/products")}
              >Fill Cart</button>
            </div>
          </div>}
      </Section>
    </>
  );
};

export default Cart;
