/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from "react";
import StoreData from "../../Component/storeData/storeData";

const Donation = () => {
    const [donatePrice ,setDonatePrice] =useState([])
    const [noFound ,setNoFound] = useState('')
    useEffect(()=>{
    const select =JSON.parse(localStorage.getItem('selectPrice'))

        if(select){
            setDonatePrice(select)
        }
        else{
            setNoFound('no data found')
        }
    },[])
    return (
        <div className="mt-24">
            {
                noFound? <p className="text-xl flex justify-center items-center">{noFound}</p> : <div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center px-8 mx-auto md:px-28 gap-10">
                    {
                        donatePrice.map(prices => <StoreData key={prices.id} prices={prices}></StoreData>)
                    }
                </div>
                {/* <div className="mx-auto flex justify-center mt-7"><button onClick={handleSeeAll} className="text-white bg-green-600 font-bold px-6 rounded py-1 mt-2">See All</button></div> */}
                
                </div>
            }
        </div>
    );
};

export default Donation;