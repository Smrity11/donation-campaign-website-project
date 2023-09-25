/* eslint-disable react/prop-types */


import { NavLink } from "react-router-dom";


const DonationCard = ({donation}) => {
 
    const {id,img, title,  category,  cardbg_color, buttonbg_color, color} = donation
    const dynamicStyle = {
        color: color === 'dark Red' ? '#FF444A' : '' || color ==='dark pink' ? '#F87147':'' || color === 'dark blue'? '#0052FF' :'' || color ==='dark green' ? '#79C23F':'', 
     
      };
    const dynamicCategoryStyle = {
        backgroundColor: buttonbg_color === 'mid Red' ? 'rgba(255, 68, 74, 0.20)' : '' || buttonbg_color ==='mid pink' ? ' rgba(248, 113, 71, 0.20)':'' || buttonbg_color === 'mid blue'? 'rgba(0, 82, 255, 0.20)' :'' || buttonbg_color ==='mid green' ? 'rgba(121, 194, 63, 0.20)':'', 
      };
    const dynamicBgStyle = {
        backgroundColor: cardbg_color === 'light Red' ? '#FF444A26' : '' || cardbg_color ==='light pink' ? '#F8714726':'' || cardbg_color === 'light blue'? '#0052FF26' :'' || cardbg_color ==='light green' ? '#79C23F26': '', 
     
      };
    return (
       <NavLink to={`/donate/${id}`}>
        <div>
         <div  style={dynamicBgStyle}>
        <img className="w-full" src={img} alt={title} />
       
        <div className=" p-3">
        <h2 className="w-fit px-3 py-[1px] rounded text-sm"  style={{ ...dynamicCategoryStyle, ...dynamicStyle }}>{category}</h2>

        <p className="text-lg" style={dynamicStyle} >{title}</p>
        </div>
        </div>
      </div>
       </NavLink>
      
      
       
    );
};

export default DonationCard;