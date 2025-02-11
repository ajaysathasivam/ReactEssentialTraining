import React from "react";
import Header from "../Components/Header/Header";
import LeftSideBar from "../Components/SideBar/LeftSideBar";
import {sideBarIconsStyles} from "../utils/utils"
import { Outlet } from "react-router-dom";
import { AsideBar } from "../Components/AsideBar/AsideBar";



const LayoutPage = () => {
  return(
    <>
    <div>
      <div className="row">
        <div className="col-12 px-5 border"><Header/></div>
        <div className="col-2 border"><AsideBar/></div>
        <div className="col border"><Outlet/></div>
      </div>
    </div>
      
    
    </>
  );
};
// const LayoutPage = () => {
//   return (
//     <div className="">
//       <div className="container-fluid ">
//         <div className="row align-items-center bg-light shadow-lg  ">
//           <div className="col offset-1">
//             <Header />
//           </div>
//         </div>
//         <div className="row overflow-hidden ">
//           <div className="col-2 overflow-hidden bg-secondary bg-gradient">
//             <div
//               className=" h-100 mt-5"
//               style={{ minHeight: "90vh" }}
//             >
//               <LeftSideBar style={sideBarIconsStyles} />
//             </div>
//           </div>
//           <div className="col">
//             <div className=" mt-2 h-100">
//                 <Outlet/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default LayoutPage;
