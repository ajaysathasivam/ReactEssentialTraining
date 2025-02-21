import React, { useState } from "react";

const DropDown = ({ list, setFilters }) => {
  const [dropDown, showDropDown] = useState(false);
  const [open,setOpen] = useState(false)
  return (
    <div className=" position-relative">
      <button
        className=" btn  "
        type="button"
        onClick={() => showDropDown((pre) => !pre)}
      >
        <div className="d-flex justify-content-between w-100">
          <span className="pe-5">All</span>
          <i className="bi text-end ps-5 bi-caret-down-fill"></i>
        </div>
      </button>
      {dropDown && (
        <div className="position-absolute top-1 z-3 w-100 bg-light py-2 px-2 border rounded " onMouseLeave={()=>showDropDown((pre)=>!pre)}>
          {list?.map((item, idx) => (
            <a
              key={idx}
              className="nav-link  "
              onClick={() => setFilters((pre)=>({
                ...pre,
                "sort":item
              }))}
            >
              Price-{item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
