import React, { useEffect, useState } from "react";
import Section from "../../components/layout/Section";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const { id } = useParams();
  const [cartItem, setCartItem] = useState([]);
  const data = useSelector((state) => state.products.value);
  
  useEffect(()=>{
    const filterData = data.filter((obj) => obj.id === id);
    if(!cartItem){
      setCartItem(filterData)
    }
    else{
      setCartItem(pre=>([...pre,{filterData}]))
    }
  },[])
  

  return (
    <Section>
      <div className="row">
        {cartItem?.map((obj) => (
          <div className="col d-flex align-items-center justify-content-between">
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
                <p>{obj?.price}</p>{" "}
              </div>
            </div>

            <div className="d-flex align-items-center">
              <button className="btn">-</button>
              <span>{""}</span>
              <button className="btn">+</button>
            </div>
            <div>icon</div>
          </div>
        ))}

        <hr />
        <div className="col d-flex align-items-center justify-content-between">
          <button className="btn btn-primary">continue shoping</button>
          <button className="btn btn-dark">clear shoping cart</button>
        </div>
        <hr />
        {/* contant */}
        <div className="col-12 d-flex justify-content-end">
          <div className="col-12 col-lg-4  border px-3 py-4">
            <div className="row">
              <div className="col-8">subtotal:</div>
              <div className="col-4"> $999</div>
            </div>
            <div className="row">
              <div className="col-8">Shipping fee:</div>
              <div className="col"> $5.35</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-8">Order Total:</div>
              <div className="col">$0999</div>
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
