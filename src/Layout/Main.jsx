import { Outlet } from "react-router-dom";
import Navbar from "../Component/Header/NAvbar";

const Main = () => {
  return (
    <div >
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;