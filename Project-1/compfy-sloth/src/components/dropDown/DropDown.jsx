import React, { useState } from "react";

const DropDown = ({ list, setSortItem }) => {
  const [dropDown, showDropDown] = useState(false);
  return (
    <div className="dropdown position-relative">
      <button
        class=" btn dropdown-toggle"
        type="button"
        onClick={() => showDropDown((pre) => !pre)}
      >
       All
      </button>
      {dropDown && (
        <div className="position-absolute top-1 w-100 bg-light py-2 px-2 border rounded ">
          {list.map((item, idx) => (
            <a key={idx} className="nav-link  " onClick={() => setSortItem(idx+1)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
