import { NavLink,  } from "react-router-dom";

import "./Banner.css"
const Navbar = () => {
    return (

        <div >
            <div className="flex justify-between items-center py-4 px-28">
                <div>
                    <img className="w-[220px] " src="./image/Logo.png"></img>
                </div>
                <ol className="flex gap-8 items-center text-lg font-bold">
               <li>
               <NavLink to="/" className={({ isActive , isPending } )  =>
                    isPending ? "pending" : isActive ? "underline text-red-600" : "" }> Home</NavLink>
               </li>
               <li>
               <NavLink to="/donation" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline text-red-600" : "" }> Donation</NavLink>
               </li>
               <li>
               <NavLink to="/statistics" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline text-red-600" : "" }> Statistics</NavLink>
               </li>
                </ol>
            </div>
           
           
        </div>
    );
};

export default Navbar;