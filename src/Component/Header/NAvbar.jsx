import { NavLink,  } from "react-router-dom";

import "./Banner.css"
const Navbar = () => {
    return (

        <div >
            <div className="static  md:flex  justify-between items-center py-4 px-8 md:px-28">
                <div className="flex justify-center md:grid md:justify-start
                 ">
                    <img className="w-[220px] " src="https://i.ibb.co/ZfQxdnS/Logo.png"></img>
                </div>
                <ol className="flex gap-8 mt-8 items-center justify-center text-lg font-bold md:mt-0">
               <li>
               <NavLink to="/" className={({ isActive , isPending } )  =>
                    isPending ? "pending" : isActive ? "underline text-[#FF444A]" : "" }> Home</NavLink>
               </li>
               <li>
               <NavLink to="/donation" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline text-[#FF444A]" : "" }> Donation</NavLink>
               </li>
               <li>
               <NavLink to="/statistics" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline text-[#FF444A]" : "" }> Statistics</NavLink>
               </li>
                </ol>
            </div>
           
           
        </div>
    );
};

export default Navbar;