import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DonationsDetails = () => {
  const [donate, setDonate] = useState([]);
  const [loading ,setLoading] = useState(true)
  const data =useParams()
  console.log(data);
  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => {
        setDonate(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
const singleData = donate.find(donate => donate.id == data.id)
console.log(singleData?.img);
  return(
  <>
<div className="px-28">
      {loading ? (
        <>
          <div className="flex">
            <p>Loading</p>
          </div>
        </>
      ) : singleData ? (
        <>
          <div>
           
            <div className="">
              <img className="w-full" src={singleData?.img} alt="" />

              <div>
                <h2 className="text-4xl font-semibold">
                  {singleData?.title}
                </h2>
                <p className="text-base text-slate-700 mt-3 "> {singleData?.description}</p>
                {/* <p>achievement: {singleData.achievement}</p> */}
              </div>
              <div>
               
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Data not found</p>
      )}
    </div>
  </>
   )
};

export default DonationsDetails;
