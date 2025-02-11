import React from "react";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";

const Header = () => {
  const url = "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600"
  const profileStyle = {
    width:"35px",
    height:"35px",
    borderRadius:"50%"
  }
  return (
    <>
      <nav className="p-2 border-bottom">
        <div className="row d-flex align-items-center justify-content-between ">
          <div className="col-6 d-flex w-25 align-items-center">
            <i className="bi bi-search m-2"></i>
            <Search className={"pl-1 border-0"} placeholder={"search"} />
          </div>

          <div className="col d-flex justify-content-end align-items-center ">
            {" "}
            <i class="bi bi-brightness-low-fill m-2 fs-4 text-warining cursor-pointer"></i>
            <i class="bi bi-bell-fill me-2  cursor-pointer"></i>
            <Profile  style={profileStyle} profilePicture={url}/>
            <i class="bi bi-chevron-down cursor-pointer fw-2 ms-2"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
