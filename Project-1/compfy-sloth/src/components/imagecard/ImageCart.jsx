import React, { useState } from "react";

const ImageCart = ({image,state}) => {
    // const [state,setState] = useState()
  return (
    <div className="col">
      {" "}
      <img src={image} onClick={()=>state(image)} className="w-100 h-100 rounded" alt="" />
    </div>
  );
};

export default ImageCart;
