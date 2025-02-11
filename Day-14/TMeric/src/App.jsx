import Header from "./Components/Header/Header"
import LeftSideBar from "./Components/SideBar/LeftSideBar"
import {Outlet} from "react-router-dom"
import LayoutPage from "./Pages/LayoutPage"
import DashBoard from "./Pages/DashBoard"

const App = () => {

  return (
   <>
    <DashBoard/>
   </>
  )
}
export default App