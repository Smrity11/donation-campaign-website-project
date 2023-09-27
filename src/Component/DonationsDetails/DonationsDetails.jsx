import { DotWave } from "@uiball/loaders";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const DonationsDetails = () => {
  const [donate, setDonate] = useState([]);
  const [loading, setLoading] = useState(true);
  const data = useParams();

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
  const singleData = donate.find((donate) => donate.id == data.id);

  const handleDataStore = () => {
    console.log("object");
    const addedDonationArray = [];
    const select = JSON.parse(localStorage.getItem("selectPrice"));

    if (!select) {
      addedDonationArray.push(singleData);
      localStorage.setItem("selectPrice", JSON.stringify(addedDonationArray));
      alert("product addeded");
    } else {
      const isExist = select.find((donate) => donate.id == data.id);
      if (!isExist) {
        addedDonationArray.push(...select, singleData);
        localStorage.setItem("selectPrice", JSON.stringify(addedDonationArray));
        swal("Good job!", "Donate successfully", "success");
      } else {
        swal("Error!", "You already donate this one!", "error");
      }
    }
  };
  return (
    <>
      <div className="px-8 md:px-28">
        {loading ? (
          <>
            <div className="flex">
              <p className="flex">
                Loading
                <DotWave size={47} speed={1} color="black" />
              </p>
            </div>
          </>
        ) : singleData ? (
          <>
            <div>
              <div className="relative mt-20">
                <img
                  src={singleData?.img}
                  alt="Background Image"
                  className="w-full h-[80vh] object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-20 bg-white bg-opacity-20"></div>

                <div className="absolute bottom-0 p-4">
                  <button
                    onClick={handleDataStore}
                    className="bg-[#FF444A]  hover:bg-opacity-70 text-white py-2 px-4 rounded"
                  >
                    Donate ${singleData.price}
                  </button>
                </div>
              </div>
              <div className="mb-14">
                <h2 className="text-4xl font-semibold mt-12">
                  {singleData?.title}
                </h2>
                <p className="text-base text-slate-700 mt-3 ">
                  {" "}
                  {singleData?.description}
                </p>
              </div>
              {/* <div className="mt-20">
              <img className="w-full h-[80vh]" src={singleData?.img} alt="" />
             <div className="bg-black h-[100px] ">
            <button  onClick={handleDataStore} className="mx-[50px] my-[30px] px-4 py-2 text-white font-bold bg-[#FF444A]">Donate ${singleData.price}</button>
             </div>
              <div>
                <h2 className="text-4xl font-semibold mt-12">
                  {singleData?.title}
                </h2>
                <p className="text-base text-slate-700 mt-3 "> {singleData?.description}</p>
              </div>
              <div>
              </div>
            </div> */}
            </div>
          </>
        ) : (
          <p>Data not found</p>
        )}
      </div>
    </>
  );
};

export default DonationsDetails;
