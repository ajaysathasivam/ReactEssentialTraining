import React, { useEffect, useState } from "react";
import Section from "../../components/layout/Section";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const { id } = useParams();
  const [cartItem, setCartItem] = useState(useSelector((state) => state.cart.items));
  const data = useSelector((state) => state.cart.items);
  const [subTotal, setSubTotal] = useState(5)
  const navigate = useNavigate()
  const shippingFee = 5.8;
  const [total, setTotal] = useState(subTotal + shippingFee)
  // useEffect(()=>{
  //   const filterData = data.filter((obj) => obj.id === id);
  //   if(!cartItem){
  //     setCartItem(filterData)
  //   }
  //   else{
  //     setCartItem(pre=>([...pre,{filterData}]))
  //   }
  // },[])
  const handleSubToal = (type, subtotal, items) => {

    switch (type) {
      case "dec":

        items = items - 1
        sub = subtotal * items
        setSubTotal(sub)
        setTotal(sub * shippingFee)
        alert(0)
        break
      case "inc":

        break
      default:
    }
  }
  const handleSubTotal = (type, id) => {
    setCartItem((prevCart) =>
      prevCart?.map((obj) => {
        if (obj.id === id) {
          let newCartItems = type === "dec" ? obj.cartItems - 1 : obj.cartItems + 1;
          newCartItems = Math.max(newCartItems, 1); // Prevent going below 1

          let newSubTotal = (newCartItems * (Number(obj.price) / 100)).toFixed(2);

          return { ...obj, cartItems: newCartItems, subTotal: Number(newSubTotal) };
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
    const filteredCart = cartItem.filter((obj) => obj.id != id)
    setCartItem(filteredCart)
  }
  return (
    <Section>
      <div className="row">
        {cartItem?.map((obj, idx) => (

          <div className="col-12 my-2 d-flex align-items-center justify-content-between">
            {console.log(obj[0])}
            <div className="d-flex ">
              <img
                src={obj.image}
                width={"200px "}
                height={"100px"}
                className="object-fit-cover"
                alt=""
              />
              <div className="px-4">
                <p>{obj?.name}</p>
                <p>{(Number(obj?.price) / 100).toFixed(2)}</p>{" "}
              </div>
            </div>

            <div className="d-flex align-items-center">
              <button className="btn" onClick={() => handleSubTotal("dec", obj.id)}>-</button>
              <span>{obj.cartItems}</span>
              <button className="btn" onClick={() => handleSubTotal("inc", obj.id)}>+</button>
            </div>
            <div className="d-flex align-items-center">

              <span>{obj.subTotal} </span>

            </div>
            <div><i className="bi bi-trash" onClick={() => handleDel(obj.id)}></i></div>
          </div>
        ))}

        <hr />
        <div className="col d-flex align-items-center justify-content-between">
          <button className="btn btn-primary" onClick={() => navigate("/products")}>continue shoping</button>
          <button className="btn btn-dark" onClick={() => setCartItem([])}>clear shoping cart</button>
        </div>
        <hr />
        {/* contant */}
        <div className="col-12 d-flex justify-content-end">
          <div className="col-12 col-lg-4  border px-3 py-4">
            <div className="row">
              <div className="col-8">subtotal:</div>
              <div className="col-4"> ${subTotal}</div>
            </div>
            <div className="row">
              <div className="col-8">Shipping fee:</div>
              <div className="col"> ${shippingFee}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-8">Order Total:</div>
              <div className="col">${total}</div>
            </div>
          </div>
        </div>
        <div className="col-12  d-flex justity-content-end">
          <button className=" col-12  col-lg-4 btn my-2 btn-primary">
            login
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Cart;
