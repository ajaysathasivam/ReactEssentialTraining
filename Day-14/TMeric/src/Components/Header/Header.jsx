import React from "react";
import Icons from "../Icons/Icons";
import { headerIcons } from "../../utils/utils";
import { Link } from "react-router-dom";
const Header = () => {
  return (

    <nav className="d-flex justify-content-between align-items-center">
      <h1>heare</h1>
      
      <div className="d-flex ">
        <div>profile</div>
        <Link to="/home"><Icons className={"bi bi-bell  m-3  "}/></Link>
       <Link ><Icons className={"bi bi-gear m-3"}/></Link> 
      </div>
    </nav>
  );
};

export default Header;
