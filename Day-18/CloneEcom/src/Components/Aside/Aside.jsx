import React, { useState } from "react";
import Icons from "../Icons/Icons";
import { Link } from "react-router-dom";
const Aside = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const handleOpen = (index) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handleClose = ()=>{
    setCloseMenu(pre=>!pre)
  }
  const menus = [
    { menu: "Dash Board", icon: "bi bi-columns-gap" },
    {
      menu: "Products",
      icon: "bi bi-bag-dash-fill",
      submenu: [
        { menu: "Add Produts", element: "/add" },
        { menu: "Produts list", element: "/productslist" },
        { menu: "Categories", element: "/categories" },
        { menu: "Brands", element: "/add" },
      ],
    },
    { menu: "Orders", icon: "bi bi-cart-fill" },
    { menu: "Customers", icon: "bi bi-people-fill" },
    { menu: "Statistics", icon: "bi bi-bar-chart-fill" },
    { menu: "Reviews", icon: "bi bi-chat-left-fill" },
    { menu: "Sellers", icon: "bi bi-globe" },
    { menu: "Hot offers", icon: "bi bi-tag-fill" },
  ];
  return (
    <div className="container border-end shadow-lg h-100">
      <div className="row border-bottom ">
        <div className=" col-9 py-3">logo</div>
        <div className="col py-3" onClick={()=>handleClose}>
          <Icons className={"bi-x-circle-fill"} />
        </div>
      </div>
      <div className="row ">
        <ul className="nav-links">
          {menus.map((menu, idx) => (
            <div key={idx} className={`d-flex p-2 rounded  m-1 ${openMenuIndex==idx?null:"navPage"}`}>
              <Icons className={menu?.icon} />
              <li
                className="nav-link ms-2 cursor-pointer"
                onClick={() => handleOpen(idx)}
              >
                {menu.menu}
                {openMenuIndex === idx && menu?.submenu && (
                  <ul className="nav-links ps-1">
                    {menu.submenu.map((submenu, subIdx) => (
                      <Link
                        to={submenu.element}
                        className="nav-link nav-sub"
                        key={subIdx}
                      >
                        <div className="d-flex my-2  px-1 cursor-pointer">
                          <Icons className={submenu?.icon} />
                          <li className="nav-link   ">
                            {submenu.menu}
                          </li>
                        </div>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Aside;
