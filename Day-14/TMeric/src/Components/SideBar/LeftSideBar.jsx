import React, { useState } from "react";
import {
  SideBarPageIconsAndPaths,
 
  handleOnClickNavBarIcons,
} from "../../utils/utils";
import Icons from "../Icons/Icons";
import { useNavigate } from "react-router-dom";

const LeftSideBar = ({style}) => {

 
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column w-100 align-items-center justify-content-evenly  " >
      {SideBarPageIconsAndPaths.map((iconObj) => (
        <Icons
          iconsClassName={iconObj.iconName}
          onClick={() =>
            (handleOnClickNavBarIcons(navigate, iconObj.navigationPath))
          }
          style={style}
        />
      ))}
    </div>
  );
};

export default LeftSideBar;
