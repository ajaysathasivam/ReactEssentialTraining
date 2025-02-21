import React, { useState } from "react";

const ImageCart = ({image,state,maxHeight}) => {
    // const [state,setState] = useState()
  return (
    <div className=" pointer" style={{Height:"500px"}}>
      {" "}
      <img src={image}  onClick={()=>state(image)} className="w-100 h-100 rounded" alt="" />
    </div>
  );
};

export default ImageCart;
