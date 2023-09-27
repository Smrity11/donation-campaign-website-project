/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const StoreData = ({prices}) => {
    const {details_image,color,buttonbg_color,title,category,cardbg_color,price,id} = prices || {}
    const dynamicStyle = {
        color: color === 'dark Red' ? '#FF444A' : '' || color ==='dark pink' ? '#F87147':'' || color === 'dark blue'? '#0052FF' :'' || color ==='dark green' ? '#79C23F':'', 
     
      };
    const dynamicButtonStyle = {
        backgroundColor: color === 'dark Red' ? '#FF444A' : '' || color ==='dark pink' ? '#F87147':'' || color === 'dark blue'? '#0052FF' :'' || color ==='dark green' ? '#79C23F':'', 
     
      };
    const dynamicCategoryStyle = {
        backgroundColor: buttonbg_color === 'mid Red' ? 'rgba(255, 68, 74, 0.20)' : '' || buttonbg_color ==='mid pink' ? ' rgba(248, 113, 71, 0.20)':'' || buttonbg_color === 'mid blue'? 'rgba(0, 82, 255, 0.20)' :'' || buttonbg_color ==='mid green' ? 'rgba(121, 194, 63, 0.20)':'', 
      };
      const dynamicBgStyle = {
        backgroundColor: cardbg_color === 'light Red' ? '#FF444A26' : '' || cardbg_color ==='light pink' ? '#F8714726':'' || cardbg_color === 'light blue'? '#0052FF26' :'' || cardbg_color ==='light green' ? '#79C23F26': '', 
     
      };
    return (
        <div >
     <div style={dynamicBgStyle} className=" bg-base-100 shadow-xl flex flex-row gap-7 items-center">
    <figure><img src={details_image} alt="Shoes" /></figure>
    <div >
    <div >
        <h2 className="w-fit px-3 py-[1px] rounded text-sm"  style={{ ...dynamicCategoryStyle, ...dynamicStyle }}>{category}</h2>

        <p className="text-xl font-semibold" >{title}</p>
        <p style={dynamicStyle}>${price}</p>
        <NavLink to={`/donate/${id}`}>
        <button style={dynamicButtonStyle} className="text-white font-bold px-4 rounded py-1 mt-2">View Details</button>
        </NavLink>
        </div>
       
    </div>
    </div>
        </div>
        
    );
};

export default StoreData;

