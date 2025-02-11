import React, { useState } from "react";
import Icons from "../Icons/Icons";

const DropDown = ({onClick, className,iconName,text}) => {
    const [isDisable, setDisable] = useState(true);
  return (
    <div class={className} onClick={()=>setDisable(pre=>!pre)} style={{cursor:"pointer"}}>
      <Icons className={iconName} text={text} />
      <div className={`ps-5 ${isDisable?"d-none":'d-block'}`}>
        <p className="m-0">page1</p>
        <p className="m-0">page1</p>
        <p className="m-0">page1</p>
      </div>
    </div>
  );
};

export default DropDown;
