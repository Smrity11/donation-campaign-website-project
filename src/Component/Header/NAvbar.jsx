import { NavLink } from "react-router-dom";
import Banner from "./Banner";
import "./Banner.css"

const Navbar = () => {
    return (
        <div className="bg-white bg-blend-overlay"  style={{
            backgroundImage: "url('../image/Rectangle 4287.png')", // Replace with your image path
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            height:'80vh',
            backgroundSize:'1400px 520px'
             // Adjust opacity as needed
          }}>
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
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Navbar;