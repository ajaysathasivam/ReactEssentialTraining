import React, { useState } from "react";
import Icons from "../../Components/Icons/Icons";
import DropDown from "../DropDown/DropDown";

export const AsideBar = () => {
  const [isDisable, setDisable] = useState(true);
  const menus = [
    { menus: "Dash board" },
    {
      menus: "Products",
      submenu: [{ menu: "Add Products" }, { menu: "Product List" }],
    },
  ];
  return (
    <>
      <ul>
        <li>Dash board</li>
        <li>
          Products
          <ul>
            <li>Add Produts</li>
            <li>Produts</li>
            <li>Categories</li>
            <li>Brands</li>
          </ul>
        </li>
        <li>Orders</li>
        <li>Customers</li>
        <li>Statistics</li>
        <li>Reviews</li>
        <li>Transections</li>
        <li>sellers</li>
        <li>Hot offers</li>
      </ul>
      {/* <div>
        <Icons className={"bi-columns-gap m-2"} text={"Dash board"} />
      </div>
      {/* <div>
      <DropDown onClick={()=>{disable={isDisable}}} iconName={"bi bi-bag-dash m-2"} text={"Products"} />
    </div> */}
      <div>
        <DropDown
          // onClick={() => setDisable(!isDisable)}
          iconName={"bi bi-bag-dash m-2"}
          text={"Orders"}
          disable={isDisable}
        />
        <DropDown
          // onClick={() => setDisable(!isDisable)}
          iconName={"bi bi-bag-dash m-2"}
          text={"Orders"}
          disable={isDisable}
        />
      </div>
    </>
  );
};
