import React, { useEffect } from "react";
import "./Main.scss";
import { fetchData,handleDeleteReq } from "../../utils/utils";
const Main = () => {
  const data = JSON?.parse(localStorage?.getItem("userData"));

  useEffect(() => {
    fetchData("http://localhost:3000/users");
  }, []);

  return (
    <div className="row row-3 gap-4 mt-2  d-flex flow-wrap    ">
      {data.map((user) => (
        <div
          className="  col-12 col-lg-3  shadow-lg position-relative "
          style={{ minWidth: "320px" }}
        >
          <i
            class="bi bi-trash position-absolute  top-0 end-0"
            style={{ color: "red", fontSize: "25px",cursor:"pointer"}}
            onClick={()=>handleDeleteReq(user?.id)}
          ></i>
          <div className="row h-100 w-100 py-2">
            <div className="col profile  ">
              <img src={user?.url} alt="" className=" h-100 w-100" />
            </div>
            <div className="col h-100 d-flex flex-column justify-content-center ">
              <p className="mb-0">{user?.name}</p>
              <p className="mb-0">ID:{user?.userId}</p>
              <p className="mb-0">{user?.jobRole}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
