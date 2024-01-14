import { useSelector } from "react-redux";
import { hamBurger_icon, youtube_icon } from "../Constants";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function Body() {
  const ishamFlag = useSelector((store) => store.hamburger.hamburgerFlag);

  return (
    <div className="flex">
      {ishamFlag && <SideBar />}
      <Outlet />
    </div>
  );
}

export default Body;
